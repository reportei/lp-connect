import LeadsterCarousel from "@/components/leadster-carousel"

export function CaseStudySection() {
  return (
    <section id="case-study" className="lp-section border-y bg-muted/40">
      <div className="lp-container grid items-start gap-10 lg:grid-cols-[0.8fr_1.4fr] lg:gap-14">
        <div>
          <p className="lp-eyebrow mb-5">Connect na prática · Leadster</p>
          <h2 className="lp-title mb-6">Os dados de mídia no dashboard da Leadster.</h2>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              A Leadster já reunia dados de leads e interações dos seus chatbots. Faltava conectar esses resultados ao
              investimento em mídia.
            </p>
            <p>
              Com o Reportei Connect, passou a cruzar seus dados internos com Google Ads, Meta Ads e LinkedIn Ads no
              Super Dashboard.
            </p>
            <p>Custo por conversão, CPM e desempenho por campanha, em uma visão consolidada dos canais.</p>
          </div>
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
            <a href="/clientes/leadster" className="lp-link">
              Ler o case completo
            </a>
            <a
              href="https://www.youtube.com/watch?v=5SnKj1rrUJM"
              target="_blank"
              rel="noopener noreferrer"
              className="lp-link"
            >
              Assistir à apresentação
            </a>
          </div>
        </div>
        <div className="min-w-0 lg:pt-1">
          <LeadsterCarousel />
        </div>
      </div>
    </section>
  )
}
