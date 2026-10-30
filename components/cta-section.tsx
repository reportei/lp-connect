import { appUrl, DEFAULT_LOCALE, type Locale } from "@/lib/i18n"
import { getMessages } from "@/lib/messages"

export function CTASection({ locale = DEFAULT_LOCALE }: { locale?: Locale }) {
  const t = getMessages(locale).cta

  return (
    <section className="border-y bg-muted/40">
      <div className="lp-container flex flex-col gap-8 py-16 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="lp-title">{t.title}</h2>
          <p className="lp-copy mt-4">{t.copy}</p>
        </div>
        <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
          <a href={appUrl(locale, "/signup")} className="lp-button">
            {t.signup}
          </a>
          <a
            href="https://calendly.com/felipe-reportei/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="lp-link text-sm"
          >
            {t.demo}
          </a>
        </div>
      </div>
    </section>
  )
}
