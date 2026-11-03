import { withBase } from "@/lib/base-path"
import { LanguageSwitcher } from "@/components/language-switcher"
import { appUrl, DEFAULT_LOCALE, languageLinks, pageHref, type Locale, type TranslatedPage } from "@/lib/i18n"
import { INTEGRATIONS } from "@/lib/integrations"
import { getMessages } from "@/lib/messages"

type FooterProps = {
  locale?: Locale
  page?: TranslatedPage
}

export function Footer({ locale = DEFAULT_LOCALE, page }: FooterProps) {
  const m = getMessages(locale)
  const t = m.footer
  const home = (hash: string) => pageHref(locale, "home", hash)
  // The customer story, comparisons, platform pages and guides exist only in Portuguese.
  const portuguese = locale === DEFAULT_LOCALE

  const columns = [
    {
      title: t.product,
      links: [
        { href: home("#what-is"), label: t.whatIs },
        { href: home("#na-pratica"), label: t.practice },
        { href: home("#networks"), label: t.integrations },
        { href: home("#precos"), label: t.pricing },
        { href: home("#faq"), label: t.faq },
      ],
    },
    {
      title: t.company,
      links: [
        { href: "https://reportei.com", label: t.about },
        { href: portuguese ? withBase("/clientes/leadster") : home("#case-study"), label: t.stories },
        ...(portuguese ? [{ href: withBase("/integracoes#comparativos"), label: t.comparisons }] : []),
        { href: "mailto:connect@reportei.com", label: t.contact },
      ],
    },
    {
      title: t.apis,
      links: [
        ...(portuguese
          ? [
              { href: withBase("/api-instagram"), label: "API do Instagram" },
              { href: withBase("/api-meta-ads"), label: "API do Meta Ads" },
              { href: withBase("/api-google-ads"), label: "API do Google Ads" },
              { href: withBase("/api-rd-station"), label: "API do RD Station" },
            ]
          : []),
        { href: pageHref(locale, "integrations"), label: t.allIntegrations },
        ...(portuguese ? [{ href: withBase("/guias"), label: t.guides }] : []),
      ],
    },
    {
      title: t.developers,
      links: [
        { href: "https://developers.reportei.com/connect", label: t.docs },
        { href: home("#ia"), label: t.ai },
        { href: appUrl(locale, "/signup"), label: t.signup },
      ],
    },
  ]

  return (
    <footer className="connect-page border-t py-16">
      <div className="lp-container">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <img src={withBase("/images/reportei-connect-logo-horizontal.png")} alt="Reportei Connect" className="h-12 w-auto" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">{t.tagline(INTEGRATIONS.length)}</p>
            <a href="mailto:connect@reportei.com" className="lp-link mt-4 inline-block text-sm">
              connect@reportei.com
            </a>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-4 text-sm font-semibold">{column.title}</h3>
              <ul className="space-y-3 text-sm">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-muted-foreground transition-colors hover:text-foreground">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>{t.copyright(new Date().getFullYear())}</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <a href={appUrl(locale, "/legal/terms")} className="hover:text-foreground">
              {t.terms}
            </a>
            <div className="text-foreground">
              <LanguageSwitcher locale={locale} links={languageLinks(page)} label={m.language.label} side="top" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
