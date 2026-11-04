import type { Metadata } from "next"
import {
  DEFAULT_LOCALE,
  LOCALE_INFO,
  LOCALES,
  localePath,
  pagePath,
  type AlternatePath,
  type Locale,
  type TranslatedPage,
} from "@/lib/i18n"

// Public address of the LP. The pages live under reportei.com to inherit the domain's authority.
export const SITE_URL = "https://reportei.com/connect"
export const SITE_NAME = "Reportei Connect"
export const SIGNUP_URL = "https://app.connect.reportei.com/signup"
const OG_IMAGE_BASE = { url: `${SITE_URL}/og.png`, width: 1200, height: 630 }
export const OG_IMAGE = { ...OG_IMAGE_BASE, alt: "Reportei Connect: métricas e ações nos apps dos seus clientes em uma API" }

export function absoluteUrl(path: string) {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`
}

// x-default sends visitors whose language is none of ours to the English version.
export function languageAlternates(page: TranslatedPage | AlternatePath) {
  const path = (locale: Locale) =>
    typeof page === "function" ? localePath(locale, page(locale)) : pagePath(locale, page)
  const languages: Record<string, string> = {}
  for (const locale of LOCALES) languages[LOCALE_INFO[locale].hreflang] = absoluteUrl(path(locale))
  languages["x-default"] = absoluteUrl(path("en"))
  return languages
}

// Next replaces openGraph and twitter wholesale when a page sets them, so every page builds all three here.
// URLs are absolute: resolving "/x" against a metadataBase that has a path would drop the /connect segment.
// `canonical` sends search engines to another address when that one is the official copy of the page.
export function pageMetadata({
  title,
  description,
  path,
  locale = DEFAULT_LOCALE,
  page,
  imageAlt,
  canonical,
}: {
  title: string
  description: string
  path: string
  locale?: Locale
  // Set on pages that exist in every language, so they announce their translations.
  page?: TranslatedPage | AlternatePath
  imageAlt?: string
  canonical?: string
}): Metadata {
  const url = canonical ?? absoluteUrl(path)
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
