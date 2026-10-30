import { withBase } from "@/lib/base-path"

// Portuguese is the original and stays at the root; the others live under their own prefix.
export const LOCALES = ["pt", "en", "es", "fr"] as const
export type Locale = (typeof LOCALES)[number]
export const DEFAULT_LOCALE: Locale = "pt"

export const LOCALE_INFO: Record<Locale, { label: string; hreflang: string; og: string; app: string }> = {
  pt: { label: "Português", hreflang: "pt-BR", og: "pt_BR", app: "pt_BR" },
  en: { label: "English", hreflang: "en", og: "en_US", app: "en" },
  es: { label: "Español", hreflang: "es", og: "es_ES", app: "es" },
  fr: { label: "Français", hreflang: "fr", og: "fr_FR", app: "fr" },
}

// Order of the language picker.
export const SWITCHER_ORDER: Locale[] = ["en", "es", "fr", "pt"]

// The pages that exist in every language, each with its path per locale (without the locale prefix).
export const TRANSLATED_PAGES = {
  home: { pt: "/", en: "/", es: "/", fr: "/" },
  integrations: { pt: "/integracoes", en: "/integrations", es: "/integraciones", fr: "/integrations" },
} satisfies Record<string, Record<Locale, string>>

export type TranslatedPage = keyof typeof TRANSLATED_PAGES

// Path inside the site, without the /connect base.
export function localePath(locale: Locale, path: string) {
  if (locale === DEFAULT_LOCALE) return path
  return path === "/" ? `/${locale}` : `/${locale}${path}`
}

export function pagePath(locale: Locale, page: TranslatedPage) {
  return localePath(locale, TRANSLATED_PAGES[page][locale])
}

// Root-relative href with the /connect base, for <a>.
export function pageHref(locale: Locale, page: TranslatedPage, hash = "") {
  return withBase(pagePath(locale, page)) + hash
}

const APP_ORIGIN = "https://app.connect.reportei.com"

// Portuguese links carry no parameter, so they stay exactly as before.
export function appUrl(locale: Locale, path: string) {
  const url = `${APP_ORIGIN}${path}`
  if (locale === DEFAULT_LOCALE) return url
  return `${url}${url.includes("?") ? "&" : "?"}lang=${LOCALE_INFO[locale].app}`
}

export function formatNumber(locale: Locale, value: number) {
  return new Intl.NumberFormat(LOCALE_INFO[locale].hreflang).format(value)
}

// Where the language picker sends each locale: the same page when it is translated, else that language's home.
export function languageLinks(page?: TranslatedPage): Record<Locale, string> {
  return Object.fromEntries(LOCALES.map((locale) => [locale, pageHref(locale, page ?? "home")])) as Record<Locale, string>
}
