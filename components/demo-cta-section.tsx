import { Button } from "@/components/ui/button"
import { Calendar, Rocket } from "lucide-react"
import Link from "next/link"

export function DemoCTASection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left side - Visual element */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
                <div className="inline-flex items-center rounded-full bg-white/20 px-3 py-1.5 text-sm mb-4">
                  <Rocket className="h-4 w-4 mr-2" />
                  <span>Demonstração gratuita</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-3 text-balance">
                  Conecte 30+ redes em dias, não meses
                </h2>

                <p className="text-white/90 text-base leading-relaxed">
                  Transforme dados de Google, Meta, TikTok e mais de 30 plataformas em insights valiosos para seu
                  produto
                </p>

                {/* Decorative element */}
                <div className="mt-8 flex gap-2">
                  <div className="h-2 w-12 bg-white/30 rounded-full"></div>
                  <div className="h-2 w-8 bg-white/20 rounded-full"></div>
                  <div className="h-2 w-4 bg-white/10 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Right side - CTAs and benefits */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Escolha como começar</h3>

                <div className="space-y-3">
                  <Button size="lg" className="w-full justify-start text-left h-auto py-4" asChild>
                    <Link href="/teste-gratuito">
                      <div className="flex items-start gap-3">
                        <Rocket className="h-5 w-5 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-semibold">Teste Gratuitamente</div>
                          <div className="text-sm opacity-90 font-normal">Experimente agora sem compromisso</div>
                        </div>
                      </div>
                    </Link>
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full justify-start text-left h-auto py-4 bg-transparent"
                    asChild
                  >
                    <a href="https://calendly.com/felipe-reportei/30min" target="_blank" rel="noopener noreferrer">
                      <div className="flex items-start gap-3">
                        <Calendar className="h-5 w-5 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-semibold">Agendar Demonstração</div>
                          <div className="text-sm text-muted-foreground font-normal">
                            Apresentação personalizada com nosso time
                          </div>
                        </div>
                      </div>
                    </a>
                  </Button>
                </div>
              </div>

              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                  Sem compromisso
                </span>
                <span className="flex items-center gap-1.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                  Suporte completo
                </span>
                <span className="flex items-center gap-1.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                  Tire suas dúvidas
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
