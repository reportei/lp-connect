import { withBase } from "@/lib/base-path"
import LeadsterCarousel from "@/components/leadster-carousel"
import type { Locale } from "@/lib/i18n"
import { getMessages } from "@/lib/messages"

export function CaseStudySection({ locale }: { locale: Locale }) {
  const m = getMessages(locale)
  const t = m.caseStudy

  return (
    <section id="case-study" className="lp-section border-y bg-muted/40">
      <div className="lp-container grid items-start gap-10 lg:grid-cols-[0.8fr_1.4fr] lg:gap-14">
        <div>
          <p className="lp-eyebrow mb-5">{t.eyebrow}</p>
          <h2 className="lp-title mb-6">{t.title}</h2>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            {t.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
            <a href={withBase("/clientes/leadster")} className="lp-link">
              {t.readCase}
            </a>
            <a
              href="https://www.youtube.com/watch?v=5SnKj1rrUJM"
              target="_blank"
              rel="noopener noreferrer"
              className="lp-link"
            >
              {t.watch}
            </a>
          </div>
        </div>
        <div className="min-w-0 lg:pt-1">
          <LeadsterCarousel t={m.carousel} />
        </div>
      </div>
    </section>
  )
}
