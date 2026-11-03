import { HeaderBar } from "@/components/header-bar"
import { appUrl, DEFAULT_LOCALE, languageLinks, pageHref, type Locale, type TranslatedPage } from "@/lib/i18n"
import { getMessages } from "@/lib/messages"

type HeaderProps = {
  locale?: Locale
  // The page being shown, when it exists in every language; the picker then links to its translations.
  page?: TranslatedPage
}

export function Header({ locale = DEFAULT_LOCALE, page }: HeaderProps) {
  const m = getMessages(locale)
  const t = m.header
  const home = (hash: string) => pageHref(locale, "home", hash)

  return (
    <HeaderBar
      locale={locale}
      homeHref={pageHref(locale, "home")}
      nav={[
        { href: home("#na-pratica"), label: t.nav.practice },
        { href: home("#networks"), label: t.nav.integrations },
        { href: home("#clientes"), label: t.nav.clients },
        { href: home("#ia"), label: t.nav.ai },
        { href: home("#precos"), label: t.nav.pricing },
        { href: "https://developers.reportei.com/connect", label: t.nav.docs },
      ]}
      login={{ href: appUrl(locale, "/login"), label: t.login }}
      signup={{ href: appUrl(locale, "/signup"), label: t.signup }}
      menuLabels={{ open: t.openMenu, close: t.closeMenu }}
      languageLabel={m.language.label}
      languageLinks={languageLinks(page)}
    />
  )
}

export default Header
