import type { ReactNode } from "react"
import type { Locale } from "@/lib/i18n"

// Round flags drawn inline, so the picker needs no image requests.
const FLAGS: Record<Locale, ReactNode> = {
  pt: (
    <>
      <rect width="24" height="24" fill="#009C3B" />
      <path d="M12 4.5 22 12 12 19.5 2 12z" fill="#FFDF00" />
      <circle cx="12" cy="12" r="4.6" fill="#002776" />
      <path d="M7.6 11.1c2.9-.5 6.1.2 8.7 1.9" stroke="#fff" strokeWidth="1" fill="none" />
    </>
  ),
  en: (
    <>
      <rect width="24" height="24" fill="#fff" />
      {[0, 2, 4, 6, 8, 10, 12].map((i) => (
        <rect key={i} y={(i * 24) / 13} width="24" height={24 / 13} fill="#B22234" />
      ))}
      <rect width="11" height={(24 / 13) * 7} fill="#3C3B6E" />
      {[2, 5, 8].flatMap((x) => [2.5, 5.5, 8.5, 11.5].map((y) => <circle key={`${x}-${y}`} cx={x} cy={y} r="0.6" fill="#fff" />))}
    </>
  ),
  es: (
    <>
      <rect width="24" height="24" fill="#AA151B" />
      <rect y="6" width="24" height="12" fill="#F1BF00" />
    </>
  ),
  fr: (
    <>
      <rect width="8" height="24" fill="#002654" />
      <rect x="8" width="8" height="24" fill="#fff" />
      <rect x="16" width="8" height="24" fill="#CE1126" />
    </>
  ),
}

// Clipped by CSS rather than an SVG clipPath: an id repeated across pickers breaks when the first copy is hidden.
export function Flag({ locale, className = "size-5" }: { locale: Locale; className?: string }) {
  return (
    <span className={`inline-flex shrink-0 overflow-hidden rounded-full ring-1 ring-[rgba(7,14,77,0.12)] ${className}`}>
      <svg viewBox="0 0 24 24" className="size-full" aria-hidden="true">
        {FLAGS[locale]}
      </svg>
    </span>
  )
}
