import type React from "react"
import { pageMetadata } from "@/lib/seo"

// The official docs moved to developers.reportei.com (every link on the LP points there). This older copy stays up for
// the lp.connect.reportei.com/documentacao redirect, but names that address as canonical so the two don't compete.
export const metadata = pageMetadata({
  title: "Documentação da API | Reportei Connect",
  description: "Autenticação, clientes, conexões e consulta de métricas na API do Reportei Connect.",
  path: "/documentacao",
  canonical: "https://developers.reportei.com/connect",
})

export default function DocumentacaoLayout({ children }: { children: React.ReactNode }) {
  return children
}
