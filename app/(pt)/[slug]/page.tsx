import { notFound } from "next/navigation"
import { AlternativePageView } from "@/components/alternative-page"
import { PlatformPageView } from "@/components/platform-page"
import { ALTERNATIVE_PAGES, findAlternativePage } from "@/lib/alternativas"
import { PLATFORM_PAGES, findPlatformPage } from "@/lib/plataformas"
import { pageMetadata } from "@/lib/seo"

// Static export: only the slugs below exist, anything else is the 404 page.
export const dynamicParams = false

export function generateStaticParams() {
  return [...PLATFORM_PAGES, ...ALTERNATIVE_PAGES].map((page) => ({ slug: page.slug }))
}

type Props = { params: { slug: string } }

export function generateMetadata({ params }: Props) {
  const page = findPlatformPage(params.slug) ?? findAlternativePage(params.slug)
  if (!page) return {}
  return pageMetadata({ title: page.title, description: page.description, path: `/${page.slug}` })
}

export default function SlugPage({ params }: Props) {
  const platform = findPlatformPage(params.slug)
  if (platform) return <PlatformPageView page={platform} />

  const alternative = findAlternativePage(params.slug)
  if (alternative) return <AlternativePageView page={alternative} />

  notFound()
}
