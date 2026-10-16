import { INTEGRATIONS } from "@/lib/integrations"

const AGENTS = ["Claude Code", "Cursor", "Codex"]

export function HeroSection() {
  return (
    <section className="lp-hero">
      <div className="lp-container grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div>
          <h1 className="lp-hero-title">Dados de {INTEGRATIONS.length} plataformas, no seu produto.</h1>
          <p className="lp-copy mt-7 max-w-lg">
            Conecte as contas de marketing, CRM e e-commerce dos seus clientes. Acesse as métricas em uma única API e
            crie suas próprias análises, relatórios e dashboards.
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

          <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 border-t pt-6 text-sm">
            <span className="text-muted-foreground">Implemente com</span>
            {AGENTS.map((agent) => (
              <span key={agent} className="rounded-md border bg-white px-2.5 py-1 font-medium">
                {agent}
              </span>
            ))}
            <a href="#ia" className="lp-link ml-1">
              Ver o prompt
            </a>
          </div>
        </div>

        <figure className="lp-product-figure min-w-0">
          <div className="mb-5 flex items-baseline justify-between gap-4">
            <p className="text-base font-semibold">Por dentro do Connect</p>
            <a
              href="/images/explorer/explorer_metrics_catalog.png"
              target="_blank"
              rel="noopener noreferrer"
              className="lp-link whitespace-nowrap text-xs"
              aria-label="Ampliar captura do Explorer em nova aba"
            >
              Ampliar tela
            </a>
          </div>
          <img
            src="/images/explorer/explorer_metrics_catalog.png"
            alt="Interface real do Explorer: conta conectada e seleção das métricas que serão consultadas."
            width={796}
            height={815}
            fetchPriority="high"
          />
          <figcaption className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Explore as métricas de cada conta antes de levar a consulta para o seu código.
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
