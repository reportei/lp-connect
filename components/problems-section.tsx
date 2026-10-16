import { BadgeCheck, Layers, Link2, RefreshCw, ShieldCheck, Webhook } from "lucide-react"

const PROBLEMS = [
  {
    icon: BadgeCheck,
    problem: "Aprovação de app em cada plataforma",
    solution:
      "Meta, Google, LinkedIn e TikTok revisam o app antes de liberar dados de terceiros. Com o Connect, você usa integrações que já passaram por essas revisões.",
  },
  {
    icon: Link2,
    problem: "Um fluxo de OAuth por rede",
    solution:
      "Você gera um link de conexão e seu cliente autoriza as contas numa tela pronta, hospedada pelo Connect. Seu código não implementa OAuth de nenhuma plataforma.",
  },
  {
    icon: RefreshCw,
    problem: "Tokens que expiram",
    solution:
      "O Connect renova os tokens antes de vencerem e verifica periodicamente se cada conexão continua com acesso.",
  },
  {
    icon: Webhook,
    problem: "Conexões que caem sem aviso",
    solution:
      "Quando uma conexão muda de status ou é removida, seu sistema recebe um webhook e pode avisar o cliente na hora.",
  },
  {
    icon: Layers,
    problem: "Cada API devolve um formato",
    solution:
      "As métricas de todas as plataformas chegam no mesmo formato, com o valor do período e o do período anterior.",
  },
  {
    icon: ShieldCheck,
    problem: "APIs que mudam o tempo todo",
    solution:
      "Versões novas, campos depreciados e limites de requisição ficam com o time do Reportei, que mantém essas integrações há mais de 10 anos.",
  },
]

export function ProblemsSection() {
  return (
    <section id="problemas" className="lp-section bg-background">
      <div className="lp-container">
        <p className="lp-eyebrow mb-4">O que fica com a gente</p>
        <h2 className="lp-title max-w-[20ch]">O trabalho que você não precisa fazer.</h2>
        <p className="lp-copy mt-5">
          Integrar uma plataforma é a parte fácil. Manter a integração funcionando para centenas de contas é o que
          consome o time.
        </p>

        <ul className="mt-12 grid gap-px overflow-hidden rounded-xl border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {PROBLEMS.map(({ icon: Icon, problem, solution }) => (
            <li key={problem} className="bg-white p-7">
              <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
              <h3 className="mt-5 text-lg font-semibold tracking-tight">{problem}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{solution}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
