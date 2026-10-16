"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"

/**
 * The sentence a visitor hands to their own AI coding agent.
 *
 * That url is the whole feature: it serves a markdown that instructs the agent to create the
 * account link, wait for the signup, ask for the API key and implement the integration. What
 * gets copied is one line, and the agent does the rest.
 *
 * Hardcoded because that is this repository's convention — there is no env layer and no
 * constants module, and every url on this site is a literal. With `output: 'export'` an env
 * would be inlined at build time anyway.
 */
const SENTENCE =
  "Preciso integrar o Reportei Connect neste projeto. Leia as instruções em https://app.connect.reportei.com/provision-trial.md e siga o passo a passo descrito lá."

/**
 * The sentence is shown, not just copied.
 *
 * A button that silently fills the clipboard asks the visitor to paste something they never
 * read into an agent with access to their codebase. Seeing the line first is what makes that
 * a reasonable thing to do.
 */
export function DelegateToAI() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(SENTENCE)
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
        <code>{SENTENCE}</code>
      </pre>

      <button type="button" className="lp-button" onClick={copy}>
        {copied ? (
          <>
            <Check className="h-4 w-4" />
            Copiado!
          </>
        ) : (
          <>
            <Copy className="h-4 w-4" />
            Copiar prompt
          </>
        )}
      </button>
      <p role="status" className="sr-only">
        {copied ? "Prompt copiado" : ""}
      </p>
    </div>
  )
}
