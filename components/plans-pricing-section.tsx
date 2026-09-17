import { PricingEmbed } from "@/components/pricing-embed"

// Served by the app rather than rebuilt here: a copy would be a second published price.
const PRICING_EMBED_URL = "https://app.connect.reportei.com/prices/embed"

export function PlansPricingSection() {
  return (
    <section id="precos" className="py-16 md:py-24 bg-gray-50/60">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6">Planos e preços</h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed max-w-3xl mx-auto">
            Um plano único, com conexões inclusas e preço fixo por conexão adicional. Sem
            custo de implantação e sem taxa por integração nova.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <PricingEmbed src={PRICING_EMBED_URL} />
        </div>
      </div>
    </section>
  )
}
