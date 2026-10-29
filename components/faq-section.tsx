import { ChevronDown } from "lucide-react"
import type { ReactNode } from "react"
import type { PlatformFaq } from "@/lib/plataformas"
import { INTEGRATIONS } from "@/lib/integrations"

// Answers are plain paragraphs so the same text feeds the FAQPage JSON-LD; `node` replaces the rendering when an
// answer needs a link.
type Question = { q: string; a: string[]; node?: ReactNode }

const PRODUCT: Question[] = [
  {
    q: "O que dá para fazer com o Reportei Connect?",
    a: [
      `Conectar as contas dos seus clientes em ${INTEGRATIONS.length} plataformas de marketing, CRM e e-commerce e consultar as métricas delas por uma única API.`,
      "Também dá para publicar no Instagram e no Facebook dos seus clientes e, no Meta Ads, criar e gerenciar campanhas, conjuntos e anúncios, tudo pelas mesmas contas conectadas.",
    ],
  },
  {
    q: "Preciso criar e aprovar um app em cada plataforma?",
    a: [
      "Não. As integrações do Connect já passaram pelas revisões das plataformas. Seu cliente autoriza o acesso às contas e você consulta os dados pela API, sem cadastrar app próprio em cada rede.",
    ],
  },
  {
    q: "Meus clientes precisam ter conta no Reportei?",
    a: [
      "Não. Seu sistema gera um link de conexão e o cliente autoriza as contas numa tela pronta do Connect. Depois, ele continua usando só o seu produto.",
    ],
  },
  {
    q: "Quais dados posso consultar?",
    a: [
      "As métricas suportadas em cada plataforma, dentro das permissões da conta conectada. O catálogo de métricas de cada integração está na API e no Connect Explorer, onde você testa a consulta antes de escrever código.",
    ],
  },
  {
    q: "Como os tokens dos meus clientes ficam guardados?",
    a: [
      "Seu sistema não lida com os tokens das plataformas. Eles ficam criptografados no Connect, que renova cada um antes de vencer e o usa só para buscar os dados que você pediu.",
    ],
  },
  {
    q: "E se a conexão de um cliente perder o acesso?",
    a: [
      "O Connect verifica as conexões periodicamente. Quando uma delas muda de status ou é removida, seu sistema recebe um webhook e pode pedir ao cliente que conecte a conta de novo.",
    ],
  },
  {
    q: "Posso implementar com um agente de IA?",
    a: [
      "Sim. O prompt da seção Implemente com IA orienta Claude Code, Cursor ou Codex a abrir seu cadastro, ler a especificação OpenAPI e implementar a integração no backend do seu projeto.",
    ],
    node: (
      <p>
        Sim. O prompt da seção{" "}
        <a href="#ia" className="text-primary underline underline-offset-4">
          Implemente com IA
        </a>{" "}
        orienta Claude Code, Cursor ou Codex a abrir seu cadastro, ler a especificação OpenAPI e implementar a
        integração no backend do seu projeto.
      </p>
    ),
  },
]

const PRICING: Question[] = [
  {
    q: "Qual é a diferença entre cliente e conexão?",
    a: [
      "Um cliente final do seu produto pode ter várias conexões. Cada conexão corresponde a uma conta desse cliente em uma plataforma. Se ele conectar uma conta do Instagram e uma do Google Ads, serão duas conexões.",
    ],
  },
  {
    q: `As ${INTEGRATIONS.length} integrações estão incluídas no plano?`,
    a: [
      "Sim. Todas estão disponíveis no mesmo plano e têm o mesmo preço por conexão. O acesso depende das permissões da conta conectada e se limita aos dados e às métricas suportados pelo Connect.",
    ],
  },
  {
    q: "Como são contadas várias contas da mesma plataforma?",
    a: [
      "Cada conta conectada conta como uma conexão, mesmo que pertença ao mesmo cliente. Por exemplo, três contas de Google Ads representam três conexões.",
    ],
  },
  {
    q: "Como é calculado o valor da cobrança?",
    a: [
      "A quantidade faturada é a média diária de conexões ativas durante o ciclo, arredondada para cima. As conexões acima das incluídas no plano são cobradas pelo valor adicional da tabela de preços.",
      "Se o plano incluir 10 conexões e a média arredondada do ciclo for 14, você paga o plano e mais 4 conexões adicionais.",
    ],
  },
  {
    q: "Se eu remover uma conta, o valor diminui?",
    a: [
      "Remover uma conta reduz o número de conexões ativas. O efeito na cobrança depende de quantos dias ela ficou ativa no ciclo e da média diária final, arredondada para cima. O valor base do plano continua incluindo as conexões do plano.",
    ],
  },
  {
    q: "Posso testar sem cartão de crédito?",
    a: ["Sim. Você pode testar o Reportei Connect por 15 dias sem cadastrar cartão de crédito."],
  },
  {
    q: "Posso cancelar a qualquer momento?",
    a: [
      "Sim. O cancelamento pode ser solicitado a qualquer momento e passa a valer ao final do ciclo de cobrança vigente.",
    ],
  },
]

export const FAQ_ITEMS: PlatformFaq[] = [...PRODUCT, ...PRICING].map((item) => ({ q: item.q, a: item.a.join(" ") }))

function Group({ title, questions }: { title: string; questions: Question[] }) {
  return (
    <div>
      <h3 className="mb-5 text-xl font-semibold tracking-tight">{title}</h3>
      <div className="space-y-3">
        {questions.map((item) => (
          <details key={item.q} className="group rounded-lg border bg-white">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 text-left font-semibold hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary md:px-6 [&::-webkit-details-marker]:hidden">
              <span>{item.q}</span>
              <ChevronDown className="h-5 w-5 shrink-0 transition-transform group-open:rotate-180" aria-hidden="true" />
            </summary>
            <div className="space-y-3 px-5 pb-5 text-sm leading-relaxed text-muted-foreground md:px-6 md:text-base">
              {item.node ?? item.a.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </details>
        ))}
      </div>
    </div>
  )
}

export function FaqSection() {
  return (
    <section id="faq" className="lp-section bg-background">
      <div className="lp-container">
        <h2 className="lp-title mb-12">Perguntas frequentes</h2>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-10">
          <Group title="Sobre o Connect" questions={PRODUCT} />
          <Group title="Preços e conexões" questions={PRICING} />
        </div>
        <p className="mt-10 text-sm leading-relaxed text-muted-foreground">
          Consulte as condições completas nos{" "}
          <a href="https://app.connect.reportei.com/legal/terms" className="text-primary underline underline-offset-4">
            termos de serviço do Reportei Connect
          </a>
          .
        </p>
      </div>
    </section>
  )
}
