import { ArrowRight, CheckCircle2, ChevronDown, XCircle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { INTEGRATIONS, integrationLogoSrc } from "@/lib/integrations"
import { findPlatformPage, type PlatformFaq, type PlatformPage } from "@/lib/plataformas"
import { SIGNUP_URL, SITE_URL } from "@/lib/seo"

const WITH_CONNECT = [
  "Seu cliente autoriza a conta numa tela pronta, hospedada pelo Connect.",
  "Você consulta as métricas por uma API REST, com a mesma chave para todas as plataformas.",
  "O Connect renova os tokens e avisa seu sistema por webhook quando uma conexão perde o acesso.",
  `A resposta tem o mesmo formato nas ${INTEGRATIONS.length} integrações do catálogo.`,
]

export function FaqList({ items }: { items: PlatformFaq[] }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <details key={item.q} className="group rounded-lg border bg-white">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 text-left font-semibold hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary md:px-6 [&::-webkit-details-marker]:hidden">
            <span>{item.q}</span>
            <ChevronDown className="h-5 w-5 shrink-0 transition-transform group-open:rotate-180" aria-hidden="true" />
          </summary>
          <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground md:px-6 md:text-base">{item.a}</p>
        </details>
      ))}
    </div>
  )
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

export function faqJsonLd(items: PlatformFaq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  }
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  }
}

function Example({ page }: { page: PlatformPage }) {
  if (!page.example) return null
  const { reference, label, value, caption } = page.example

  return (
    <figure className="lp-product-figure min-w-0 self-start">
      <pre className="lp-code overflow-x-auto p-5">{`POST /api/metrics/get-data

{
  "customer_integration": "<conta conectada>",
  "start": "2026-09-01",
  "end": "2026-09-30",
  "metrics": [{
    "id": "m1",
    "reference_key": "${reference}",
    "component": "number_v1"
  }]
}`}</pre>
      <div className="mt-4 rounded-lg border bg-white p-5">
        <div className="mb-3 flex items-center gap-2 text-sm font-medium">
          <img src={integrationLogoSrc(page.logo)} alt="" className="h-5 w-5" />
          {page.platform} do seu cliente
        </div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="mt-1 text-3xl font-semibold tracking-tight">{value}</p>
      </div>
      <figcaption className="mt-3 text-sm text-muted-foreground">{caption}</figcaption>
    </figure>
  )
}

function MetricsCard({ page }: { page: PlatformPage }) {
  return (
    <div className="self-start rounded-lg border bg-muted/40 p-6">
      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Exemplos de métricas</p>
      <ul className="mt-4 space-y-3">
        {page.metrics.slice(0, 5).map((metric) => (
          <li key={metric} className="flex items-start gap-3 text-sm">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            <span>{metric}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function PlatformPageView({ page }: { page: PlatformPage }) {
  const related = page.related.map(findPlatformPage).filter((p): p is PlatformPage => Boolean(p))
  const path = `/${page.slug}`

  return (
    <div className="connect-page min-h-screen">
      <JsonLd data={faqJsonLd(page.faq)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Integrações", path: "/integracoes" },
          { name: `API do ${page.platform}`, path },
        ])}
      />
      <Header />
      <main>
        <section className="lp-hero">
          <div className="lp-container">
            <nav aria-label="Trilha" className="mb-8 text-sm text-muted-foreground">
              <a href="/integracoes" className="hover:text-foreground">
                Integrações
              </a>
              <span className="mx-2" aria-hidden="true">
                /
              </span>
              <span className="text-foreground">{page.platform}</span>
            </nav>

            <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
              <div>
                <img src={integrationLogoSrc(page.logo)} alt={page.platform} className="mb-8 h-10 w-auto" />
                <h1 className="lp-title max-w-[24ch] text-[clamp(2.2rem,4vw,3.4rem)]">{page.h1}</h1>
                <p className="lp-copy mt-6">{page.intro}</p>
                <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-5">
                  <a href={SIGNUP_URL} className="lp-button">
                    Começar teste grátis
                  </a>
                  <a href="https://developers.reportei.com/connect" className="lp-link text-sm">
                    Ver documentação
                  </a>
                </div>
                <p className="mt-5 text-sm text-muted-foreground">15 dias para testar. Sem cartão de crédito.</p>
              </div>

              {page.example ? <Example page={page} /> : <MetricsCard page={page} />}
            </div>
          </div>
        </section>

        <section className="lp-section border-t pt-16">
          <div className="lp-container grid gap-14 lg:grid-cols-2">
            <div>
              <p className="lp-eyebrow mb-3">Pela API oficial do {page.platform}</p>
              <h2 className="text-2xl font-semibold tracking-tight">O que vem antes do primeiro dado.</h2>
              <ul className="mt-6 space-y-3">
                {page.officialSteps.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="lp-eyebrow mb-3">Pelo Reportei Connect</p>
              <h2 className="text-2xl font-semibold tracking-tight">Uma integração já aprovada e mantida.</h2>
              <ul className="mt-6 space-y-3">
                {WITH_CONNECT.map((item) => (
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
          <div className="lp-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <p className="lp-eyebrow mb-3">Dados disponíveis</p>
              <h2 className="lp-title">O que você consulta no {page.platform}.</h2>
              <p className="lp-copy mt-5">
                Alguns exemplos do catálogo. A lista completa de métricas e dimensões está no Connect Explorer, onde você
                testa a consulta numa conta real antes de escrever código.
              </p>
              {page.extra && (
                <div className="mt-8 rounded-lg border bg-white p-6">
                  <h3 className="text-lg font-semibold tracking-tight">{page.extra.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{page.extra.body}</p>
                </div>
              )}
            </div>
            <ul className="grid gap-px self-start overflow-hidden rounded-xl border bg-border sm:grid-cols-2">
              {page.metrics.map((metric) => (
                <li key={metric} className="bg-white px-5 py-4 font-medium">
                  {metric}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="lp-section">
          <div className="lp-container">
            <p className="lp-eyebrow mb-3">Quem usa</p>
            <h2 className="lp-title max-w-[22ch]">O {page.platform} dentro do seu produto.</h2>
            <ul className="mt-10 grid gap-px overflow-hidden rounded-xl border bg-border md:grid-cols-3">
              {page.useCases.map((useCase) => (
                <li key={useCase.title} className="bg-white p-7">
                  <h3 className="text-lg font-semibold tracking-tight">{useCase.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{useCase.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="lp-section border-t bg-muted/40">
          <div className="lp-container grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            <div>
              <h2 className="lp-title mb-8">Perguntas sobre a API do {page.platform}</h2>
              <FaqList items={page.faq} />
            </div>
            <div>
              <h2 className="mb-5 text-xl font-semibold tracking-tight">Outras integrações</h2>
              <ul className="space-y-3">
                {related.map((item) => (
                  <li key={item.slug}>
                    <a
                      href={`/${item.slug}`}
                      className="flex items-center gap-3 rounded-md border bg-white px-4 py-3 font-medium transition-colors hover:border-primary"
                    >
                      <img src={integrationLogoSrc(item.logo)} alt="" className="h-6 w-6 object-contain" />
                      API do {item.platform}
                    </a>
                  </li>
                ))}
              </ul>
              <a href="/integracoes" className="lp-link mt-6 inline-flex items-center gap-1.5 text-sm">
                Ver as {INTEGRATIONS.length} integrações
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
