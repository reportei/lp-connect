import { PricingEmbed } from "@/components/pricing-embed"
import { appUrl, type Locale } from "@/lib/i18n"
import { getMessages } from "@/lib/messages"

export function PlansPricingSection({ locale }: { locale: Locale }) {
  const t = getMessages(locale).pricing

  return (
    <section id="precos" className="lp-section bg-muted/60">
      <div className="lp-container">
        <div className="mb-12 max-w-3xl">
          <p className="lp-eyebrow mb-3">{t.eyebrow}</p>
          <h2 className="lp-title mb-6">{t.title}</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">{t.copy}</p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          {/* Served by the app rather than rebuilt here: a copy would be a second published price. */}
          <PricingEmbed
            src={appUrl(locale, "/prices/embed")}
            pricesUrl={appUrl(locale, "/prices")}
            t={{
              embedTitle: t.embedTitle,
              fallbackTitle: t.fallbackTitle,
              fallbackBody: t.fallbackBody,
              fallbackCta: t.fallbackCta,
            }}
          />

          <div className="rounded-lg border bg-white p-6 md:p-8">
            <h3 className="mb-4 text-2xl font-semibold">{t.connectionTitle}</h3>
            <p className="mb-6 leading-relaxed text-muted-foreground">{t.connectionBody}</p>
            <div className="rounded-lg border bg-muted/40 p-5">
              <p className="mb-4 font-semibold">{t.exampleTitle}</p>
              <ul className="space-y-3 text-sm">
                {t.example.map((item) => (
                  <li key={item} className="flex justify-between gap-4">
                    <span>{item}</span>
                    <span className="whitespace-nowrap font-medium text-primary">{t.oneConnection}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 font-semibold">{t.exampleTotal}</p>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              {t.footer}{" "}
              <a href="#faq" className="text-primary underline underline-offset-4">
                {t.billingQuestions}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
