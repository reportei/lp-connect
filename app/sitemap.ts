import type { MetadataRoute } from "next"
import { ALTERNATIVE_PAGES } from "@/lib/alternativas"
import { GUIDES } from "@/lib/guias"
import { LOCALES, TRANSLATED_PAGES, pagePath, type TranslatedPage } from "@/lib/i18n"
import { PLATFORM_PAGES } from "@/lib/plataformas"
import { absoluteUrl, languageAlternates } from "@/lib/seo"

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

  return [...translated, ...portugueseOnly]
}
