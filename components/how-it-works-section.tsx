import { ArrowRight } from "lucide-react"
import { INTEGRATIONS } from "@/lib/integrations"

const STEPS = [
  {
    title: "Conecte as contas",
    body: `Escolha entre ${INTEGRATIONS.length} integrações e solicite ao seu cliente a autorização das contas que serão usadas.`,
  },
  {
    title: "Consulte a API",
    body: "Integre seu sistema ao Connect e consulte as métricas disponíveis nas contas conectadas.",
  },
  {
    title: "Use no seu produto",
    body: "Combine as métricas com seus dados internos e crie relatórios, dashboards e análises para seus clientes.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="lp-section bg-muted/40">
      <div className="lp-container">
        <h2 className="lp-title">Como funciona na prática</h2>
        <p className="lp-copy mt-5">Das contas dos seus clientes às funcionalidades do seu sistema.</p>

        <ol className="mt-12 grid gap-9 md:grid-cols-3 md:gap-10">
          {STEPS.map((step, i) => (
            <li key={step.title}>
              <div className="mb-5 border-b border-border pb-4 text-lg font-semibold text-primary" aria-hidden="true">
                {i + 1}
              </div>
              <h3 className="text-xl font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-3 max-w-[42ch] text-base leading-relaxed text-muted-foreground">{step.body}</p>
            </li>
          ))}
        </ol>

        <figure className="mt-12 flex flex-col gap-5 border-t border-border pt-8 md:flex-row md:items-center md:gap-8">
          <figcaption className="sr-only">
            Fluxo dos dados: contas conectadas nas plataformas, Reportei Connect e seu produto.
          </figcaption>
          <div className="flex-1">
            <p className="font-medium">Contas conectadas</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">Google Ads, Meta Ads, CRMs e e-commerces</p>
          </div>
          <ArrowRight className="hidden h-5 w-5 shrink-0 text-muted-foreground md:block" aria-hidden="true" />
          <p className="flex-1 text-lg font-semibold text-primary">Reportei Connect</p>
          <ArrowRight className="hidden h-5 w-5 shrink-0 text-muted-foreground md:block" aria-hidden="true" />
          <div className="flex-1">
            <p className="font-medium">Seu produto</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">Relatórios, dashboards e análises</p>
          </div>
        </figure>
      </div>
    </section>
  )
}
