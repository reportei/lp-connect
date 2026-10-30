import { HomePage, homeMetadata } from "@/components/home-page"

export const metadata = homeMetadata("es")

export default function Page() {
  return <HomePage locale="es" />
}
