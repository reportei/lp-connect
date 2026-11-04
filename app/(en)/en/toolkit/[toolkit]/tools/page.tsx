import { ToolkitToolsPage, toolkitParams, toolkitToolsMetadata } from "@/components/toolkit-pages"

export const dynamicParams = false
export function generateStaticParams() {
  return toolkitParams()
}

type Props = { params: { toolkit: string } }

export function generateMetadata({ params }: Props) {
  return toolkitToolsMetadata("en", params.toolkit)
}

export default function Page({ params }: Props) {
  return <ToolkitToolsPage locale="en" slug={params.toolkit} />
}
