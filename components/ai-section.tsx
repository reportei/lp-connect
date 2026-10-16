import { ArrowRight } from "lucide-react"
import { AgentLogos } from "@/components/agent-logos"
import { DelegateToAI } from "@/components/delegate-to-ai"

// Mirrors the steps provision-trial.md tells the agent to follow, in that order.
const TRANSCRIPT = [
  { text: "Lendo app.connect.reportei.com/provision-trial.md", done: true },
  { text: "Link de cadastro enviado. Aguardando você criar a conta", done: true },
  { text: "Conta criada. Chave salva em CONNECT_API_KEY no .env", done: true },
  { text: "Lendo a especificação em /openapi.json", done: true },
  { text: "Criando customers e o link de conexão no backend", done: true },
  { text: "Teste de fumaça: métricas de uma conta conectada", done: false },
]

const RESOURCES = [
  {
    title: "Documentação da API",
    body: "Endpoints, autenticação, erros e exemplos de cada recurso.",
    href: "https://developers.reportei.com/connect",
    cta: "Ver documentação",
  },
  {
    title: "Especificação OpenAPI",
    body: "O contrato da API em um arquivo, para o seu agente ler antes de escrever código.",
    href: "https://connect.reportei.com/openapi.json",
    cta: "Abrir openapi.json",
  },
  {
    title: "Connect Explorer",
    body: "Conecte uma conta, escolha as métricas e copie o payload pronto para o seu código.",
    href: "https://app.connect.reportei.com/signup",
    cta: "Testar no Explorer",
  },
]

export function AiSection() {
  return (
    <section id="ia" className="lp-section bg-background">
      <div className="lp-container">
        <div className="grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="min-w-0">
            <p className="lp-eyebrow mb-4">Implemente com IA</p>
            <h2 className="lp-title mb-6">Seu agente de código faz a integração.</h2>
            <p className="lp-copy">
              Copie o prompt e cole no Claude Code, Cursor ou Codex. Ele orienta o agente a abrir o seu cadastro, ler a
              especificação da API e implementar a integração no backend do seu projeto.
            </p>
            <div className="mt-6">
              <AgentLogos withNames />
            </div>
            <div className="mt-8">
              <DelegateToAI />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Você preenche seus dados quando o agente pedir e revisa a implementação antes de publicar.
            </p>
          </div>

          <figure className="min-w-0 overflow-hidden rounded-xl border bg-[#0f1229] text-[#e6e8f5]">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-white/20" />
              <span className="h-3 w-3 rounded-full bg-white/20" />
              <span className="h-3 w-3 rounded-full bg-white/20" />
              <span className="ml-3 font-mono text-xs text-[#9aa0c4]">seu-projeto · agente de código</span>
            </div>
            <div className="space-y-3 p-5 font-mono text-[13px] leading-relaxed">
              <p className="text-[#9aa0c4]">&gt; Preciso integrar o Reportei Connect neste projeto…</p>
              {TRANSCRIPT.map((line) => (
                <p key={line.text} className="flex gap-3">
                  <span className={line.done ? "text-[#7ee0b5]" : "text-[#ffd479]"} aria-hidden="true">
                    {line.done ? "✓" : "…"}
                  </span>
                  <span className={line.done ? "" : "text-[#ffd479]"}>{line.text}</span>
                </p>
              ))}
            </div>
            <figcaption className="sr-only">
              Exemplo do que o agente faz ao seguir o prompt: lê as instruções, espera o cadastro, guarda a chave no
              .env, lê a especificação e implementa a integração.
            </figcaption>
          </figure>
        </div>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-xl border bg-border md:grid-cols-3">
          {RESOURCES.map((resource) => (
            <li key={resource.title} className="flex flex-col bg-white p-7">
              <h3 className="text-lg font-semibold tracking-tight">{resource.title}</h3>
              <p className="mt-2 flex-1 leading-relaxed text-muted-foreground">{resource.body}</p>
              <a href={resource.href} className="lp-link mt-5 inline-flex items-center gap-1.5 text-sm">
                {resource.cta}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
