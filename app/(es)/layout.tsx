import type React from "react"
import { RootDocument, rootMetadata } from "@/components/root-document"

export const metadata = rootMetadata("es")

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootDocument locale="es">{children}</RootDocument>
}
