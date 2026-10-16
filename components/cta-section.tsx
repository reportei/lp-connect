export function CTASection() {
  return (
    <section className="border-y bg-muted/40">
      <div className="lp-container flex flex-col gap-8 py-16 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="lp-title">Veja o Connect aplicado ao seu produto.</h2>
          <p className="lp-copy mt-4">Teste por 15 dias sem cartão, ou mostre seu cenário ao nosso time.</p>
        </div>
        <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
          <a href="https://app.connect.reportei.com/signup" className="lp-button">
            Começar teste grátis
          </a>
          <a
            href="https://calendly.com/felipe-reportei/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="lp-link text-sm"
          >
            Agendar demonstração
          </a>
        </div>
      </div>
    </section>
  )
}
