import { PricingEmbed } from "@/components/pricing-embed"

// Served by the app rather than rebuilt here: a copy would be a second published price.
const PRICING_EMBED_URL = "https://app.connect.reportei.com/prices/embed"

const EXAMPLE = ["1 perfil do Instagram", "1 conta do Google Ads", "1 conta do Meta Ads"]

export function PlansPricingSection() {
  return (
    <section id="precos" className="lp-section bg-muted/60">
      <div className="lp-container">
        <div className="mb-12 max-w-3xl">
          <p className="lp-eyebrow mb-3">Planos e preços</p>
          <h2 className="lp-title mb-6">Cresça com seus clientes. O Connect acompanha.</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Um plano com conexões incluídas e preço fixo por conexão adicional, igual em qualquer plataforma do
            catálogo. Sem custo de implantação.
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <PricingEmbed src={PRICING_EMBED_URL} />

          <div className="rounded-lg border bg-white p-6 md:p-8">
            <h3 className="mb-4 text-2xl font-semibold">O que conta como uma conexão?</h3>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              Cada conta de uma plataforma que seu cliente conecta ao Connect conta como uma conexão. Um mesmo cliente
              pode ter várias conexões.
            </p>
            <div className="rounded-lg border bg-muted/40 p-5">
              <p className="mb-4 font-semibold">Exemplo: um cliente do seu software</p>
              <ul className="space-y-3 text-sm">
                {EXAMPLE.map((item) => (
                  <li key={item} className="flex justify-between gap-4">
                    <span>{item}</span>
                    <span className="whitespace-nowrap font-medium text-primary">1 conexão</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 font-semibold">1 cliente, 3 contas conectadas = 3 conexões</p>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Todas as integrações estão disponíveis no plano. A mensalidade varia com a quantidade de contas conectadas
              pelos seus clientes.{" "}
              <a href="#faq" className="text-primary underline underline-offset-4">
                Dúvidas sobre a cobrança
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
