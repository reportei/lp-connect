"use client"

import { Menu, X } from "lucide-react"
import { useState } from "react"

const NAV = [
  { href: "/#na-pratica", label: "Na prática" },
  { href: "/#networks", label: "Integrações" },
  { href: "/#clientes", label: "Clientes" },
  { href: "/#ia", label: "Com IA" },
  { href: "/#precos", label: "Preços" },
  { href: "https://developers.reportei.com/connect", label: "Documentação" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="connect-page sticky top-0 z-50 w-full border-b bg-white">
      <div className="lp-container">
        <div className="flex h-20 items-center justify-between">
          <a href="/" className="flex items-center">
            <img src="/images/reportei-connect-logo-horizontal.png" alt="Reportei Connect" className="h-10 w-auto" />
          </a>

          <nav className="hidden xl:flex items-center gap-7">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium transition-colors hover:text-primary">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden xl:flex items-center gap-5">
            <a href="https://app.connect.reportei.com/login" className="text-sm font-medium hover:text-primary">
              Entrar
            </a>
            <a href="https://app.connect.reportei.com/signup" className="lp-button min-h-10 px-4 py-2 text-sm">
              Começar teste grátis
            </a>
          </div>

          <button
            type="button"
            className="xl:hidden inline-flex size-10 items-center justify-center rounded-md hover:bg-muted"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="xl:hidden border-t bg-white">
          <nav className="lp-container flex flex-col gap-4 py-5">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-base font-medium hover:text-primary"
              >
                {item.label}
              </a>
            ))}
            <a href="https://app.connect.reportei.com/login" className="text-base font-medium hover:text-primary">
              Entrar
            </a>
            <a href="https://app.connect.reportei.com/signup" className="lp-button mt-2 w-full">
              Começar teste grátis
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
