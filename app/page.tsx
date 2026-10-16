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

export default function HomePage() {
  return (
    <div className="connect-page min-h-screen">
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
