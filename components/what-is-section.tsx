import { Card, CardContent } from "@/components/ui/card"
import { Database, Zap, Shield, Puzzle, ArrowRight } from "lucide-react"

export function WhatIsSection() {
  return (
    <section id="what-is" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6">O que é o Reportei Connect?</h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Um conector de dados que permite plataformas receber e exibir dados de diversas redes de marketing digital
            de forma simples e segura, sem precisar desenvolver integrações complexas com cada rede.
          </p>
        </div>

        <div className="relative mb-16 w-full">
          {/* Connection arrows for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 -translate-y-1/2 px-[10%]">
            <div className="flex justify-between items-center">
              <ArrowRight className="text-primary/30 w-8 h-8" style={{ marginLeft: "20%" }} />
              <ArrowRight className="text-primary/30 w-8 h-8" />
              <ArrowRight className="text-primary/30 w-8 h-8" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <Card className="relative text-center p-6 border-2 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                {/* Numbered badge */}
                
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Database className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-3">Coleta</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Conecta e coleta dados do Google, Meta, TikTok e outras plataformas via APIs oficiais
                </p>
              </CardContent>
            </Card>

            <Card className="relative text-center p-6 border-2 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-3">Processa</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Transforma dados de diferentes redes em uma estrutura única e padronizada
                </p>
              </CardContent>
            </Card>

            <Card className="relative text-center p-6 border-2 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-3">Disponibiliza</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Entrega métricas prontas através de uma única API simples e documentada
                </p>
              </CardContent>
            </Card>

            <Card className="relative text-center p-6 border-2 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Puzzle className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-3">Personaliza</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Combine métricas de diversas redes com dados do seu sistema em dashboards únicos
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-10 border-2 border-primary/10 text-center shadow-sm">
            <h3 className="text-xl md:text-2xl font-bold mb-4">Reportei Connect é um produto da Reportei</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Uma ferramenta consolidada no mercado com mais de 10 anos de existência, especializada em relatórios e
              dashboards de marketing digital.
            </p>
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  10+
                </div>
                <div className="text-sm font-medium text-muted-foreground">Anos no mercado</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  10k+
                </div>
                <div className="text-sm font-medium text-muted-foreground">Clientes ativos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  30+
                </div>
                <div className="text-sm font-medium text-muted-foreground">Integrações disponíveis</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
