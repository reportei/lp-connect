import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { WhatIsSection } from "@/components/what-is-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { BenefitsSection } from "@/components/benefits-section"
import { DemoCTASection } from "@/components/demo-cta-section"
import { NetworksSection } from "@/components/networks-section"
import { CaseStudySection } from "@/components/case-study-section"
import { DocumentationSection } from "@/components/documentation-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <WhatIsSection />
        <HowItWorksSection />
        <BenefitsSection />
        <DemoCTASection />
        <NetworksSection />
        <CaseStudySection />
        <DocumentationSection />
      </main>
      <Footer />
    </div>
  )
}
