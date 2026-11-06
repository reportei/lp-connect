// Writes the data of the feature pages (lib/features/*.json) from what the export scripts printed.
//   node scripts/sync-features.mjs metrics <tinker output of scripts/export-metrics.php>
//   node scripts/sync-features.mjs llm <path to the connect repository, default ../connect>
// The LLM catalog is a PHP array in the Connect repository; it is read with PHP inside the dev container.
import fs from "node:fs"
import path from "node:path"
import { execFileSync } from "node:child_process"

const [kind, source] = process.argv.slice(2)

if (kind === "metrics") {
  const raw = fs.readFileSync(source, "utf8")
  const json = raw.slice(raw.indexOf("__JSON__") + 8, raw.indexOf("__END__"))
  const all = JSON.parse(json).map((integration) => ({ ...integration, metrics: Object.values(integration.metrics ?? {}) }))
  // Every enabled integration, for the logos and names of the feature pages.
  const names = Object.fromEntries(all.map(({ slug, name, logo }) => [slug, { name, logo }]))
  fs.writeFileSync("lib/features/integrations.json", JSON.stringify(names, null, 1) + "\n")
  const integrations = all.filter((integration) => integration.metrics.length > 0)
  fs.writeFileSync("lib/features/metrics.json", JSON.stringify(integrations) + "\n")
  console.log(`${integrations.length} integrations, ${integrations.reduce((n, i) => n + i.metrics.length, 0)} metrics`)
} else if (kind === "llm") {
  const connect = path.resolve(source ?? "../connect")
  const relative = path.relative(path.resolve(".."), path.join(connect, "database/data/llm_models.php"))
  const json = execFileSync("docker", [
    "exec", "reportei-workspace-1", "php", "-r", `echo json_encode(require "/var/www/${relative}");`,
  ]).toString()
  const models = JSON.parse(json).filter((model) => model.active)
  fs.writeFileSync("lib/features/llm-models.json", JSON.stringify(models, null, 1) + "\n")
  console.log(`${models.length} models`)
} else {
  console.error("usage: node scripts/sync-features.mjs metrics <file> | llm [connect path]")
  process.exit(1)
}
