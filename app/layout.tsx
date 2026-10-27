import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"
import { GoogleTagManager, GoogleTagManagerNoScript, SignupCampaignParams } from "@/components/tracking"
import { OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo"

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans", display: "swap" })

// Pages set their own canonical through pageMetadata; the layout only holds what every page shares.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
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
  openGraph: { type: "website", locale: "pt_BR", siteName: SITE_NAME, images: [OG_IMAGE] },
  twitter: { card: "summary_large_image", images: [OG_IMAGE.url] },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${dmSans.variable} font-sans`}>
        <GoogleTagManagerNoScript />
        <Suspense fallback={null}>{children}</Suspense>
        <GoogleTagManager />
        <SignupCampaignParams />
      </body>
    </html>
  )
}
