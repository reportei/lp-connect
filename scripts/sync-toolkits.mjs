// Copies the toolkit catalog from the Connect repository into the LP: the specs become lib/toolkits/catalog.json
// (only what the pages show) and the logos land in public/logos/toolkits. Run it after a toolkit is added or changed:
//   node scripts/sync-toolkits.mjs [path to the connect repository, default ../connect]
import fs from "node:fs"
import path from "node:path"

const connectDir = path.resolve(process.argv[2] ?? "../connect")
const specDir = path.join(connectDir, "database/data/toolkits")
const logoDir = path.join(connectDir, "public/img/toolkits")
const outLogos = path.resolve("public/logos/toolkits")

function params(input) {
  const required = new Set(input?.required ?? [])
  return Object.entries(input?.properties ?? {}).map(([name, schema]) => ({
    name,
    type: Array.isArray(schema.type) ? schema.type.join(" | ") : (schema.type ?? (schema.enum ? "string" : "object")),
    required: required.has(name),
    description: schema.description ?? "",
    ...(schema.enum ? { enum: schema.enum } : {}),
  }))
}

fs.mkdirSync(outLogos, { recursive: true })

const toolkits = fs
  .readdirSync(specDir)
  .filter((file) => file.endsWith(".json"))
  .sort()
  .map((file) => JSON.parse(fs.readFileSync(path.join(specDir, file), "utf8")))
  .filter((spec) => spec.enabled)
  .map((spec) => {
    const logo = ["svg", "png"].map((ext) => `${spec.slug}.${ext}`).find((name) => fs.existsSync(path.join(logoDir, name)))
    if (logo) fs.copyFileSync(path.join(logoDir, logo), path.join(outLogos, logo))
    return {
      slug: spec.slug,
      name: spec.name,
      description: spec.description,
      category: spec.category,
      docsUrl: spec.docs_url,
      logo: logo ?? null,
      hostParams: Object.keys(spec.base_url_params ?? {}),
      auth: spec.auth.map((mode) => mode.mode),
      tools: spec.tools.map((tool) => ({
        slug: tool.slug,
        name: tool.name,
        description: tool.description,
        method: tool.method,
        params: params(tool.input),
      })),
    }
  })

fs.writeFileSync("lib/toolkits/catalog.json", JSON.stringify(toolkits, null, 1) + "\n")
console.log(`${toolkits.length} toolkits, ${toolkits.reduce((n, t) => n + t.tools.length, 0)} tools`)
