import { AgentLogos } from "@/components/agent-logos"
import { ProductShots } from "@/components/product-shots"
import { appUrl, type Locale } from "@/lib/i18n"
import { INTEGRATIONS } from "@/lib/integrations"
import { getMessages } from "@/lib/messages"

export function HeroSection({ locale }: { locale: Locale }) {
  const m = getMessages(locale)
  const t = m.hero

  return (
    <section className="lp-hero">
      <div className="lp-container grid items-center gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-12">
        <div>
          <h1 className="lp-hero-title lg:text-[clamp(2.6rem,4vw,3.9rem)]">{t.title(INTEGRATIONS.length)}</h1>
          <p className="lp-copy mt-7 max-w-lg">{t.copy}</p>
          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-5">
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
          <p className="mt-5 text-sm text-muted-foreground">{t.trial}</p>

          <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-3 border-t pt-6 text-sm">
            <span className="text-muted-foreground">{t.buildWith}</span>
            <AgentLogos />
            <a href="#ia" className="lp-link">
              {t.seePrompt}
            </a>
          </div>
        </div>

        <ProductShots t={m.productShots} />
      </div>
    </section>
  )
}
