"use client"

import { withBase } from "@/lib/base-path"
import { fill } from "@/lib/fill"
import type { Messages } from "@/lib/messages"
import { useState } from "react"

const SHOTS = [
  {
    key: "metrics" as const,
    src: withBase("/images/explorer/explorer_meta_ads_code.webp"),
    width: 2000,
    height: 1195,
  },
  {
    key: "posts" as const,
    src: withBase("/images/explorer/app_posts.png"),
    width: 1247,
    height: 577,
  },
  {
    key: "ads" as const,
    src: withBase("/images/explorer/app_ads.png"),
    width: 1228,
    height: 647,
  },
]

export function ProductShots({ t }: { t: Messages["productShots"] }) {
  const [active, setActive] = useState<(typeof SHOTS)[number]["key"]>(SHOTS[0].key)
  const shot = SHOTS.find((s) => s.key === active) ?? SHOTS[0]
  const text = t[shot.key]

  return (
    <figure className="lp-product-figure min-w-0">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
        <p className="text-base font-semibold">{t.heading}</p>
        <div role="tablist" aria-label={t.tabsLabel} className="flex gap-1 rounded-md border bg-white p-1">
          {SHOTS.map((s) => (
            <button
              key={s.key}
              type="button"
              role="tab"
              aria-selected={s.key === active}
              onClick={() => setActive(s.key)}
              className={`rounded px-3 py-1 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-primary ${
                s.key === active ? "bg-primary text-white" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t[s.key].label}
            </button>
          ))}
        </div>
      </div>

      {/* Fixed frame so switching captures of different proportions doesn't move the page. */}
      <a
        href={shot.src}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={fill(t.enlarge, { label: text.label })}
        className="block aspect-[2000/1195] overflow-hidden rounded-lg border bg-white"
      >
        <img
          src={shot.src}
          alt={text.alt}
          width={shot.width}
          height={shot.height}
          fetchPriority={shot.key === "metrics" ? "high" : undefined}
          className="!h-full !w-full !rounded-none !border-0 object-contain object-top"
        />
      </a>
      <figcaption className="mt-5 text-sm leading-relaxed text-muted-foreground">{text.caption}</figcaption>

      {/* Preload the other captures so the first switch is instant. */}
      <div hidden>
        {SHOTS.filter((s) => s.key !== active).map((s) => (
          <img key={s.key} src={s.src} alt="" />
        ))}
      </div>
    </figure>
  )
}
