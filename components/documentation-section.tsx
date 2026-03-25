import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Rocket, ArrowRight, BookOpen } from "lucide-react"
import Link from "next/link"

export function DocumentationSection() {
  return (
    <section id="documentation" className="py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6">Documentação e Acesso</h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed max-w-3xl mx-auto">
            API completa para integrar seus sistemas com a plataforma Reportei. Gerencie clientes, integrações e acesse
            métricas de marketing digital de forma programática.
          </p>
        </div>

        <div className="w-full max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <Card className="p-8 flex flex-col">
              <CardContent className="p-0 flex flex-col flex-1">
                <BookOpen className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Documentação Completa</h3>
                <p className="text-muted-foreground mb-6 flex-1">
                  Explore todos os endpoints, exemplos de código e guias de integração
                </p>
                <Button variant="outline" className="w-full bg-transparent" size="lg" asChild>
                  <Link href="/documentacao" className="flex items-center justify-center">
                    Ver documentação
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="p-8 flex flex-col">
              <CardContent className="p-0 flex flex-col flex-1">
                <Rocket className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Teste Gratuito</h3>
                <p className="text-muted-foreground mb-6 flex-1">
                  Experimente todas as funcionalidades sem compromisso
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 w-full" size="lg" asChild>
                  <Link href="/teste-gratuito" className="flex items-center justify-center">
                    Iniciar teste
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="p-8 flex flex-col">
              <CardContent className="p-0 flex flex-col flex-1">
                <Calendar className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Agende uma Demo</h3>
                <p className="text-muted-foreground mb-6 flex-1">Fale com nosso time e tire todas as suas dúvidas</p>
                <Button variant="outline" className="w-full bg-transparent" size="lg" asChild>
                  <a
                    href="https://calendly.com/felipe-reportei/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    Agendar call
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
