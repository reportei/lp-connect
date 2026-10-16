import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans", display: "swap" })

export const metadata: Metadata = {
  title: "Reportei Connect | Dados de 50 plataformas em uma API",
  description:
    "Conecte as contas de marketing, CRM e e-commerce dos seus clientes e acesse as métricas de 50 plataformas por uma única API.",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${dmSans.variable} font-sans`}>
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
