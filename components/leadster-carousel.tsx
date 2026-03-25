// components/leadster-carousel.tsx
"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

type Item = { src: string; alt: string }

export default function LeadsterCarousel({
  items = [
    { src: "/images/leadster-dashboard-1.png", alt: "Dashboard Leadster - 1" },
    { src: "/images/leadster-dashboard-2.png", alt: "Dashboard Leadster - 2" },
    { src: "/images/leadster-dashboard-3.png", alt: "Dashboard Leadster - 3" },
  ],
  autoMs = 5000,
  aspectClass = "aspect-[16/10]",
}: {
  items?: Item[]
  autoMs?: number
  aspectClass?: string
}) {
  const [index, setIndex] = useState(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    if (items.length <= 1) return
    timerRef.current = setInterval(() => setIndex((i) => (i + 1) % items.length), autoMs)
  }

  // autoplay
  useEffect(() => {
    resetTimer()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [items.length, autoMs])

  const prev = () => {
    setIndex((i) => (i - 1 + items.length) % items.length)
    resetTimer()
  }

  const next = () => {
    setIndex((i) => (i + 1) % items.length)
    resetTimer()
  }

  const goTo = (i: number) => {
    setIndex(i)
    resetTimer()
  }

  return (
    <div className="relative w-full group">
      <div className={`relative ${aspectClass} w-full overflow-hidden rounded-2xl bg-muted border shadow-lg`}>
        {items.map((it, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          >
            <Image
              src={it.src || "/placeholder.svg"}
              alt={it.alt}
              fill
              className="object-contain"
              sizes="(min-width:1024px) 896px, 100vw"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/95 p-3 shadow-lg hover:bg-white hover:scale-110 opacity-0 group-hover:opacity-100 transition-all duration-200 backdrop-blur-sm"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="h-6 w-6 text-foreground" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/95 p-3 shadow-lg hover:bg-white hover:scale-110 opacity-0 group-hover:opacity-100 transition-all duration-200 backdrop-blur-sm"
        aria-label="Próximo slide"
      >
        <ChevronRight className="h-6 w-6 text-foreground" />
      </button>

      <div className="mt-4 flex justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Ir para slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 hover:scale-110 ${
              i === index ? "w-8 bg-primary" : "w-2 bg-muted-foreground/40 hover:bg-muted-foreground/60"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
