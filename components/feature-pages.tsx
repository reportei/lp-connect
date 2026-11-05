import type React from "react"
import { ArrowRight, Check, CheckCircle2, Info, Plug, X } from "lucide-react"
import { FaqList, faqJsonLd } from "@/components/platform-page"
import { Breadcrumb, Page, breadcrumbJsonLd, truncate, withBrand } from "@/components/toolkit-pages"
import { withBase } from "@/lib/base-path"
import { appUrl, formatNumber, localePath, type Locale } from "@/lib/i18n"
import { getMessages } from "@/lib/messages"
import { absoluteUrl, pageMetadata } from "@/lib/seo"
import { TOOLKITS } from "@/lib/toolkits"
import {
  FEATURE_AREAS,
  LLM_MODELS,
  METRICS_INTEGRATIONS,
  PROVIDER_NAMES,
  areaCapabilities,
  areaPath,
  areaSlugs,
  capabilityCopy,
  capabilityPath,
  findCapability,
  integrationLogo,
  integrationName,
  llmModelPath,
  metricsIntegrationPath,
  type Capability,
  type FeatureArea,
  type LlmModelPage,
  type MetricsIntegration,
} from "@/lib/features"

const DOCS_URL = "https://developers.reportei.com/connect"

const href = (locale: Locale, path: string) => withBase(localePath(locale, path))

function Hero({
  locale,
  crumbs,
  eyebrow,
  h1,
  intro,
  logo,
  aside,
}: {
  locale: Locale
  crumbs: { name: string; path?: string }[]
  eyebrow?: string
  h1: string
  intro: string
  logo?: string | null
  aside?: React.ReactNode
}) {
  const t = getMessages(locale).features.capability
  return (
    <section className="lp-hero">
      <div className="lp-container">
        <Breadcrumb locale={locale} items={crumbs} />
        <div className={aside ? "grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16" : ""}>
          <div>
            {logo && <img src={logo} alt="" className="mb-8 h-12 w-12 object-contain" />}
            {eyebrow && <p className="lp-eyebrow mb-3">{eyebrow}</p>}
            <h1 className="lp-title max-w-[24ch] text-[clamp(2rem,3.6vw,3.2rem)]">{h1}</h1>
            <p className="lp-copy mt-6">{intro}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-5">
              <a href={appUrl(locale, "/signup")} className="lp-button">
                {t.signup}
              </a>
              <a href={DOCS_URL} className="lp-link text-sm">
                {t.docs}
              </a>
            </div>
          </div>
          {aside && <div className="min-w-0 self-start">{aside}</div>}
        </div>
      </div>
    </section>
  )
}

function Code({ children }: { children: string }) {
  return <pre className="lp-code overflow-x-auto p-5 text-[13px]">{children}</pre>
}

function Bullets({ items, icon = "check" }: { items: string[]; icon?: "check" | "info" }) {
  const Icon = icon === "check" ? CheckCircle2 : Info
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 leading-relaxed">
          <Icon className={`mt-1 h-4 w-4 shrink-0 ${icon === "check" ? "text-emerald-600" : "text-primary"}`} aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function LinkCard({ href: to, title, body, logo }: { href: string; title: string; body?: string; logo?: string | null }) {
  return (
    <a href={to} className="flex h-full items-start gap-4 rounded-lg border bg-white p-5 transition-colors hover:border-primary">
      {logo !== undefined &&
        (logo ? (
          <img src={logo} alt="" loading="lazy" className="h-7 w-7 shrink-0 object-contain" />
        ) : (
          <Plug className="h-7 w-7 shrink-0 text-muted-foreground" aria-hidden="true" />
        ))}
      <span className="min-w-0">
        <span className="block font-semibold">{title}</span>
        {body && <span className="mt-1 line-clamp-2 block text-sm leading-relaxed text-muted-foreground">{body}</span>}
      </span>
    </a>
  )
}

function OtherAreas({ locale, current }: { locale: Locale; current: FeatureArea }) {
  const m = getMessages(locale).features
  return (
    <section className="lp-section border-t">
      <div className="lp-container">
        <h2 className="mb-6 text-xl font-semibold tracking-tight">{m.hub.otherAreas}</h2>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURE_AREAS.filter((area) => area !== current).map((area) => (
            <li key={area}>
              <LinkCard href={href(locale, areaPath(area))} title={m.areas[area].name} body={m.areas[area].h1} />
            </li>
          ))}
          <li>
            <LinkCard href={href(locale, "/toolkits")} title="Toolkits" body={getMessages(locale).toolkits.hub.h1(TOOLKITS.length)} />
          </li>
        </ul>
      </div>
    </section>
  )
}

function capabilityTitle(locale: Locale, capability: Capability) {
  return capabilityCopy(capability.slug)![locale].title
}

// ---------- Area hub: /posts, /ads, /metrics, /llm ----------

export function areaMetadata(locale: Locale, area: FeatureArea) {
  const t = getMessages(locale).features.areas[area]
  const description = typeof t.metaDescription === "function" ? t.metaDescription(METRICS_INTEGRATIONS.length) : t.metaDescription
  return pageMetadata({
    title: withBrand(t.metaTitle),
    description,
    path: localePath(locale, areaPath(area)),
    locale,
    page: () => areaPath(area),
  })
}

export function AreaPage({ locale, area }: { locale: Locale; area: FeatureArea }) {
  const m = getMessages(locale).features
  const t = m.areas[area]
  const capabilities = areaCapabilities(area)
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: t.h1,
    itemListElement: areaSlugs(area).map((slug, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: absoluteUrl(localePath(locale, `/${area}/${slug}`)),
    })),
  }

  return (
    <Page locale={locale} alternatePath={() => areaPath(area)} jsonLd={[itemList]}>
      <Hero locale={locale} crumbs={[{ name: m.nav }, { name: t.name }]} eyebrow={t.name} h1={t.h1} intro={t.intro} />

      <section className="lp-section border-t bg-muted/40">
        <div className="lp-container">
          <h2 className="lp-title mb-8">{m.hub.capabilities}</h2>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => {
              const copy = capabilityCopy(capability.slug)![locale]
              return (
                <li key={capability.slug}>
                  <LinkCard
                    href={href(locale, capabilityPath(capability))}
                    title={copy.title}
                    body={copy.tagline}
                    logo={capability.integrations[0] ? integrationLogo(capability.integrations[0]) : undefined}
                  />
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      {area === "metrics" && (
        <section className="lp-section border-t">
          <div className="lp-container">
            <h2 className="lp-title mb-3">{m.hub.integrations}</h2>
            <p className="lp-copy mb-8">{m.hub.integrationsCopy}</p>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {METRICS_INTEGRATIONS.map((integration) => (
                <li key={integration.slug}>
                  <a
                    href={href(locale, metricsIntegrationPath(integration))}
                    className="flex h-full items-center gap-3 rounded-md border bg-white px-4 py-3 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
                  >
                    <img src={integrationLogo(integration.slug) ?? ""} alt="" loading="lazy" className="h-6 w-6 shrink-0 object-contain" />
                    {integration.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {area === "llm" && (
        <section className="lp-section border-t">
          <div className="lp-container">
            <h2 className="lp-title mb-8">{m.hub.models}</h2>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {LLM_MODELS.map((model) => (
                <li key={model.slug}>
                  <LinkCard href={href(locale, llmModelPath(model))} title={model.name} body={PROVIDER_NAMES[model.provider]} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <OtherAreas locale={locale} current={area} />
    </Page>
  )
}

// ---------- Pages under an area: a capability, a metrics integration or an LLM model ----------

export function areaPageParams(area: FeatureArea) {
  return () => areaSlugs(area).map((slug) => ({ slug }))
}

export function areaSlugMetadata(locale: Locale, area: FeatureArea, slug: string) {
  const capability = findCapability(area, slug)
  if (capability) {
    const copy = capabilityCopy(capability.slug)![locale]
    return pageMetadata({
      title: withBrand(getMessages(locale).features.capability.metaTitle(copy.title)),
      description: truncate(copy.tagline, 160),
      path: localePath(locale, capabilityPath(capability)),
      locale,
      page: () => capabilityPath(capability),
    })
  }
  const integration = area === "metrics" && METRICS_INTEGRATIONS.find((item) => item.urlSlug === slug)
  if (integration) {
    const t = getMessages(locale).features.metricsIntegration
    const examples = integration.metrics
      .slice(0, 3)
      .map((metric) => metric.title[locale].toLowerCase())
      .join(", ")
    return pageMetadata({
      title: withBrand(t.metaTitle(integration.name)),
      description: truncate(t.metaDescription(integration.name, integration.metrics.length, examples), 160),
      path: localePath(locale, metricsIntegrationPath(integration)),
      locale,
      page: () => metricsIntegrationPath(integration),
    })
  }
  const model = area === "llm" && LLM_MODELS.find((item) => item.urlSlug === slug)
  if (model) {
    const t = getMessages(locale).features.llmModel
    return pageMetadata({
      title: withBrand(t.metaTitle(model.name)),
      description: truncate(t.metaDescription(model.name, PROVIDER_NAMES[model.provider]), 160),
      path: localePath(locale, llmModelPath(model)),
      locale,
      page: () => llmModelPath(model),
    })
  }
  return {}
}

export function AreaSlugPage({ locale, area, slug }: { locale: Locale; area: FeatureArea; slug: string }) {
  const capability = findCapability(area, slug)
  if (capability) return <CapabilityPage locale={locale} capability={capability} />
  const integration = METRICS_INTEGRATIONS.find((item) => item.urlSlug === slug)
  if (area === "metrics" && integration) return <MetricsIntegrationPage locale={locale} integration={integration} />
  const model = LLM_MODELS.find((item) => item.urlSlug === slug)
  if (area === "llm" && model) return <LlmModelView locale={locale} model={model} />
  return null
}

function requestSample(sample: NonNullable<ReturnType<typeof capabilityCopy>>["sample"], customerRoute: boolean) {
  const query = sample.query ? `?${Object.entries(sample.query).map(([key, value]) => `${key}=${value}`).join("&")}` : ""
  const headers = [
    "Authorization: Bearer <merchant token>",
    ...(customerRoute ? ["x-customer-token: <customer token>"] : []),
    ...Object.entries(sample.headers ?? {}).map(([name, value]) => `${name}: ${value}`),
  ]
  const body = sample.body !== undefined ? `\n\n${JSON.stringify(sample.body, null, 2)}` : ""
  return `${sample.method} ${sample.path}${query}\n${headers.join("\n")}${body}`
}

// Routes that act on one customer carry x-customer-token; the merchant-wide ones and LLM only the Bearer.
const isCustomerRoute = (path: string) => !path.startsWith("/api/merchants/") && !path.startsWith("/api/llm/")

function CapabilityPage({ locale, capability }: { locale: Locale; capability: Capability }) {
  const m = getMessages(locale).features
  const t = m.capability
  const file = capabilityCopy(capability.slug)!
  const copy = file[locale]
  const area = m.areas[capability.area]
  const related = capability.related.map((slug) => findCapability(capability.area, slug)).filter((c): c is Capability => Boolean(c))
  const h1 = t.h1(copy.title)

  return (
    <Page
      locale={locale}
      alternatePath={() => capabilityPath(capability)}
      jsonLd={[
        faqJsonLd(copy.faq),
        breadcrumbJsonLd(locale, [
          { name: area.name, path: areaPath(capability.area) },
          { name: copy.title, path: capabilityPath(capability) },
        ]),
      ]}
    >
      <Hero
        locale={locale}
        crumbs={[{ name: area.name, path: areaPath(capability.area) }, { name: copy.title }]}
        eyebrow={area.name}
        h1={h1}
        intro={copy.intro}
        logo={capability.integrations[0] ? integrationLogo(capability.integrations[0]) : null}
        aside={
          <>
            <h2 className="mb-3 text-lg font-semibold tracking-tight">{t.request}</h2>
            <Code>{requestSample(file.sample, isCustomerRoute(file.sample.path))}</Code>
          </>
        }
      />

      <section className="lp-section border-t">
        <div className="lp-container grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="lp-title mb-6">{t.can}</h2>
            <Bullets items={copy.can} />
          </div>
          <div>
            <h2 className="lp-title mb-6">{t.rules}</h2>
            <Bullets items={copy.rules} icon="info" />
          </div>
        </div>
      </section>

      {file.fields.length > 0 && (
        <section className="lp-section border-t bg-muted/40">
          <div className="lp-container">
            <h2 className="lp-title mb-8">{t.fields}</h2>
            <div className="overflow-x-auto rounded-xl border bg-white">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead className="bg-muted/40 text-xs uppercase tracking-wider text-muted-foreground">
                  <tr>
                    <th className="px-5 py-3 font-semibold">{t.columns.name}</th>
                    <th className="px-5 py-3 font-semibold">{t.columns.type}</th>
                    <th className="px-5 py-3 font-semibold">{t.columns.required}</th>
                    <th className="px-5 py-3 font-semibold">{t.columns.description}</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {file.fields.map((field) => (
                    <tr key={field.name} className="align-top">
                      <td className="px-5 py-4 font-mono text-[13px] font-medium">{field.name}</td>
                      <td className="px-5 py-4 font-mono text-[13px] text-muted-foreground">{field.type}</td>
                      <td className="px-5 py-4">{field.required ? t.yes : t.no}</td>
                      <td className="px-5 py-4 leading-relaxed text-muted-foreground">{field.description[locale]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      <section className="lp-section border-t">
        <div className="lp-container">
          <h2 className="lp-title mb-8">{t.useCases}</h2>
          <ul className="grid gap-px overflow-hidden rounded-xl border bg-border md:grid-cols-3">
            {copy.useCases.map((useCase) => (
              <li key={useCase.title} className="bg-white p-7">
                <h3 className="text-lg font-semibold tracking-tight">{useCase.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{useCase.body}</p>
              </li>
            ))}
          </ul>
          {capability.integrations.length > 0 && (
            <div className="mt-10">
              <h2 className="mb-4 text-xl font-semibold tracking-tight">{t.worksWith}</h2>
              <ul className="flex flex-wrap gap-3">
                {capability.integrations.map((slug) => (
                  <li key={slug} className="flex items-center gap-2 rounded-md border bg-white px-3 py-2 text-sm font-medium">
                    {integrationLogo(slug) && <img src={integrationLogo(slug)!} alt="" className="h-5 w-5 object-contain" />}
                    {integrationName(slug)}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <section className="lp-section border-t bg-muted/40">
        <div className="lp-container grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div>
            <h2 className="lp-title mb-8">{t.faq}</h2>
            <FaqList items={copy.faq} />
          </div>
          <div>
            <h2 className="mb-5 text-xl font-semibold tracking-tight">{t.related}</h2>
            <ul className="space-y-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <a
                    href={href(locale, capabilityPath(item))}
                    className="flex items-center justify-between gap-3 rounded-md border bg-white px-4 py-3 font-medium transition-colors hover:border-primary"
                  >
                    {capabilityTitle(locale, item)}
                    <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
            <a href={href(locale, areaPath(capability.area))} className="lp-link mt-6 inline-flex items-center gap-1.5 text-sm">
              {t.seeAll(area.name)}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </Page>
  )
}

// ---------- Metrics of one integration: /metrics/{integration} ----------

const GROUPS = ["number_v1", "chart_v1", "datatable_v1"] as const

function MetricsIntegrationPage({ locale, integration }: { locale: Locale; integration: MetricsIntegration & { urlSlug: string } }) {
  const m = getMessages(locale).features
  const t = m.metricsIntegration
  const area = m.areas.metrics
  const group = (component: string) => (component === "datagrid_v1" ? "datatable_v1" : component)
  const first = integration.metrics[0]
  const sample = `POST /api/metrics/get-data
Authorization: Bearer <merchant token>
x-customer-token: <customer token>

${JSON.stringify(
  {
    customer_integration: "<connection uuid>",
    start: "2026-10-01",
    end: "2026-10-31",
    metrics: [{ id: "m1", reference_key: first.key, component: first.component }],
  },
  null,
  2,
)}`
  const others = METRICS_INTEGRATIONS.filter((item) => item.slug !== integration.slug).slice(0, 12)

  return (
    <Page
      locale={locale}
      alternatePath={() => metricsIntegrationPath(integration)}
      jsonLd={[
        breadcrumbJsonLd(locale, [
          { name: area.name, path: areaPath("metrics") },
          { name: integration.name, path: metricsIntegrationPath(integration) },
        ]),
      ]}
    >
      <Hero
        locale={locale}
        crumbs={[{ name: area.name, path: areaPath("metrics") }, { name: integration.name }]}
        eyebrow={area.name}
        h1={t.h1(integration.name)}
        intro={t.intro(integration.name, integration.metrics.length)}
        logo={integrationLogo(integration.slug)}
        aside={
          <figure>
            <Code>{sample}</Code>
            <figcaption className="mt-3 text-sm text-muted-foreground">{t.sampleCaption(first.title[locale])}</figcaption>
          </figure>
        }
      />

      {GROUPS.map((component, i) => {
        const metrics = integration.metrics.filter((metric) => group(metric.component) === component)
        if (!metrics.length) return null
        return (
          <section key={component} className={`lp-section border-t ${i % 2 === 0 ? "bg-muted/40" : ""}`}>
            <div className="lp-container">
              <h2 className="lp-title mb-2">{t.groups[component]}</h2>
              <p className="mb-8 text-sm text-muted-foreground">{t.count(metrics.length)}</p>
              <ul className="grid gap-px overflow-hidden rounded-xl border bg-border md:grid-cols-2">
                {metrics.map((metric) => (
                  <li key={metric.key} className="bg-white px-5 py-4">
                    <h3 className="font-semibold">{metric.title[locale]}</h3>
                    {metric.description?.[locale] && (
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{metric.description[locale]}</p>
                    )}
                    <code className="mt-2 block text-xs text-muted-foreground">{metric.key}</code>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )
      })}

      <section className="lp-section border-t">
        <div className="lp-container">
          <h2 className="mb-6 text-xl font-semibold tracking-tight">{t.others}</h2>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {others.map((item) => (
              <li key={item.slug}>
                <a
                  href={href(locale, metricsIntegrationPath(item))}
                  className="flex h-full items-center gap-3 rounded-md border bg-white px-4 py-3 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
                >
                  <img src={integrationLogo(item.slug) ?? ""} alt="" loading="lazy" className="h-6 w-6 shrink-0 object-contain" />
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <a href={href(locale, areaPath("metrics"))} className="lp-link mt-6 inline-flex items-center gap-1.5 text-sm">
            {m.capability.seeAll(area.name)}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>
    </Page>
  )
}

// ---------- LLM model: /llm/{model} ----------

function LlmModelView({ locale, model }: { locale: Locale; model: LlmModelPage }) {
  const m = getMessages(locale).features
  const t = m.llmModel
  const area = m.areas.llm
  const provider = PROVIDER_NAMES[model.provider]
  const fallback = LLM_MODELS.find((other) => other.provider !== model.provider)
  const sample = `POST /api/llm/chat/completions
Authorization: Bearer <merchant token>

${JSON.stringify(
  {
    model: model.slug,
    ...(fallback ? { models: [fallback.slug] } : {}),
    messages: [{ role: "user", content: "..." }],
    stream: true,
  },
  null,
  2,
)}`
  const specs: [string, React.ReactNode][] = [
    [t.specs.provider, provider],
    [t.specs.context, t.specs.tokens(formatNumber(locale, model.context_window))],
    [t.specs.output, t.specs.tokens(formatNumber(locale, model.max_output_tokens))],
    [t.specs.tools, model.supports_tools ? <Check className="h-4 w-4 text-emerald-600" aria-label={m.capability.yes} /> : <X className="h-4 w-4 text-muted-foreground" aria-label={m.capability.no} />],
    [t.specs.vision, model.supports_vision ? <Check className="h-4 w-4 text-emerald-600" aria-label={m.capability.yes} /> : <X className="h-4 w-4 text-muted-foreground" aria-label={m.capability.no} />],
  ]
  const capabilities = areaCapabilities("llm")

  return (
    <Page
      locale={locale}
      alternatePath={() => llmModelPath(model)}
      jsonLd={[
        breadcrumbJsonLd(locale, [
          { name: area.name, path: areaPath("llm") },
          { name: model.name, path: llmModelPath(model) },
        ]),
      ]}
    >
      <Hero
        locale={locale}
        crumbs={[{ name: area.name, path: areaPath("llm") }, { name: model.name }]}
        eyebrow={provider}
        h1={t.h1(model.name)}
        intro={t.intro(model.name, provider)}
        aside={
          <figure>
            <Code>{sample}</Code>
            <figcaption className="mt-3 text-sm text-muted-foreground">{t.sampleCaption}</figcaption>
          </figure>
        }
      />

      <section className="lp-section border-t bg-muted/40">
        <div className="lp-container grid gap-12 lg:grid-cols-2 lg:gap-16">
          <dl className="divide-y self-start rounded-xl border bg-white">
            {specs.map(([label, value]) => (
              <div key={label} className="flex items-center justify-between gap-6 px-5 py-4">
                <dt className="text-muted-foreground">{label}</dt>
                <dd className="font-medium">{value}</dd>
              </div>
            ))}
            <div className="flex items-center justify-between gap-6 px-5 py-4">
              <dt className="text-muted-foreground">model</dt>
              <dd className="font-mono text-[13px]">{model.slug}</dd>
            </div>
          </dl>
          <div>
            <h2 className="mb-5 text-xl font-semibold tracking-tight">{m.hub.capabilities}</h2>
            <ul className="space-y-3">
              {capabilities.map((capability) => (
                <li key={capability.slug}>
                  <a
                    href={href(locale, capabilityPath(capability))}
                    className="flex items-center justify-between gap-3 rounded-md border bg-white px-4 py-3 font-medium transition-colors hover:border-primary"
                  >
                    {capabilityTitle(locale, capability)}
                    <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="lp-section border-t">
        <div className="lp-container">
          <h2 className="mb-6 text-xl font-semibold tracking-tight">{t.others}</h2>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {LLM_MODELS.filter((other) => other.slug !== model.slug).map((other) => (
              <li key={other.slug}>
                <LinkCard href={href(locale, llmModelPath(other))} title={other.name} body={PROVIDER_NAMES[other.provider]} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Page>
  )
}
