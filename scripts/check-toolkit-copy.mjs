// Checks the translated copy in lib/toolkits/copy against the catalog: every toolkit has its intro in the four
// languages and every tool its name and description in pt, es and fr. English tool text comes from the spec itself.
//   node scripts/check-toolkit-copy.mjs [slug ...]
import fs from "node:fs"

const catalog = JSON.parse(fs.readFileSync("lib/toolkits/catalog.json", "utf8"))
const only = new Set(process.argv.slice(2))
const problems = []
const text = (value, where) => {
  if (typeof value !== "string" || value.trim() === "") problems.push(`${where}: missing`)
  else if (value.includes("—")) problems.push(`${where}: em dash`)
}

for (const toolkit of catalog) {
  if (only.size && !only.has(toolkit.slug)) continue
  const file = `lib/toolkits/copy/${toolkit.slug}.json`
  if (!fs.existsSync(file)) {
    problems.push(`${toolkit.slug}: no copy file`)
    continue
  }
  let copy
  try {
    copy = JSON.parse(fs.readFileSync(file, "utf8"))
  } catch (error) {
    problems.push(`${toolkit.slug}: invalid JSON (${error.message})`)
    continue
  }
  for (const locale of ["pt", "en", "es", "fr"]) {
    const block = copy.toolkit?.[locale]
    const where = `${toolkit.slug}.toolkit.${locale}`
    text(block?.tagline, `${where}.tagline`)
    if (block?.tagline?.length > 160) problems.push(`${where}.tagline: ${block.tagline.length} chars, max 160`)
    text(block?.intro, `${where}.intro`)
    if (!Array.isArray(block?.useCases) || block.useCases.length !== 3) problems.push(`${where}.useCases: need 3`)
    else block.useCases.forEach((item, i) => (text(item.title, `${where}.useCases.${i}.title`), text(item.body, `${where}.useCases.${i}.body`)))
  }
  const known = new Set(toolkit.tools.map((tool) => tool.slug))
  for (const slug of Object.keys(copy.tools ?? {})) if (!known.has(slug)) problems.push(`${toolkit.slug}: unknown tool ${slug}`)
  for (const tool of toolkit.tools) {
    for (const locale of ["pt", "es", "fr"]) {
      const block = copy.tools?.[tool.slug]?.[locale]
      text(block?.name, `${tool.slug}.${locale}.name`)
      text(block?.description, `${tool.slug}.${locale}.description`)
    }
  }
}

if (problems.length) {
  console.log(problems.slice(0, 50).join("\n"))
  console.log(`${problems.length} problem(s)`)
  process.exit(1)
}
console.log("ok")
