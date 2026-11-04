import { LOCALES, localePath } from "@/lib/i18n"
import { absoluteUrl, languageAlternates } from "@/lib/seo"
import { TOOLKITS, toolkitPath, toolkitsHubPath, toolkitToolsPath, toolPath } from "@/lib/toolkits"

export const dynamic = "force-static"

const escape = (value: string) => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")

// The toolkit pages have their own sitemap so Search Console reports their indexing apart from the rest of the LP.
// Every path is listed once per locale, each entry with the full set of hreflang alternates.
export function GET() {
  const paths = [
    toolkitsHubPath(),
    ...TOOLKITS.flatMap((toolkit) => [
      toolkitPath(toolkit),
      toolkitToolsPath(toolkit),
      ...toolkit.tools.map((tool) => toolPath(toolkit, tool)),
    ]),
  ]

  const entries = paths.flatMap((path) => {
    const alternates = Object.entries(languageAlternates(() => path))
      .map(([lang, href]) => `<xhtml:link rel="alternate" hreflang="${lang}" href="${escape(href)}"/>`)
      .join("")
    const priority = path.includes("/tool/") ? "0.5" : "0.6"
    return LOCALES.map(
      (locale) =>
        `<url><loc>${escape(absoluteUrl(localePath(locale, path)))}</loc>${alternates}<changefreq>monthly</changefreq><priority>${priority}</priority></url>`,
    )
  })

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join("\n")}
</urlset>
`
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } })
}
