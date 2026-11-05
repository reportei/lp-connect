import fs from "node:fs"
import path from "node:path"
import { withBase } from "@/lib/base-path"
import type { Locale } from "@/lib/i18n"
import { CAPABILITIES, FEATURE_AREAS, type Capability, type FeatureArea } from "@/lib/features/catalog"

// Server side only. catalog.ts lists the capabilities; copy/{slug}.json holds each page's text and
// sample (scripts/check-feature-copy.mjs checks it against the Connect spec); metrics.json and
// llm-models.json come from scripts/sync-features.mjs.

export { CAPABILITIES, FEATURE_AREAS, type Capability, type FeatureArea }

type Localized = Record<Locale, string>

export type CapabilityCopy = {
  title: string
  tagline: string
  intro: string
  can: string[]
  rules: string[]
  useCases: { title: string; body: string }[]
  faq: { q: string; a: string }[]
}

type CopyFile = {
  sample: { method: string; path: string; query?: Record<string, string>; headers?: Record<string, string>; body?: unknown }
  fields: { name: string; type: string; required: boolean; description: Localized }[]
} & Record<Locale, CapabilityCopy>

export type MetricsIntegration = {
  slug: string
  name: string
  logo: string
  metrics: { key: string; component: string; title: Localized; description?: Partial<Localized> }[]
}

export type LlmModel = {
  slug: string
  provider: "openai" | "anthropic" | "meta"
  provider_model: string
  max_output_tokens: number
  context_window: number
  supports_tools: boolean
  supports_vision: boolean
}

const DATA_DIR = path.join(process.cwd(), "lib/features")
const readJson = <T,>(file: string): T => JSON.parse(fs.readFileSync(path.join(DATA_DIR, file), "utf8")) as T

// Names the pages show where the catalog name is an internal or dated one.
const INTEGRATION_NAMES: Record<string, string> = {
  twitter: "X (Twitter)",
  twitter_ads: "X Ads",
  egoi: "E-goi",
  phonetrack: "PhoneTrack",
  active_campaign: "ActiveCampaign",
  cardapio_web: "Cardápio Web",
  nuvem_shop: "Nuvemshop",
  linkedin_personal: "LinkedIn Personal",
  google_my_business: "Google Business Profile",
}

const INTEGRATIONS = readJson<Record<string, { name: string; logo: string }>>("integrations.json")

export function integrationName(slug: string) {
  return INTEGRATION_NAMES[slug] ?? INTEGRATIONS[slug]?.name ?? slug
}

export function integrationLogo(slug: string) {
  const logo = INTEGRATIONS[slug]?.logo
  return logo ? withBase(`/images/integrations/${logo}.svg`) : null
}

const slugify = (text: string) =>
  text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")

// Metric ids that only carry notes or layout, not data.
const SHOWN_COMPONENTS = new Set(["number_v1", "chart_v1", "datatable_v1", "datagrid_v1"])

export const METRICS_INTEGRATIONS: (MetricsIntegration & { urlSlug: string })[] = readJson<MetricsIntegration[]>("metrics.json")
  .map((integration) => ({
    ...integration,
    name: integrationName(integration.slug),
    urlSlug: slugify(integrationName(integration.slug)),
    metrics: integration.metrics.filter((metric) => SHOWN_COMPONENTS.has(metric.component)),
  }))
  .filter((integration) => integration.metrics.length > 0)
  .sort((a, b) => a.name.localeCompare(b.name))

const MODEL_NAMES: Record<string, string> = {
  "gpt-6-astra": "GPT-6 Astra",
  "gpt-6.1-sol": "GPT-6.1 Sol",
  "gpt-6-luna": "GPT-6 Luna",
  "gpt-5.4-mini": "GPT-5.4 mini",
  "claude-opus-5-5": "Claude Opus 5.5",
  "claude-sonnet-5-5": "Claude Sonnet 5.5",
  "claude-haiku-5-5": "Claude Haiku 5.5",
  "muse-spark-1.3": "Muse Spark 1.3",
  "muse-spark-1.3-contributor": "Muse Spark 1.3 Contributor",
  "muse-wonder-1.0": "Muse Wonder 1.0",
}

export const PROVIDER_NAMES: Record<LlmModel["provider"], string> = { openai: "OpenAI", anthropic: "Anthropic", meta: "Meta" }

export const LLM_MODELS = readJson<LlmModel[]>("llm-models.json").map((model) => ({
  ...model,
  name: MODEL_NAMES[model.provider_model] ?? model.provider_model,
  urlSlug: slugify(model.provider_model),
}))

export type LlmModelPage = (typeof LLM_MODELS)[number]

const copyCache = new Map<string, CopyFile | null>()

export function capabilityCopy(slug: string): CopyFile | null {
  if (!copyCache.has(slug)) {
    const file = path.join(DATA_DIR, "copy", `${slug}.json`)
    copyCache.set(slug, fs.existsSync(file) ? (JSON.parse(fs.readFileSync(file, "utf8")) as CopyFile) : null)
  }
  return copyCache.get(slug) ?? null
}

// Only capabilities with copy get a page: an empty page would be worse than none.
export const PUBLISHED_CAPABILITIES = CAPABILITIES.filter((capability) => capabilityCopy(capability.slug))

export function areaCapabilities(area: FeatureArea) {
  return PUBLISHED_CAPABILITIES.filter((capability) => capability.area === area)
}

export function findCapability(area: FeatureArea, slug: string) {
  return PUBLISHED_CAPABILITIES.find((capability) => capability.area === area && capability.slug === slug)
}

// Paths without the locale prefix: the same in every language.
export const areaPath = (area: FeatureArea) => `/${area}`
export const capabilityPath = (capability: Capability) => `/${capability.area}/${capability.slug}`
export const metricsIntegrationPath = (integration: { urlSlug: string }) => `/metrics/${integration.urlSlug}`
export const llmModelPath = (model: { urlSlug: string }) => `/llm/${model.urlSlug}`

// Every page under an area: its capabilities, plus the integrations (metrics) or models (llm).
export function areaSlugs(area: FeatureArea) {
  const slugs = areaCapabilities(area).map((capability) => capability.slug)
  if (area === "metrics") slugs.push(...METRICS_INTEGRATIONS.map((integration) => integration.urlSlug))
  if (area === "llm") slugs.push(...LLM_MODELS.map((model) => model.urlSlug))
  const duplicate = slugs.find((slug, i) => slugs.indexOf(slug) !== i)
  if (duplicate) throw new Error(`Two pages under /${area} share the slug ${duplicate}`)
  return slugs
}

export function allFeaturePaths() {
  return FEATURE_AREAS.flatMap((area) => [areaPath(area), ...areaSlugs(area).map((slug) => `/${area}/${slug}`)])
}
