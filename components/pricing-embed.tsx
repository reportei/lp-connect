"use client"

import { useEffect, useState } from "react"

const TRUSTED_ORIGIN = "https://app.connect.reportei.com"

const FALLBACK_HEIGHT_CLASSES = "h-[1500px] sm:h-[1300px] lg:h-[1050px]"

// The app only allows the origins in its EMBED_FRAME_ANCESTORS to frame the table. A refused frame still fires
// load but never reports a height, so this long after load the section links to the app's own price page instead.
const HEIGHT_TIMEOUT_MS = 4000
const PRICES_PAGE = `${TRUSTED_ORIGIN}/prices`

type PricingEmbedProps = {
  src: string
}

export function PricingEmbed({ src }: PricingEmbedProps) {
  const [height, setHeight] = useState<number | null>(null)
  const [refused, setRefused] = useState(false)

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (event.origin !== TRUSTED_ORIGIN) return
      if (typeof event.data !== "number" || !Number.isFinite(event.data)) return

      const reported = Math.ceil(event.data)

      if (reported <= 0) return

      // Exactly the reported height: the page measures the viewport this element defines,
      // so anything added here comes back larger and grows the frame on every message.
      setHeight(reported)
    }

    window.addEventListener("message", handleMessage)

    return () => window.removeEventListener("message", handleMessage)
  }, [])

  const [loaded, setLoaded] = useState(false)

  // Starts on load, not on mount: the frame is lazy and may load only when scrolled into view.
  useEffect(() => {
    if (!loaded || height) return
    const timer = window.setTimeout(() => setRefused(true), HEIGHT_TIMEOUT_MS)
    return () => window.clearTimeout(timer)
  }, [loaded, height])

  if (refused && !height) {
    return (
      <div className="rounded-lg border bg-white p-6 md:p-8">
        <h3 className="text-2xl font-semibold">Plano Connect</h3>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          Conexões incluídas no plano e valor fixo por conexão adicional, igual em qualquer plataforma. Veja os valores
          e simule quanto você pagaria.
        </p>
        <a href={PRICES_PAGE} className="lp-button mt-6">
          Ver planos e preços
        </a>
      </div>
    )
  }

  return (
    <iframe
      src={src}
      title="Planos e preços do Reportei Connect"
      loading="lazy"
      scrolling="no"
      onLoad={() => setLoaded(true)}
      style={height ? { height: `${height}px` } : undefined}
      className={
        height
          ? "block w-full border-0 bg-transparent"
          : `block w-full border-0 bg-transparent ${FALLBACK_HEIGHT_CLASSES}`
      }
    />
  )
}
