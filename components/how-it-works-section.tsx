import { ArrowRight } from "lucide-react"
import type { Locale } from "@/lib/i18n"
import { INTEGRATIONS } from "@/lib/integrations"
import { getMessages } from "@/lib/messages"

export function HowItWorksSection({ locale }: { locale: Locale }) {
  const t = getMessages(locale).howItWorks

  return (
    <section id="how-it-works" className="lp-section bg-muted/40">
      <div className="lp-container">
        <h2 className="lp-title">{t.title}</h2>
        <p className="lp-copy mt-5">{t.copy}</p>

        <ol className="mt-12 grid gap-9 md:grid-cols-3 md:gap-10">
          {t.steps.map((step, i) => (
            <li key={step.title}>
              <div className="mb-5 border-b border-border pb-4 text-lg font-semibold text-primary" aria-hidden="true">
                {i + 1}
              </div>
              <h3 className="text-xl font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-3 max-w-[42ch] text-base leading-relaxed text-muted-foreground">{step.body(INTEGRATIONS.length)}</p>
            </li>
          ))}
        </ol>

        <figure className="mt-12 flex flex-col gap-5 border-t border-border pt-8 md:flex-row md:items-center md:gap-8">
          <figcaption className="sr-only">{t.flowCaption}</figcaption>
          <div className="flex-1">
            <p className="font-medium">{t.connected}</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{t.connectedHint}</p>
          </div>
          <ArrowRight className="hidden h-5 w-5 shrink-0 text-muted-foreground md:block" aria-hidden="true" />
          <p className="flex-1 text-lg font-semibold text-primary">Reportei Connect</p>
          <ArrowRight className="hidden h-5 w-5 shrink-0 text-muted-foreground md:block" aria-hidden="true" />
          <div className="flex-1">
            <p className="font-medium">{t.product}</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{t.productHint}</p>
          </div>
        </figure>
      </div>
    </section>
  )
}
