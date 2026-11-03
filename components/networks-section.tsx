"use client"

import { withBase } from "@/lib/base-path"
import { fill } from "@/lib/fill"
import type { Messages } from "@/lib/messages"
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
function IntegrationCard({ item, name, linkPage }: { item: Integration; name: string; linkPage: boolean }) {
  const body = (
    <>
      <div className="flex h-9 w-9 shrink-0 items-center justify-center">
        {item.logo ? (
          <img src={integrationLogoSrc(item.logo)} alt="" loading="lazy" className="max-h-8 max-w-8 object-contain" />
        ) : (
          <Plug className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
        )}
      </div>
      <span className="text-sm font-medium leading-snug">{name}</span>
    </>
  )
  const base = "flex h-full items-center gap-3 rounded-md border bg-white px-4 py-3"

  return item.page && linkPage ? (
    <a href={withBase(`/${item.page}`)} className={`${base} transition-colors hover:border-primary hover:text-primary`}>
      {body}
    </a>
  ) : (
    <div className={base}>{body}</div>
  )
}

type NetworksSectionProps = {
  t: Messages["networks"]
  categories: Messages["categories"]
  names: Messages["integrationNames"]
  integrationsHref: string
  // The integrations' own pages exist only in Portuguese.
  linkPages: boolean
}

export function NetworksSection({ t, categories, names, integrationsHref, linkPages }: NetworksSectionProps) {
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState<IntegrationCategory | null>(null)

  const filtered = useMemo(() => {
    const q = normalize(query.trim())

    return INTEGRATIONS.filter(
      (item) =>
        (!category || item.category === category) &&
        (!q || normalize(`${item.name} ${names[item.name] ?? ""} ${item.aliases ?? ""}`).includes(q)),
    )
  }, [query, category, names])

  const chip = (selected: boolean) =>
    `rounded-md border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
      selected ? "border-primary bg-primary text-white" : "border-border bg-white text-muted-foreground hover:bg-muted"
    }`

  return (
    <section id="networks" aria-labelledby="integrations-title" className="lp-section">
      <div className="lp-container">
        <div className="mb-10 max-w-3xl">
          <h2 id="integrations-title" className="lp-title mb-5">
            {fill(t.title, { n: INTEGRATIONS.length })}
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">{t.copy}</p>
        </div>

        <label htmlFor="integration-search" className="mb-2 block text-sm font-medium">
          {t.searchLabel}
        </label>
        <div className="relative mb-5">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
          <input
            id="integration-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="w-full rounded-md border border-input bg-white py-3 pl-12 pr-4 text-base focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          />
        </div>

        <div role="group" aria-label={t.filterLabel} className="mb-5 flex flex-wrap gap-2">
          <button type="button" aria-pressed={!category} onClick={() => setCategory(null)} className={chip(!category)}>
            {fill(t.all, { n: INTEGRATIONS.length })}
          </button>
          {INTEGRATION_CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={category === c}
              onClick={() => setCategory(category === c ? null : c)}
              className={chip(category === c)}
            >
              {categories[c]}
            </button>
          ))}
        </div>

        <p className="mb-4 text-sm text-muted-foreground" aria-live="polite">
          {filtered.length === 1 ? t.found.one : fill(t.found.other, { n: filtered.length })}
        </p>

        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {filtered.map((item) => (
            <li key={item.name}>
              <IntegrationCard item={item} name={names[item.name] ?? item.name} linkPage={linkPages} />
            </li>
          ))}
        </ul>

        <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
          {t.note}{" "}
          <a href="#precos" className="text-primary underline underline-offset-4">
            {t.seePlan}
          </a>{" "}
          <a href={integrationsHref} className="text-primary underline underline-offset-4">
            {t.details}
          </a>
        </p>
      </div>
    </section>
  )
}
