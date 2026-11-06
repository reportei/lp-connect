import { AreaSlugPage, areaPageParams, areaSlugMetadata } from "@/components/feature-pages"

export const dynamicParams = false
export function generateStaticParams() {
  return areaPageParams("llm")()
}

type Props = { params: { slug: string } }

export function generateMetadata({ params }: Props) {
  return areaSlugMetadata("fr", "llm", params.slug)
}

export default function Page({ params }: Props) {
  return <AreaSlugPage locale="fr" area="llm" slug={params.slug} />
}
