import { ToolPage, toolMetadata, toolParams } from "@/components/toolkit-pages"

export const dynamicParams = false
export function generateStaticParams() {
  return toolParams()
}

type Props = { params: { toolkit: string; tool: string } }

export function generateMetadata({ params }: Props) {
  return toolMetadata("en", params.toolkit, params.tool)
}

export default function Page({ params }: Props) {
  return <ToolPage locale="en" slug={params.toolkit} toolSlug={params.tool} />
}
