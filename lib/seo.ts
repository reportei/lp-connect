import type { Metadata } from "next"
import { DEFAULT_LOCALE, LOCALE_INFO, LOCALES, pagePath, type Locale, type TranslatedPage } from "@/lib/i18n"

// Public address of the LP. The pages live under reportei.com to inherit the domain's authority.
export const SITE_URL = "https://reportei.com/connect"
export const SITE_NAME = "Reportei Connect"
export const SIGNUP_URL = "https://app.connect.reportei.com/signup"
const OG_IMAGE_BASE = { url: `${SITE_URL}/og.png`, width: 1200, height: 630 }
export const OG_IMAGE = { ...OG_IMAGE_BASE, alt: "Reportei Connect: dados de 50 plataformas em uma API" }

export function absoluteUrl(path: string) {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`
}

// x-default sends visitors whose language is none of ours to the English version.
export function languageAlternates(page: TranslatedPage) {
  const languages: Record<string, string> = {}
  for (const locale of LOCALES) languages[LOCALE_INFO[locale].hreflang] = absoluteUrl(pagePath(locale, page))
  languages["x-default"] = absoluteUrl(pagePath("en", page))
  return languages
}

// Next replaces openGraph and twitter wholesale when a page sets them, so every page builds all three here.
// URLs are absolute: resolving "/x" against a metadataBase that has a path would drop the /connect segment.
export function pageMetadata({
  title,
  description,
  path,
  locale = DEFAULT_LOCALE,
  page,
  imageAlt,
}: {
  title: string
  description: string
  path: string
  locale?: Locale
  // Set on pages that exist in every language, so they announce their translations.
  page?: TranslatedPage
  imageAlt?: string
}): Metadata {
  const url = absoluteUrl(path)
  const image = imageAlt ? { ...OG_IMAGE_BASE, alt: imageAlt } : OG_IMAGE
  return {
    title,
    description,
    alternates: { canonical: url, ...(page ? { languages: languageAlternates(page) } : {}) },
    openGraph: {
      type: "website",
      locale: LOCALE_INFO[locale].og,
      ...(page
        ? { alternateLocale: LOCALES.filter((other) => other !== locale).map((other) => LOCALE_INFO[other].og) }
        : {}),
      siteName: SITE_NAME,
      url,
      title,
      description,
      images: [image],
    },
    twitter: { card: "summary_large_image", title, description, images: [image.url] },
  }
}
