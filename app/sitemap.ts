import type { MetadataRoute } from "next"
import { ALTERNATIVE_PAGES } from "@/lib/alternativas"
import { PLATFORM_PAGES } from "@/lib/plataformas"
import { SITE_URL } from "@/lib/seo"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/integracoes",
    "/clientes/leadster",
    ...PLATFORM_PAGES.map((page) => `/${page.slug}`),
    ...ALTERNATIVE_PAGES.map((page) => `/${page.slug}`),
  ]
  return paths.map((path) => ({ url: `${SITE_URL}${path}`, changeFrequency: "monthly", priority: path === "" ? 1 : 0.7 }))
}
