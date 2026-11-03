import { withBase } from "@/lib/base-path"
import type { Metadata } from "next"
import { CheckCircle2, XCircle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import LeadsterCarousel from "@/components/leadster-carousel"
import { pt } from "@/lib/messages/pt"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Leadster e Reportei Connect | Histórias de clientes",
  description:
    "Como a Leadster passou a cruzar dados de leads com Google Ads, Meta Ads e LinkedIn Ads no Super Dashboard usando o Reportei Connect.",
  path: "/clientes/leadster",
})

const FACTS = [
  { label: "Empresa", value: "Leadster, plataforma de marketing conversacional" },
  { label: "Produto", value: "Super Dashboard" },
  { label: "Integrações usadas", value: "Google Ads, Meta Ads e LinkedIn Ads" },
  { label: "Parte do Connect", value: "API de métricas" },
]

const CHALLENGES = [
  "Dados de campanhas dispersos em cada plataforma",
  "Sem como calcular o retorno real do investimento em mídia",
  "Nenhuma visão consolidada dos canais",
]

const RESULTS = [
  "Custo por conversão calculado com os dados de leads da própria Leadster",
  "CPM e métricas detalhadas de cada plataforma",
  "Desempenho separado por campanha",
  "Google Ads, Meta Ads e LinkedIn Ads consolidados numa só tela",
]

export default function LeadsterCasePage() {
  return (
    <div className="connect-page min-h-screen">
      <Header />
      <main>
        <section className="lp-hero">
          <div className="lp-container">
            <nav aria-label="Trilha" className="mb-8 text-sm text-muted-foreground">
              <a href={withBase("/#clientes")} className="hover:text-foreground">
                Histórias de clientes
              </a>
              <span className="mx-2" aria-hidden="true">
                /
              </span>
              <span className="text-foreground">Leadster</span>
            </nav>

            <div className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr] lg:gap-16">
              <div>
                <img src={withBase("/images/clients/leadster.png")} alt="Leadster" className="mb-8 h-7 w-auto" />
                <h1 className="lp-title max-w-[22ch] text-[clamp(2.4rem,4.4vw,3.6rem)]">
                  Como a Leadster levou os dados de mídia para dentro do Super Dashboard
                </h1>
                <p className="lp-copy mt-6">
                  A Leadster já sabia quantos leads seus chatbots geravam. Com o Reportei Connect, passou a mostrar aos
                  clientes quanto cada lead custou em cada canal.
                </p>
              </div>

              <dl className="divide-y self-start rounded-lg border bg-muted/40 px-6">
                {FACTS.map((fact) => (
                  <div key={fact.label} className="py-4">
                    <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {fact.label}
                    </dt>
                    <dd className="mt-1 font-medium">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section className="lp-section border-t pt-16">
          <div className="lp-container grid gap-14 lg:grid-cols-2">
            <div>
              <p className="lp-eyebrow mb-3">O desafio</p>
              <h2 className="text-2xl font-semibold tracking-tight">Leads de um lado, investimento do outro.</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                A Leadster reunia os dados de leads e interações dos seus chatbots, mas não conseguia medir o
                investimento em mídia nem o custo por conversão dos clientes.
              </p>
              <ul className="mt-6 space-y-3">
                {CHALLENGES.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="lp-eyebrow mb-3">A solução</p>
              <h2 className="text-2xl font-semibold tracking-tight">Uma API em vez de três integrações.</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Em vez de integrar e manter Google Ads, Meta Ads e LinkedIn Ads separadamente, a Leadster conectou as
                contas dos clientes pelo Reportei Connect e cruzou essas métricas com seus dados internos.
              </p>
              <ul className="mt-6 space-y-3">
                {RESULTS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="lp-section border-t bg-muted/40">
          <div className="lp-container">
            <p className="lp-eyebrow mb-3">O que eles construíram</p>
            <h2 className="lp-title mb-8">O Super Dashboard da Leadster.</h2>
            <LeadsterCarousel t={pt.carousel} />
            <a
              href="https://www.youtube.com/watch?v=5SnKj1rrUJM"
              target="_blank"
              rel="noopener noreferrer"
              className="lp-link mt-8 inline-block"
            >
              Assistir à apresentação da Leadster
            </a>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
