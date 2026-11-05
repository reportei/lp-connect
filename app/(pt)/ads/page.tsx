import { AreaPage, areaMetadata } from "@/components/feature-pages"

export const metadata = areaMetadata("pt", "ads")

export default function Page() {
  return <AreaPage locale="pt" area="ads" />
}
