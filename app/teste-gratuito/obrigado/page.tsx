import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BookOpen, Calendar, CheckCircle2, Home } from "lucide-react"
import Link from "next/link"

export default function ObrigadoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/images/reportei-connect-logo.png" alt="Reportei Connect" className="h-10 w-auto" />
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-5xl mx-auto">
          {/* Success Message */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
              <CheckCircle2 className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6">Solicitação enviada com sucesso!</h1>
            <p className="text-lg text-muted-foreground text-balance leading-relaxed max-w-2xl mx-auto">
              Obrigado por se inscrever no teste gratuito do Reportei Connect. Nossa equipe está processando sua
              solicitação e você receberá um e-mail com suas credenciais de acesso em breve.
            </p>
          </div>

          {/* Next Steps */}
          <Card className="mb-8 border-blue-200 bg-blue-50/50">
            <CardHeader>
              <CardTitle>Próximos passos</CardTitle>
              <CardDescription>O que acontece agora?</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-semibold shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Verifique seu e-mail</h3>
                  <p className="text-sm text-muted-foreground">
                    Você receberá um e-mail com suas credenciais de acesso (API Key e Secret) em até 72 horas úteis.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-semibold shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Acesse a documentação</h3>
                  <p className="text-sm text-muted-foreground">
                    Siga nosso guia de início rápido para fazer sua primeira integração com a API.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-semibold shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Comece a integrar</h3>
                  <p className="text-sm text-muted-foreground">
                    Use os exemplos de código e a Postman Collection para começar a buscar dados de marketing.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Cards */}
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Explore a documentação</CardTitle>
                <CardDescription>
                  Comece a aprender sobre os endpoints, autenticação e exemplos de uso da API
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <a href="https://lp.connect.reportei.com/documentacao" target="_blank" rel="noopener noreferrer">
                    Acessar documentação
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Calendar className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Agende uma demonstração</CardTitle>
                <CardDescription>Fale com nosso time e tire todas as suas dúvidas sobre a integração</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <a href="https://calendly.com/felipe-reportei/30min" target="_blank" rel="noopener noreferrer">
                    Agendar call
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Additional Actions */}
          <div className="flex justify-center">
            <Button asChild variant="outline" size="lg" className="bg-transparent">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Voltar ao site
              </Link>
            </Button>
          </div>

          {/* Help Section */}
          <Card className="mt-8 bg-gradient-to-br from-slate-50 to-slate-100 border-slate-200">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="font-semibold mb-2">Precisa de ajuda?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Nossa equipe está disponível para ajudar você com qualquer dúvida sobre a integração.
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <a href="mailto:suporte@reportei.com" className="text-blue-600 hover:underline">
                    suporte@reportei.com
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
