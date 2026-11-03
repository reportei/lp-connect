import type { Locale } from "@/lib/i18n"
import { en } from "@/lib/messages/en"
import { es } from "@/lib/messages/es"
import { fr } from "@/lib/messages/fr"
import { pt, type Messages } from "@/lib/messages/pt"

export type { Messages, Rich } from "@/lib/messages/pt"

const MESSAGES: Record<Locale, Messages> = { pt, en, es, fr }

// Server side only: importing this from a client component would ship every language to the browser.
export function getMessages(locale: Locale): Messages {
  return MESSAGES[locale]
}
