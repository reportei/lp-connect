import { ArrowRight } from "lucide-react"
import { withBase } from "@/lib/base-path"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { GUIDES } from "@/lib/guias"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Guias de APIs de marketing | Reportei Connect",
  description:
    "Como acessar as APIs oficiais do Instagram, Google Ads e LinkedIn em 2026: permissões, aprovações, níveis de acesso e tokens, com as fontes oficiais.",
  path: "/guias",
})

export default function GuiasPage() {
  return (
    <div className="connect-page min-h-screen">
      <Header />
      <main>
        <section className="lp-hero">
          <div className="lp-container">
            <p className="lp-eyebrow mb-4">Guias</p>
            <h1 className="lp-title max-w-[22ch] text-[clamp(2.2rem,4vw,3.4rem)]">
              Como acessar as APIs de marketing, plataforma por plataforma
            </h1>
            <p className="lp-copy mt-6">
              O caminho oficial de cada API: aprovações, permissões, níveis de acesso e tokens, conferido na documentação
              de cada plataforma.
            </p>
          </div>
        </section>
        <section className="lp-section border-t pt-16">
          <ul className="lp-container grid gap-4 md:grid-cols-3">
            {GUIDES.map((guide) => (
              <li key={guide.slug}>
                <a
                  href={withBase(`/guias/${guide.slug}`)}
                  className="flex h-full flex-col rounded-lg border bg-white p-6 transition-colors hover:border-primary"
                >
                  <span className="text-lg font-semibold tracking-tight">{guide.h1}</span>
                  <span className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{guide.lead}</span>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                    Ler o guia
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
