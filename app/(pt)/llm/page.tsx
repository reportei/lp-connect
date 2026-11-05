import { AreaPage, areaMetadata } from "@/components/feature-pages"

export const metadata = areaMetadata("pt", "llm")

export default function Page() {
  return <AreaPage locale="pt" area="llm" />
}
