import { withBase } from "@/lib/base-path"
import { DEFAULT_LOCALE, localePath, type Locale } from "@/lib/i18n"
import { INTEGRATIONS, integrationLogoSrc, type CatalogEntry, type IntegrationCategory } from "@/lib/integrations"
import { getMessages } from "@/lib/messages"
import { TOOLKITS, toolkitLogoSrc, toolkitPath, type ToolkitCategory } from "@/lib/toolkits"

// Native integrations bring metrics; toolkits run actions in the customer's apps and bring none.
// Copy about metrics counts only the natives. The sum is for copy about integrations in general.
export const NATIVE_COUNT = INTEGRATIONS.length
export const TOOLKIT_COUNT = TOOLKITS.length
export const CATALOG_COUNT = NATIVE_COUNT + TOOLKIT_COUNT

// Where each toolkit category of the spec shows up in the catalog filter.
const TOOLKIT_GROUPS: Record<ToolkitCategory, IntegrationCategory> = {
  analytics: "Analytics e SEO",
  communication: "Atendimento",
  crm: "Marketing e CRM",
  developer_tools: "Ferramentas de dev",
  ecommerce: "E-commerce e vendas",
  email_marketing: "Marketing e CRM",
  file_storage: "Produtividade",
  finance: "Financeiro",
  marketing: "Marketing e CRM",
  productivity: "Produtividade",
  project_management: "Produtividade",
  scheduling: "Produtividade",
  support: "Atendimento",
}

const TOOLKIT_ALIASES: Record<string, string> = {
  google_tag_manager: "GTM",
  kit: "ConvertKit",
  mercado_livre: "Mercado Libre",
}

export function catalogEntries(locale: Locale): CatalogEntry[] {
  const names = getMessages(locale).integrationNames
  const natives = INTEGRATIONS.map((item) => ({
    name: names[item.name] ?? item.name,
    search: `${item.name} ${item.aliases ?? ""}`,
    category: item.category,
    logo: item.logo ? integrationLogoSrc(item.logo) : null,
    // The integrations' own pages exist only in Portuguese.
    href: item.page && locale === DEFAULT_LOCALE ? withBase(`/${item.page}`) : null,
    toolkit: false,
  }))
  const toolkits = TOOLKITS.map((toolkit) => ({
    name: toolkit.name,
    search: TOOLKIT_ALIASES[toolkit.slug] ?? "",
    category: TOOLKIT_GROUPS[toolkit.category as ToolkitCategory],
    logo: toolkitLogoSrc(toolkit),
    href: withBase(localePath(locale, toolkitPath(toolkit))),
    toolkit: true,
  }))
  return [...natives, ...toolkits]
}
