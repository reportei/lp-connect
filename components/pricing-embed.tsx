"use client"

import { useEffect, useState } from "react"

const TRUSTED_ORIGIN = "https://app.connect.reportei.com"

const FALLBACK_HEIGHT_CLASSES = "h-[1500px] sm:h-[1300px] lg:h-[1050px]"

type PricingEmbedProps = {
  src: string
}

export function PricingEmbed({ src }: PricingEmbedProps) {
  const [height, setHeight] = useState<number | null>(null)

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

  return (
    <iframe
      src={src}
      title="Planos e preços do Reportei Connect"
      loading="lazy"
      scrolling="no"
      style={height ? { height: `${height}px` } : undefined}
      className={
        height
          ? "block w-full border-0 bg-transparent"
          : `block w-full border-0 bg-transparent ${FALLBACK_HEIGHT_CLASSES}`
      }
    />
  )
}
