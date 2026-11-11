import fs from "node:fs"
import path from "node:path"
import { withBase } from "@/lib/base-path"
import type { Locale } from "@/lib/i18n"
import { reviewedToolExample } from "./examples"

// Server side only: the catalog and the copy are read at build time and never reach the browser.
// catalog.json comes from the Connect specs (scripts/sync-toolkits.mjs); copy/{slug}.json holds the
// translated text (scripts/check-toolkit-copy.mjs checks it). The spec text is English.

export type AuthMode = "api_key" | "basic" | "oauth2"

export type ToolParam = {
  name: string
  type: string
  required: boolean
  description: string
  enum?: (string | number | boolean)[]
}

export type Tool = {
  slug: string
  name: string
  description: string
  method: string
  params: ToolParam[]
}

export type Toolkit = {
  slug: string
  name: string
  description: string
  category: string
  docsUrl: string
  logo: string | null
  hostParams: string[]
  auth: AuthMode[]
  tools: Tool[]
}

type ToolkitCopy = {
  tagline: string
  intro: string
  useCases: { title: string; body: string }[]
}

type CopyFile = {
  toolkit: Partial<Record<Locale, ToolkitCopy>>
  tools: Record<string, Partial<Record<Locale, { name: string; description: string }>>>
}

const DATA_DIR = path.join(process.cwd(), "lib/toolkits")

// Names the pages show where the spec name reads badly inside the templates ("API do WhatsApp Cloud API").
const DISPLAY_NAMES: Record<string, string> = { whatsapp: "WhatsApp" }

export const TOOLKITS = (JSON.parse(fs.readFileSync(path.join(DATA_DIR, "catalog.json"), "utf8")) as Toolkit[])
  .map((toolkit) => ({ ...toolkit, name: DISPLAY_NAMES[toolkit.slug] ?? toolkit.name }))
  .sort((a, b) => a.name.localeCompare(b.name))

export const TOOL_COUNT = TOOLKITS.reduce((total, toolkit) => total + toolkit.tools.length, 0)

// Category ids of the spec, in the order the hub shows them.
export const TOOLKIT_CATEGORIES = [
  "communication",
  "crm",
  "marketing",
  "email_marketing",
  "ecommerce",
  "finance",
  "support",
  "project_management",
  "productivity",
  "scheduling",
  "analytics",
  "file_storage",
  "developer_tools",
] as const

export type ToolkitCategory = (typeof TOOLKIT_CATEGORIES)[number]

// URLs use hyphens: google_calendar becomes /toolkit/google-calendar, whatsapp_send_message becomes /tool/send-message.
export function toolkitUrlSlug(toolkit: Toolkit) {
  return toolkit.slug.replace(/_/g, "-")
}

export function toolUrlSlug(toolkit: Toolkit, tool: Tool) {
  return tool.slug.slice(toolkit.slug.length + 1).replace(/_/g, "-")
}

export function findToolkit(urlSlug: string) {
  return TOOLKITS.find((toolkit) => toolkitUrlSlug(toolkit) === urlSlug)
}

export function findTool(toolkit: Toolkit, urlSlug: string) {
  return toolkit.tools.find((tool) => toolUrlSlug(toolkit, tool) === urlSlug)
}

// Paths without the locale prefix: they are the same in every language.
export const toolkitsHubPath = () => "/toolkits"
export const toolkitPath = (toolkit: Toolkit) => `/toolkit/${toolkitUrlSlug(toolkit)}`
export const toolkitToolsPath = (toolkit: Toolkit) => `${toolkitPath(toolkit)}/tools`
export const toolPath = (toolkit: Toolkit, tool: Tool) => `${toolkitPath(toolkit)}/tool/${toolUrlSlug(toolkit, tool)}`

export function toolkitLogoSrc(toolkit: Toolkit) {
  return toolkit.logo ? withBase(`/logos/toolkits/${toolkit.logo}`) : null
}

const copyCache = new Map<string, CopyFile | null>()

function readCopy(slug: string): CopyFile | null {
  if (!copyCache.has(slug)) {
    const file = path.join(DATA_DIR, "copy", `${slug}.json`)
    copyCache.set(slug, fs.existsSync(file) ? (JSON.parse(fs.readFileSync(file, "utf8")) as CopyFile) : null)
  }
  return copyCache.get(slug) ?? null
}

// A toolkit without translated copy still gets its pages, in English, from the spec description.
export function toolkitCopy(toolkit: Toolkit, locale: Locale): ToolkitCopy & { translated: boolean } {
  const copy = readCopy(toolkit.slug)?.toolkit
  const block = copy?.[locale] ?? copy?.en
  if (block) return { ...block, translated: Boolean(copy?.[locale]) }
  return { tagline: toolkit.description, intro: toolkit.description, useCases: [], translated: false }
}

export function toolText(toolkit: Toolkit, tool: Tool, locale: Locale) {
  if (locale === "en") return { name: tool.name, description: tool.description }
  const block = readCopy(toolkit.slug)?.tools?.[tool.slug]?.[locale]
  return block ?? { name: tool.name, description: tool.description }
}

export function relatedToolkits(toolkit: Toolkit, limit = 6) {
  return TOOLKITS.filter((other) => other.category === toolkit.category && other.slug !== toolkit.slug).slice(0, limit)
}

// Reviewed examples include conditional fields that a required-only template cannot infer.
// Other tools keep the generic placeholder sample until they have an editorial example.
export function sampleArguments(tool: Tool, locale: Locale = "en") {
  const reviewed = reviewedToolExample(tool.slug, locale)
  if (reviewed) return reviewed.arguments
  const chosen = tool.params.filter((param) => param.required)
  const params = chosen.length ? chosen : tool.params.slice(0, 1)
  return Object.fromEntries(params.map((param) => [param.name, sampleValue(param)]))
}

function sampleValue(param: ToolParam): unknown {
  if (param.enum?.length) return param.enum[0]
  const type = param.type.split(" | ")[0]
  if (type === "integer" || type === "number") return 1
  if (type === "boolean") return true
  if (type === "array") return []
  if (type === "object") return {}
  return `<${param.name}>`
}
