import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ClientsSection } from "@/components/clients-section"
import { WhatIsSection } from "@/components/what-is-section"
import { ApiDemoSection } from "@/components/api-demo-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { ProblemsSection } from "@/components/problems-section"
import { CaseStudySection } from "@/components/case-study-section"
import { NetworksSection } from "@/components/networks-section"
import { ToolkitsHomeSection } from "@/components/toolkit-pages"
import { AiSection } from "@/components/ai-section"
import { PlansPricingSection } from "@/components/plans-pricing-section"
import { FaqSection, faqItems } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { JsonLd, faqJsonLd } from "@/components/platform-page"
import { LOCALE_INFO, pageHref, pagePath, type Locale } from "@/lib/i18n"
import { CATALOG_COUNT, NATIVE_COUNT, catalogEntries } from "@/lib/catalog"
import { getMessages } from "@/lib/messages"
import { absoluteUrl, pageMetadata } from "@/lib/seo"

export function homeMetadata(locale: Locale) {
  const t = getMessages(locale).meta
  return pageMetadata({
    title: t.homeTitle,
    description: t.homeDescription(NATIVE_COUNT),
    path: pagePath(locale, "home"),
    locale,
    page: "home",
    imageAlt: t.ogImageAlt(CATALOG_COUNT),
  })
}

export function HomePage({ locale }: { locale: Locale }) {
  const m = getMessages(locale)
  const software = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Reportei Connect",
    url: absoluteUrl(pagePath(locale, "home")),
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web",
    description: m.meta.softwareDescription(NATIVE_COUNT),
    inLanguage: LOCALE_INFO[locale].hreflang,
    publisher: { "@type": "Organization", name: "Reportei", url: "https://reportei.com" },
  }

  return (
    <div className="connect-page min-h-screen">
      <JsonLd data={software} />
      <JsonLd data={faqJsonLd(faqItems(locale))} />
      <Header locale={locale} page="home" />
      <main>
        <HeroSection locale={locale} />
        <ClientsSection locale={locale} />
        <WhatIsSection locale={locale} />
        <ApiDemoSection t={m.apiDemo} locale={locale} />
        <HowItWorksSection locale={locale} />
        <ProblemsSection locale={locale} />
        <CaseStudySection locale={locale} />
        <NetworksSection
          t={m.networks}
          categories={m.categories}
          entries={catalogEntries(locale)}
          integrationsHref={pageHref(locale, "integrations")}
        />
        <ToolkitsHomeSection locale={locale} />
        <AiSection locale={locale} />
        <PlansPricingSection locale={locale} />
        <FaqSection locale={locale} />
        <CTASection locale={locale} />
      </main>
      <Footer locale={locale} page="home" />
    </div>
  )
}
