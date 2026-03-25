import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative py-20 overflow-hidden md:py-24">
      <div className="container relative z-10 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-12 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-full border px-4 py-2 text-sm mb-8">
              <span className="mr-2">🔗</span>
              <span className="text-muted-foreground">Conecte seu produto a mais de 30 integrações</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance mb-6">
              Conecte seu produto a mais de 30 integrações usando apenas <span className="text-primary">uma API</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground text-balance mb-8 leading-relaxed">
              O <strong>Reportei Connect</strong> é um conector de dados que permite ao seu SaaS usar, com segurança e
              simplicidade, as integrações já feitas pelo Reportei. Acesse dezenas de APIs por uma única API, sem custo
              de implantação e manutenção de conectores.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="text-base px-8 bg-blue-600 hover:bg-blue-700" asChild>
                <Link href="/teste-gratuito">
                  Teste Gratuitamente
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 bg-transparent" asChild>
                <a href="https://calendly.com/felipe-reportei/30min" target="_blank" rel="noopener noreferrer">
                  Agendar Demonstração
                </a>
              </Button>
            </div>

            <div className="text-sm text-muted-foreground">
              Sem necessidade de aprovações • Infraestrutura consolidada • Suporte técnico incluído
            </div>
          </div>

          <div className="relative w-full">
            <div className="relative w-full bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 shadow-2xl">
              {/* Dashboard mockup */}
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="text-xs text-gray-500">Dashboard Analytics</div>
                </div>

                {/* Chart visualization */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Conversões</span>
                    <span className="text-sm text-green-600">+24%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mt-4">
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <div className="text-xs text-gray-600">Google Ads</div>
                      <div className="text-sm font-bold text-blue-600">R$ 2.4k</div>
                    </div>
                    <div className="text-center p-3 bg-purple-50 rounded-lg">
                      <div className="text-xs text-gray-600">Meta Ads</div>
                      <div className="text-sm font-bold text-purple-600">R$ 1.8k</div>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <div className="text-xs text-gray-600">LinkedIn</div>
                      <div className="text-sm font-bold text-green-600">R$ 950</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-2">
                {[
                  { name: "Google Ads", logo: "/logos/google-ads.svg" },
                  { name: "Meta", logo: "/logos/meta.svg" },
                  { name: "TikTok Ads", logo: "/logos/tiktok-ads.svg" },
                  { name: "LinkedIn Ads", logo: "/logos/linkedin-ads.svg" },
                  { name: "Instagram", logo: "/logos/instagram.svg" },
                  { name: "YouTube", logo: "/logos/youtube.svg" },
                  { name: "X Ads", logo: "/logos/x-ads.svg" },
                  { name: "Pinterest Ads", logo: "/logos/pinterest-ads.svg" },
                  { name: "Shopify", logo: "/logos/shopify.svg" },
                  { name: "Google Analytics", logo: "/logos/google-analytics.svg" },
                  { name: "TikTok", logo: "/logos/tiktok.svg" },
                ].map((network, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-lg p-2 flex flex-col items-center justify-center shadow-sm min-h-[60px]"
                  >
                    <div className="w-6 h-6 mb-1 flex items-center justify-center">
                      <Image
                        src={network.logo || "/placeholder.svg"}
                        alt={network.name}
                        width={24}
                        height={24}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="text-xs font-medium text-gray-700 text-center">{network.name}</div>
                  </div>
                ))}
                <div className="bg-white rounded-lg p-2 flex flex-col items-center justify-center shadow-sm min-h-[60px]">
                  <div className="text-lg font-bold text-gray-400 mb-1">+</div>
                  <div className="text-xs font-medium text-gray-700 text-center">20 mais</div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white rounded-full p-3 shadow-lg">
              <ArrowRight className="h-4 w-4" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white rounded-full p-3 shadow-lg">
              <Play className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  )
}
