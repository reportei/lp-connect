"use client"

import { withBase } from "@/lib/base-path"
import type { Messages } from "@/lib/messages"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export const LEADSTER_SLIDES = [1, 2, 3, 4, 5].map((n) => withBase(`/images/leadster-dashboard-${n}.png`))

export default function LeadsterCarousel({ t }: { t: Messages["carousel"] }) {
  const [index, setIndex] = useState(0)
  const total = LEADSTER_SLIDES.length
  const slide = { src: LEADSTER_SLIDES[index], alt: t.slides[index] }

  return (
    <div className="w-full" role="region" aria-roledescription={t.roledescription} aria-label={t.label}>
      <div className="relative aspect-[2/1] w-full overflow-hidden rounded-lg border bg-background">
        <img src={slide.src} alt={slide.alt} loading="lazy" className="absolute inset-0 h-full w-full object-contain" />
      </div>
      <div className="mt-4 flex items-center justify-between gap-4">
        <p className="min-w-0 text-sm leading-relaxed text-muted-foreground" aria-live="polite" aria-atomic="true">
          <span className="font-medium text-foreground">
            {index + 1} / {total}
          </span>
          <span className="mx-2" aria-hidden="true">
            ·
          </span>
          {slide.alt}
        </p>
        <div className="flex shrink-0 gap-2">
          {[
            { label: t.previous, Icon: ChevronLeft, step: -1 },
            { label: t.next, Icon: ChevronRight, step: 1 },
          ].map(({ label, Icon, step }) => (
            <button
              key={label}
              type="button"
              aria-label={label}
              onClick={() => setIndex((i) => (i + step + total) % total)}
              className="flex size-11 items-center justify-center rounded-md border bg-background transition-colors hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <Icon className="h-5 w-5" />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
