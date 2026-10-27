import { CheckCircle2 } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { FaqList, JsonLd, breadcrumbJsonLd, faqJsonLd } from "@/components/platform-page"
import { CHECKED_AT, type AlternativePage } from "@/lib/alternativas"
import type { PlatformFaq } from "@/lib/plataformas"
import { SIGNUP_URL } from "@/lib/seo"

const PRICE_FAQ: PlatformFaq = {
  q: "Quanto custa o Reportei Connect?",
  a: "O plano é cobrado em reais, inclui um número de conexões e tem valor fixo por conexão adicional, igual em qualquer plataforma. Os valores atualizados estão na seção de preços da página inicial. O teste é de 15 dias, sem cartão de crédito.",
}

export function AlternativePageView({ page }: { page: AlternativePage }) {
  const faq = [...page.faq, PRICE_FAQ]

  return (
    <div className="connect-page min-h-screen">
      <JsonLd data={faqJsonLd(faq)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Comparativos", path: "/integracoes#comparativos" },
          { name: `Alternativa à ${page.competitor}`, path: `/${page.slug}` },
        ])}
      />
      <Header />
      <main>
        <section className="lp-hero">
          <div className="lp-container">
            <nav aria-label="Trilha" className="mb-8 text-sm text-muted-foreground">
              <a href="/integracoes#comparativos" className="hover:text-foreground">
                Comparativos
              </a>
              <span className="mx-2" aria-hidden="true">
                /
              </span>
              <span className="text-foreground">{page.competitor}</span>
            </nav>
            <p className="lp-eyebrow mb-4">Reportei Connect ou {page.competitor}</p>
            <h1 className="lp-title max-w-[26ch] text-[clamp(2.2rem,4vw,3.4rem)]">{page.h1}</h1>
            <p className="lp-copy mt-6">{page.intro}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-5">
              <a href={SIGNUP_URL} className="lp-button">
                Começar teste grátis
              </a>
              <a href="/integracoes" className="lp-link text-sm">
                Ver as integrações
              </a>
            </div>
            <p className="mt-5 text-sm text-muted-foreground">15 dias para testar. Sem cartão de crédito.</p>
          </div>
        </section>

        <section className="lp-section border-t pt-16">
          <div className="lp-container">
            <h2 className="lp-title mb-8">Lado a lado</h2>
            <div className="overflow-x-auto rounded-xl border">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead className="bg-muted/60 text-sm">
                  <tr>
                    <th scope="col" className="w-[18%] px-5 py-4 font-semibold">
                      <span className="sr-only">Critério</span>
                    </th>
                    <th scope="col" className="w-[41%] px-5 py-4 font-semibold text-primary">
                      Reportei Connect
                    </th>
                    <th scope="col" className="w-[41%] px-5 py-4 font-semibold">
                      {page.competitor}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {page.rows.map((row) => (
                    <tr key={row.label} className="border-t align-top">
                      <th scope="row" className="px-5 py-4 text-sm font-semibold">
                        {row.label}
                      </th>
                      <td className="px-5 py-4 leading-relaxed">{row.connect}</td>
                      <td className="px-5 py-4 leading-relaxed text-muted-foreground">{row.competitor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Informações da {page.competitor} tiradas do site{" "}
              <a href={page.competitorUrl} rel="nofollow noopener noreferrer" target="_blank" className="underline underline-offset-4">
                {page.competitorUrl.replace("https://", "")}
              </a>{" "}
              em {CHECKED_AT}. {page.competitor} é marca de seus respectivos donos.
            </p>
          </div>
        </section>

        <section className="lp-section border-t bg-muted/40">
          <div className="lp-container grid gap-14 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Quando a {page.competitor} faz mais sentido</h2>
              <ul className="mt-6 space-y-3">
                {page.whenCompetitor.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Quando o Reportei Connect faz mais sentido</h2>
              <ul className="mt-6 space-y-3">
                {page.whenConnect.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="lp-section">
          <div className="lp-container max-w-4xl">
            <h2 className="lp-title mb-8">Perguntas frequentes</h2>
            <FaqList items={faq} />
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
