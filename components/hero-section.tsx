import { AgentLogos } from "@/components/agent-logos"
import { ProductShots } from "@/components/product-shots"
import { INTEGRATIONS } from "@/lib/integrations"

export function HeroSection() {
  return (
    <section className="lp-hero">
      <div className="lp-container grid items-center gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-12">
        <div>
          <h1 className="lp-hero-title lg:text-[clamp(2.6rem,4vw,3.9rem)]">API de dados de marketing para o seu produto.</h1>
          <p className="lp-copy mt-7 max-w-lg">
            Conecte as contas dos seus clientes em {INTEGRATIONS.length} plataformas de marketing, CRM e e-commerce,
            como Instagram, Meta Ads, Google Ads e RD Station. Acesse as métricas em uma única API e crie suas próprias
            análises, relatórios e dashboards.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-5">
            <a href="https://app.connect.reportei.com/signup" className="lp-button">
              Começar teste grátis
            </a>
            <a
              href="https://calendly.com/felipe-reportei/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="lp-link text-sm"
            >
              Agendar demonstração
            </a>
          </div>
          <p className="mt-5 text-sm text-muted-foreground">15 dias para testar. Sem cartão de crédito.</p>

          <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-3 border-t pt-6 text-sm">
            <span className="text-muted-foreground">Implemente com</span>
            <AgentLogos />
            <a href="#ia" className="lp-link">
              Ver o prompt
            </a>
          </div>
        </div>

        <ProductShots />
      </div>
    </section>
  )
}
