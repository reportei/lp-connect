"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import type { Messages } from "@/lib/messages"

/**
 * The sentence a visitor hands to their own AI coding agent.
 *
 * That url is the whole feature: it serves a markdown that instructs the agent to create the
 * account link, wait for the signup, ask for the API key and implement the integration. What
 * gets copied is one line, and the agent does the rest.
 */
/**
 * The sentence is shown, not just copied.
 *
 * A button that silently fills the clipboard asks the visitor to paste something they never
 * read into an agent with access to their codebase. Seeing the line first is what makes that
 * a reasonable thing to do.
 */
export function DelegateToAI({ t }: { t: Messages["delegate"] }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(t.sentence)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // The clipboard API is absent over plain http and inside some in-app browsers. The
      // sentence is on screen and selectable, so the fallback is already there.
    }
  }

  return (
    <div className="flex min-w-0 flex-col items-start gap-4">
      <pre className="w-full whitespace-pre-wrap break-all rounded-md border bg-muted/40 p-4 text-left text-sm leading-relaxed">
        <code>{t.sentence}</code>
      </pre>

      <button type="button" className="lp-button" onClick={copy}>
        {copied ? (
          <>
            <Check className="h-4 w-4" />
            {t.copied}
          </>
        ) : (
          <>
            <Copy className="h-4 w-4" />
            {t.copy}
          </>
        )}
      </button>
      <p role="status" className="sr-only">
        {copied ? t.copiedStatus : ""}
      </p>
    </div>
  )
}
