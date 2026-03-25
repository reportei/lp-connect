import { Database, Zap, BarChart3 } from "lucide-react"
import Image from "next/image"

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6">Como funciona na prática</h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Veja como o Reportei Connect transforma dados de múltiplas redes em insights valiosos para seu produto.
          </p>
        </div>

        <div className="w-full">
          <div className="relative">
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              {/* Step 1 - Networks */}
              <div className="text-center relative">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full font-bold text-lg mb-4">
                    1
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Mais de 30 redes</h3>
                  <p className="text-sm text-muted-foreground">Integradas ao Reportei</p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm border">
                  <div className="grid grid-cols-4 gap-3 mb-4">
                    {[
                      { name: "Google", logo: "/logos/google-ads.svg" },
                      { name: "Meta", logo: "/logos/meta.svg" },
                      { name: "TikTok", logo: "/logos/tiktok.svg" },
                      { name: "LinkedIn", logo: "/logos/linkedin.svg" },
                      { name: "YouTube", logo: "/logos/youtube.svg" },
                      { name: "Instagram", logo: "/logos/instagram.svg" },
                      { name: "X Ads", logo: "/logos/x-ads.svg" },
                      { name: "Shopify", logo: "/logos/shopify.svg" },
                    ].map((network, i) => (
                      <div key={i} className="flex flex-col items-center">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border mb-1 p-2">
                          <Image
                            src={network.logo || "/placeholder.svg"}
                            alt={network.name}
                            width={24}
                            height={24}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <span className="text-xs text-gray-600">{network.name}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-center text-xs text-gray-500 border-t pt-3">+22 outras redes</div>
                </div>
              </div>

              {/* Step 2 - Reportei Connect */}
              <div className="text-center relative">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-500 text-white rounded-full font-bold text-lg mb-4">
                    2
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Reportei Connect</h3>
                  <p className="text-sm text-muted-foreground">Processa e padroniza</p>
                </div>

                <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-2xl p-6 shadow-lg">
                  <div className="text-center mb-4">
                    <Database className="h-10 w-10 mx-auto mb-3" />
                    <h4 className="font-bold text-lg">API Unificada</h4>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-center space-x-2 bg-white/10 rounded-lg p-2">
                      <Zap className="h-4 w-4" />
                      <span>Normalização automática</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 bg-white/10 rounded-lg p-2">
                      <BarChart3 className="h-4 w-4" />
                      <span>Validação de dados</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 bg-white/10 rounded-lg p-2">
                      <Database className="h-4 w-4" />
                      <span>Cache inteligente</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 - Your System */}
              <div className="text-center relative">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full font-bold text-lg mb-4">
                    3
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Seu Sistema</h3>
                  <p className="text-sm text-muted-foreground">Métricas de 30+ redes + dados internos</p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm border">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <h4 className="font-semibold text-green-700">Seu Dashboard</h4>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-green-50 rounded-lg p-3 text-sm">
                      <div className="font-medium text-green-800 mb-1">✓ Métricas de 30+ redes</div>
                      <div className="text-green-600 text-xs">Todos os dados em um só lugar</div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3 text-sm">
                      <div className="font-medium text-blue-800 mb-1">✓ Cruzamento de dados</div>
                      <div className="text-blue-600 text-xs">Combine com seus dados internos</div>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-3 text-sm">
                      <div className="font-medium text-purple-800 mb-1">✓ Insights avançados</div>
                      <div className="text-purple-600 text-xs">Análises completas e personalizadas</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              {/* Arrow 1 - Between step 1 and 2 */}
              <div className="absolute left-1/3 -translate-x-1/2 top-[68px] sm:top-[66px] md:top-[76px] lg:top-[74px]">
                <div className="flex items-center">
                  <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                  <div className="w-0 h-0 border-l-8 border-l-purple-500 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
                </div>
              </div>

              {/* Arrow 2 - Between step 2 and 3 */}
              <div className="absolute right-1/3 translate-x-1/2 top-[62px] sm:top-[68px] md:top-[976px] lg:top-[74px]">
                <div className="flex items-center">
                  <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-green-500"></div>
                  <div className="w-0 h-0 border-l-8 border-l-green-500 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
                </div>
              </div>
            </div>

            {/* Mobile arrows */}
            <div className="lg:hidden flex justify-center space-x-4 mt-8">
              <div className="flex items-center">
                <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                <div className="w-0 h-0 border-l-4 border-l-purple-500 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-green-500"></div>
                <div className="w-0 h-0 border-l-4 border-l-green-500 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
