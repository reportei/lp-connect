"use client"

import { Plug, Search } from "lucide-react"
import { useMemo, useState } from "react"
import {
  INTEGRATION_CATEGORIES,
  INTEGRATIONS,
  integrationLogoSrc,
  type Integration,
  type IntegrationCategory,
} from "@/lib/integrations"

function normalize(text: string) {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
}

// Entries with their own landing page link to it; the rest stay plain cards.
function IntegrationCard({ item }: { item: Integration }) {
  const body = (
    <>
      <div className="flex h-9 w-9 shrink-0 items-center justify-center">
        {item.logo ? (
          <img src={integrationLogoSrc(item.logo)} alt="" loading="lazy" className="max-h-8 max-w-8 object-contain" />
        ) : (
          <Plug className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
        )}
      </div>
      <span className="text-sm font-medium leading-snug">{item.name}</span>
    </>
  )
  const base = "flex h-full items-center gap-3 rounded-md border bg-white px-4 py-3"

  return item.page ? (
    <a href={`/${item.page}`} className={`${base} transition-colors hover:border-primary hover:text-primary`}>
      {body}
    </a>
  ) : (
    <div className={base}>{body}</div>
  )
}

export function NetworksSection() {
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState<IntegrationCategory | null>(null)

  const filtered = useMemo(() => {
    const q = normalize(query.trim())

    return INTEGRATIONS.filter(
      (item) =>
        (!category || item.category === category) &&
        (!q || normalize(`${item.name} ${item.aliases ?? ""}`).includes(q)),
    )
  }, [query, category])

  const chip = (selected: boolean) =>
    `rounded-md border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
      selected ? "border-primary bg-primary text-white" : "border-border bg-white text-muted-foreground hover:bg-muted"
    }`

  return (
    <section id="networks" aria-labelledby="integrations-title" className="lp-section">
      <div className="lp-container">
        <div className="mb-10 max-w-3xl">
          <h2 id="integrations-title" className="lp-title mb-5">
            {INTEGRATIONS.length} integrações para o seu produto
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Mídia paga, redes sociais, CRM e e-commerce. Encontre as plataformas que você precisa e acesse seus dados
            pela API do Reportei Connect.
          </p>
        </div>

        <label htmlFor="integration-search" className="mb-2 block text-sm font-medium">
          Buscar integração
        </label>
        <div className="relative mb-5">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
          <input
            id="integration-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ex.: Google Ads, HubSpot ou Shopify"
            className="w-full rounded-md border border-input bg-white py-3 pl-12 pr-4 text-base focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          />
        </div>

        <div role="group" aria-label="Filtrar integrações por categoria" className="mb-5 flex flex-wrap gap-2">
          <button type="button" aria-pressed={!category} onClick={() => setCategory(null)} className={chip(!category)}>
            Todas ({INTEGRATIONS.length})
          </button>
          {INTEGRATION_CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={category === c}
              onClick={() => setCategory(category === c ? null : c)}
              className={chip(category === c)}
            >
              {c}
            </button>
          ))}
        </div>

        <p className="mb-4 text-sm text-muted-foreground" aria-live="polite">
          {filtered.length === 1 ? "1 integração encontrada" : `${filtered.length} integrações encontradas`}
        </p>

        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {filtered.map((item) => (
            <li key={item.name}>
              <IntegrationCard item={item} />
            </li>
          ))}
        </ul>

        <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
          Uma integração é uma plataforma disponível no catálogo. Uma conexão é uma conta dessa plataforma vinculada ao
          Connect, e é a unidade usada na cobrança.{" "}
          <a href="#precos" className="text-primary underline underline-offset-4">
            Veja como funciona o plano.
          </a>{" "}
          <a href="/integracoes" className="text-primary underline underline-offset-4">
            Detalhes de cada integração.
          </a>
        </p>
      </div>
    </section>
  )
}
