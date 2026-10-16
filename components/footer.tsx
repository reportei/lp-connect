import { INTEGRATIONS } from "@/lib/integrations"

const COLUMNS = [
  {
    title: "Produto",
    links: [
      { href: "/#what-is", label: "O que é" },
      { href: "/#na-pratica", label: "Na prática" },
      { href: "/#networks", label: "Integrações" },
      { href: "/#precos", label: "Planos e preços" },
      { href: "/#faq", label: "Perguntas frequentes" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { href: "https://reportei.com", label: "Sobre o Reportei" },
      { href: "/clientes/leadster", label: "Histórias de clientes" },
      { href: "mailto:connect@reportei.com", label: "Contato" },
    ],
  },
  {
    title: "Desenvolvedores",
    links: [
      { href: "https://developers.reportei.com/connect", label: "Documentação" },
      { href: "/#ia", label: "Implementar com IA" },
      { href: "https://app.connect.reportei.com/signup", label: "Começar teste grátis" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="connect-page border-t py-16">
      <div className="lp-container">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <img src="/images/reportei-connect-logo-horizontal.png" alt="Reportei Connect" className="h-12 w-auto" />
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
