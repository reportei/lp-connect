"use client"

import { useState } from "react"

const SHOTS = [
  {
    key: "metrics",
    label: "Métricas",
    src: "/images/explorer/explorer_meta_ads_code.webp",
    width: 2000,
    height: 1195,
    alt: "Interface real do Explorer: métrica de alcance do Meta Ads selecionada, com o payload enviado e a resposta da API.",
    caption: "Escolha as métricas, veja a resposta real da API e copie o código em cURL, Node.js, Python ou PHP.",
  },
  {
    key: "posts",
    label: "Posts",
    src: "/images/explorer/app_posts.png",
    width: 1225,
    height: 626,
    alt: "Painel de posts do Connect: publicações de um cliente no Instagram com tipo, status e data de publicação.",
    caption: "Acompanhe cada post publicado nas contas dos seus clientes, pelo painel ou pela API.",
  },
  {
    key: "ads",
    label: "Ads",
    src: "/images/explorer/app_ads.png",
    width: 1228,
    height: 647,
    alt: "Painel de anúncios do Connect: campanhas e conjuntos do Meta Ads de um cliente com objetivo, status e orçamento.",
    caption: "Veja campanhas, conjuntos e anúncios criados pela API, com status e orçamento de cada um.",
  },
]

export function ProductShots() {
  const [active, setActive] = useState(SHOTS[0].key)
  const shot = SHOTS.find((s) => s.key === active) ?? SHOTS[0]

  return (
    <figure className="lp-product-figure min-w-0">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
        <p className="text-base font-semibold">Por dentro do Connect</p>
        <div role="tablist" aria-label="Telas do Connect" className="flex gap-1 rounded-md border bg-white p-1">
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
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Fixed frame so switching captures of different proportions doesn't move the page. */}
      <a
        href={shot.src}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Ampliar captura de ${shot.label} em nova aba`}
        className="block aspect-[2000/1195] overflow-hidden rounded-lg border bg-white"
      >
        <img
          src={shot.src}
          alt={shot.alt}
          width={shot.width}
          height={shot.height}
          fetchPriority={shot.key === "metrics" ? "high" : undefined}
          className="!h-full !w-full !rounded-none !border-0 object-contain object-top"
        />
      </a>
      <figcaption className="mt-5 text-sm leading-relaxed text-muted-foreground">{shot.caption}</figcaption>

      {/* Preload the other captures so the first switch is instant. */}
      <div hidden>
        {SHOTS.filter((s) => s.key !== active).map((s) => (
          <img key={s.key} src={s.src} alt="" />
        ))}
      </div>
    </figure>
  )
}
