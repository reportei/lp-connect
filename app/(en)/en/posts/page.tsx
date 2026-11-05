import { AreaPage, areaMetadata } from "@/components/feature-pages"

export const metadata = areaMetadata("en", "posts")

export default function Page() {
  return <AreaPage locale="en" area="posts" />
}
