import type React from "react"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Documentação da API | Reportei Connect",
  description: "Autenticação, clientes, conexões e consulta de métricas na API do Reportei Connect.",
  path: "/documentacao",
})

// Header and footer live here, not in the page: the page is a client component and would ship every language.
export default function DocumentacaoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-gray-50">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
