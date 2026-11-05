import { AreaSlugPage, areaPageParams, areaSlugMetadata } from "@/components/feature-pages"

export const dynamicParams = false
export function generateStaticParams() {
  return areaPageParams("ads")()
}

type Props = { params: { slug: string } }

export function generateMetadata({ params }: Props) {
  return areaSlugMetadata("pt", "ads", params.slug)
}

export default function Page({ params }: Props) {
  return <AreaSlugPage locale="pt" area="ads" slug={params.slug} />
}
