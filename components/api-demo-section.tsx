"use client"

import { useState, type ReactNode } from "react"
import { ArrowDown, Check, Clock } from "lucide-react"

type Step = {
  label: string
  title: string
  body: string
  request: string
  result: ReactNode
}

type Capability = {
  key: string
  label: string
  steps: Step[]
}

/**
 * Colors keys, strings and numbers of the request text.
 *
 * A highlighter library would be heavier than every other script on the page, and these
 * snippets are fixed strings written below, so a regex over them is enough.
 */
function Code({ text }: { text: string }) {
  const [head, ...rest] = text.split("\n\n")
  const body = rest.join("\n\n")
  const parts = body.split(/("(?:[^"\\]|\\.)*"(?=\s*:)|"(?:[^"\\]|\\.)*"|\b\d+(?:\.\d+)?\b)/g)

  return (
    <pre className="lp-code overflow-x-auto p-5">
      <code>
        {head.split("\n").map((line, i) => (
          <span key={i} className={i === 0 ? "block font-semibold text-white" : "block text-[#9aa0c4]"}>
            {line}
          </span>
        ))}
        {body && "\n"}
        {parts.map((part, i) => {
          if (/^".*"$/.test(part) && /^\s*:/.test(parts[i + 1] ?? "")) {
            return (
              <span key={i} className="text-[#b9a4ff]">
                {part}
              </span>
            )
          }
          if (/^".*"$/.test(part)) {
            return (
              <span key={i} className="text-[#ffd479]">
                {part}
              </span>
            )
          }
          if (/^\d/.test(part)) {
            return (
              <span key={i} className="text-[#7ee0b5]">
                {part}
              </span>
            )
          }
          return <span key={i}>{part}</span>
        })}
      </code>
    </pre>
  )
}

function Badge({ tone, children }: { tone: "green" | "amber" | "gray"; children: ReactNode }) {
  const tones = {
    green: "bg-emerald-50 text-emerald-700 border-emerald-200",
    amber: "bg-amber-50 text-amber-700 border-amber-200",
    gray: "bg-muted text-muted-foreground border-border",
  }

  return (
    <span className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium ${tones[tone]}`}>
      {children}
    </span>
  )
}

function Panel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-[10px] border bg-white p-5 shadow-[0_1px_2px_rgba(7,14,77,0.04)]">
      <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{title}</p>
      {children}
    </div>
  )
}

function MetricsResult() {
  return (
    <div className="flex flex-col gap-3">
      <Code
        text={`200 OK · 1629 ms

{
  "data": {
    "88ad8a15-6e29-4f54-a18c-ef944ff1ee01": {
      "reference_key": "fb_ads:reach",
      "values": "46847",
      "trend": { "data": [] },
      "comparison": { "values": null }
    }
  }
}`}
      />
      <ArrowDown className="mx-auto h-4 w-4 text-muted-foreground" aria-hidden="true" />
      <Panel title="No seu produto">
        <div className="mb-4 flex items-center gap-2 text-sm font-medium">
          <img src="/images/integrations/meta_ads.svg" alt="" className="h-5 w-5" />
          Meta Ads do seu cliente · setembro
        </div>
        <div className="rounded-lg border p-4">
          <p className="text-sm text-muted-foreground">Alcance total</p>
          <p className="mt-1 text-3xl font-semibold tracking-tight">46.847</p>
          <p className="mt-1 text-xs text-muted-foreground">pessoas viram os anúncios pelo menos uma vez</p>
        </div>
      </Panel>
    </div>
  )
}

function AdTree({ budget, status }: { budget: ReactNode; status: ReactNode }) {
  return (
    <Panel title="Na conta de anúncios do seu cliente">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <img src="/images/integrations/meta_ads.svg" alt="" className="h-5 w-5" />
          <p className="font-semibold">Black Friday</p>
        </div>
        {status}
      </div>
      <ul className="mt-4 space-y-3 border-l-2 border-primary/30 pl-4 text-sm">
        <li>
          <p className="text-xs text-muted-foreground">Campanha</p>
          <p className="font-medium">Tráfego · {budget}</p>
        </li>
        <li>
          <p className="text-xs text-muted-foreground">Conjunto</p>
          <p className="font-medium">BR 25-45 · Facebook e Instagram</p>
        </li>
        <li>
          <p className="text-xs text-muted-foreground">Anúncio</p>
          <div className="mt-2 overflow-hidden rounded-lg border">
            <div className="flex aspect-[2/1] items-center justify-center bg-gradient-to-br from-[#7039f3] to-[#070e4d] text-2xl font-semibold text-white">
              Até 50% off
            </div>
            <div className="flex items-center justify-between gap-3 p-3">
              <div>
                <p className="text-xs text-muted-foreground">loja.com</p>
                <p className="font-semibold">Black Friday</p>
              </div>
              <span className="rounded-md bg-muted px-3 py-1.5 text-xs font-semibold">Comprar agora</span>
            </div>
          </div>
        </li>
      </ul>
    </Panel>
  )
}

const CAPABILITIES: Capability[] = [
  {
    key: "metrics",
    label: "Métricas",
    steps: [
      {
        label: "Consultar",
        title: "Peça as métricas de uma conta conectada",
        body: "Você escolhe a conexão, o período e as métricas. O Connect busca na plataforma e devolve os valores no mesmo formato para qualquer integração.",
        request: `POST /metrics/get-data
Authorization: Bearer <chave da sua conta>
x-customer-token: <token do cliente>

{
  "customer_integration": "1ce9fd68-e1ad-4c4a-96fd-b18267256cc4",
  "start": "2026-09-01",
  "end": "2026-09-30",
  "metrics": [
    {
      "id": "88ad8a15-6e29-4f54-a18c-ef944ff1ee01",
      "reference_key": "fb_ads:reach",
      "component": "number_v1",
      "metrics": ["reach"]
    }
  ]
}`,
        result: <MetricsResult />,
      },
    ],
  },
  {
    key: "ads",
    label: "Anúncios",
    steps: [
      {
        label: "Criar",
        title: "Crie a campanha, o conjunto e o anúncio numa chamada",
        body: "Tudo nasce pausado e só é ativado no último passo. Se algo falhar no meio, nada fica rodando com o dinheiro do seu cliente.",
        request: `POST /ads?customer_integration=<conexão Meta Ads>
Idempotency-Key: 6f1c2a9e-bf-2026-11-19

{
  "name": "Black Friday, imagem",
  "status": "active",
  "campaign": {
    "name": "Black Friday",
    "budget": { "amount": 50, "type": "daily" },
    "facebook_ads": { "objective": "traffic" }
  },
  "adset": {
    "name": "BR 25-45",
    "targeting": { "countries": ["BR"], "age_min": 25, "age_max": 45 },
    "facebook_ads": { "optimization_goal": "link_clicks", "billing_event": "impressions" }
  },
  "ad": {
    "format": "image",
    "headline": "Black Friday",
    "body": "Até 50% off",
    "link_url": "https://loja.com/bf",
    "call_to_action": "shop_now",
    "media": [{ "type": "image", "url": "https://cdn.loja.com/bf.jpg" }],
    "facebook_ads": { "page_id": "1068595869664481" }
  }
}`,
        result: (
          <AdTree
            budget="R$ 50/dia"
            status={
              <Badge tone="amber">
                <Clock className="h-3 w-3" aria-hidden="true" />
                Em análise
              </Badge>
            }
          />
        ),
      },
      {
        label: "Ajustar",
        title: "Mude orçamento e status sem abrir o gerenciador",
        body: "Cada escrita é registrada e pode ser repetida com a mesma Idempotency-Key sem duplicar nada.",
        request: `PATCH /ads/campaigns/120250000000000001
Idempotency-Key: 9b3e7d10-bf-budget

{
  "budget": { "amount": 80, "type": "daily" }
}`,
        result: (
          <AdTree
            budget={
              <>
                <span className="text-muted-foreground line-through">R$ 50</span> R$ 80/dia
              </>
            }
            status={
              <Badge tone="green">
                <Check className="h-3 w-3" aria-hidden="true" />
                Ativo
              </Badge>
            }
          />
        ),
      },
      {
        label: "Acompanhar",
        title: "Saiba quando a plataforma aprovou",
        body: "O status efetivo vem direto da plataforma, então seu produto mostra se o anúncio está em análise, rodando ou foi recusado.",
        request: `GET /ads/120250000000000003?customer_integration=<conexão Meta Ads>

{
  "data": {
    "name": "Black Friday, imagem",
    "status": "active",
    "effective_status": "active"
  }
}`,
        result: (
          <AdTree
            budget="R$ 80/dia"
            status={
              <Badge tone="green">
                <Check className="h-3 w-3" aria-hidden="true" />
                Rodando
              </Badge>
            }
          />
        ),
      },
    ],
  },
  {
    key: "posts",
    label: "Publicações",
    steps: [
      {
        label: "Publicar",
        title: "Publique no Instagram do seu cliente",
        body: "Você manda a legenda e a mídia. O Connect sobe o conteúdo pela conta que o cliente já conectou e cuida da publicação.",
        request: `POST /posts
Idempotency-Key: post-2026-10-08-001-v1

{
  "integration_slug": "instagram_business",
  "source_name": "minha_marca",
  "external_reference": "post-2026-10-08-001",
  "format": "feed",
  "caption": "Coleção de verão #verao",
  "media": [
    {
      "type": "image",
      "url": "https://cdn.example.com/posts/colecao.jpg"
    }
  ],
  "instagram": { "first_comment": "Link na bio!" }
}`,
        result: (
          <SocialPost
            network="instagram"
            status={
              <Badge tone="amber">
                <Clock className="h-3 w-3" aria-hidden="true" />
                Publicando
              </Badge>
            }
          />
        ),
      },
      {
        label: "Acompanhar",
        title: "Saiba quando o post foi ao ar",
        body: "Consulte pelo uuid ou pela sua própria referência. A resposta traz o status de cada mídia e o link do post publicado.",
        request: `GET /posts/9f1c2b7e-1d3a-4c55-9a8e-2f6b0c1d4e5f

{
  "post": {
    "status": "published",
    "permalink": "https://www.instagram.com/p/DePI16BER0c/",
    "publishing": {
      "status": "published",
      "published_at": "2026-10-08 14:00:42"
    }
  }
}`,
        result: (
          <SocialPost
            network="instagram"
            published
            status={
              <Badge tone="green">
                <Check className="h-3 w-3" aria-hidden="true" />
                Publicado
              </Badge>
            }
          />
        ),
      },
      {
        label: "Facebook",
        title: "A mesma chamada para a página do Facebook",
        body: "Troque a integração e o mesmo formato publica na página do cliente. Você não aprende uma API nova por rede.",
        request: `POST /posts
Idempotency-Key: post-2026-10-08-002-v1

{
  "integration_slug": "facebook",
  "source_name": "Minha Marca",
  "external_reference": "post-2026-10-08-002",
  "format": "feed",
  "caption": "Coleção de verão chegando às lojas",
  "media": [
    {
      "type": "image",
      "url": "https://cdn.example.com/posts/colecao.jpg"
    }
  ]
}`,
        result: (
          <SocialPost
            network="facebook"
            published
            status={
              <Badge tone="green">
                <Check className="h-3 w-3" aria-hidden="true" />
                Publicado
              </Badge>
            }
          />
        ),
      },
    ],
  },
]

function SocialPost({
  network,
  status,
  published = false,
}: {
  network: "instagram" | "facebook"
  status: ReactNode
  published?: boolean
}) {
  const instagram = network === "instagram"

  return (
    <Panel title={instagram ? "No Instagram do seu cliente" : "Na página do seu cliente"}>
      <div className="overflow-hidden rounded-lg border">
        <div className="flex items-center justify-between gap-3 p-3">
          <div className="flex items-center gap-2.5">
            <span className="flex size-8 items-center justify-center rounded-full bg-gradient-to-br from-[#7039f3] to-[#070e4d] text-xs font-semibold text-white">
              MM
            </span>
            <div>
              <p className="text-sm font-semibold">{instagram ? "minha_marca" : "Minha Marca"}</p>
              <p className="text-xs text-muted-foreground">{published ? "Agora" : "Enviando…"}</p>
            </div>
          </div>
          <img
            src={instagram ? "/images/integrations/instagram_business.svg" : "/images/integrations/facebook.svg"}
            alt=""
            className="h-5 w-5"
          />
        </div>
        {!instagram && <p className="px-3 pb-3 text-sm">Coleção de verão chegando às lojas</p>}
        <div
          className={`flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-[#ffb36b] via-[#ff6f91] to-[#7039f3] text-2xl font-semibold text-white ${published ? "" : "opacity-60"}`}
        >
          Coleção de verão
        </div>
        {instagram && (
          <div className="space-y-1 p-3 text-sm">
            <p>
              <span className="font-semibold">minha_marca</span> Coleção de verão #verao
            </p>
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">minha_marca</span> Link na bio!
            </p>
          </div>
        )}
      </div>
      <div className="mt-4 flex items-center justify-between gap-3">
        {status}
        {published && <span className="text-xs text-muted-foreground">{instagram ? "instagram.com/p/DePI16BER0c" : "facebook.com/minhamarca"}</span>}
      </div>
    </Panel>
  )
}

export function ApiDemoSection() {
  const [active, setActive] = useState(CAPABILITIES[0].key)
  const [stepIndex, setStepIndex] = useState(0)

  const capability = CAPABILITIES.find((c) => c.key === active) ?? CAPABILITIES[0]
  const step = capability.steps[stepIndex]

  const selectCapability = (key: string) => {
    setActive(key)
    setStepIndex(0)
  }

  return (
    <section id="na-pratica" className="lp-section border-y bg-muted/40">
      <div className="lp-container">
        <p className="lp-eyebrow mb-4">Na prática</p>
        <h2 className="lp-title max-w-[22ch]">Uma chamada à API, o resultado na conta do seu cliente.</h2>
        <p className="lp-copy mt-5">
          Veja o que você envia ao Connect e o que acontece do outro lado, em cada parte da API.
        </p>

        <div role="tablist" aria-label="Partes da API" className="mt-10 flex flex-wrap gap-2">
          {CAPABILITIES.map((c) => (
            <button
              key={c.key}
              type="button"
              role="tab"
              aria-selected={c.key === active}
              onClick={() => selectCapability(c.key)}
              className={`rounded-md border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                c.key === active
                  ? "border-primary bg-primary text-white"
                  : "border-border bg-white text-muted-foreground hover:bg-muted"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div role="tabpanel" className="mt-8">
          {step && (
            <>
              {capability.steps.length > 1 && (
                <ol className="mb-8 grid gap-3 sm:grid-cols-3">
                  {capability.steps.map((s, i) => (
                    <li key={s.label}>
                      <button
                        type="button"
                        onClick={() => setStepIndex(i)}
                        aria-current={i === stepIndex ? "step" : undefined}
                        className={`w-full border-t-2 pt-3 text-left text-sm transition-colors ${
                          i === stepIndex
                            ? "border-primary font-semibold text-foreground"
                            : "border-border text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <span className="mr-2 text-primary">{i + 1}</span>
                        {s.label}
                      </button>
                    </li>
                  ))}
                </ol>
              )}

              <div className="grid items-start gap-8 lg:grid-cols-2">
                <div className="min-w-0">
                  <h3 className="text-xl font-semibold tracking-tight">{step.title}</h3>
                  <p className="mt-2 mb-5 max-w-[56ch] leading-relaxed text-muted-foreground">{step.body}</p>
                  <Code text={step.request} />
                </div>
                <div className="min-w-0">{step.result}</div>
              </div>
            </>
          )}
        </div>

        <p className="mt-10 text-sm text-muted-foreground">
          Valores ilustrativos. O contrato completo de cada endpoint está na{" "}
          <a href="https://developers.reportei.com/connect" className="lp-link">
            documentação da API
          </a>
          .
        </p>
      </div>
    </section>
  )
}
