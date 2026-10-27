import { withBase } from "@/lib/base-path"
import { ArrowRight, Plug } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { ALTERNATIVE_PAGES } from "@/lib/alternativas"
import { INTEGRATION_CATEGORIES, INTEGRATIONS, integrationLogoSrc } from "@/lib/integrations"
import { PLATFORM_PAGES } from "@/lib/plataformas"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: `Integrações do Reportei Connect: ${INTEGRATIONS.length} APIs de marketing, CRM e e-commerce`,
  description: `Meta Ads, Google Ads, Instagram, TikTok, RD Station, HubSpot, Nuvemshop e mais: as ${INTEGRATIONS.length} plataformas que o seu produto acessa por uma única API.`,
  path: "/integracoes",
})

export default function IntegracoesPage() {
  return (
    <div className="connect-page min-h-screen">
      <Header />
      <main>
        <section className="lp-hero">
          <div className="lp-container">
            <p className="lp-eyebrow mb-4">Integrações</p>
            <h1 className="lp-title max-w-[22ch] text-[clamp(2.2rem,4vw,3.4rem)]">
              {INTEGRATIONS.length} plataformas em uma API para o seu produto
            </h1>
            <p className="lp-copy mt-6">
              Seus clientes conectam as contas de mídia paga, redes sociais, CRM e e-commerce. Seu sistema consulta as
              métricas de todas elas pela mesma API, no mesmo formato.
            </p>
          </div>
        </section>

        <section className="lp-section border-t pt-16">
          <div className="lp-container">
            <h2 className="lp-title mb-8">APIs mais procuradas</h2>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {PLATFORM_PAGES.map((page) => (
                <li key={page.slug}>
                  <a
                    href={withBase(`/${page.slug}`)}
                    className="flex h-full items-start gap-4 rounded-lg border bg-white p-5 transition-colors hover:border-primary"
                  >
                    <img src={integrationLogoSrc(page.logo)} alt="" className="h-8 w-8 shrink-0 object-contain" />
                    <span>
                      <span className="block font-semibold">API do {page.platform}</span>
                      <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                        {page.metrics.slice(0, 3).join(", ")}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="lp-section border-t bg-muted/40">
          <div className="lp-container">
            <h2 className="lp-title mb-10">Catálogo completo</h2>
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {INTEGRATION_CATEGORIES.map((category) => (
                <div key={category}>
                  <h3 className="mb-4 text-lg font-semibold tracking-tight">{category}</h3>
                  <ul className="space-y-2">
                    {INTEGRATIONS.filter((item) => item.category === category).map((item) => {
                      const logo = item.logo ? (
                        <img src={integrationLogoSrc(item.logo)} alt="" loading="lazy" className="h-5 w-5 object-contain" />
                      ) : (
                        <Plug className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
                      )
                      return (
                        <li key={item.name} className="flex items-center gap-3 text-sm">
                          {logo}
                          {item.page ? (
                            <a href={withBase(`/${item.page}`)} className="lp-link">
                              {item.name}
                            </a>
                          ) : (
                            <span>{item.name}</span>
                          )}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="comparativos" className="lp-section">
          <div className="lp-container">
            <h2 className="lp-title mb-8">Comparativos</h2>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {ALTERNATIVE_PAGES.map((page) => (
                <li key={page.slug}>
                  <a
                    href={withBase(`/${page.slug}`)}
                    className="flex h-full items-center justify-between gap-3 rounded-lg border bg-white p-5 font-semibold transition-colors hover:border-primary"
                  >
                    Connect ou {page.competitor}
                    <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
