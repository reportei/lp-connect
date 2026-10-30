"use client"

import { withBase } from "@/lib/base-path"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { LanguageSwitcher, type LanguageLinks } from "@/components/language-switcher"
import type { Locale } from "@/lib/i18n"

type Link = { href: string; label: string }

type HeaderBarProps = {
  locale: Locale
  homeHref: string
  nav: Link[]
  login: Link
  signup: Link
  menuLabels: { open: string; close: string }
  languageLabel: string
  languageLinks: LanguageLinks
}

export function HeaderBar({ locale, homeHref, nav, login, signup, menuLabels, languageLabel, languageLinks }: HeaderBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const switcher = (labelClassName?: string) => (
    <LanguageSwitcher locale={locale} links={languageLinks} label={languageLabel} labelClassName={labelClassName} />
  )

  return (
    <header className="connect-page sticky top-0 z-50 w-full border-b bg-white">
      <div className="lp-container">
        <div className="flex h-20 items-center justify-between">
          <a href={homeHref} className="flex items-center">
            <img src={withBase("/images/reportei-connect-logo-horizontal.png")} alt="Reportei Connect" className="h-10 w-auto" />
          </a>

          <nav className="hidden xl:flex items-center gap-5 2xl:gap-7">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="whitespace-nowrap text-sm font-medium transition-colors hover:text-primary">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden xl:flex items-center gap-4 2xl:gap-5">
            {switcher("hidden 2xl:inline")}
            <a href={login.href} className="whitespace-nowrap text-sm font-medium hover:text-primary">
              {login.label}
            </a>
            <a href={signup.href} className="lp-button min-h-10 whitespace-nowrap px-4 py-2 text-sm">
              {signup.label}
            </a>
          </div>

          <button
            type="button"
            className="xl:hidden inline-flex size-10 items-center justify-center rounded-md hover:bg-muted"
            aria-label={isMenuOpen ? menuLabels.close : menuLabels.open}
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
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-base font-medium hover:text-primary"
              >
                {item.label}
              </a>
            ))}
            <a href={login.href} className="text-base font-medium hover:text-primary">
              {login.label}
            </a>
            <div>{switcher()}</div>
            <a href={signup.href} className="lp-button mt-2 w-full">
              {signup.label}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
