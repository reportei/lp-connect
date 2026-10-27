import { withBase } from "@/lib/base-path"
import { INTEGRATIONS } from "@/lib/integrations"

const COLUMNS = [
  {
    title: "Produto",
    links: [
      { href: withBase("/#what-is"), label: "O que é" },
      { href: withBase("/#na-pratica"), label: "Na prática" },
      { href: withBase("/#networks"), label: "Integrações" },
      { href: withBase("/#precos"), label: "Planos e preços" },
      { href: withBase("/#faq"), label: "Perguntas frequentes" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { href: "https://reportei.com", label: "Sobre o Reportei" },
      { href: withBase("/clientes/leadster"), label: "Histórias de clientes" },
      { href: withBase("/integracoes#comparativos"), label: "Comparativos" },
      { href: "mailto:connect@reportei.com", label: "Contato" },
    ],
  },
  {
    title: "APIs",
    links: [
      { href: withBase("/api-instagram"), label: "API do Instagram" },
      { href: withBase("/api-meta-ads"), label: "API do Meta Ads" },
      { href: withBase("/api-google-ads"), label: "API do Google Ads" },
      { href: withBase("/api-rd-station"), label: "API do RD Station" },
      { href: withBase("/integracoes"), label: "Todas as integrações" },
      { href: withBase("/guias"), label: "Guias de APIs" },
    ],
  },
  {
    title: "Desenvolvedores",
    links: [
      { href: "https://developers.reportei.com/connect", label: "Documentação" },
      { href: withBase("/#ia"), label: "Implementar com IA" },
      { href: "https://app.connect.reportei.com/signup", label: "Começar teste grátis" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="connect-page border-t py-16">
      <div className="lp-container">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <img src={withBase("/images/reportei-connect-logo-horizontal.png")} alt="Reportei Connect" className="h-12 w-auto" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {INTEGRATIONS.length} integrações de marketing, CRM e e-commerce em uma API para o seu sistema.
            </p>
            <a href="mailto:connect@reportei.com" className="lp-link mt-4 inline-block text-sm">
              connect@reportei.com
            </a>
          </div>

          {COLUMNS.map((column) => (
            <div key={column.title}>
              <h3 className="mb-4 text-sm font-semibold">{column.title}</h3>
              <ul className="space-y-3 text-sm">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-muted-foreground transition-colors hover:text-foreground">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t pt-6 text-sm text-muted-foreground sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Reportei Connect. Um produto do Reportei.</p>
          <a href="https://app.connect.reportei.com/legal/terms" className="hover:text-foreground">
            Termos de serviço
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
