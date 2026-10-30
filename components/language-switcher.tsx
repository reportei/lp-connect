"use client"

import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import { ChevronDown } from "lucide-react"
import { Flag } from "@/components/flag"
import { LOCALE_INFO, SWITCHER_ORDER, type Locale } from "@/lib/i18n"

export type LanguageLinks = Record<Locale, string>

type LanguageSwitcherProps = {
  locale: Locale
  links: LanguageLinks
  label: string
  // The footer opens it upwards, since it sits at the bottom of the page.
  side?: "top" | "bottom"
  // Lets the header show only the flag where the bar is tight.
  labelClassName?: string
}

// Plain links rather than a client-side switch: each language is a separate static page.
export function LanguageSwitcher({ locale, links, label, side = "bottom", labelClassName = "" }: LanguageSwitcherProps) {
  return (
    <DropdownMenu.Root modal={false}>
      <DropdownMenu.Trigger
        aria-label={`${label}: ${LOCALE_INFO[locale].label}`}
        className="group inline-flex items-center gap-2 whitespace-nowrap rounded-md py-1.5 text-sm font-medium transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        <Flag locale={locale} />
        <span className={labelClassName}>{LOCALE_INFO[locale].label}</span>
        <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" aria-hidden="true" />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          side={side}
          align="start"
          sideOffset={8}
          className="connect-page z-50 min-w-44 rounded-xl border bg-white p-1.5 shadow-lg"
        >
          {SWITCHER_ORDER.map((option) => (
            <DropdownMenu.Item key={option} asChild>
              <a
                href={links[option]}
                hrefLang={LOCALE_INFO[option].hreflang}
                lang={LOCALE_INFO[option].hreflang}
                aria-current={option === locale ? "true" : undefined}
                className={`flex items-center gap-3 rounded-md px-3 py-2.5 text-sm outline-none transition-colors data-[highlighted]:bg-muted ${
                  option === locale ? "font-semibold text-primary" : "font-medium"
                }`}
              >
                <Flag locale={option} />
                {LOCALE_INFO[option].label}
              </a>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
