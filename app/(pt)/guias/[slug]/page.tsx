import { notFound } from "next/navigation"
import { GuidePageView } from "@/components/guide-page"
import { GUIDES, findGuide } from "@/lib/guias"
import { pageMetadata } from "@/lib/seo"

export const dynamicParams = false

export function generateStaticParams() {
  return GUIDES.map((guide) => ({ slug: guide.slug }))
}

type Props = { params: { slug: string } }

export function generateMetadata({ params }: Props) {
  const guide = findGuide(params.slug)
  if (!guide) return {}
  return pageMetadata({ title: guide.title, description: guide.description, path: `/guias/${guide.slug}` })
}

export default function GuidePage({ params }: Props) {
  const guide = findGuide(params.slug)
  if (!guide) notFound()
  return <GuidePageView guide={guide} />
}
