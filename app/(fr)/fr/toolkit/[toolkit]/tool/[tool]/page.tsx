import { ToolPage, toolMetadata, toolParams } from "@/components/toolkit-pages"

export const dynamicParams = false
export function generateStaticParams() {
  return toolParams()
}

type Props = { params: { toolkit: string; tool: string } }

export function generateMetadata({ params }: Props) {
  return toolMetadata("fr", params.toolkit, params.tool)
}

export default function Page({ params }: Props) {
  return <ToolPage locale="fr" slug={params.toolkit} toolSlug={params.tool} />
}
