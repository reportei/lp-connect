"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export const LEADSTER_SLIDES = [
  { src: "/images/leadster-dashboard-1.png", alt: "Super Dashboard Leadster - Customização de eventos e investimentos por conversão" },
  { src: "/images/leadster-dashboard-2.png", alt: "Campanhas Google Ads com métricas detalhadas de investimento e conversão" },
  { src: "/images/leadster-dashboard-3.png", alt: "Visão consolidada por canal - Google Ads, LinkedIn Ads e Meta Ads" },
  { src: "/images/leadster-dashboard-4.png", alt: "Investimentos por conversão com custo por lead e taxa de conversão" },
  { src: "/images/leadster-dashboard-5.png", alt: "Análise completa de campanhas com métricas de todos os canais" },
]

export default function LeadsterCarousel() {
  const [index, setIndex] = useState(0)
  const total = LEADSTER_SLIDES.length
  const slide = LEADSTER_SLIDES[index]

  return (
    <div className="w-full" role="region" aria-roledescription="carrossel" aria-label="Telas do Super Dashboard Leadster">
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
            { label: "Slide anterior", Icon: ChevronLeft, step: -1 },
            { label: "Próximo slide", Icon: ChevronRight, step: 1 },
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
