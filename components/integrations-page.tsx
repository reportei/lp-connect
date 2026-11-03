import { withBase } from "@/lib/base-path"
import { ArrowRight, Plug } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { ALTERNATIVE_PAGES } from "@/lib/alternativas"
import { DEFAULT_LOCALE, pagePath, type Locale } from "@/lib/i18n"
import { INTEGRATION_CATEGORIES, INTEGRATIONS, integrationLogoSrc } from "@/lib/integrations"
import { getMessages } from "@/lib/messages"
import { PLATFORM_PAGES } from "@/lib/plataformas"
import { pageMetadata } from "@/lib/seo"

export function integrationsMetadata(locale: Locale) {
  const t = getMessages(locale).meta
  return pageMetadata({
    title: t.integrationsTitle(INTEGRATIONS.length),
    description: t.integrationsDescription(INTEGRATIONS.length),
    path: pagePath(locale, "integrations"),
    locale,
    page: "integrations",
    imageAlt: t.ogImageAlt,
  })
}

export function IntegrationsPage({ locale }: { locale: Locale }) {
  const m = getMessages(locale)
  const t = m.integrationsPage
  // The platform and comparison pages are written for Brazilian searches and exist only in Portuguese.
  const portugueseOnly = locale === DEFAULT_LOCALE

  return (
    <div className="connect-page min-h-screen">
      <Header locale={locale} page="integrations" />
      <main>
        <section className="lp-hero">
          <div className="lp-container">
            <p className="lp-eyebrow mb-4">{t.eyebrow}</p>
            <h1 className="lp-title max-w-[22ch] text-[clamp(2.2rem,4vw,3.4rem)]">{t.title(INTEGRATIONS.length)}</h1>
            <p className="lp-copy mt-6">{t.copy}</p>
          </div>
        </section>

        {portugueseOnly && (
          <section className="lp-section border-t pt-16">
            <div className="lp-container">
              <h2 className="lp-title mb-8">{t.popular}</h2>
              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {PLATFORM_PAGES.map((page) => (
                  <li key={page.slug}>
                    <a
                      href={withBase(`/${page.slug}`)}
                      className="flex h-full items-start gap-4 rounded-lg border bg-white p-5 transition-colors hover:border-primary"
                    >
                      <img src={integrationLogoSrc(page.logo)} alt="" className="h-8 w-8 shrink-0 object-contain" />
                      <span>
                        <span className="block font-semibold">{t.apiOf(page.platform)}</span>
                        <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                          {page.metrics.slice(0, 3).join(", ")}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <section className="lp-section border-t bg-muted/40">
          <div className="lp-container">
            <h2 className="lp-title mb-10">{t.catalog}</h2>
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {INTEGRATION_CATEGORIES.map((category) => (
                <div key={category}>
                  <h3 className="mb-4 text-lg font-semibold tracking-tight">{m.categories[category]}</h3>
                  <ul className="space-y-2">
                    {INTEGRATIONS.filter((item) => item.category === category).map((item) => {
                      const logo = item.logo ? (
                        <img src={integrationLogoSrc(item.logo)} alt="" loading="lazy" className="h-5 w-5 object-contain" />
                      ) : (
                        <Plug className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
                      )
                      const name = m.integrationNames[item.name] ?? item.name
                      return (
                        <li key={item.name} className="flex items-center gap-3 text-sm">
                          {logo}
                          {item.page && portugueseOnly ? (
                            <a href={withBase(`/${item.page}`)} className="lp-link">
                              {name}
                            </a>
                          ) : (
                            <span>{name}</span>
                          )}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {portugueseOnly && (
          <section id="comparativos" className="lp-section">
            <div className="lp-container">
              <h2 className="lp-title mb-8">{t.comparisons}</h2>
              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {ALTERNATIVE_PAGES.map((page) => (
                  <li key={page.slug}>
                    <a
                      href={withBase(`/${page.slug}`)}
                      className="flex h-full items-center justify-between gap-3 rounded-lg border bg-white p-5 font-semibold transition-colors hover:border-primary"
                    >
                      {t.versus(page.competitor)}
                      <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <CTASection locale={locale} />
      </main>
      <Footer locale={locale} page="integrations" />
    </div>
  )
}
