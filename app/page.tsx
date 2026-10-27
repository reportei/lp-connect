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
import { INTEGRATIONS } from "@/lib/integrations"
import { SITE_URL, pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: `Reportei Connect | Dados de ${INTEGRATIONS.length} plataformas em uma API`,
  description: `Conecte as contas de marketing, CRM e e-commerce dos seus clientes e acesse as métricas de ${INTEGRATIONS.length} plataformas por uma única API.`,
  path: "/",
})

const SOFTWARE = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Reportei Connect",
  url: SITE_URL,
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Web",
  description: `API para levar ao seu produto as métricas de ${INTEGRATIONS.length} plataformas de marketing, CRM e e-commerce dos seus clientes.`,
  inLanguage: "pt-BR",
  publisher: { "@type": "Organization", name: "Reportei", url: "https://reportei.com" },
}

export default function HomePage() {
  return (
    <div className="connect-page min-h-screen">
      <JsonLd data={SOFTWARE} />
      <Header />
      <main>
        <HeroSection />
        <ClientsSection />
        <WhatIsSection />
        <ApiDemoSection />
        <HowItWorksSection />
        <ProblemsSection />
        <CaseStudySection />
        <NetworksSection />
        <AiSection />
        <PlansPricingSection />
        <FaqSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
