import { withBase } from "@/lib/base-path"
import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import { Suspense } from "react"
import "@/app/globals.css"
import { GoogleTagManager, GoogleTagManagerNoScript, SignupCampaignParams } from "@/components/tracking"
import { LOCALE_INFO, type Locale } from "@/lib/i18n"
import { getMessages } from "@/lib/messages"
import { INTEGRATIONS } from "@/lib/integrations"
import { SITE_NAME } from "@/lib/seo"

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans", display: "swap" })

// Each language is its own root layout (a route group per locale), which is what lets <html lang> differ.
// Pages set their own canonical through pageMetadata; the layout only holds what every page shares.
export function rootMetadata(locale: Locale): Metadata {
  const t = getMessages(locale).meta
  const image = { url: "https://reportei.com/connect/og.png", width: 1200, height: 630, alt: t.ogImageAlt }
  return {
    metadataBase: new URL("https://reportei.com"),
    title: t.homeTitle(INTEGRATIONS.length),
    description: t.homeDescription(INTEGRATIONS.length),
    // Same Reportei mark the Connect app uses, so the tab looks the same on both.
    icons: {
      icon: [
        { url: withBase("/favicons/favicon-32x32.png"), sizes: "32x32", type: "image/png" },
        { url: withBase("/favicons/favicon-16x16.png"), sizes: "16x16", type: "image/png" },
        { url: withBase("/favicon.ico") },
      ],
      apple: { url: withBase("/favicons/apple-touch-icon.png"), sizes: "180x180" },
      other: [{ rel: "mask-icon", url: withBase("/favicons/safari-pinned-tab.svg"), color: "#2f64e0" }],
    },
    openGraph: { type: "website", locale: LOCALE_INFO[locale].og, siteName: SITE_NAME, images: [image] },
    twitter: { card: "summary_large_image", images: [image.url] },
  }
}

export function RootDocument({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return (
    <html lang={LOCALE_INFO[locale].hreflang}>
      <body className={`${dmSans.variable} font-sans`}>
        <GoogleTagManagerNoScript />
        <Suspense fallback={null}>{children}</Suspense>
        <GoogleTagManager />
        <SignupCampaignParams />
      </body>
    </html>
  )
}
