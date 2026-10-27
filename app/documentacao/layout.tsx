import type React from "react"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Documentação da API | Reportei Connect",
  description: "Autenticação, clientes, conexões e consulta de métricas na API do Reportei Connect.",
  path: "/documentacao",
})

export default function DocumentacaoLayout({ children }: { children: React.ReactNode }) {
  return children
}
