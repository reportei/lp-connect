import { HomePage, homeMetadata } from "@/components/home-page"

export const metadata = homeMetadata("fr")

export default function Page() {
  return <HomePage locale="fr" />
}
