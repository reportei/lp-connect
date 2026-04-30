"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ExternalLink,
  Code,
  Database,
  Lock,
  Users,
  BarChart3,
  Download,
  BookOpen,
  Video,
  Github,
  Code2,
  Zap,
  FlaskConical,
} from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { CodeBlock } from "@/components/code-block"

export default function DocumentacaoPage() {
  const [activeSection, setActiveSection] = useState("intro")

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 px-4 py-1.5">
              API Documentation v1.0
            </Badge>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent leading-tight">
              Reportei Connect API
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Integre dados de métricas de redes sociais e marketing diretamente em sua aplicação com nossa API RESTful
              completa, segura e fácil de usar.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                asChild
              >
                <a href="/teste-gratuito">
                  <Zap className="mr-2 w-4 h-4" />
                  Testar API Gratuitamente
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-orange-300 hover:bg-orange-50 bg-transparent"
                asChild
              >
                <a href="/Reportei-Connect.postman_collection.json" download="Reportei-Connect.postman_collection.json">
                  <Download className="mr-2 w-4 h-4" />
                  Postman Collection
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Navigation */}
            <aside className="lg:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <Card className="shadow-lg border-gray-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-blue-600" />
                      Navegação
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-1">
                    <Button
                      variant={activeSection === "intro" ? "default" : "ghost"}
                      size="sm"
                      className={`w-full justify-start ${activeSection === "intro" ? "bg-blue-600 hover:bg-blue-700" : ""}`}
                      onClick={() => scrollToSection("intro")}
                    >
                      <BookOpen className="mr-2 w-4 h-4" />
                      Introdução
                    </Button>
                    <Button
                      variant={activeSection === "auth" ? "default" : "ghost"}
                      size="sm"
                      className={`w-full justify-start ${activeSection === "auth" ? "bg-blue-600 hover:bg-blue-700" : ""}`}
                      onClick={() => scrollToSection("auth")}
                    >
                      <Lock className="mr-2 w-4 h-4" />
                      Autenticação
                    </Button>
                    <Button
                      variant={activeSection === "merchants" ? "default" : "ghost"}
                      size="sm"
                      className={`w-full justify-start ${activeSection === "merchants" ? "bg-blue-600 hover:bg-blue-700" : ""}`}
                      onClick={() => scrollToSection("merchants")}
                    >
                      <Users className="mr-2 w-4 h-4" />
                      Merchants
                    </Button>
                    <Button
                      variant={activeSection === "customers" ? "default" : "ghost"}
                      size="sm"
                      className={`w-full justify-start ${activeSection === "customers" ? "bg-blue-600 hover:bg-blue-700" : ""}`}
                      onClick={() => scrollToSection("customers")}
                    >
                      <Users className="mr-2 w-4 h-4" />
                      Customers
                    </Button>
                    <Button
                      variant={activeSection === "integrations" ? "default" : "ghost"}
                      size="sm"
                      className={`w-full justify-start ${activeSection === "integrations" ? "bg-blue-600 hover:bg-blue-700" : ""}`}
                      onClick={() => scrollToSection("integrations")}
                    >
                      <Code className="mr-2 w-4 h-4" />
                      Customer Integrations
                    </Button>
                    <Button
                      variant={activeSection === "metrics" ? "default" : "ghost"}
                      size="sm"
                      className={`w-full justify-start ${activeSection === "metrics" ? "bg-blue-600 hover:bg-blue-700" : ""}`}
                      onClick={() => scrollToSection("metrics")}
                    >
                      <BarChart3 className="mr-2 w-4 h-4" />
                      Metrics
                    </Button>
                  </CardContent>
                </Card>

                {/* Resources Card */}
                <Card className="mt-4 shadow-lg border-gray-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Code2 className="w-5 h-5 text-purple-600" />
                      Recursos
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50"
                      asChild
                    >
                      <a
                        href="https://connect.reportei.com/tools/explorer"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FlaskConical className="mr-2 w-4 h-4" />
                        Connect Explorer
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start text-orange-600 hover:text-orange-700 hover:bg-orange-50"
                      asChild
                    >
                      <a
                        href="/Reportei-Connect.postman_collection.json"
                        download="Reportei-Connect.postman_collection.json"
                      >
                        <Download className="mr-2 w-4 h-4" />
                        Postman Collection
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
                      asChild
                    >
                      <a
                        href="https://www.loom.com/share/2d692418e459450ab02280034ba3a31c?sid=06e3646f-fb91-4352-be7a-9ae558877914"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Video className="mr-2 w-4 h-4" />
                        Vídeo Guia
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                      asChild
                    >
                      <a
                        href="https://github.com/reportei/connect-docs/tree/main"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 w-4 h-4" />
                        GitHub
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </aside>

            {/* Main Documentation Content */}
            <main className="flex-1 space-y-12">
              {/* Introduction */}
              <div id="intro" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6">Introdução</h2>
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Bem-vindo à API do Reportei Connect</CardTitle>
                      <CardDescription>
                        Uma API RESTful completa para integração de dados de métricas de redes sociais
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-600">
                        A API do Reportei Connect permite que você integre dados de diversas plataformas de redes
                        sociais e marketing diretamente em sua aplicação. Com endpoints simples e bem documentados, você
                        pode acessar métricas, criar relatórios personalizados e automatizar processos de análise de
                        dados.
                      </p>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <h4 className="font-semibold text-blue-900 mb-2">Base URL</h4>
                        <code className="text-sm bg-white px-3 py-1 rounded border">
                          https://connect.reportei.com/api
                        </code>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Pagination */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Paginação</CardTitle>
                      <CardDescription>Como trabalhar com resultados paginados</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-600">
                        Endpoints que retornam listas de recursos suportam paginação através dos parâmetros{" "}
                        <code className="bg-gray-100 px-2 py-1 rounded">page</code> e{" "}
                        <code className="bg-gray-100 px-2 py-1 rounded">per_page</code>.
                      </p>
                      <div>
                        <h4 className="font-semibold mb-2">Parâmetros de Paginação:</h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                          <li>
                            <code className="bg-gray-100 px-2 py-1 rounded">page</code> - Número da página (padrão: 1)
                          </li>
                          <li>
                            <code className="bg-gray-100 px-2 py-1 rounded">per_page</code> - Itens por página (padrão:
                            15, máximo: 100)
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Exemplo de Requisição:</h4>
                        <CodeBlock
                          language="bash"
                          code={`curl -X GET "https://connect.reportei.com/api/customers?page=2&per_page=20" \\
  -H "Authorization: Bearer YOUR_API_TOKEN"`}
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Resposta Paginada:</h4>
                        <CodeBlock
                          language="json"
                          code={`{
  "data": [...],
  "meta": {
    "current_page": 2,
    "per_page": 20,
    "total": 150,
    "total_pages": 8
  }
}`}
                        />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Response Format */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Formato de Respostas</CardTitle>
                      <CardDescription>Estrutura padrão das respostas da API</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-600">
                        Todas as respostas da API seguem um formato JSON consistente para facilitar o processamento dos
                        dados.
                      </p>
                      <div>
                        <h4 className="font-semibold mb-2">Resposta de Sucesso:</h4>
                        <CodeBlock
                          language="json"
                          code={`{
  "data": {
    "id": "uuid",
    "type": "resource_type",
    "attributes": {
      // Resource attributes
    }
  }
}`}
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Resposta de Lista:</h4>
                        <CodeBlock
                          language="json"
                          code={`{
  "data": [
    {
      "id": "uuid",
      "type": "resource_type",
      "attributes": { ... }
    }
  ],
  "meta": {
    "current_page": 1,
    "per_page": 15,
    "total": 100
  }
}`}
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Resposta de Erro:</h4>
                        <CodeBlock
                          language="json"
                          code={`{
  "error": {
    "code": "error_code",
    "message": "Human readable error message",
    "details": {
      // Additional error information
    }
  }
}`}
                        />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Error Handling */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Tratamento de Erros</CardTitle>
                      <CardDescription>Códigos de status HTTP e mensagens de erro</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-600">
                        A API utiliza códigos de status HTTP padrão para indicar o sucesso ou falha de uma requisição.
                      </p>
                      <div className="space-y-3">
                        <div className="border-l-4 border-green-500 bg-green-50 p-4 rounded">
                          <h5 className="font-semibold text-green-900">200 OK</h5>
                          <p className="text-sm text-green-700">Requisição bem-sucedida</p>
                        </div>
                        <div className="border-l-4 border-green-500 bg-green-50 p-4 rounded">
                          <h5 className="font-semibold text-green-900">201 Created</h5>
                          <p className="text-sm text-green-700">Recurso criado com sucesso</p>
                        </div>
                        <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4 rounded">
                          <h5 className="font-semibold text-yellow-900">400 Bad Request</h5>
                          <p className="text-sm text-yellow-700">Requisição inválida ou malformada</p>
                        </div>
                        <div className="border-l-4 border-red-500 bg-red-50 p-4 rounded">
                          <h5 className="font-semibold text-red-900">401 Unauthorized</h5>
                          <p className="text-sm text-red-700">Token de autenticação ausente ou inválido</p>
                        </div>
                        <div className="border-l-4 border-red-500 bg-red-50 p-4 rounded">
                          <h5 className="font-semibold text-red-900">403 Forbidden</h5>
                          <p className="text-sm text-red-700">Sem permissão para acessar o recurso</p>
                        </div>
                        <div className="border-l-4 border-red-500 bg-red-50 p-4 rounded">
                          <h5 className="font-semibold text-red-900">404 Not Found</h5>
                          <p className="text-sm text-red-700">Recurso não encontrado</p>
                        </div>
                        <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4 rounded">
                          <h5 className="font-semibold text-yellow-900">422 Unprocessable Entity</h5>
                          <p className="text-sm text-yellow-700">Validação falhou nos dados enviados</p>
                        </div>
                        <div className="border-l-4 border-orange-500 bg-orange-50 p-4 rounded">
                          <h5 className="font-semibold text-orange-900">429 Too Many Requests</h5>
                          <p className="text-sm text-orange-700">Limite de taxa excedido</p>
                        </div>
                        <div className="border-l-4 border-red-500 bg-red-50 p-4 rounded">
                          <h5 className="font-semibold text-red-900">500 Internal Server Error</h5>
                          <p className="text-sm text-red-700">Erro no servidor</p>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Exemplo de Erro:</h4>
                        <CodeBlock
                          language="json"
                          code={`{
  "error": {
    "code": "validation_error",
    "message": "The given data was invalid",
    "details": {
      "email": ["The email field is required"],
      "name": ["The name must be at least 3 characters"]
    }
  }
}`}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Authentication */}
              <div id="auth" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6">Autenticação</h2>
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Lock className="w-5 h-5 text-blue-600" />
                        Bearer Token (Merchant)
                      </CardTitle>
                      <CardDescription>Autenticação principal para a maioria dos endpoints</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-600">
                        Para autenticar requisições relacionadas à sua conta de merchant, inclua seu token de acesso no
                        cabeçalho <code className="bg-gray-100 px-2 py-1 rounded">Authorization</code>.
                      </p>
                      <CodeBlock code={`Authorization: Bearer YOUR_ACCESS_TOKEN`} />
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Lock className="w-5 h-5 text-blue-600" />
                        Customer Token
                      </CardTitle>
                      <CardDescription>Acesso a dados específicos do cliente</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-600">
                        Para acessar dados de um cliente específico, use o token gerado para ele. Este token deve ser
                        enviado no cabeçalho <code className="bg-gray-100 px-2 py-1 rounded">x-customer-token</code>,
                        juntamente com o Bearer Token.
                      </p>
                      <CodeBlock code={`x-customer-token: CUSTOMER_API_TOKEN`} />
                      <Card className="bg-amber-50 border-amber-200">
                        <CardContent className="pt-6">
                          <p className="text-sm text-gray-700 flex items-start gap-2">
                            <ExternalLink className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                            <span>
                              <strong>Importante:</strong> O customer token é gerado apenas uma vez na criação do
                              cliente. Certifique-se de armazená-lo com segurança, pois ele não pode ser recuperado
                              posteriormente.
                            </span>
                          </p>
                        </CardContent>
                      </Card>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Merchants Section */}
              <div id="merchants" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mb-8">Merchants</h2>
                <p className="text-gray-600 mb-8">
                  Gerencie as configurações do seu merchant e visualize as integrações disponíveis.
                </p>
                <div className="space-y-12">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <ExternalLink className="w-5 h-5 text-blue-600" />
                        Settings
                      </CardTitle>
                      <CardDescription>GET /merchants/settings</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-600">
                        Retorna informações sobre o seu merchant, incluindo limites de taxa (rate limiting) e a lista de
                        integrações disponíveis para conexão.
                      </p>
                      <Tabs defaultValue="response" className="mb-8">
                        <TabsList>
                          <TabsTrigger value="response">Response</TabsTrigger>
                          <TabsTrigger value="curl">cURL Example</TabsTrigger>
                        </TabsList>
                        <TabsContent value="response">
                          <CodeBlock
                            language="json"
                            code={`{
  "merchant": {
    "uuid": "c1e6c85a-6441-4107-ab36-b8bf581b40e0",
    "name": "Reportei",
    "app_url": "https://reportei.com",
    "redirect_url": "https://reportei.com",
    "created_at": "2024-09-24 17:07:26",
    "updated_at": "2024-09-24 17:07:26",
    "rate_limit_per_minute": "999",
    "rate_limit_per_second": "999",
    "total_customers": 2,
    "available_integrations": [
      {
        "name": "Instagram Business",
        "slug": "instagram_business"
      },
      {
        "name": "Facebook",
        "slug": "facebook"
      }
    ]
  }
}`}
                          />
                        </TabsContent>
                        <TabsContent value="curl">
                          <CodeBlock
                            code={`curl -s -H "Authorization: Bearer $ACCESS_TOKEN" \\
  https://connect.reportei.com/api/merchants/settings`}
                          />
                        </TabsContent>
                      </Tabs>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Customers Section */}
              <div id="customers" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mb-8">Customers</h2>
                <p className="text-gray-600 mb-8">
                  Gerencie os clientes associados ao seu merchant. Clientes representam os usuários finais que
                  utilizarão as integrações.
                </p>
                <div className="space-y-12">
                  <Card className="bg-amber-50 border-amber-200">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <ExternalLink className="w-5 h-5 text-amber-600" />
                        Período de Trial
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-700">
                        Ao criar um novo cliente, um período de trial de 7 dias é iniciado automaticamente. Durante este
                        período, o cliente pode acessar todas as funcionalidades da API. Após o término do trial, o
                        acesso será restrito (retornando erro 401 Unauthorized) até que o status de pagamento seja
                        atualizado.
                      </p>
                      <p className="text-gray-700">
                        Para remover a restrição, atualize o status de pagamento do cliente utilizando o endpoint{" "}
                        <code className="bg-white px-2 py-1 rounded">/customers/{"{uuid}"}/update-payment-status</code>.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <ExternalLink className="w-5 h-5 text-blue-600" />
                        Listar Clientes
                      </CardTitle>
                      <CardDescription>GET /customers</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        Retorna uma lista paginada de todos os clientes associados ao seu merchant.
                      </p>
                      <Tabs defaultValue="response" className="mb-8">
                        <TabsList>
                          <TabsTrigger value="response">Response</TabsTrigger>
                          <TabsTrigger value="curl">cURL Example</TabsTrigger>
                        </TabsList>
                        <TabsContent value="response">
                          <CodeBlock
                            language="json"
                            code={`{
  "data": [
    {
      "uuid": "caedbbbe-7d93-476f-b965-bf97cd7ce874",
      "name": "Reportei Customer 1",
      "created_at": "2024-09-24 17:07:34",
      "updated_at": "2024-09-24 17:07:34",
      "trial_ends_at": "2024-10-08 17:15:12",
      "is_paying": false,
      "merchant": "Reportei"
    }
  ],
  "meta": {
    "current_page": 1,
    "per_page": 15,
    "total": 2,
    "total_pages": 1
  }
}`}
                          />
                        </TabsContent>
                        <TabsContent value="curl">
                          <CodeBlock
                            code={`curl -s -H "Authorization: Bearer $ACCESS_TOKEN" \\
  https://connect.reportei.com/api/customers`}
                          />
                        </TabsContent>
                      </Tabs>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <ExternalLink className="w-5 h-5 text-blue-600" />
                        Obter Cliente
                      </CardTitle>
                      <CardDescription>GET /customers/{"{uuid}"}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        Retorna os detalhes de um cliente específico através do seu UUID.
                      </p>
                      <Tabs defaultValue="response" className="mb-8">
                        <TabsList>
                          <TabsTrigger value="response">Response</TabsTrigger>
                          <TabsTrigger value="curl">cURL Example</TabsTrigger>
                        </TabsList>
                        <TabsContent value="response">
                          <CodeBlock
                            language="json"
                            code={`{
  "customer": {
    "uuid": "caedbbbe-7d93-476f-b965-bf97cd7ce874",
    "name": "Reportei Customer 1",
    "created_at": "2024-09-24 17:07:34",
    "updated_at": "2024-09-24 17:07:34",
    "trial_ends_at": "2024-10-08 17:15:12",
    "is_paying": false,
    "merchant": "Reportei"
  }
}`}
                          />
                        </TabsContent>
                        <TabsContent value="curl">
                          <CodeBlock
                            code={`curl -s -H "Authorization: Bearer $ACCESS_TOKEN" \\
  https://connect.reportei.com/api/customers/{uuid}`}
                          />
                        </TabsContent>
                      </Tabs>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <ExternalLink className="w-5 h-5 text-green-600" />
                        Criar Cliente
                      </CardTitle>
                      <CardDescription>POST /customers</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        Cria um novo cliente associado ao seu merchant. O{" "}
                        <code className="bg-gray-100 px-2 py-1 rounded">api_token</code> gerado neste momento é crucial
                        e não será recuperado.
                      </p>
                      <Tabs defaultValue="request" className="mb-8">
                        <TabsList>
                          <TabsTrigger value="request">Request Body</TabsTrigger>
                          <TabsTrigger value="response">Response</TabsTrigger>
                          <TabsTrigger value="curl">cURL Example</TabsTrigger>
                        </TabsList>
                        <TabsContent value="request">
                          <CodeBlock
                            language="json"
                            code={`{
  "name": "Nome do Novo Cliente"
}`}
                          />
                        </TabsContent>
                        <TabsContent value="response">
                          <CodeBlock
                            language="json"
                            code={`{
  "customer": {
    "uuid": "9cdc0998-cd1c-406c-98b2-a40448486657",
    "name": "Nome do Novo Cliente",
    "created_at": "2024-10-01 17:15:12",
    "updated_at": "2024-10-01 17:15:12",
    "trial_ends_at": "2024-10-08 17:15:12",
    "is_paying": false,
    "merchant": "Reportei",
    "api_token": "GENERATED_API_TOKEN_HERE"
  }
}`}
                          />
                        </TabsContent>
                        <TabsContent value="curl">
                          <CodeBlock
                            code={`curl -s -X POST -H "Authorization: Bearer $ACCESS_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"name":"Nome do Novo Cliente"}' \\
  https://connect.reportei.com/api/customers`}
                          />
                        </TabsContent>
                      </Tabs>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <ExternalLink className="w-5 h-5 text-orange-600" />
                        Atualizar Cliente
                      </CardTitle>
                      <CardDescription>PUT /customers/{"{uuid}"}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">Atualiza o nome de um cliente existente.</p>
                      <Tabs defaultValue="request" className="mb-8">
                        <TabsList>
                          <TabsTrigger value="request">Request Body</TabsTrigger>
                          <TabsTrigger value="curl">cURL Example</TabsTrigger>
                        </TabsList>
                        <TabsContent value="request">
                          <CodeBlock
                            language="json"
                            code={`{
  "name": "Novo Nome do Cliente"
}`}
                          />
                        </TabsContent>
                        <TabsContent value="curl">
                          <CodeBlock
                            code={`curl -s -X PUT -H "Authorization: Bearer $ACCESS_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"name":"Novo Nome do Cliente"}' \\
  https://connect.reportei.com/api/customers/{uuid}`}
                          />
                        </TabsContent>
                      </Tabs>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <ExternalLink className="w-5 h-5 text-red-600" />
                        Deletar Cliente
                      </CardTitle>
                      <CardDescription>DELETE /customers/{"{uuid}"}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">Remove um cliente e todas as suas integrações associadas.</p>
                      <Tabs defaultValue="response" className="mb-8">
                        <TabsList>
                          <TabsTrigger value="response">Response</TabsTrigger>
                          <TabsTrigger value="curl">cURL Example</TabsTrigger>
                        </TabsList>
                        <TabsContent value="response">
                          <CodeBlock
                            language="json"
                            code={`{
  "success": true,
  "message": "Record successfully removed"
}`}
                          />
                        </TabsContent>
                        <TabsContent value="curl">
                          <CodeBlock
                            code={`curl -s -X DELETE -H "Authorization: Bearer $ACCESS_TOKEN" \\
  https://connect.reportei.com/api/customers/{uuid}`}
                          />
                        </TabsContent>
                      </Tabs>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <ExternalLink className="w-5 h-5 text-green-600" />
                        Atualizar Status de Pagamento
                      </CardTitle>
                      <CardDescription>POST /customers/{"{uuid}"}/update-payment-status</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        Marca um cliente como pagante ou não pagante, afetando o acesso a recursos após o período de
                        trial.
                      </p>
                      <Tabs defaultValue="request" className="mb-8">
                        <TabsList>
                          <TabsTrigger value="request">Request Body</TabsTrigger>
                          <TabsTrigger value="response">Response</TabsTrigger>
                          <TabsTrigger value="curl">cURL Example</TabsTrigger>
                        </TabsList>
                        <TabsContent value="request">
                          <CodeBlock
                            language="json"
                            code={`{
  "is_paying": true
}`}
                          />
                        </TabsContent>
                        <TabsContent value="response">
                          <CodeBlock
                            language="json"
                            code={`{
  "success": true,
  "message": "Customer status updated successfully"
}`}
                          />
                        </TabsContent>
                        <TabsContent value="curl">
                          <CodeBlock
                            code={`curl -s -X POST -H "Authorization: Bearer $ACCESS_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"is_paying":true}' \\
  https://connect.reportei.com/api/customers/{uuid}/update-payment-status`}
                          />
                        </TabsContent>
                      </Tabs>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <ExternalLink className="w-5 h-5 text-blue-600" />
                        Configurações do Cliente
                      </CardTitle>
                      <CardDescription>GET /customers/settings</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        Retorna as configurações e integrações ativas de um cliente específico, utilizando o{" "}
                        <code className="bg-gray-100 px-2 py-1 rounded">x-customer-token</code> no header.
                      </p>
                      <Tabs defaultValue="response" className="mb-8">
                        <TabsList>
                          <TabsTrigger value="response">Response</TabsTrigger>
                          <TabsTrigger value="curl">cURL Example</TabsTrigger>
                        </TabsList>
                        <TabsContent value="response">
                          <CodeBlock
                            language="json"
                            code={`{
  "customer": {
    "uuid": "073c1e15-94d0-49b3-9861-a0e9b7ffb06c",
    "name": "Reportei Customer 1",
    "created_at": "2024-09-24 19:06:08",
    "updated_at": "2024-09-24 19:06:08",
    "trial_ends_at": "2024-10-08 17:15:12",
    "is_paying": false,
    "merchant": "Reportei",
    "integrations": [
      {
        "uuid": "6110b666-0327-4a81-b48e-9feb34d72f78",
        "integration": "Instagram Business",
        "name": "reportei",
        "slug": "instagram_business",
        "status": "active"
      }
    ]
  }
}`}
                          />
                        </TabsContent>
                        <TabsContent value="curl">
                          <CodeBlock
                            code={`curl -s -H "Authorization: Bearer $ACCESS_TOKEN" \\
  -H "x-customer-token: $CUSTOMER_TOKEN" \\
  https://connect.reportei.com/api/customers/settings`}
                          />
                        </TabsContent>
                      </Tabs>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Customer Integrations Section */}
              <div id="integrations" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mb-8">Customer Integrations</h2>
                <p className="text-gray-600 mb-8">
                  Gerencie as conexões das plataformas de redes sociais e marketing dos seus clientes. Utilize o
                  <code className="bg-gray-100 px-2 py-1 rounded">x-customer-token</code> para acessar estes endpoints.
                </p>
                <div className="space-y-12">
                  <Card className="bg-blue-50 border-blue-200">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <ExternalLink className="w-5 h-5 text-blue-600" />
                        Status da Integração
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-700">
                        Cada integração de cliente possui um status que indica sua validade e conexão. Verifique o campo{" "}
                        <code className="bg-white px-2 py-1 rounded">status</code> para entender o estado da conexão.
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <Badge variant="outline">active</Badge>
                        <Badge variant="outline">expired</Badge>
                        <Badge variant="outline">revoked</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <ExternalLink className="w-5 h-5 text-green-600" />
                        Criar Sessão de Integração
                      </CardTitle>
                      <CardDescription>POST /customer-integrations/session</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        Inicia um fluxo para que o cliente possa conectar novas contas de redes sociais ou gerenciar as
                        existentes. Retorna um link único para a interface de integração.
                      </p>
                      <Tabs defaultValue="request" className="mb-8">
                        <TabsList>
                          <TabsTrigger value="request">Request Body</TabsTrigger>
                          <TabsTrigger value="response">Response</TabsTrigger>
                          <TabsTrigger value="curl">cURL Example</TabsTrigger>
                        </TabsList>
                        <TabsContent value="request">
                          <CodeBlock
                            language="json"
                            code={`{
  "redirect_url": "https://sua-aplicacao.com/dashboard"
}`}
                          />
                        </TabsContent>
                        <TabsContent value="response">
                          <CodeBlock
                            language="json"
                            code={`{
  "integration_session": {
    "session_uuid": "679e77d9-b270-4fb9-9f2c-27bcaebddc52",
    "session_link": "http://connect.reportei.com/customer-integrations/session/...",
    "expires_at": "2024-10-02T06:14:50.898761Z",
    "merchant": "Reportei",
    "merchant_uuid": "c1e6c85a-6441-4107-ab36-b8bf581b40e0",
    "customer": "Reportei Customer",
    "customer_uuid": "073c1e15-94d0-49b3-9861-a0e9b7ffb06c",
    "redirect_url": "https://sua-aplicacao.com/dashboard"
  }
}`}
                          />
                        </TabsContent>
                        <TabsContent value="curl">
                          <CodeBlock
                            code={`curl -s -X POST -H "Authorization: Bearer $ACCESS_TOKEN" \\
  -H "x-customer-token: $CUSTOMER_TOKEN" \\
  https://connect.reportei.com/api/customer-integrations/session`}
                          />
                        </TabsContent>
                      </Tabs>
                      <Card className="bg-amber-50 border-amber-200">
                        <CardContent className="pt-6">
                          <p className="text-sm text-gray-700 flex items-start gap-2">
                            <ExternalLink className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                            <span>
                              <strong>Sessão Expirável:</strong> O link da sessão é válido por 5 minutos. Acesse o{" "}
                              <code className="bg-white px-2 py-1 rounded">session_link</code> para iniciar o processo
                              de integração do cliente.
                            </span>
                          </p>
                        </CardContent>
                      </Card>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <ExternalLink className="w-5 h-5 text-blue-600" />
                        Obter Integração
                      </CardTitle>
                      <CardDescription>GET /customer-integrations/{"{uuid}"}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">Retorna detalhes de uma integração específica do cliente.</p>
                      <Tabs defaultValue="response" className="mb-8">
                        <TabsList>
                          <TabsTrigger value="response">Response</TabsTrigger>
                          <TabsTrigger value="curl">cURL Example</TabsTrigger>
                        </TabsList>
                        <TabsContent value="response">
                          <CodeBlock
                            language="json"
                            code={`{
  "customer_integration": {
    "uuid": "4addc0da-8583-4dbb-a0e9-c7e2e8470f50",
    "source_name": "reportei",
    "status": "active",
    "created_at": "2024-09-24 17:08:08",
    "updated_at": "2024-09-24 17:08:08",
    "integration": {
      "name": "Instagram Business",
      "slug": "instagram_business"
    }
  }
}`}
                          />
                        </TabsContent>
                        <TabsContent value="curl">
                          <CodeBlock
                            code={`curl -s -H "Authorization: Bearer $ACCESS_TOKEN" \\
  -H "x-customer-token: $CUSTOMER_TOKEN" \\
  https://connect.reportei.com/api/customer-integrations/{uuid}`}
                          />
                        </TabsContent>
                      </Tabs>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <ExternalLink className="w-5 h-5 text-red-600" />
                        Deletar Integração
                      </CardTitle>
                      <CardDescription>
                        DELETE /customer-integrations/{"{uuid}"}?session_id={"{uuid}"}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        Remove uma integração específica do cliente. Requer o UUID da integração e o UUID de uma sessão
                        ativa.
                      </p>
                      <Tabs defaultValue="response" className="mb-8">
                        <TabsList>
                          <TabsTrigger value="response">Response</TabsTrigger>
                          <TabsTrigger value="curl">cURL Example</TabsTrigger>
                        </TabsList>
                        <TabsContent value="response">
                          <CodeBlock
                            language="json"
                            code={`{
  "success": true,
  "message": "Record successfully removed"
}`}
                          />
                        </TabsContent>
                        <TabsContent value="curl">
                          <CodeBlock
                            code={`curl -s -X DELETE -H "Authorization: Bearer $ACCESS_TOKEN" \\
  https://connect.reportei.com/api/customer-integrations/{uuid}?session_id={session_uuid}`}
                          />
                        </TabsContent>
                      </Tabs>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Metrics Section */}
              <div id="metrics" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mb-8">Metrics</h2>
                <p className="text-gray-600 mb-8">
                  Consulte métricas de integrações conectadas. Utilize o{" "}
                  <a
                    href="https://connect.reportei.com/tools/explorer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 underline font-semibold"
                  >
                    Connect Explorer
                  </a>
                  {" "}para testar a coleta de dados e visualizar as métricas disponíveis para cada integração, ou use os endpoints abaixo para obter os dados programaticamente.
                </p>

                {/* Connect Explorer Card */}
                <Card className="bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200 mb-8">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-emerald-900">
                      <FlaskConical className="w-5 h-5" />
                      Connect Explorer
                    </CardTitle>
                    <CardDescription>
                      Teste consultas de métricas e explore os dados disponíveis diretamente no navegador
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-gray-700">
                      O <strong>Connect Explorer</strong> é uma ferramenta interativa que permite validar seus tokens,
                      explorar as métricas disponíveis por integração e testar consultas à API — tudo sem escrever
                      código. Ideal para descobrir quais métricas e dimensões estão disponíveis antes de implementar a
                      integração.
                    </p>

                    <div className="space-y-6">
                      {/* Step 1 */}
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
                            1
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 mb-2">Valide seus tokens</h4>
                            <p className="text-sm text-gray-700 mb-3">
                              Acesse o Explorer, insira seu Bearer Token (merchant) e x-customer-token (customer) para
                              validar a conexão e carregar as integrações disponíveis.
                            </p>
                            <img
                              src="/images/explorer/explorer_validate_tokens.png"
                              alt="Validação de tokens no Connect Explorer"
                              className="rounded-lg border shadow-sm max-w-md"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Step 2 */}
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
                            2
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 mb-2">Explore métricas disponíveis</h4>
                            <p className="text-sm text-gray-700 mb-3">
                              Selecione uma integração e navegue pelo catálogo completo de métricas, organizadas por tipo
                              (Numbers, Charts, Tables). Customize métricas e dimensões conforme necessário.
                            </p>
                            <img
                              src="/images/explorer/explorer_metrics_catalog.png"
                              alt="Catálogo de métricas no Connect Explorer"
                              className="rounded-lg border shadow-sm max-w-md"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Step 3 */}
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
                            3
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 mb-2">Teste a consulta e copie o payload</h4>
                            <p className="text-sm text-gray-700 mb-3">
                              Defina o período desejado, execute a consulta e visualize a resposta da API em tempo real.
                              Copie o payload gerado para usar diretamente nos endpoints{" "}
                              <code className="bg-white px-2 py-1 rounded">/metrics/get-data</code> ou{" "}
                              <code className="bg-white px-2 py-1 rounded">/metrics/get-data-async</code>.
                            </p>
                            <img
                              src="/images/explorer/explorer_test_query.png"
                              alt="Teste de consulta no Connect Explorer"
                              className="rounded-lg border shadow-sm max-w-md"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        className="bg-emerald-600 hover:bg-emerald-700 text-white"
                        asChild
                      >
                        <a
                          href="https://connect.reportei.com/tools/explorer"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FlaskConical className="mr-2 w-4 h-4" />
                          Acessar Connect Explorer
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code className="w-5 h-5 text-purple-600" />
                      Estrutura de Métricas
                    </CardTitle>
                    <CardDescription>Entenda como construir payloads de métricas personalizados</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600">
                      Cada métrica no array <code className="bg-gray-100 px-2 py-1 rounded">metrics</code> possui a
                      seguinte estrutura:
                    </p>
                    <div className="space-y-3">
                      <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded">
                        <h5 className="font-semibold text-blue-900 mb-1">
                          <code className="bg-white px-2 py-1 rounded">id</code>
                        </h5>
                        <p className="text-sm text-blue-700">
                          Identificador único para a métrica. Use qualquer UUID ou string única.
                        </p>
                      </div>
                      <div className="border-l-4 border-purple-500 bg-purple-50 p-4 rounded">
                        <h5 className="font-semibold text-purple-900 mb-1">
                          <code className="bg-white px-2 py-1 rounded">reference_key</code>
                        </h5>
                        <p className="text-sm text-purple-700">
                          Nome geral da métrica, ex:{" "}
                          <code className="bg-white px-2 py-1 rounded">ig:story_replies</code> (respostas de stories do
                          Instagram).
                        </p>
                      </div>
                      <div className="border-l-4 border-green-500 bg-green-50 p-4 rounded">
                        <h5 className="font-semibold text-green-900 mb-1">
                          <code className="bg-white px-2 py-1 rounded">metrics</code>
                        </h5>
                        <p className="text-sm text-green-700">
                          Array com os valores específicos de métricas solicitados, ex:{" "}
                          <code className="bg-white px-2 py-1 rounded">["replies"]</code>.
                        </p>
                      </div>
                      <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4 rounded">
                        <h5 className="font-semibold text-yellow-900 mb-1">
                          <code className="bg-white px-2 py-1 rounded">dimensions</code>{" "}
                          <Badge variant="outline" className="ml-2">
                            Opcional
                          </Badge>
                        </h5>
                        <p className="text-sm text-yellow-700">
                          Detalhamento adicional da métrica, ex:{" "}
                          <code className="bg-white px-2 py-1 rounded">["stories", "date", "device"]</code>.
                        </p>
                      </div>
                      <div className="border-l-4 border-orange-500 bg-orange-50 p-4 rounded">
                        <h5 className="font-semibold text-orange-900 mb-1">
                          <code className="bg-white px-2 py-1 rounded">component</code>
                        </h5>
                        <p className="text-sm text-orange-700 mb-2">
                          Tipo da métrica, que altera a estrutura da resposta final:
                        </p>
                        <ul className="text-sm text-orange-700 space-y-1 ml-4">
                          <li>
                            • <code className="bg-white px-2 py-1 rounded">number_v1</code> - Retorna um único valor
                            numérico
                          </li>
                          <li>
                            • <code className="bg-white px-2 py-1 rounded">datatable_v1</code> - Retorna dados tabulares
                          </li>
                          <li>
                            • <code className="bg-white px-2 py-1 rounded">chart_v1</code> - Retorna dados formatados
                            para gráficos
                          </li>
                        </ul>
                      </div>
                      <div className="border-l-4 border-red-500 bg-red-50 p-4 rounded">
                        <h5 className="font-semibold text-red-900 mb-1">
                          <code className="bg-white px-2 py-1 rounded">entity_id</code> e{" "}
                          <code className="bg-white px-2 py-1 rounded">entity_type</code>{" "}
                          <Badge variant="outline" className="ml-2">
                            Opcional
                          </Badge>
                        </h5>
                        <p className="text-sm text-red-700">
                          ID e tipo da entidade para filtrar resultados (ad, campaign ou adset).
                        </p>
                      </div>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
                      <p className="text-sm text-gray-700">
                        <strong>Importante:</strong> Dependendo da rede da integração do cliente, algumas combinações de
                        métricas e dimensões podem não ser compatíveis.
                      </p>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                      <h5 className="font-semibold text-blue-900 mb-2">Métricas e Dimensões Disponíveis</h5>
                      <p className="text-sm text-gray-700 mb-3">
                        Se você não quiser copiar o payload de um dashboard existente do Reportei, há uma lista completa
                        de métricas e dimensões disponíveis por integração no GitHub:
                      </p>
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href="https://github.com/reportei/connect-docs/blob/master/payloads"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Github className="h-4 w-4" />
                          Ver Payloads no GitHub
                        </a>
                      </Button>
                      <p className="text-sm text-gray-600 mt-3">
                        Cada pasta em <code className="bg-white px-2 py-1 rounded">/payloads</code> contém dois arquivos
                        JSON:
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1 ml-4 mt-2">
                        <li>
                          • <code className="bg-white px-2 py-1 rounded">metrics.json</code> - Métricas predefinidas com
                          componentes específicos
                        </li>
                        <li>
                          • <code className="bg-white px-2 py-1 rounded">setup.json</code> - Métricas e dimensões
                          disponíveis para construir seus próprios payloads
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ExternalLink className="w-5 h-5 text-blue-600" />
                      Obter Dados de Métricas
                    </CardTitle>
                    <CardDescription>POST /metrics/get-data</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-gray-600">
                      Retorna um objeto com os valores das métricas solicitadas de uma integração de cliente.
                    </p>

                    <div>
                      <h4 className="font-semibold mb-3">Parâmetros Obrigatórios:</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>
                          <code className="bg-gray-100 px-2 py-1 rounded">customer_integration</code> - UUID da
                          integração do cliente
                        </li>
                        <li>
                          <code className="bg-gray-100 px-2 py-1 rounded">start</code> - Data de início da análise (ISO
                          8601)
                        </li>
                        <li>
                          <code className="bg-gray-100 px-2 py-1 rounded">end</code> - Data de fim da análise (ISO 8601)
                        </li>
                        <li>
                          <code className="bg-gray-100 px-2 py-1 rounded">metrics</code> - Array contendo a estrutura de
                          métricas
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Parâmetros Opcionais:</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>
                          <code className="bg-gray-100 px-2 py-1 rounded">comparison_start</code> - Data de início da
                          comparação (ISO 8601)
                        </li>
                        <li>
                          <code className="bg-gray-100 px-2 py-1 rounded">comparison_end</code> - Data de fim da
                          comparação (ISO 8601)
                        </li>
                      </ul>
                    </div>

                    <Tabs defaultValue="request" className="mb-8">
                      <TabsList>
                        <TabsTrigger value="request">Request Body</TabsTrigger>
                        <TabsTrigger value="response">Response</TabsTrigger>
                        <TabsTrigger value="curl">cURL Example</TabsTrigger>
                      </TabsList>
                      <TabsContent value="request">
                        <p className="text-sm text-gray-600 mb-3">
                          Este exemplo inclui 3 métricas diferentes:{" "}
                          <code className="bg-gray-100 px-2 py-1 rounded">ig:story_replies</code> (number_v1),{" "}
                          <code className="bg-gray-100 px-2 py-1 rounded">ig:followers_gender</code> (chart_v1), e{" "}
                          <code className="bg-gray-100 px-2 py-1 rounded">ig:clicks_breakdown</code> (datatable_v1).
                        </p>
                        <CodeBlock
                          language="json"
                          code={`{
  "customer_integration": "4addc0da-8583-4dbb-a0e9-c7e2e8470f50",
  "start": "2024-01-01",
  "end": "2024-09-01",
  "metrics": [
    {
      "id": "f35a44ce-dac5-4188-aace-5c44a8952176",
      "reference_key": "ig:story_replies",
      "component": "number_v1",
      "metrics": ["replies"],
      "dimensions": ["stories"]
    },
    {
      "id": "3051ed66-a05c-462a-aece-e1d900e78b02",
      "reference_key": "ig:followers_gender",
      "component": "chart_v1",
      "metrics": ["followers"],
      "dimensions": ["gender"]
    },
    {
      "id": "b3a949ac-f6ae-4bd1-bb90-1e8e0cbe8ed5",
      "reference_key": "ig:clicks_breakdown",
      "component": "datatable_v1",
      "metrics": ["count", "ctr"],
      "dimensions": ["clicks_breakdown"]
    }
  ]
}`}
                        />
                      </TabsContent>
                      <TabsContent value="response">
                        <CodeBlock
                          language="json"
                          code={`{
  "f35a44ce-dac5-4188-aace-5c44a8952176": {
    "values": 55645,
    "comparison": {
      "values": null,
      "difference": null,
      "absoluteDifference": null
    }
  },
  "3051ed66-a05c-462a-aece-e1d900e78b02": {
    "labels": ["Male", "Female", "Unknown"],
    "values": [
      {
        "data": [12628, 8815, 2745]
      }
    ]
  },
  "b3a949ac-f6ae-4bd1-bb90-1e8e0cbe8ed5": {
    "values": [
      ["Email", 2, 0.0002254283137962128],
      ["Websites", 428, 0.04824165915238954],
      ["Total", 430, 0.048467087466185756]
    ]
  }
}`}
                        />
                      </TabsContent>
                      <TabsContent value="curl">
                        <CodeBlock
                          code={`curl -X POST https://connect.reportei.com/api/metrics/get-data \\
  -H "Authorization: Bearer $ACCESS_TOKEN" \\
  -H "x-customer-token: $CUSTOMER_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "customer_integration": "4addc0da-8583-4dbb-a0e9-c7e2e8470f50",
    "start": "2024-01-01",
    "end": "2024-09-01",
    "metrics": [
      {
        "id": "f35a44ce-dac5-4188-aace-5c44a8952176",
        "reference_key": "ig:story_replies",
        "component": "number_v1",
        "metrics": ["replies"],
        "dimensions": ["stories"]
      },
      {
        "id": "3051ed66-a05c-462a-aece-e1d900e78b02",
        "reference_key": "ig:followers_gender",
        "component": "chart_v1",
        "metrics": ["followers"],
        "dimensions": ["gender"]
      },
      {
        "id": "b3a949ac-f6ae-4bd1-bb90-1e8e0cbe8ed5",
        "reference_key": "ig:clicks_breakdown",
        "component": "datatable_v1",
        "metrics": ["count", "ctr"],
        "dimensions": ["clicks_breakdown"]
      }
    ]
  }'`}
                        />
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>

                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ExternalLink className="w-5 h-5 text-green-600" />
                      Obter Dados de Métricas (Assíncrono)
                    </CardTitle>
                    <CardDescription>POST /metrics/get-data-async</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-gray-600">
                      Inicia um processo para coletar os dados de métricas solicitados e envia os resultados de forma
                      assíncrona para a <code className="bg-gray-100 px-2 py-1 rounded">metrics_webhook_url</code>{" "}
                      fornecida.
                    </p>

                    <div>
                      <h4 className="font-semibold mb-3">Parâmetros Obrigatórios:</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>
                          <code className="bg-gray-100 px-2 py-1 rounded">metrics_webhook_url</code> - URL que receberá
                          o payload de métricas
                        </li>
                        <li>
                          <code className="bg-gray-100 px-2 py-1 rounded">customer_integration</code> - UUID da
                          integração do cliente
                        </li>
                        <li>
                          <code className="bg-gray-100 px-2 py-1 rounded">start</code> - Data de início da análise (ISO
                          8601)
                        </li>
                        <li>
                          <code className="bg-gray-100 px-2 py-1 rounded">end</code> - Data de fim da análise (ISO 8601)
                        </li>
                        <li>
                          <code className="bg-gray-100 px-2 py-1 rounded">metrics</code> - Array contendo a estrutura de
                          métricas (veja o endpoint{" "}
                          <a href="#metrics" className="text-blue-600 hover:text-blue-700 underline">
                            Get metrics data
                          </a>{" "}
                          para mais informações)
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Parâmetros Opcionais:</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>
                          <code className="bg-gray-100 px-2 py-1 rounded">comparison_start</code> - Data de início da
                          comparação (ISO 8601)
                        </li>
                        <li>
                          <code className="bg-gray-100 px-2 py-1 rounded">comparison_end</code> - Data de fim da
                          comparação (ISO 8601)
                        </li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <p className="text-sm text-gray-700">
                        <strong>Nota:</strong> A estrutura do corpo da requisição é idêntica ao endpoint{" "}
                        <a href="#metrics" className="text-blue-600 hover:text-blue-700 underline">
                          Get metrics data
                        </a>
                        . Da mesma forma, o payload enviado para a{" "}
                        <code className="bg-white px-2 py-1 rounded">metrics_webhook_url</code> seguirá o mesmo formato
                        da resposta do endpoint Get metrics data.
                      </p>
                    </div>

                    <Tabs defaultValue="request" className="mb-8">
                      <TabsList>
                        <TabsTrigger value="request">Request Body</TabsTrigger>
                        <TabsTrigger value="response">Response</TabsTrigger>
                        <TabsTrigger value="curl">cURL Example</TabsTrigger>
                      </TabsList>
                      <TabsContent value="request">
                        <CodeBlock
                          language="json"
                          code={`{
  "metrics_webhook_url": "https://sua-aplicacao.com/webhook/metrics",
  "customer_integration": "4addc0da-8583-4dbb-a0e9-c7e2e8470f50",
  "start": "2024-01-01",
  "end": "2024-09-01",
  "metrics": [
    {
      "id": "f35a44ce-dac5-4188-aace-5c44a8952176",
      "reference_key": "ig:story_replies",
      "component": "number_v1",
      "metrics": ["replies"],
      "dimensions": ["stories"]
    },
    {
      "id": "3051ed66-a05c-462a-aece-e1d900e78b02",
      "reference_key": "ig:followers_gender",
      "component": "chart_v1",
      "metrics": ["followers"],
      "dimensions": ["gender"]
    },
    {
      "id": "b3a949ac-f6ae-4bd1-bb90-1e8e0cbe8ed5",
      "reference_key": "ig:clicks_breakdown",
      "component": "datatable_v1",
      "metrics": ["count", "ctr"],
      "dimensions": ["clicks_breakdown"]
    }
  ]
}`}
                        />
                      </TabsContent>
                      <TabsContent value="response">
                        <p className="text-sm text-gray-600 mb-3">
                          Este endpoint retorna <code className="bg-gray-100 px-2 py-1 rounded">200 OK</code> assim que
                          o processo de coleta de métricas é iniciado. Após as métricas serem coletadas, o payload será
                          enviado para a URL do webhook fornecida.
                        </p>
                        <CodeBlock
                          language="json"
                          code={`{
  "success": true,
  "message": "Metrics data collection started"
}`}
                        />
                      </TabsContent>
                      <TabsContent value="curl">
                        <CodeBlock
                          code={`curl -X POST https://connect.reportei.com/api/metrics/get-data-async \\
  -H "Authorization: Bearer $ACCESS_TOKEN" \\
  -H "x-customer-token: $CUSTOMER_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "metrics_webhook_url": "https://sua-aplicacao.com/webhook/metrics",
    "customer_integration": "4addc0da-8583-4dbb-a0e9-c7e2e8470f50",
    "start": "2024-01-01",
    "end": "2024-09-01",
    "metrics": [
      {
        "id": "f35a44ce-dac5-4188-aace-5c44a8952176",
        "reference_key": "ig:story_replies",
        "component": "number_v1",
        "metrics": ["replies"],
        "dimensions": ["stories"]
      },
      {
        "id": "3051ed66-a05c-462a-aece-e1d900e78b02",
        "reference_key": "ig:followers_gender",
        "component": "chart_v1",
        "metrics": ["followers"],
        "dimensions": ["gender"]
      },
      {
        "id": "b3a949ac-f6ae-4bd1-bb90-1e8e0cbe8ed5",
        "reference_key": "ig:clicks_breakdown",
        "component": "datatable_v1",
        "metrics": ["count", "ctr"],
        "dimensions": ["clicks_breakdown"]
      }
    ]
  }'`}
                        />
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </div>

              {/* Available Integrations Section */}
              <div id="available-integrations" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mb-8">Integrações Disponíveis</h2>
                <p className="text-gray-600 mb-8">
                  Explore as diversas plataformas de marketing e redes sociais que podem ser integradas com a API do
                  Reportei Connect.
                </p>

                <Card className="bg-blue-50 border-blue-200 mb-8">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-900">
                      <Database className="w-5 h-5" />
                      Como Usar as Integrações
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-gray-700">
                    <p>
                      1. <strong>Conecte a integração:</strong> Use o endpoint de Customer Integrations para criar uma
                      sessão e conectar a conta do cliente
                    </p>
                    <p>
                      2. <strong>Explore as métricas:</strong> Use o{" "}
                      <a
                        href="https://connect.reportei.com/tools/explorer"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 underline"
                      >
                        Connect Explorer
                      </a>
                      {" "}para testar a coleta e ver métricas disponíveis, ou copie payloads diretamente do Reportei
                      Application (veja a seção Metrics acima)
                    </p>
                    <p>
                      3. <strong>Consulte os dados:</strong> Use os endpoints{" "}
                      <code className="bg-white px-2 py-1 rounded">/metrics/get-data</code> ou{" "}
                      <code className="bg-white px-2 py-1 rounded">/metrics/get-data-async</code> com o payload copiado
                    </p>
                    <p className="pt-2 border-t border-blue-200">
                      <strong>Documentação completa:</strong> Para ver todas as métricas e dimensões disponíveis para
                      cada integração, consulte o{" "}
                      <a
                        href="https://github.com/reportei/reportei-connect-api"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 underline"
                      >
                        repositório no GitHub
                      </a>
                      .
                    </p>
                  </CardContent>
                </Card>

                {/* GitHub Reference */}
                <Card className="bg-gradient-to-br from-gray-900 to-gray-800 text-white border-0 mt-8">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code2 className="w-5 h-5" />
                      Documentação Completa no GitHub
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      Acesse o repositório para ver todos os payloads JSON disponíveis
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-gray-300">
                      Para cada integração, você encontrará dois arquivos no repositório:
                    </p>
                    <ul className="text-sm text-gray-300 space-y-2 ml-4">
                      <li>
                        • <code className="bg-gray-700 px-2 py-1 rounded">metrics.json</code> - Métricas predefinidas
                        prontas para uso
                      </li>
                      <li>
                        • <code className="bg-gray-700 px-2 py-1 rounded">setup.json</code> - Todas as métricas e
                        dimensões disponíveis para construir payloads customizados
                      </li>
                    </ul>
                    <Button className="bg-white text-gray-900 hover:bg-gray-100">
                      <a
                        href="https://github.com/reportei/connect-docs/blob/master/payloads"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Code2 className="h-4 w-4" />
                        Ver Repositório no GitHub
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </main>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
