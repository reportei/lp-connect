import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ClientsSection } from "@/components/clients-section"
import { WhatIsSection } from "@/components/what-is-section"
import { ApiDemoSection } from "@/components/api-demo-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { ProblemsSection } from "@/components/problems-section"
import { CaseStudySection } from "@/components/case-study-section"
import { NetworksSection } from "@/components/networks-section"
import { AiSection } from "@/components/ai-section"
import { PlansPricingSection } from "@/components/plans-pricing-section"
import { FaqSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/platform-page"
import { DEFAULT_LOCALE, LOCALE_INFO, pageHref, pagePath, type Locale } from "@/lib/i18n"
import { INTEGRATIONS } from "@/lib/integrations"
import { getMessages } from "@/lib/messages"
import { absoluteUrl, pageMetadata } from "@/lib/seo"

export function homeMetadata(locale: Locale) {
  const t = getMessages(locale).meta
  return pageMetadata({
    title: t.homeTitle(INTEGRATIONS.length),
    description: t.homeDescription(INTEGRATIONS.length),
    path: pagePath(locale, "home"),
    locale,
    page: "home",
    imageAlt: t.ogImageAlt,
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
    description: m.meta.softwareDescription(INTEGRATIONS.length),
    inLanguage: LOCALE_INFO[locale].hreflang,
    publisher: { "@type": "Organization", name: "Reportei", url: "https://reportei.com" },
  }

  return (
    <div className="connect-page min-h-screen">
      <JsonLd data={software} />
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
          names={m.integrationNames}
          integrationsHref={pageHref(locale, "integrations")}
          linkPages={locale === DEFAULT_LOCALE}
        />
        <AiSection locale={locale} />
        <PlansPricingSection locale={locale} />
        <FaqSection locale={locale} />
        <CTASection locale={locale} />
      </main>
      <Footer locale={locale} page="home" />
    </div>
  )
}
