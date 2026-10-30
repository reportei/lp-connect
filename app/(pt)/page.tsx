import { HomePage, homeMetadata } from "@/components/home-page"

export const metadata = homeMetadata("pt")

export default function Page() {
  return <HomePage locale="pt" />
}
