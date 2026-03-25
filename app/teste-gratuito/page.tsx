"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Calendar, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import Script from "next/script"
import { useEffect } from "react"

export default function TesteGratuitoPage() {
  useEffect(() => {
    const originalAlert = window.alert
    window.alert = (message) => {
      if (message && message.includes("Obrigado")) {
        return
      }
      originalAlert.call(window, message)
    }

    return () => {
      window.alert = originalAlert
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/images/reportei-connect-logo.png" alt="Reportei Connect" className="h-10 w-auto" />
          </Link>
          <Link href="/">
            <Button variant="ghost" size="sm">
              Voltar ao site
            </Button>
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm mb-6">
              <span className="mr-2">🎉</span>
              <span className="text-blue-700 font-medium">Teste gratuito por tempo limitado</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6">
              Experimente o <span className="text-blue-600">Reportei Connect</span> gratuitamente
            </h1>
            <p className="text-lg text-muted-foreground text-balance leading-relaxed max-w-2xl mx-auto">
              Preencha o formulário abaixo para solicitar seu período de teste gratuito da API do Reportei Connect e
              comece a integrar dados de marketing do seu produto.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Benefits Cards */}
            <Card className="border-blue-200 bg-blue-50/50">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Período de teste completo</h3>
                    <p className="text-sm text-muted-foreground">
                      Acesso total às funcionalidades da API durante o período de avaliação
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50/50">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Meta Ads e Google Ads</h3>
                    <p className="text-sm text-muted-foreground">Acesso aos dados das principais plataformas</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50/50">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Documentação completa</h3>
                    <p className="text-sm text-muted-foreground">Guias e exemplos para facilitar a integração</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="lg:col-span-2">
              <CardContent className="pt-6">
                <div role="main" id="reportei-connect-f9e10e17162a60533440"></div>
              </CardContent>
            </Card>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-blue-600 to-blue-700 text-white border-0">
                <CardHeader>
                  <Calendar className="h-8 w-8 mb-2" />
                  <CardTitle className="text-white">Prefere uma demonstração?</CardTitle>
                  <CardDescription className="text-blue-100">
                    Agende uma call com nosso time e veja o Reportei Connect em ação
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="secondary" className="w-full">
                    <a href="https://calendly.com/felipe-reportei/30min" target="_blank" rel="noopener noreferrer">
                      Agendar demonstração
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">O que você terá acesso</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                    <p className="text-sm text-muted-foreground">API REST completa e documentada</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                    <p className="text-sm text-muted-foreground">Dados de Meta Ads e Google Ads</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                    <p className="text-sm text-muted-foreground">Exemplos de código e tutoriais</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                    <p className="text-sm text-muted-foreground">Suporte técnico por e-mail</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                    <p className="text-sm text-muted-foreground">Postman Collection pronta</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Script
        src="https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (typeof window !== "undefined" && window.RDStationForms) {
            new window.RDStationForms("reportei-connect-f9e10e17162a60533440", "UA-66959827-2").createForm()
          }
        }}
      />
    </div>
  )
}
