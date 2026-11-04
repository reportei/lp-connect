import type { MetadataRoute } from "next"
import { ALTERNATIVE_PAGES } from "@/lib/alternativas"
import { GUIDES } from "@/lib/guias"
import { LOCALES, TRANSLATED_PAGES, localePath, pagePath, type TranslatedPage } from "@/lib/i18n"
import { PLATFORM_PAGES } from "@/lib/plataformas"
import { absoluteUrl, languageAlternates } from "@/lib/seo"
import { TOOLKITS, toolkitPath, toolkitsHubPath, toolkitToolsPath, toolPath } from "@/lib/toolkits"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  // Every language version of a translated page is listed, each carrying the full set of alternates.
  const translated = (Object.keys(TRANSLATED_PAGES) as TranslatedPage[]).flatMap((page) =>
    LOCALES.map((locale) => ({
      url: absoluteUrl(pagePath(locale, page)),
      changeFrequency: "monthly" as const,
      priority: page === "home" ? 1 : 0.7,
      alternates: { languages: languageAlternates(page) },
    })),
  )

  const portugueseOnly = [
    "/clientes/leadster",
    ...PLATFORM_PAGES.map((page) => `/${page.slug}`),
    ...ALTERNATIVE_PAGES.map((page) => `/${page.slug}`),
    "/guias",
    ...GUIDES.map((guide) => `/guias/${guide.slug}`),
  ].map((path) => ({ url: absoluteUrl(path), changeFrequency: "monthly" as const, priority: 0.7 }))

  // Toolkit pages keep the same path in every language, so each path yields one entry per locale.
  const toolkitPaths = [
    toolkitsHubPath(),
    ...TOOLKITS.flatMap((toolkit) => [
      toolkitPath(toolkit),
      toolkitToolsPath(toolkit),
      ...toolkit.tools.map((tool) => toolPath(toolkit, tool)),
    ]),
  ]
  const toolkits = toolkitPaths.flatMap((path) =>
    LOCALES.map((locale) => ({
      url: absoluteUrl(localePath(locale, path)),
      changeFrequency: "monthly" as const,
      priority: path.includes("/tool/") ? 0.5 : 0.6,
      alternates: { languages: languageAlternates(() => path) },
    })),
  )

  return [...translated, ...portugueseOnly, ...toolkits]
}
