import type { Locale } from "@/lib/i18n"
import { INTEGRATIONS } from "@/lib/integrations"
import { getMessages } from "@/lib/messages"

export function WhatIsSection({ locale }: { locale: Locale }) {
  const t = getMessages(locale).whatIs

  return (
    <section id="what-is" className="lp-section bg-background">
      <div className="lp-container grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <div>
          <h2 className="lp-title max-w-[16ch]">{t.title}</h2>
          <p className="lp-copy mt-6 max-w-[48ch]">{t.copy(INTEGRATIONS.length)}</p>
          <p className="mt-8 max-w-[54ch] text-sm leading-relaxed text-muted-foreground">{t.about}</p>
        </div>
        <dl className="divide-y divide-border border-y border-border">
          {t.pillars.map((pillar) => (
            <div key={pillar.title} className="py-7">
              <dt className="text-xl font-semibold tracking-tight">{pillar.title}</dt>
              <dd className="mt-3 max-w-[58ch] text-base leading-relaxed text-muted-foreground">{pillar.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
