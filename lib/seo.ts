import type { Metadata } from "next"

export const SITE_URL = "https://lp.connect.reportei.com"
export const SITE_NAME = "Reportei Connect"
export const SIGNUP_URL = "https://app.connect.reportei.com/signup"
export const OG_IMAGE = { url: "/og.png", width: 1200, height: 630, alt: "Reportei Connect: dados de 50 plataformas em uma API" }

// Next replaces openGraph and twitter wholesale when a page sets them, so every page builds all three here.
export function pageMetadata({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: SITE_NAME,
      url: path,
      title,
      description,
      images: [OG_IMAGE],
    },
    twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE.url] },
  }
}
