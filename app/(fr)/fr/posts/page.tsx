import { AreaPage, areaMetadata } from "@/components/feature-pages"

export const metadata = areaMetadata("fr", "posts")

export default function Page() {
  return <AreaPage locale="fr" area="posts" />
}
