import { withBase } from "@/lib/base-path"
import type { Locale } from "@/lib/i18n"
import { getMessages } from "@/lib/messages"

const CLIENTS = [
  { name: "Leadster", logo: withBase("/images/clients/leadster.png"), href: withBase("/clientes/leadster"), width: 190, height: 28 },
  { name: "Morada.ai", logo: withBase("/images/clients/morada.svg"), href: "https://morada.ai/", width: 164, height: 50 },
  {
    name: "Mercado Phone",
    logo: withBase("/images/clients/mercado-phone.svg"),
    href: "https://mercadophone.app.br/",
    width: 188,
    height: 50,
  },
  {
    name: "Santana Inteligência Política",
    logo: withBase("/images/clients/santana.png"),
    href: "https://www.santanainteligencia.com.br/",
    width: 110,
    height: 76,
    // The logo is white on transparent, so it needs its own brand background.
    dark: true,
  },
]

export function ClientsSection({ locale }: { locale: Locale }) {
  const t = getMessages(locale).clients

  return (
    <section id="clientes" aria-labelledby="clients-heading" className="border-y py-10">
      <div className="lp-container grid items-center gap-8 lg:grid-cols-[220px_1fr] lg:gap-12">
        <h2 id="clients-heading" className="max-w-52 text-base leading-relaxed text-muted-foreground">
          {t.heading}
        </h2>
        <ul className="grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-4">
          {CLIENTS.map((client) => {
            const external = client.href.startsWith("http")

            return (
              <li key={client.name} className="flex items-center justify-center">
                <a
                  href={client.href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  aria-label={external ? t.newTab(client.name) : t.caseLabel(client.name)}
                  className={`flex h-20 w-full max-w-44 items-center justify-center px-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${client.dark ? "rounded-md bg-[#070E4D]" : ""}`}
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    width={client.width}
                    height={client.height}
                    loading="lazy"
                    className={client.dark ? "max-h-16 w-auto max-w-full object-contain" : "lp-client-logo"}
                  />
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
