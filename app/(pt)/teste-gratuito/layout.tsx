import type React from "react"
import type { Metadata } from "next"

// Old trial form, replaced by the app's signup. Kept online for existing links, out of the index.
export const metadata: Metadata = {
  title: "Teste gratuito | Reportei Connect",
  robots: { index: false, follow: true },
}

export default function TesteGratuitoLayout({ children }: { children: React.ReactNode }) {
  return children
}
