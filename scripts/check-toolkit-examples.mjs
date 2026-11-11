// Offline checks only. No API call, connection, credential or message is created.
// Connect envelope: https://connect.reportei.com/openapi.json
// Slack: https://docs.slack.dev/reference/methods/chat.postMessage/
// Gmail: https://developers.google.com/workspace/gmail/api/guides/sending
// WhatsApp text shape (official archived reference): https://whatsapp.github.io/WhatsApp-Nodejs-SDK/api-reference/types/TextObject/
import assert from "node:assert/strict"
import fs from "node:fs"
import path from "node:path"
import { createRequire } from "node:module"
import ts from "typescript"

const require = createRequire(import.meta.url)
const cache = new Map()
function loadTs(file) {
  file = path.resolve(file)
  if (cache.has(file)) return cache.get(file)
  const output = ts.transpileModule(fs.readFileSync(file, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true },
  }).outputText
  const module = { exports: {} }
  const localRequire = (name) => {
    if (name.startsWith("@/")) return loadTs(`${name.slice(2)}.ts`)
    if (name.startsWith("./")) return loadTs(path.join(path.dirname(file), `${name}.ts`))
    return require(name)
  }
  new Function("require", "module", "exports", output)(localRequire, module, module.exports)
  cache.set(file, module.exports)
  return module.exports
}

const { TOOLKITS, sampleArguments } = loadTs("lib/toolkits/index.ts")
const { reviewedToolExample, GMAIL_MIME_LINES } = loadTs("lib/toolkits/examples.ts")
const slugs = ["whatsapp_send_message", "slack_send_message", "gmail_send_message"]
const locales = ["pt", "en", "es", "fr"]
const tools = TOOLKITS.flatMap((toolkit) => toolkit.tools)

for (const slug of slugs) {
  const tool = tools.find((item) => item.slug === slug)
  assert(tool, `catalog tool ${slug}`)
  for (const locale of locales) {
    const example = reviewedToolExample(slug, locale)
    const args = sampleArguments(tool, locale)
    assert.deepEqual(args, example.arguments, `${slug}/${locale}: page uses reviewed arguments`)
    assert(example.metaDescription.length <= 160, `${slug}/${locale}: complete snippet fits 160 characters`)
    assert(!example.metaDescription.includes("…"), `${slug}/${locale}: no literal truncation`)
    assert(example.metaDescription.endsWith("."), `${slug}/${locale}: complete sentence`)
    assert(example.notes.length >= 3 && example.placeholderNote && example.responseNote)
    assert.doesNotThrow(() => JSON.parse(example.responseExample))
    for (const param of tool.params) {
      if (param.required) assert(param.name in args, `${slug}: missing ${param.name}`)
    }
    for (const [name, value] of Object.entries(args)) {
      const param = tool.params.find((item) => item.name === name)
      assert(param, `${slug}: unknown argument ${name}`)
      if (param.enum) assert(param.enum.includes(value), `${slug}: enum ${name}`)
      const type = param.type.split(" | ")[0]
      if (["string", "boolean", "object"].includes(type)) assert.equal(typeof value, type, `${slug}: type ${name}`)
    }
    assert(Buffer.byteLength(JSON.stringify(args)) < 65536, `${slug}: arguments below documented size limit`)
  }
}

const wa = reviewedToolExample("whatsapp_send_message", "pt").arguments
assert.equal(wa.type, "text")
assert.equal(wa.messaging_product, "whatsapp")
assert.equal(wa.recipient_type, "individual")
assert(wa.text.body.length > 0, "WhatsApp text payload contains the message, not just type=text")
assert.equal(typeof wa.text.preview_url, "boolean")
assert.match(wa.to, /^<.+>$/, "no actual phone number in the example")

const slack = reviewedToolExample("slack_send_message", "pt").arguments
assert(slack.channel && slack.text.trim(), "Slack example includes channel and message content")
assert(!("markdown_text" in slack), "no conflicting Slack content formats")

const gmail = reviewedToolExample("gmail_send_message", "pt")
const decoded = Buffer.from(gmail.arguments.raw, "base64url").toString("utf8")
assert.equal(decoded, GMAIL_MIME_LINES.join("\r\n"), "Gmail raw decodes to the documented MIME example")
assert.match(gmail.arguments.raw, /^[A-Za-z0-9_-]+$/, "URL-safe base64 encoding")
assert.match(decoded, /^From: sender@example\.com\r\nTo: recipient@example\.com\r\nSubject:/)
assert.match(decoded, /Content-Type: multipart\/alternative; boundary="connect-example"\r\n\r\n/)
assert.match(decoded, /Content-Type: text\/plain; charset="UTF-8"/)
assert.match(decoded, /Content-Type: text\/html; charset="UTF-8"/)
assert.match(decoded, /--connect-example--\r\n$/)
assert(!/(?<!\r)\n/.test(decoded), "MIME uses CRLF")
const prepared = new Function("Buffer", `${gmail.preparationCode}\nreturn body;`)(Buffer)
assert.equal(prepared.arguments.raw, gmail.arguments.raw, "shown preparation code reproduces the request payload")
assert.equal(reviewedToolExample("gmail_list_messages", "pt"), null, "unreviewed tools keep their existing fallback")

console.log("ok: 3 tools × 4 locales; catalog arguments, conditional content, MIME/base64url and snippets checked offline")
