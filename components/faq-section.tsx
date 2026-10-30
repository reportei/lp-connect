import { ChevronDown } from "lucide-react"
import { appUrl, type Locale } from "@/lib/i18n"
import { INTEGRATIONS } from "@/lib/integrations"
import { getMessages, type Rich } from "@/lib/messages"

type Question = { q: string; a: Rich[] }

function RichText({ parts, locale }: { parts: Rich; locale: Locale }) {
  return (
    <p>
      {parts.map((part, i) => {
        if (typeof part === "string") return part
        const href = part.link === "terms" ? appUrl(locale, "/legal/terms") : `#${part.link}`
        return (
          <a key={i} href={href} className="text-primary underline underline-offset-4">
            {part.text}
          </a>
        )
      })}
    </p>
  )
}

function Group({ title, questions, locale }: { title: string; questions: Question[]; locale: Locale }) {
  return (
    <div>
      <h3 className="mb-5 text-xl font-semibold tracking-tight">{title}</h3>
      <div className="space-y-3">
        {questions.map((item) => (
          <details key={item.q} className="group rounded-lg border bg-white">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 text-left font-semibold hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary md:px-6 [&::-webkit-details-marker]:hidden">
              <span>{item.q}</span>
              <ChevronDown className="h-5 w-5 shrink-0 transition-transform group-open:rotate-180" aria-hidden="true" />
            </summary>
            <div className="space-y-3 px-5 pb-5 text-sm leading-relaxed text-muted-foreground md:px-6 md:text-base">
              {item.a.map((parts, i) => (
                <RichText key={i} parts={parts} locale={locale} />
              ))}
            </div>
          </details>
        ))}
      </div>
    </div>
  )
}

export function FaqSection({ locale }: { locale: Locale }) {
  const t = getMessages(locale).faq
  const n = INTEGRATIONS.length
  const resolve = (items: typeof t.product): Question[] => items.map((item) => ({ q: item.q(n), a: item.a(n) }))

  return (
    <section id="faq" className="lp-section bg-background">
      <div className="lp-container">
        <h2 className="lp-title mb-12">{t.title}</h2>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-10">
          <Group title={t.productGroup} questions={resolve(t.product)} locale={locale} />
          <Group title={t.pricingGroup} questions={resolve(t.pricing)} locale={locale} />
        </div>
        <p className="mt-10 text-sm leading-relaxed text-muted-foreground">
          {t.termsBefore}{" "}
          <a href={appUrl(locale, "/legal/terms")} className="text-primary underline underline-offset-4">
            {t.termsLink}
          </a>
          .
        </p>
      </div>
    </section>
  )
}
