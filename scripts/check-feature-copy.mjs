// Checks lib/features/copy/{slug}.json for every capability in lib/features/catalog.ts: the four
// languages are complete, there is no em dash, and every field and sample key exists in the Connect
// OpenAPI spec of the capability's operations, so a page never documents a field the API does not have.
//   node scripts/check-feature-copy.mjs <path to connect/resources/openapi.json> [slug ...]
import fs from "node:fs"

const specPath = process.argv[2]
const only = new Set(process.argv.slice(3))
const spec = JSON.parse(fs.readFileSync(specPath, "utf8"))
const catalogSource = fs.readFileSync("lib/features/catalog.ts", "utf8")
const capabilities = [...catalogSource.matchAll(/\{ slug: "([^"]+)", area: "([^"]+)", operations: \[([^\]]*)\]/g)].map((m) => ({
  slug: m[1],
  area: m[2],
  operations: [...m[3].matchAll(/"([^"]+)"/g)].map((o) => o[1]),
}))

const resolve = (node) => (node?.$ref ? resolve(node.$ref.split("/").slice(1).reduce((n, k) => n[k], spec)) : node)

// Every property name reachable from a schema, through refs, compositions, items and nested objects.
function collect(node, names, seen = new Set()) {
  if (!node || typeof node !== "object") return
  if (node.$ref) {
    if (seen.has(node.$ref)) return
    seen.add(node.$ref)
    return collect(resolve(node), names, seen)
  }
  for (const key of ["oneOf", "anyOf", "allOf"]) (node[key] ?? []).forEach((child) => collect(child, names, seen))
  if (node.items) collect(node.items, names, seen)
  if (node.additionalProperties && typeof node.additionalProperties === "object") collect(node.additionalProperties, names, seen)
  for (const [name, child] of Object.entries(node.properties ?? {})) {
    names.add(name)
    collect(child, names, seen)
  }
}

function operationNames(operation) {
  const [method, path] = operation.split(" ")
  const op = spec.paths[path]?.[method.toLowerCase()]
  if (!op) return null
  const names = new Set()
  for (const param of [...(spec.paths[path].parameters ?? []), ...(op.parameters ?? [])]) names.add(resolve(param).name)
  for (const media of Object.values(resolve(op.requestBody)?.content ?? {})) collect(media.schema, names)
  for (const response of Object.values(op.responses ?? {})) for (const media of Object.values(resolve(response)?.content ?? {})) collect(media.schema, names)
  return names
}

const problems = []
const text = (value, where, max) => {
  if (typeof value !== "string" || !value.trim()) problems.push(`${where}: missing`)
  else {
    if (value.includes("—")) problems.push(`${where}: em dash`)
    if (max && value.length > max) problems.push(`${where}: ${value.length} chars, max ${max}`)
  }
}
// The LLM spec declares tools and message content parts as open objects in the OpenAI format,
// so their inner keys are checked against that format, and a tool's JSON Schema is not walked.
const OPEN_OBJECTS = new Set(["tools", "messages"])
const OPENAI_KEYS = new Set(["type", "function", "name", "description", "parameters", "strict", "role", "content", "text", "image_url", "url", "detail", "tool_call_id", "tool_calls"])
const keys = (value, open = false) =>
  value && typeof value === "object" && !Array.isArray(value)
    ? Object.entries(value).flatMap(([k, v]) =>
        open && !OPENAI_KEYS.has(k) ? [`!${k}`] : k === "parameters" && open ? [k] : [k, ...keys(v, open || OPEN_OBJECTS.has(k))],
      )
    : Array.isArray(value) ? value.flatMap((v) => keys(v, open)) : []

const slugs = new Set(capabilities.map((c) => c.slug))
for (const m of catalogSource.matchAll(/related: \[([^\]]*)\]/g))
  for (const r of m[1].matchAll(/"([^"]+)"/g)) if (!slugs.has(r[1])) problems.push(`catalog: related ${r[1]} is not a capability`)

for (const capability of capabilities) {
  if (only.size && !only.has(capability.slug)) continue
  const known = new Set()
  for (const operation of capability.operations) {
    const names = operationNames(operation)
    if (!names) problems.push(`${capability.slug}: operation ${operation} not in the spec`)
    else names.forEach((n) => known.add(n))
  }
  const file = `lib/features/copy/${capability.slug}.json`
  if (!fs.existsSync(file)) {
    problems.push(`${capability.slug}: no copy file`)
    continue
  }
  let copy
  try {
    copy = JSON.parse(fs.readFileSync(file, "utf8"))
  } catch (error) {
    problems.push(`${capability.slug}: invalid JSON (${error.message})`)
    continue
  }
  const sample = copy.sample
  if (!sample?.method || !sample?.path) problems.push(`${capability.slug}: sample needs method and path`)
  else {
    const operation = `${sample.method} ${sample.path.replace(/^\/api/, "").replace(/\?.*$/, "")}`
    const matches = capability.operations.some((o) => {
      const re = new RegExp("^" + o.replace(/\{[^}]+\}/g, "[^/]+") + "$")
      return re.test(operation)
    })
    if (!matches) problems.push(`${capability.slug}: sample ${operation} is not one of its operations`)
    for (const key of [...keys(sample.body), ...Object.keys(sample.query ?? {})]) {
      if (key.startsWith("!")) problems.push(`${capability.slug}: sample key "${key.slice(1)}" is not in the OpenAI format`)
      else if (!known.has(key) && !(capability.area === "llm" && OPENAI_KEYS.has(key))) problems.push(`${capability.slug}: sample key "${key}" not in the spec`)
    }
  }
  for (const field of copy.fields ?? []) {
    for (const part of String(field.name).split(".")) if (!known.has(part)) problems.push(`${capability.slug}: field "${field.name}" not in the spec`)
    for (const locale of ["pt", "en", "es", "fr"]) text(field.description?.[locale], `${capability.slug}.fields.${field.name}.${locale}`)
  }
  for (const locale of ["pt", "en", "es", "fr"]) {
    const block = copy[locale]
    const where = `${capability.slug}.${locale}`
    text(block?.title, `${where}.title`, 70)
    text(block?.tagline, `${where}.tagline`, 160)
    text(block?.intro, `${where}.intro`)
    for (const list of ["can", "rules"]) {
      if (!Array.isArray(block?.[list]) || block[list].length < 2) problems.push(`${where}.${list}: need at least 2`)
      else block[list].forEach((item, i) => text(item, `${where}.${list}.${i}`))
    }
    for (const [list, a, b, n] of [["useCases", "title", "body", 3], ["faq", "q", "a", 3]]) {
      if (!Array.isArray(block?.[list]) || block[list].length !== n) problems.push(`${where}.${list}: need ${n}`)
      else block[list].forEach((item, i) => (text(item[a], `${where}.${list}.${i}.${a}`), text(item[b], `${where}.${list}.${i}.${b}`)))
    }
  }
}

if (problems.length) {
  console.log(problems.slice(0, 60).join("\n"))
  console.log(`${problems.length} problem(s)`)
  process.exit(1)
}
console.log("ok")
