import type { Metadata } from "next"

// Public address of the LP. The pages live under reportei.com to inherit the domain's authority.
export const SITE_URL = "https://reportei.com/connect"
export const SITE_NAME = "Reportei Connect"
export const SIGNUP_URL = "https://app.connect.reportei.com/signup"
export const OG_IMAGE = { url: `${SITE_URL}/og.png`, width: 1200, height: 630, alt: "Reportei Connect: dados de 50 plataformas em uma API" }

export function absoluteUrl(path: string) {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`
}

// Next replaces openGraph and twitter wholesale when a page sets them, so every page builds all three here.
// URLs are absolute: resolving "/x" against a metadataBase that has a path would drop the /connect segment.
// `canonical` sends search engines to another address when that one is the official copy of the page.
export function pageMetadata({
  title,
  description,
  path,
  canonical,
}: {
  title: string
  description: string
  path: string
  canonical?: string
}): Metadata {
  const url = canonical ?? absoluteUrl(path)
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: SITE_NAME,
      url,
      title,
      description,
      images: [OG_IMAGE],
    },
    twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE.url] },
  }
}
