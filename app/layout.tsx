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
  // Same Reportei mark the Connect app uses, so the tab looks the same on both.
  icons: {
    icon: [
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: { url: "/favicons/apple-touch-icon.png", sizes: "180x180" },
    other: [{ rel: "mask-icon", url: "/favicons/safari-pinned-tab.svg", color: "#2f64e0" }],
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
