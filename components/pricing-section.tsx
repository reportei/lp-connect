import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, MessageCircle } from "lucide-react"

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-balance mb-4">
            Preços <span className="text-primary">personalizados</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed">
            Cada implementação é única. Nossos preços variam conforme caso de uso, redes integradas e volume de dados.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Card */}
            <Card className="relative border-primary shadow-lg">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Recomendado
                </span>
              </div>
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-xl font-bold">Orçamento Personalizado</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">Sob</span>
                  <span className="text-muted-foreground ml-1">consulta</span>
                </div>
                <p className="text-muted-foreground text-sm mt-2">Preço baseado em suas necessidades específicas</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    <span className="text-sm">Redes conforme necessidade</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    <span className="text-sm">Volume de dados personalizado</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    <span className="text-sm">Suporte técnico dev para dev</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    <span className="text-sm">Implementação assistida</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    <span className="text-sm">SLA personalizado</span>
                  </li>
                </ul>
                <Button className="w-full">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Solicitar Orçamento
                </Button>
              </CardContent>
            </Card>

            {/* Demo Card */}
            <Card className="border-border">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-xl font-bold">Demo Técnica</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">Gratuita</span>
                </div>
                <p className="text-muted-foreground text-sm mt-2">Apresentação personalizada para sua equipe</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    <span className="text-sm">Apresentação de 30 minutos</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    <span className="text-sm">Casos de uso específicos</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    <span className="text-sm">Demonstração da API</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    <span className="text-sm">Q&A com especialistas</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    <span className="text-sm">Roadmap de implementação</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <a href="https://calendly.com/felipe-reportei/30min" target="_blank" rel="noopener noreferrer">
                    Agendar Demo
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <div className="text-center">
            <div className="bg-muted/50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4">Fatores que influenciam o preço</h3>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div>
                  <div className="font-medium mb-2">Redes Integradas</div>
                  <div className="text-muted-foreground">Quantidade e complexidade das redes que você precisa</div>
                </div>
                <div>
                  <div className="font-medium mb-2">Volume de Dados</div>
                  <div className="text-muted-foreground">Quantidade de dados processados mensalmente</div>
                </div>
                <div>
                  <div className="font-medium mb-2">Nível de Suporte</div>
                  <div className="text-muted-foreground">Suporte técnico e implementação assistida</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
