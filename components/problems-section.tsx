import { BadgeCheck, Layers, Link2, RefreshCw, ShieldCheck, Webhook } from "lucide-react"
import type { Locale } from "@/lib/i18n"
import { getMessages } from "@/lib/messages"

const ICONS = [BadgeCheck, Link2, RefreshCw, Webhook, Layers, ShieldCheck]

export function ProblemsSection({ locale }: { locale: Locale }) {
  const t = getMessages(locale).problems

  return (
    <section id="problemas" className="lp-section bg-background">
      <div className="lp-container">
        <p className="lp-eyebrow mb-4">{t.eyebrow}</p>
        <h2 className="lp-title max-w-[20ch]">{t.title}</h2>
        <p className="lp-copy mt-5">{t.copy}</p>

        <ul className="mt-12 grid gap-px overflow-hidden rounded-xl border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {t.items.map(({ problem, solution }, i) => {
            const Icon = ICONS[i]
            return (
            <li key={problem} className="bg-white p-7">
              <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
              <h3 className="mt-5 text-lg font-semibold tracking-tight">{problem}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{solution}</p>
            </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
