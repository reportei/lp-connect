import type React from "react"
import { ArrowRight, CheckCircle2, KeyRound, Plug } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { FaqList, JsonLd, faqJsonLd } from "@/components/platform-page"
import { withBase } from "@/lib/base-path"
import { appUrl, formatNumber, LOCALE_INFO, localePath, type AlternatePath, type Locale } from "@/lib/i18n"
import { getMessages } from "@/lib/messages"
import { absoluteUrl, pageMetadata } from "@/lib/seo"
import { reviewedToolExample } from "@/lib/toolkits/examples"
import {
  TOOL_COUNT,
  TOOLKIT_CATEGORIES,
  TOOLKITS,
  findTool,
  findToolkit,
  relatedToolkits,
  sampleArguments,
  toolkitCopy,
  toolkitLogoSrc,
  toolkitPath,
  toolkitsHubPath,
  toolkitToolsPath,
  toolPath,
  toolText,
  toolUrlSlug,
  toolkitUrlSlug,
  type AuthMode,
  type Tool,
  type Toolkit,
} from "@/lib/toolkits"

const DOCS_URL = "https://developers.reportei.com/connect"

// Locale-aware href for a path that is the same in every language.
const href = (locale: Locale, path: string) => withBase(localePath(locale, path))

export function truncate(text: string, max = 155) {
  if (text.length <= max) return text
  const cut = text.slice(0, max - 1)
  return `${cut.slice(0, cut.lastIndexOf(" "))}…`
}

// The brand goes at the end of the title only while the whole title fits in a search result.
export function withBrand(title: string) {
  const branded = `${title} | Reportei Connect`
  return branded.length <= 60 ? branded : title
}

// Short tool descriptions get a sentence that names the app, so no two meta descriptions are alike.
function toolDescription(locale: Locale, toolkit: Toolkit, description: string) {
  const suffix = getMessages(locale).toolkits.tool.metaSuffix(toolkit.name)
  return description.length < 110 ? `${description} ${suffix}` : description
}

export function breadcrumbJsonLd(locale: Locale, items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(localePath(locale, item.path)),
    })),
  }
}

export function Breadcrumb({ locale, items }: { locale: Locale; items: { name: string; path?: string }[] }) {
  return (
    <nav aria-label={getMessages(locale).toolkits.breadcrumbLabel} className="mb-8 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
      {items.map((item, i) => (
        <span key={item.name} className="flex items-center gap-2">
          {i > 0 && <span aria-hidden="true">/</span>}
          {item.path ? (
            <a href={href(locale, item.path)} className="hover:text-foreground">
              {item.name}
            </a>
          ) : (
            <span className={i === items.length - 1 ? "text-foreground" : undefined}>{item.name}</span>
          )}
        </span>
      ))}
    </nav>
  )
}

function ToolkitLogo({ toolkit, className }: { toolkit: Toolkit; className: string }) {
  const src = toolkitLogoSrc(toolkit)
  if (!src) return <Plug className={`${className} text-muted-foreground`} aria-hidden="true" />
  return <img src={src} alt="" loading="lazy" className={`${className} object-contain`} />
}

export function Page({
  locale,
  alternatePath,
  jsonLd,
  children,
}: {
  locale: Locale
  alternatePath: AlternatePath
  jsonLd: object[]
  children: React.ReactNode
}) {
  return (
    <div className="connect-page min-h-screen">
      {jsonLd.map((data, i) => (
        <JsonLd key={i} data={data} />
      ))}
      <Header locale={locale} alternatePath={alternatePath} />
      <main>
        {children}
        <CTASection locale={locale} />
      </main>
      <Footer locale={locale} alternatePath={alternatePath} />
    </div>
  )
}

function executeSample(tool: Tool, locale: Locale) {
  const body = { customer_toolkit: "<connection UUID>", arguments: sampleArguments(tool, locale) }
  return `POST https://connect.reportei.com/api/tools/${tool.slug}/execute
Authorization: Bearer <merchant token>
x-customer-token: <customer token>
Content-Type: application/json
Accept: application/json

${JSON.stringify(body, null, 2)}`
}

function authLabels(locale: Locale, toolkit: Toolkit) {
  const t = getMessages(locale).toolkits.auth
  return toolkit.auth.map((mode) => t[mode].label).join(", ")
}

function authBody(locale: Locale, toolkit: Toolkit, mode: AuthMode) {
  const t = getMessages(locale).toolkits.auth
  return mode === "oauth2" ? t.oauth2.body(toolkit.slug) : t[mode].body
}

function ConnectionModes({ locale, toolkit }: { locale: Locale; toolkit: Toolkit }) {
  const t = getMessages(locale).toolkits
  return (
    <div className="space-y-3">
      {toolkit.auth.map((mode) => (
        <div key={mode} className="rounded-lg border bg-white p-5">
          <h3 className="flex items-center gap-2 font-semibold">
            <KeyRound className="h-4 w-4 text-primary" aria-hidden="true" />
            {t.auth[mode].label}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{authBody(locale, toolkit, mode)}</p>
        </div>
      ))}
      {toolkit.hostParams.length > 0 && (
        <p className="text-sm leading-relaxed text-muted-foreground">
          {t.hostParams(toolkit.hostParams.map((param) => `{${param}}`).join(", "))}
        </p>
      )}
    </div>
  )
}

function ToolLinks({ locale, toolkit, tools }: { locale: Locale; toolkit: Toolkit; tools: Tool[] }) {
  return (
    <ul className="grid gap-px overflow-hidden rounded-xl border bg-border md:grid-cols-2">
      {tools.map((tool) => {
        const text = toolText(toolkit, tool, locale)
        return (
          <li key={tool.slug} className="bg-white">
            <a href={href(locale, toolPath(toolkit, tool))} className="group block h-full px-5 py-4 transition-colors hover:bg-muted/40">
              <span className="flex items-center justify-between gap-3">
                <span className="font-semibold group-hover:text-primary">{text.name}</span>
                <span className="shrink-0 rounded border px-1.5 py-0.5 font-mono text-[11px] text-muted-foreground">
                  {tool.method}
                </span>
              </span>
              <span className="mt-1 line-clamp-2 block text-sm leading-relaxed text-muted-foreground">{text.description}</span>
            </a>
          </li>
        )
      })}
    </ul>
  )
}

function RelatedToolkits({ locale, toolkit }: { locale: Locale; toolkit: Toolkit }) {
  const t = getMessages(locale).toolkits
  const related = relatedToolkits(toolkit)
  return (
    <div>
      <h2 className="mb-5 text-xl font-semibold tracking-tight">{t.toolkit.relatedTitle}</h2>
      <ul className="space-y-3">
        {related.map((item) => (
          <li key={item.slug}>
            <a
              href={href(locale, toolkitPath(item))}
              className="flex items-center gap-3 rounded-md border bg-white px-4 py-3 font-medium transition-colors hover:border-primary"
            >
              <ToolkitLogo toolkit={item} className="h-6 w-6" />
              {item.name}
              <span className="ml-auto text-xs text-muted-foreground">{t.hub.toolCount(item.tools.length)}</span>
            </a>
          </li>
        ))}
      </ul>
      <a href={href(locale, toolkitsHubPath())} className="lp-link mt-6 inline-flex items-center gap-1.5 text-sm">
        {t.toolkit.allToolkits(TOOLKITS.length)}
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </a>
    </div>
  )
}

// ---------- Home block ----------

const HOME_PICKS = [
  "whatsapp",
  "slack",
  "notion",
  "google_calendar",
  "gmail",
  "jira",
  "stripe",
  "asana",
  "calendly",
  "github",
  "typeform",
  "mercado_livre",
]

export function ToolkitsHomeSection({ locale }: { locale: Locale }) {
  const t = getMessages(locale).toolkits.home
  const picks = HOME_PICKS.map((slug) => TOOLKITS.find((toolkit) => toolkit.slug === slug)).filter(
    (toolkit): toolkit is Toolkit => Boolean(toolkit),
  )

  return (
    <section id="toolkits" className="lp-section border-t bg-muted/40">
      <div className="lp-container">
        <div className="mb-10 max-w-3xl">
          <p className="lp-eyebrow mb-3">{t.eyebrow}</p>
          <h2 className="lp-title mb-5">{t.title(TOOLKITS.length)}</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">{t.copy(formatNumber(locale, TOOL_COUNT))}</p>
        </div>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {picks.map((toolkit) => (
            <li key={toolkit.slug}>
              <a
                href={href(locale, toolkitPath(toolkit))}
                className="flex h-full items-center gap-3 rounded-md border bg-white px-4 py-3 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
              >
                <ToolkitLogo toolkit={toolkit} className="h-7 w-7 shrink-0" />
                {toolkit.name}
              </a>
            </li>
          ))}
        </ul>
        <a href={href(locale, toolkitsHubPath())} className="lp-button mt-10 inline-flex items-center gap-2">
          {t.cta(TOOLKITS.length)}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}

// ---------- Hub: /toolkits ----------

export function toolkitsHubMetadata(locale: Locale) {
  const t = getMessages(locale).toolkits.hub
  return pageMetadata({
    title: t.metaTitle(TOOLKITS.length, formatNumber(locale, TOOL_COUNT)),
    description: t.metaDescription(TOOLKITS.length, formatNumber(locale, TOOL_COUNT)),
    path: localePath(locale, toolkitsHubPath()),
    locale,
    page: toolkitsHubPath,
  })
}

export function ToolkitsHubPage({ locale }: { locale: Locale }) {
  const t = getMessages(locale).toolkits
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: t.hub.metaTitle(TOOLKITS.length, formatNumber(locale, TOOL_COUNT)),
    numberOfItems: TOOLKITS.length,
    itemListElement: TOOLKITS.map((toolkit, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: toolkit.name,
      url: absoluteUrl(localePath(locale, toolkitPath(toolkit))),
    })),
  }

  return (
    <Page locale={locale} alternatePath={toolkitsHubPath} jsonLd={[itemList]}>
      <section className="lp-hero">
        <div className="lp-container">
          <p className="lp-eyebrow mb-4">{t.hub.eyebrow}</p>
          <h1 className="lp-title max-w-[24ch] text-[clamp(2.2rem,4vw,3.4rem)]">{t.hub.h1(TOOLKITS.length)}</h1>
          <p className="lp-copy mt-6">{t.hub.copy}</p>
          <p className="mt-6 text-sm font-medium text-muted-foreground">{t.hub.stats(TOOLKITS.length, formatNumber(locale, TOOL_COUNT))}</p>
        </div>
      </section>

      <section className="lp-section border-t bg-muted/40">
        <div className="lp-container space-y-14">
          {TOOLKIT_CATEGORIES.map((category) => {
            const items = TOOLKITS.filter((toolkit) => toolkit.category === category)
            if (!items.length) return null
            return (
              <div key={category}>
                <h2 className="mb-5 text-xl font-semibold tracking-tight">{t.categories[category]}</h2>
                <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((toolkit) => (
                    <li key={toolkit.slug}>
                      <a
                        href={href(locale, toolkitPath(toolkit))}
                        className="flex h-full items-start gap-4 rounded-lg border bg-white p-5 transition-colors hover:border-primary"
                      >
                        <ToolkitLogo toolkit={toolkit} className="h-8 w-8 shrink-0" />
                        <span className="min-w-0">
                          <span className="block font-semibold">{toolkit.name}</span>
                          <span className="mt-1 line-clamp-2 block text-sm leading-relaxed text-muted-foreground">
                            {toolkitCopy(toolkit, locale).tagline}
                          </span>
                          <span className="mt-2 block text-xs font-medium text-primary">
                            {t.hub.toolCount(toolkit.tools.length)}
                          </span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </section>
    </Page>
  )
}

// ---------- Toolkit: /toolkit/{toolkit} ----------

export function toolkitParams() {
  return TOOLKITS.map((toolkit) => ({ toolkit: toolkitUrlSlug(toolkit) }))
}

export function toolParams() {
  return TOOLKITS.flatMap((toolkit) =>
    toolkit.tools.map((tool) => ({ toolkit: toolkitUrlSlug(toolkit), tool: toolUrlSlug(toolkit, tool) })),
  )
}

export function toolkitMetadata(locale: Locale, slug: string) {
  const toolkit = findToolkit(slug)
  if (!toolkit) return {}
  const t = getMessages(locale).toolkits.toolkit
  return pageMetadata({
    title: withBrand(t.metaTitle(toolkit.name)),
    description: truncate(toolkitCopy(toolkit, locale).tagline, 160),
    path: localePath(locale, toolkitPath(toolkit)),
    locale,
    page: () => toolkitPath(toolkit),
  })
}

export function ToolkitPage({ locale, slug }: { locale: Locale; slug: string }) {
  const toolkit = findToolkit(slug)!
  const m = getMessages(locale)
  const t = m.toolkits
  const copy = toolkitCopy(toolkit, locale)
  // A write shows what the toolkit is for better than a listing does.
  const featured = toolkit.tools.find((tool) => tool.method === "POST") ?? toolkit.tools[0]
  const featuredExample = reviewedToolExample(featured.slug, locale)
  const faq = t.toolkit.faq(toolkit.name, toolkit.tools.length, authLabels(locale, toolkit))
  const preview = toolkit.tools.slice(0, 10)

  return (
    <Page
      locale={locale}
      alternatePath={() => toolkitPath(toolkit)}
      jsonLd={[
        faqJsonLd(faq),
        breadcrumbJsonLd(locale, [
          { name: t.breadcrumb, path: toolkitsHubPath() },
          { name: toolkit.name, path: toolkitPath(toolkit) },
        ]),
      ]}
    >
      <section className="lp-hero">
        <div className="lp-container">
          <Breadcrumb locale={locale} items={[{ name: t.breadcrumb, path: toolkitsHubPath() }, { name: toolkit.name }]} />
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <ToolkitLogo toolkit={toolkit} className="mb-8 h-12 w-12" />
              <p className="lp-eyebrow mb-3">{t.categories[toolkit.category]}</p>
              <h1 className="lp-title max-w-[24ch] text-[clamp(2.2rem,4vw,3.4rem)]">{t.toolkit.h1(toolkit.name)}</h1>
              <p className="lp-copy mt-6">{copy.intro}</p>
              <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-5">
                <a href={appUrl(locale, "/signup")} className="lp-button">
                  {t.toolkit.signup}
                </a>
                <a href={DOCS_URL} className="lp-link text-sm">
                  {t.toolkit.docs}
                </a>
              </div>
              <p className="mt-5 text-sm text-muted-foreground">{t.toolkit.trial}</p>
            </div>
            <figure className="min-w-0 self-start">
              <pre className="lp-code overflow-x-auto p-5 text-[13px]">{executeSample(featured, locale)}</pre>
              <figcaption className="mt-3 text-sm text-muted-foreground">
                {t.toolkit.sampleCaption(toolText(toolkit, featured, locale).name)}
                {featuredExample && (
                  <span className="mt-2 block">{featuredExample.placeholderNote}</span>
                )}
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="lp-section border-t">
        <div className="lp-container">
          <p className="lp-eyebrow mb-3">{t.toolkit.howEyebrow}</p>
          <h2 className="lp-title max-w-[26ch]">{t.toolkit.howTitle(toolkit.name)}</h2>
          <ol className="mt-10 grid gap-px overflow-hidden rounded-xl border bg-border md:grid-cols-3">
            {t.toolkit.steps(toolkit.name).map((step, i) => (
              <li key={step.title} className="bg-white p-7">
                <span className="text-sm font-semibold text-primary">{i + 1}</span>
                <h3 className="mt-2 text-lg font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {copy.useCases.length > 0 && (
        <section className="lp-section border-t bg-muted/40">
          <div className="lp-container">
            <p className="lp-eyebrow mb-3">{t.toolkit.useCasesEyebrow}</p>
            <h2 className="lp-title max-w-[26ch]">{t.toolkit.useCasesTitle(toolkit.name)}</h2>
            <ul className="mt-10 grid gap-px overflow-hidden rounded-xl border bg-border md:grid-cols-3">
              {copy.useCases.map((useCase) => (
                <li key={useCase.title} className="bg-white p-7">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600" aria-hidden="true" />
                  <h3 className="mt-3 text-lg font-semibold tracking-tight">{useCase.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{useCase.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="lp-section border-t">
        <div className="lp-container">
          <p className="lp-eyebrow mb-3">{t.toolkit.toolsEyebrow}</p>
          <h2 className="lp-title mb-10">{t.toolkit.toolsTitle(toolkit.name, toolkit.tools.length)}</h2>
          <ToolLinks locale={locale} toolkit={toolkit} tools={preview} />
          <a href={href(locale, toolkitToolsPath(toolkit))} className="lp-link mt-8 inline-flex items-center gap-1.5">
            {t.toolkit.seeAllTools(toolkit.tools.length)}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="lp-section border-t bg-muted/40">
        <div className="lp-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="lp-eyebrow mb-3">{t.toolkit.connectEyebrow}</p>
            <h2 className="lp-title">{t.toolkit.connectTitle}</h2>
            <a href={toolkit.docsUrl} rel="nofollow noopener" target="_blank" className="lp-link mt-6 inline-block text-sm">
              {t.toolkit.officialDocs(toolkit.name)}
            </a>
          </div>
          <ConnectionModes locale={locale} toolkit={toolkit} />
        </div>
      </section>

      <section className="lp-section border-t">
        <div className="lp-container grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div>
            <h2 className="lp-title mb-8">{t.toolkit.faqTitle(toolkit.name)}</h2>
            <FaqList items={faq} />
          </div>
          <RelatedToolkits locale={locale} toolkit={toolkit} />
        </div>
      </section>
    </Page>
  )
}

// ---------- Tools list: /toolkit/{toolkit}/tools ----------

export function toolkitToolsMetadata(locale: Locale, slug: string) {
  const toolkit = findToolkit(slug)
  if (!toolkit) return {}
  const t = getMessages(locale).toolkits.toolsPage
  const examples = toolkit.tools
    .slice(0, 3)
    .map((tool) => toolText(toolkit, tool, locale).name.toLowerCase())
    .join(", ")
  return pageMetadata({
    title: withBrand(t.metaTitle(toolkit.name, toolkit.tools.length)),
    description: truncate(t.metaDescription(toolkit.name, toolkit.tools.length, examples), 160),
    path: localePath(locale, toolkitToolsPath(toolkit)),
    locale,
    page: () => toolkitToolsPath(toolkit),
  })
}

export function ToolkitToolsPage({ locale, slug }: { locale: Locale; slug: string }) {
  const toolkit = findToolkit(slug)!
  const t = getMessages(locale).toolkits
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: t.toolsPage.h1(toolkit.name),
    numberOfItems: toolkit.tools.length,
    itemListElement: toolkit.tools.map((tool, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: toolText(toolkit, tool, locale).name,
      url: absoluteUrl(localePath(locale, toolPath(toolkit, tool))),
    })),
  }

  return (
    <Page
      locale={locale}
      alternatePath={() => toolkitToolsPath(toolkit)}
      jsonLd={[
        itemList,
        breadcrumbJsonLd(locale, [
          { name: t.breadcrumb, path: toolkitsHubPath() },
          { name: toolkit.name, path: toolkitPath(toolkit) },
          { name: "Tools", path: toolkitToolsPath(toolkit) },
        ]),
      ]}
    >
      <section className="lp-hero">
        <div className="lp-container">
          <Breadcrumb
            locale={locale}
            items={[
              { name: t.breadcrumb, path: toolkitsHubPath() },
              { name: toolkit.name, path: toolkitPath(toolkit) },
              { name: "Tools" },
            ]}
          />
          <ToolkitLogo toolkit={toolkit} className="mb-8 h-12 w-12" />
          <h1 className="lp-title max-w-[24ch] text-[clamp(2.2rem,4vw,3.4rem)]">{t.toolsPage.h1(toolkit.name)}</h1>
          <p className="lp-copy mt-6">{t.toolsPage.copy(toolkit.name, toolkit.tools.length)}</p>
        </div>
      </section>

      <section className="lp-section border-t bg-muted/40">
        <div className="lp-container grid gap-12 lg:grid-cols-[1.4fr_0.6fr] lg:gap-16">
          <ToolLinks locale={locale} toolkit={toolkit} tools={toolkit.tools} />
          <RelatedToolkits locale={locale} toolkit={toolkit} />
        </div>
      </section>
    </Page>
  )
}

// ---------- Tool: /toolkit/{toolkit}/tool/{tool} ----------

export function toolMetadata(locale: Locale, slug: string, toolSlug: string) {
  const toolkit = findToolkit(slug)
  const tool = toolkit && findTool(toolkit, toolSlug)
  if (!toolkit || !tool) return {}
  const t = getMessages(locale).toolkits.tool
  const text = toolText(toolkit, tool, locale)
  return pageMetadata({
    title: withBrand(t.metaTitle(text.name, toolkit.name)),
    description: reviewedToolExample(tool.slug, locale)?.metaDescription ?? truncate(toolDescription(locale, toolkit, text.description), 160),
    path: localePath(locale, toolPath(toolkit, tool)),
    locale,
    page: () => toolPath(toolkit, tool),
  })
}

export function ToolPage({ locale, slug, toolSlug }: { locale: Locale; slug: string; toolSlug: string }) {
  const toolkit = findToolkit(slug)!
  const tool = findTool(toolkit, toolSlug)!
  const t = getMessages(locale).toolkits
  const text = toolText(toolkit, tool, locale)
  const reviewed = reviewedToolExample(tool.slug, locale)
  const others = toolkit.tools.filter((other) => other.slug !== tool.slug).slice(0, 8)
  const techArticle = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: t.tool.h1(text.name, toolkit.name),
    description: truncate(text.description, 300),
    inLanguage: LOCALE_INFO[locale].hreflang,
    url: absoluteUrl(localePath(locale, toolPath(toolkit, tool))),
    about: { "@type": "SoftwareApplication", name: toolkit.name, applicationCategory: "BusinessApplication" },
    publisher: { "@type": "Organization", name: "Reportei", url: "https://reportei.com" },
  }

  return (
    <Page
      locale={locale}
      alternatePath={() => toolPath(toolkit, tool)}
      jsonLd={[
        techArticle,
        breadcrumbJsonLd(locale, [
          { name: t.breadcrumb, path: toolkitsHubPath() },
          { name: toolkit.name, path: toolkitPath(toolkit) },
          { name: "Tools", path: toolkitToolsPath(toolkit) },
          { name: text.name, path: toolPath(toolkit, tool) },
        ]),
      ]}
    >
      <section className="lp-hero">
        <div className="lp-container">
          <Breadcrumb
            locale={locale}
            items={[
              { name: t.breadcrumb, path: toolkitsHubPath() },
              { name: toolkit.name, path: toolkitPath(toolkit) },
              { name: "Tools", path: toolkitToolsPath(toolkit) },
              { name: text.name },
            ]}
          />
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div>
              <ToolkitLogo toolkit={toolkit} className="mb-8 h-12 w-12" />
              <h1 className="lp-title max-w-[24ch] text-[clamp(2rem,3.6vw,3rem)]">{t.tool.h1(text.name, toolkit.name)}</h1>
              <p className="lp-copy mt-6">{text.description}</p>
              <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm">
                <div>
                  <dt className="text-muted-foreground">{t.tool.identifier}</dt>
                  <dd className="font-mono">{tool.slug}</dd>
                </div>
              </dl>
              <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-5">
                <a href={appUrl(locale, "/signup")} className="lp-button">
                  {t.toolkit.signup}
                </a>
                <a href={DOCS_URL} className="lp-link text-sm">
                  {t.toolkit.docs}
                </a>
              </div>
            </div>
            <div className="min-w-0 self-start">
              <h2 className="mb-3 text-lg font-semibold tracking-tight">{t.tool.requestTitle}</h2>
              <pre className="lp-code overflow-x-auto p-5 text-[13px]">{executeSample(tool, locale)}</pre>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.tool.requestCopy}</p>
              {reviewed && <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{reviewed.placeholderNote}</p>}
            </div>
          </div>
        </div>
      </section>

      {reviewed && (
        <section id="example-notes" className="lp-section border-t bg-muted/40">
          <div className="lp-container">
            <h2 className="mb-5 text-xl font-semibold tracking-tight">{reviewed.notesTitle}</h2>
            <ul className="max-w-4xl list-disc space-y-3 pl-5 leading-relaxed text-muted-foreground">
              {reviewed.notes.map((note) => <li key={note}>{note}</li>)}
            </ul>
            {reviewed.preparationCode && (
              <details className="mt-8 rounded-lg border bg-white p-5">
                <summary className="cursor-pointer font-semibold">{reviewed.preparationTitle}</summary>
                <pre className="lp-code mt-5 overflow-x-auto p-5 text-[13px]">{reviewed.preparationCode}</pre>
              </details>
            )}
          </div>
        </section>
      )}

      <section className="lp-section border-t">
        <div className="lp-container">
          <h2 className="lp-title mb-3">{t.tool.paramsTitle}</h2>
          {t.tool.paramsNote && tool.params.length > 0 && (
            <p className="mb-6 text-sm text-muted-foreground">{t.tool.paramsNote}</p>
          )}
          {tool.params.length === 0 ? (
            <p className="text-muted-foreground">{t.tool.noParams}</p>
          ) : (
            <div className="overflow-x-auto rounded-xl border">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead className="bg-muted/40 text-xs uppercase tracking-wider text-muted-foreground">
                  <tr>
                    <th className="px-5 py-3 font-semibold">{t.tool.columns.name}</th>
                    <th className="px-5 py-3 font-semibold">{t.tool.columns.type}</th>
                    <th className="px-5 py-3 font-semibold">{t.tool.columns.required}</th>
                    <th className="px-5 py-3 font-semibold">{t.tool.columns.description}</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {tool.params.map((param) => (
                    <tr key={param.name} className="align-top">
                      <td className="px-5 py-4 font-mono text-[13px] font-medium">{param.name}</td>
                      <td className="px-5 py-4 font-mono text-[13px] text-muted-foreground">{param.type}</td>
                      <td className="px-5 py-4">{reviewed?.conditions?.[param.name] ?? (param.required ? t.tool.yes : t.tool.no)}</td>
                      <td className="px-5 py-4 leading-relaxed text-muted-foreground" lang="en">
                        {param.description}
                        {param.enum && (
                          <span className="mt-1 block font-mono text-[12px]">
                            {t.tool.values} {param.enum.join(", ")}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      <section className="lp-section border-t bg-muted/40">
        <div className="lp-container grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="lp-title">{t.tool.connectionsTitle}</h2>
            <p className="lp-copy mt-4">{t.tool.connectionsCopy(toolkit.name)}</p>
            <div className="mt-8">
              <ConnectionModes locale={locale} toolkit={toolkit} />
            </div>
          </div>
          <div className="min-w-0 space-y-8">
            <div className="rounded-lg border bg-white p-6">
              <h2 className="text-lg font-semibold tracking-tight">{t.tool.responseTitle}</h2>
              <p className="mt-2 break-words leading-relaxed text-muted-foreground">{t.tool.responseCopy}</p>
              {reviewed && (
                <>
                  <h3 className="mt-5 text-sm font-semibold">{reviewed.responseLabel}</h3>
                  <pre className="lp-code mt-3 overflow-x-auto p-4 text-[13px]">{reviewed.responseExample}</pre>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{reviewed.responseNote}</p>
                </>
              )}
            </div>
            <div className="rounded-lg border bg-white p-6">
              <h2 className="text-lg font-semibold tracking-tight">{t.tool.aiTitle}</h2>
              <p className="mt-2 leading-relaxed text-muted-foreground">{t.tool.aiCopy(tool.slug)}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="lp-section border-t">
        <div className="lp-container grid gap-12 lg:grid-cols-[1.4fr_0.6fr] lg:gap-16">
          <div>
            <h2 className="lp-title mb-8">{t.tool.otherTools(toolkit.name)}</h2>
            <ToolLinks locale={locale} toolkit={toolkit} tools={others} />
            <a href={href(locale, toolkitToolsPath(toolkit))} className="lp-link mt-8 inline-flex items-center gap-1.5">
              {t.toolkit.seeAllTools(toolkit.tools.length)}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <RelatedToolkits locale={locale} toolkit={toolkit} />
        </div>
      </section>
    </Page>
  )
}
