import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Reportei Connect - Integração de Dados de Marketing",
  description:
    "Conecte mais de 25 redes de marketing em seu sistema sem desenvolvimento complexo. Google Ads, Meta Ads, LinkedIn Ads e muito mais.",
  generator: "v0.app",
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
      <body className="font-sans">
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
