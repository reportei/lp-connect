import { AreaPage, areaMetadata } from "@/components/feature-pages"

export const metadata = areaMetadata("pt", "posts")

export default function Page() {
  return <AreaPage locale="pt" area="posts" />
}
