import { AreaPage, areaMetadata } from "@/components/feature-pages"

export const metadata = areaMetadata("en", "llm")

export default function Page() {
  return <AreaPage locale="en" area="llm" />
}
