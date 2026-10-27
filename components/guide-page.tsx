import { ArrowRight } from "lucide-react"
import { withBase } from "@/lib/base-path"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { FaqList, JsonLd, breadcrumbJsonLd, faqJsonLd } from "@/components/platform-page"
import type { Guide, GuideBlock } from "@/lib/guias"
import { SIGNUP_URL, SITE_NAME, absoluteUrl } from "@/lib/seo"

function Block({ block }: { block: GuideBlock }) {
  if (typeof block === "string") return <p className="leading-relaxed text-muted-foreground">{block}</p>

  if ("table" in block) {
    const [head, ...rows] = block.table
    return (
      <div className="overflow-x-auto rounded-lg border">
        <table className="w-full min-w-[560px] border-collapse text-left text-sm">
          <thead className="bg-muted/60">
            <tr>
              {head.map((cell, i) => (
                <th key={i} scope="col" className="px-4 py-3 font-semibold">
                  {cell}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row[0]} className="border-t align-top">
                {row.map((cell, i) =>
                  i === 0 ? (
                    <th key={i} scope="row" className="px-4 py-3 font-semibold">
                      {cell}
                    </th>
                  ) : (
                    <td key={i} className="px-4 py-3 leading-relaxed">
                      {cell}
                    </td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  const List = block.ordered ? "ol" : "ul"
  return (
    <List className={`space-y-2 pl-6 leading-relaxed ${block.ordered ? "list-decimal" : "list-disc"}`}>
      {block.list.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </List>
  )
}

export function GuidePageView({ guide }: { guide: Guide }) {
  const path = `/guias/${guide.slug}`

  return (
    <div className="connect-page min-h-screen">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TechArticle",
          headline: guide.h1,
          description: guide.description,
          inLanguage: "pt-BR",
          dateModified: guide.checkedAt.split("/").reverse().join("-"),
          author: { "@type": "Organization", name: SITE_NAME, url: absoluteUrl("/") },
          publisher: { "@type": "Organization", name: "Reportei", url: "https://reportei.com" },
          mainEntityOfPage: absoluteUrl(path),
        }}
      />
      <JsonLd data={faqJsonLd(guide.faq)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Guias", path: "/guias" },
          { name: guide.h1, path },
        ])}
      />
      <Header />
      <main>
        <article>
          <header className="lp-hero">
            <div className="lp-container max-w-4xl">
              <nav aria-label="Trilha" className="mb-8 text-sm text-muted-foreground">
                <a href={withBase("/guias")} className="hover:text-foreground">
                  Guias
                </a>
                <span className="mx-2" aria-hidden="true">
                  /
                </span>
                <span className="text-foreground">{guide.platform}</span>
              </nav>
              <h1 className="lp-title text-[clamp(2.1rem,4vw,3.2rem)]">{guide.h1}</h1>
              <p className="lp-copy mt-6">{guide.lead}</p>
              <p className="mt-5 text-sm text-muted-foreground">
                Conferido na documentação oficial em {guide.checkedAt}.
              </p>
            </div>
          </header>

          <div className="lp-container max-w-4xl space-y-14 border-t pb-16 pt-14">
            {guide.sections.map((section) => (
              <section key={section.h2} className="space-y-5">
                <h2 className="text-2xl font-semibold tracking-tight">{section.h2}</h2>
                {section.blocks.map((block, i) => (
                  <Block key={i} block={block} />
                ))}
              </section>
            ))}

            <aside className="rounded-xl border bg-muted/40 p-7">
              <p className="lp-eyebrow mb-3">O atalho</p>
              <p className="leading-relaxed">{guide.shortcut}</p>
              <div className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-4">
                <a href={SIGNUP_URL} className="lp-button">
                  Começar teste grátis
                </a>
                <a href={withBase(`/${guide.platformPage}`)} className="lp-link inline-flex items-center gap-1.5 text-sm">
                  Ver a API do {guide.platform} no Connect
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </aside>

            <section className="space-y-6">
              <h2 className="text-2xl font-semibold tracking-tight">Perguntas frequentes</h2>
              <FaqList items={guide.faq} />
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold tracking-tight">Fontes</h2>
              <ul className="space-y-2 text-sm">
                {guide.sources.map((source) => (
                  <li key={source.url}>
                    <a href={source.url} target="_blank" rel="noopener noreferrer" className="lp-link">
                      {source.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </article>

        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
