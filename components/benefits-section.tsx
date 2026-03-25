import { Card, CardContent } from "@/components/ui/card"
import { Zap, DollarSign, Shield, Puzzle, TrendingUp, Users } from "lucide-react"

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6">Vantagens do Reportei Connect</h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Transforme dados em vantagem competitiva sem os custos e complexidade das integrações tradicionais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          <Card className="p-6 hover:shadow-lg transition-all duration-300 group">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Zap className="h-8 w-8 text-gray-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Agilidade</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Sem necessidade de desenvolver integrações diretas com Google, Meta, LinkedIn, TikTok, etc.
              </p>
              <div className="flex items-center text-xs text-blue-600 font-medium">
                <TrendingUp className="h-3 w-3 mr-1" />
                Ganhe velocidade
              </div>
            </CardContent>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-all duration-300 group">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <DollarSign className="h-8 w-8 text-gray-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Economia</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Elimina custos de manutenção e atualizações constantes das APIs das redes.
              </p>
              <div className="flex items-center text-xs text-blue-600 font-medium">
                <DollarSign className="h-3 w-3 mr-1" />
                Reduza custos
              </div>
            </CardContent>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-all duration-300 group">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Shield className="h-8 w-8 text-gray-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Confiabilidade</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Infraestrutura consolidada e aprovação das redes já estabelecida.
              </p>
              <div className="flex items-center text-xs text-blue-600 font-medium">
                <Shield className="h-3 w-3 mr-1" />
                Confiabilidade Reportei
              </div>
            </CardContent>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-all duration-300 group">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Puzzle className="h-8 w-8 text-gray-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Flexibilidade</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Permite exibir e cruzar dados de várias redes no formato que desejar.
              </p>
              <div className="flex items-center text-xs text-blue-600 font-medium">
                <Users className="h-3 w-3 mr-1" />
                Visão 360
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-20">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-12">Tradicional vs. Reportei Connect</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Traditional approach */}
              <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
                <h4 className="font-semibold text-red-800 mb-4 flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  Abordagem Tradicional
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-red-700">
                    <span className="mr-2">❌</span>
                    Múltiplas integrações complexas
                  </div>
                  <div className="flex items-center text-sm text-red-700">
                    <span className="mr-2">❌</span>
                    Manutenção constante
                  </div>
                  <div className="flex items-center text-sm text-red-700">
                    <span className="mr-2">❌</span>
                    Aprovações demoradas
                  </div>
                  <div className="flex items-center text-sm text-red-700">
                    <span className="mr-2">❌</span>
                    Custos elevados
                  </div>
                </div>
              </div>

              {/* Reportei Connect approach */}
              <div className="bg-green-50 rounded-2xl p-6 border border-green-500">
                <h4 className="font-semibold text-green-800 mb-4 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Com Reportei Connect
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-green-700">
                    <span className="mr-2">✅</span>
                    Uma única integração
                  </div>
                  <div className="flex items-center text-sm text-green-700">
                    <span className="mr-2">✅</span>
                    Zero manutenção
                  </div>
                  <div className="flex items-center text-sm text-green-700">
                    <span className="mr-2">✅</span>
                    Aprovação instantânea
                  </div>
                  <div className="flex items-center text-sm text-green-700">
                    <span className="mr-2">✅</span>
                    Custo fixo previsível
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
