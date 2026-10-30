import { ArrowRight } from "lucide-react"
import { AgentLogos } from "@/components/agent-logos"
import { DelegateToAI } from "@/components/delegate-to-ai"
import { appUrl, type Locale } from "@/lib/i18n"
import { getMessages } from "@/lib/messages"

const RESOURCES = [
  { key: "docs", href: "https://developers.reportei.com/connect" },
  { key: "openapi", href: "https://connect.reportei.com/openapi.json" },
  { key: "explorer", href: "/signup" },
] as const

export function AiSection({ locale }: { locale: Locale }) {
  const m = getMessages(locale)
  const t = m.ai
  // The last transcript line is the step still running.
  const transcript = t.transcript.map((text, i) => ({ text, done: i < t.transcript.length - 1 }))

  return (
    <section id="ia" className="lp-section bg-background">
      <div className="lp-container">
        <div className="grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="min-w-0">
            <p className="lp-eyebrow mb-4">{t.eyebrow}</p>
            <h2 className="lp-title mb-6">{t.title}</h2>
            <p className="lp-copy">{t.copy}</p>
            <div className="mt-6">
              <AgentLogos withNames />
            </div>
            <div className="mt-8">
              <DelegateToAI t={m.delegate} />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.note}</p>
          </div>

          <figure className="min-w-0 overflow-hidden rounded-xl border bg-[#0f1229] text-[#e6e8f5]">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-white/20" />
              <span className="h-3 w-3 rounded-full bg-white/20" />
              <span className="h-3 w-3 rounded-full bg-white/20" />
              <span className="ml-3 font-mono text-xs text-[#9aa0c4]">{t.windowTitle}</span>
            </div>
            <div className="space-y-3 p-5 font-mono text-[13px] leading-relaxed">
              <p className="text-[#9aa0c4]">{t.promptEcho}</p>
              {transcript.map((line) => (
                <p key={line.text} className="flex gap-3">
                  <span className={line.done ? "text-[#7ee0b5]" : "text-[#ffd479]"} aria-hidden="true">
                    {line.done ? "✓" : "…"}
                  </span>
                  <span className={line.done ? "" : "text-[#ffd479]"}>{line.text}</span>
                </p>
              ))}
            </div>
            <figcaption className="sr-only">{t.transcriptCaption}</figcaption>
          </figure>
        </div>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-xl border bg-border md:grid-cols-3">
          {RESOURCES.map((resource) => (
            <li key={resource.key} className="flex flex-col bg-white p-7">
              <h3 className="text-lg font-semibold tracking-tight">{t.resources[resource.key].title}</h3>
              <p className="mt-2 flex-1 leading-relaxed text-muted-foreground">{t.resources[resource.key].body}</p>
              <a
                href={resource.href.startsWith("/") ? appUrl(locale, resource.href) : resource.href}
                className="lp-link mt-5 inline-flex items-center gap-1.5 text-sm"
              >
                {t.resources[resource.key].cta}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
