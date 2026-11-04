import { ToolkitPage, toolkitMetadata, toolkitParams } from "@/components/toolkit-pages"

export const dynamicParams = false
export function generateStaticParams() {
  return toolkitParams()
}

type Props = { params: { toolkit: string } }

export function generateMetadata({ params }: Props) {
  return toolkitMetadata("fr", params.toolkit)
}

export default function Page({ params }: Props) {
  return <ToolkitPage locale="fr" slug={params.toolkit} />
}
