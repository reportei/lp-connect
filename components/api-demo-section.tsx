"use client"

import { withBase } from "@/lib/base-path"
import { fill } from "@/lib/fill"
import { formatNumber, type Locale } from "@/lib/i18n"
import type { Messages } from "@/lib/messages"
import { useState, type ReactNode } from "react"
import { ArrowDown, Bookmark, Check, Clock, Heart, MessageCircle, Send, Share2, ThumbsUp } from "lucide-react"

type Step = {
  label: string
  title: string
  body: string
  request: string
  result: ReactNode
}

type T = Messages["apiDemo"]

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

function MetricsResult({ t, locale }: { t: T; locale: Locale }) {
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
      <Panel title={t.metrics.inProduct}>
        <div className="mb-4 flex items-center gap-2 text-sm font-medium">
          <img src={withBase("/images/integrations/meta_ads.svg")} alt="" className="h-5 w-5" />
          {t.metrics.account}
        </div>
        <div className="rounded-lg border p-4">
          <p className="text-sm text-muted-foreground">{t.metrics.reach}</p>
          <p className="mt-1 text-3xl font-semibold tracking-tight">{formatNumber(locale, 46847)}</p>
          <p className="mt-1 text-xs text-muted-foreground">{t.metrics.reachHint}</p>
        </div>
      </Panel>
    </div>
  )
}

function AdTree({ t, budget, status }: { t: T; budget: ReactNode; status: ReactNode }) {
  return (
    <Panel title={t.ads.panel}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <img src={withBase("/images/integrations/meta_ads.svg")} alt="" className="h-5 w-5" />
          <p className="font-semibold">Black Friday</p>
        </div>
        {status}
      </div>
      <ul className="mt-4 space-y-3 border-l-2 border-primary/30 pl-4 text-sm">
        <li>
          <p className="text-xs text-muted-foreground">{t.ads.campaign}</p>
          <p className="font-medium">
            {t.ads.traffic} · {budget}
          </p>
        </li>
        <li>
          <p className="text-xs text-muted-foreground">{t.ads.adset}</p>
          <p className="font-medium">BR 25-45 · {t.ads.placements}</p>
        </li>
        <li>
          <p className="text-xs text-muted-foreground">{t.ads.ad}</p>
          <div className="mt-2 overflow-hidden rounded-lg border">
            <div className="flex aspect-[2/1] items-center justify-center bg-gradient-to-br from-[#7039f3] to-[#070e4d] text-2xl font-semibold text-white">
              {t.ads.offer}
            </div>
            <div className="flex items-center justify-between gap-3 p-3">
              <div>
                <p className="text-xs text-muted-foreground">loja.com</p>
                <p className="font-semibold">Black Friday</p>
              </div>
              <span className="rounded-md bg-muted px-3 py-1.5 text-xs font-semibold">{t.ads.shopNow}</span>
            </div>
          </div>
        </li>
      </ul>
    </Panel>
  )
}

function capabilities(t: T, locale: Locale): Capability[] {
  const p = t.placeholders

  return [
  {
    key: "metrics",
    label: t.metrics.label,
    steps: [
      {
        label: t.metrics.step,
        title: t.metrics.title,
        body: t.metrics.body,
        request: `POST /metrics/get-data
Authorization: Bearer ${p.accountKey}
x-customer-token: ${p.customerToken}

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
        result: <MetricsResult t={t} locale={locale} />,
      },
    ],
  },
  {
    key: "ads",
    label: t.ads.label,
    steps: [
      {
        label: t.ads.create.step,
        title: t.ads.create.title,
        body: t.ads.create.body,
        request: `POST /ads?customer_integration=${p.metaConnection}
Idempotency-Key: 6f1c2a9e-bf-2026-11-19

{
  "name": "${t.ads.adName}",
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
    "body": "${t.ads.offer}",
    "link_url": "https://loja.com/bf",
    "call_to_action": "shop_now",
    "media": [{ "type": "image", "url": "https://cdn.loja.com/bf.jpg" }],
    "facebook_ads": { "page_id": "1068595869664481" }
  }
}`,
        result: (
          <AdTree
            t={t}
            budget={fill(t.ads.budget, { amount: 50 })}
            status={
              <Badge tone="amber">
                <Clock className="h-3 w-3" aria-hidden="true" />
                {t.ads.inReview}
              </Badge>
            }
          />
        ),
      },
      {
        label: t.ads.adjust.step,
        title: t.ads.adjust.title,
        body: t.ads.adjust.body,
        request: `PATCH /ads/campaigns/120250000000000001
Idempotency-Key: 9b3e7d10-bf-budget

{
  "budget": { "amount": 80, "type": "daily" }
}`,
        result: (
          <AdTree
            t={t}
            budget={
              <>
                <span className="text-muted-foreground line-through">{fill(t.ads.was, { amount: 50 })}</span>{" "}
                {fill(t.ads.budget, { amount: 80 })}
              </>
            }
            status={
              <Badge tone="green">
                <Check className="h-3 w-3" aria-hidden="true" />
                {t.ads.active}
              </Badge>
            }
          />
        ),
      },
      {
        label: t.ads.track.step,
        title: t.ads.track.title,
        body: t.ads.track.body,
        request: `GET /ads/120250000000000003?customer_integration=${p.metaConnection}

{
  "data": {
    "name": "${t.ads.adName}",
    "status": "active",
    "effective_status": "active"
  }
}`,
        result: (
          <AdTree
            t={t}
            budget={fill(t.ads.budget, { amount: 80 })}
            status={
              <Badge tone="green">
                <Check className="h-3 w-3" aria-hidden="true" />
                {t.ads.running}
              </Badge>
            }
          />
        ),
      },
    ],
  },
  {
    key: "posts",
    label: t.posts.label,
    steps: [
      {
        label: t.posts.publish.step,
        title: t.posts.publish.title,
        body: t.posts.publish.body,
        request: `POST /posts
Idempotency-Key: post-2026-10-08-001-v1

{
  "integration_slug": "instagram_business",
  "source_name": "${t.posts.handle}",
  "external_reference": "post-2026-10-08-001",
  "format": "feed",
  "caption": "${t.posts.caption}",
  "media": [
    {
      "type": "image",
      "url": "https://cdn.example.com/posts/colecao.jpg"
    }
  ],
  "instagram": { "first_comment": "${t.posts.firstComment}" }
}`,
        result: (
          <SocialPost
            t={t}
            network="instagram"
            status={
              <Badge tone="amber">
                <Clock className="h-3 w-3" aria-hidden="true" />
                {t.posts.statusPublishing}
              </Badge>
            }
          />
        ),
      },
      {
        label: t.posts.track.step,
        title: t.posts.track.title,
        body: t.posts.track.body,
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
            t={t}
            network="instagram"
            published
            status={
              <Badge tone="green">
                <Check className="h-3 w-3" aria-hidden="true" />
                {t.posts.statusPublished}
              </Badge>
            }
          />
        ),
      },
      {
        label: t.posts.facebook.step,
        title: t.posts.facebook.title,
        body: t.posts.facebook.body,
        request: `POST /posts
Idempotency-Key: post-2026-10-08-002-v1

{
  "integration_slug": "facebook",
  "source_name": "${t.posts.brand}",
  "external_reference": "post-2026-10-08-002",
  "format": "feed",
  "caption": "${t.posts.facebookCaption}",
  "media": [
    {
      "type": "image",
      "url": "https://cdn.example.com/posts/colecao.jpg"
    }
  ]
}`,
        result: (
          <SocialPost
            t={t}
            network="facebook"
            published
            status={
              <Badge tone="green">
                <Check className="h-3 w-3" aria-hidden="true" />
                {t.posts.statusPublished}
              </Badge>
            }
          />
        ),
      },
    ],
  },
  ]
}

/**
 * Stand-in for the post's photo: a beach scene drawn in SVG, so the mockup reads as a picture
 * without shipping a stock image.
 */
function SummerArt({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffd9a8" />
          <stop offset="1" stopColor="#ff9f8a" />
        </linearGradient>
        <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4fb6d6" />
          <stop offset="1" stopColor="#2a7fb8" />
        </linearGradient>
      </defs>
      <rect width="400" height="400" fill="url(#sky)" />
      <circle cx="285" cy="150" r="58" fill="#fff4d6" />
      <path d="M0 238 C 70 222 130 252 200 238 S 330 222 400 238 V 300 H 0 Z" fill="url(#sea)" />
      <path d="M0 262 C 80 250 140 276 210 262 S 340 250 400 262 V 300 H 0 Z" fill="#7fd0e6" opacity="0.6" />
      <path d="M0 290 C 120 270 260 300 400 282 V 400 H 0 Z" fill="#f6dcb0" />
      <g transform="translate(92 236)">
        <path d="M0 64 L 6 -6" stroke="#8a5a3c" strokeWidth="5" strokeLinecap="round" />
        <path d="M-58 4 Q 6 -58 70 4 Z" fill="#ff5e7e" />
        <path d="M-58 4 Q -26 -30 6 -6 Q 38 -30 70 4 Q 38 -10 6 -6 Q -26 -10 -58 4 Z" fill="#fff" opacity="0.35" />
      </g>
      <rect x="236" y="300" width="70" height="40" rx="6" fill="#ffffff" opacity="0.85" transform="rotate(-8 271 320)" />
    </svg>
  )
}

function SocialPost({
  t,
  network,
  status,
  published = false,
}: {
  t: T
  network: "instagram" | "facebook"
  status: ReactNode
  published?: boolean
}) {
  const instagram = network === "instagram"

  return (
    <Panel title={instagram ? t.posts.instagramPanel : t.posts.facebookPanel}>
      <div className="mx-auto max-w-[360px] overflow-hidden rounded-lg border bg-white text-[13px]">
        <div className="flex items-center gap-2.5 px-3 py-2.5">
          <span
            className={`flex size-8 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold text-white ${
              instagram
                ? "bg-[#7039f3] ring-2 ring-[#f58529] ring-offset-2"
                : "bg-[#7039f3]"
            }`}
          >
            MM
          </span>
          <div className="min-w-0 flex-1 leading-tight">
            <p className="font-semibold">{instagram ? t.posts.handle : t.posts.brand}</p>
            <p className="text-xs text-muted-foreground">
              {published ? (instagram ? t.posts.now : t.posts.nowPublic) : t.posts.publishing}
            </p>
          </div>
          <img
            src={withBase(instagram ? "/images/integrations/instagram_business.svg" : "/images/integrations/facebook.svg")}
            alt=""
            className="h-4 w-4"
          />
        </div>

        {!instagram && <p className="px-3 pb-2.5">{t.posts.facebookCaption} ☀️</p>}

        <div className={`relative ${instagram ? "aspect-square" : "aspect-[1.91/1]"}`}>
          <SummerArt className={`absolute inset-0 h-full w-full transition-opacity ${published ? "" : "opacity-50"}`} />
          {!published && (
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="size-8 animate-spin rounded-full border-[3px] border-white/60 border-t-white" />
            </span>
          )}
        </div>

        {instagram ? (
          <div className="space-y-1 px-3 py-2.5">
            <div className="flex items-center gap-3 pb-1 text-foreground">
              <Heart className="h-5 w-5" aria-hidden="true" />
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              <Send className="h-5 w-5" aria-hidden="true" />
              <Bookmark className="ml-auto h-5 w-5" aria-hidden="true" />
            </div>
            <p>
              <span className="font-semibold">{t.posts.handle}</span> {t.posts.caption}
            </p>
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">{t.posts.handle}</span> {t.posts.firstComment}
            </p>
          </div>
        ) : (
          <div className="flex justify-around border-t px-3 py-2 text-xs font-medium text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <ThumbsUp className="h-4 w-4" aria-hidden="true" />
              {t.posts.like}
            </span>
            <span className="flex items-center gap-1.5">
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              {t.posts.comment}
            </span>
            <span className="flex items-center gap-1.5">
              <Share2 className="h-4 w-4" aria-hidden="true" />
              {t.posts.share}
            </span>
          </div>
        )}
      </div>
      <div className="mx-auto mt-4 flex max-w-[360px] items-center justify-between gap-3">
        {status}
        {published && (
          <span className="truncate text-xs text-muted-foreground">
            {instagram ? "instagram.com/p/DePI16BER0c" : "facebook.com/minhamarca"}
          </span>
        )}
      </div>
    </Panel>
  )
}

export function ApiDemoSection({ t, locale }: { t: T; locale: Locale }) {
  const CAPABILITIES = capabilities(t, locale)
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
        <p className="lp-eyebrow mb-4">{t.eyebrow}</p>
        <h2 className="lp-title max-w-[22ch]">{t.title}</h2>
        <p className="lp-copy mt-5">{t.copy}</p>

        <div role="tablist" aria-label={t.tabsLabel} className="mt-10 flex flex-wrap gap-2">
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
                        className={`w-full border-t-2 pt-3 text-left text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${
                          i === stepIndex
                            ? "border-primary font-semibold text-foreground"
                            : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
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
          {t.footnote}{" "}
          <a href="https://developers.reportei.com/connect" className="lp-link">
            {t.footnoteLink}
          </a>
          .
        </p>
      </div>
    </section>
  )
}
