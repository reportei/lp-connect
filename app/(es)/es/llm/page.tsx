import { AreaPage, areaMetadata } from "@/components/feature-pages"

export const metadata = areaMetadata("es", "llm")

export default function Page() {
  return <AreaPage locale="es" area="llm" />
}
