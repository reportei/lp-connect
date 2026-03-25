import LeadsterCarousel from "@/components/leadster-carousel"
import { CheckCircle2, XCircle, Play, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CaseStudySection() {
  return (
    <section id="case-study" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-6">
            Como a Leadster transformou seus dashboards
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground">
            De dados limitados para visão 360° dos investimentos em marketing
          </p>
        </div>

        <div className="w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="bg-background rounded-2xl shadow-lg border p-6 md:p-8 h-full">
              {/* O Problema */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">O Problema</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A Leadster, plataforma de marketing conversacional, já possuía dados de leads e interações via
                  chatbots, mas não conseguia metrificar investimento em mídia e custo por conversão.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Dados de campanhas dispersos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Impossibilidade de calcular ROI real</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Falta de visão consolidada</span>
                  </li>
                </ul>
              </div>

              {/* A Solução */}
              <div>
                <h3 className="text-2xl font-bold mb-4">A Solução</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Com o Reportei Connect, foi possível cruzar os dados internos da Leadster com dados de Google Ads,
                  Meta Ads e LinkedIn Ads.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Custo por conversão em tempo real</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>CPM e métricas detalhadas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Dados separados por campanhas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Consolidação entre redes</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right side: Dashboard carousel */}
            <div className="lg:sticky lg:top-8">
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">Veja o Super Dashboard Leadster em ação</h3>
                <p className="text-muted-foreground text-lg">
                  Explore como a integração transformou a análise de dados
                </p>
              </div>
              <div className="relative">
                <LeadsterCarousel
                  aspectClass="aspect-[16/10]"
                  autoMs={5000}
                  items={[
                    {
                      src: "/images/leadster-dashboard-1.png",
                      alt: "Super Dashboard Leadster - Customização de eventos e investimentos por conversão",
                    },
                    {
                      src: "/images/leadster-dashboard-2.png",
                      alt: "Campanhas Google Ads com métricas detalhadas de investimento e conversão",
                    },
                    {
                      src: "/images/leadster-dashboard-3.png",
                      alt: "Visão consolidada por canal - Google Ads, LinkedIn Ads e Meta Ads",
                    },
                    {
                      src: "/images/leadster-dashboard-4.png",
                      alt: "Investimentos por conversão com custo por lead e taxa de conversão",
                    },
                    {
                      src: "/images/leadster-dashboard-5.png",
                      alt: "Análise completa de campanhas com métricas de todos os canais",
                    },
                  ]}
                />
              </div>
              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                <Button asChild size="lg" className="w-full">
                  <a
                    href="https://www.youtube.com/watch?v=5SnKj1rrUJM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Play className="w-5 h-5" />
                    Assista a Live
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full bg-transparent">
                  <a
                    href="https://calendly.com/felipe-reportei/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-5 h-5" />
                    Agendar Demo
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
