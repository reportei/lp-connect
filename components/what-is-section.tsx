import { INTEGRATIONS } from "@/lib/integrations"

const PILLARS = [
  {
    title: "Conectar contas",
    body: "Use o fluxo do Connect para que seus clientes autorizem o acesso às contas das plataformas que utilizam.",
  },
  {
    title: "Coletar dados",
    body: "Acesse dados de marketing, CRM e e-commerce pelas integrações mantidas pelo Reportei.",
  },
  {
    title: "Disponibilizar métricas",
    body: "Consulte os dados suportados pelo Connect por uma API documentada, respeitando as permissões de cada conta.",
  },
]

export function WhatIsSection() {
  return (
    <section id="what-is" className="lp-section bg-background">
      <div className="lp-container grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <div>
          <h2 className="lp-title max-w-[16ch]">O que é o Reportei Connect?</h2>
          <p className="lp-copy mt-6 max-w-[48ch]">
            Uma API para levar dados de {INTEGRATIONS.length} integrações ao seu sistema. Você conecta as contas dos
            seus clientes e usa as métricas dentro do seu produto.
          </p>
          <p className="mt-8 max-w-[54ch] text-sm leading-relaxed text-muted-foreground">
            Criado pelo Reportei, que tem mais de 10 anos de experiência em relatórios de marketing e atende mais de 10
            mil clientes ativos.
          </p>
        </div>
        <dl className="divide-y divide-border border-y border-border">
          {PILLARS.map((pillar) => (
            <div key={pillar.title} className="py-7">
              <dt className="text-xl font-semibold tracking-tight">{pillar.title}</dt>
              <dd className="mt-3 max-w-[58ch] text-base leading-relaxed text-muted-foreground">{pillar.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
