// "Alternativa a X" pages for the competitor terms the Connect buys on Google.
// Every competitor cell comes from that company's own site; keep CHECKED_AT current when you re-check them.
// No price comparison on purpose: the Connect price lives in the app embed, and a cheaper-than claim needs both prices side by side.

import type { PlatformFaq } from "@/lib/plataformas"

export const CHECKED_AT = "27/10/2026"

export type ComparisonRow = { label: string; connect: string; competitor: string }

export type AlternativePage = {
  slug: string
  competitor: string
  competitorUrl: string
  title: string
  description: string
  h1: string
  intro: string
  rows: ComparisonRow[]
  whenCompetitor: string[]
  whenConnect: string[]
  faq: PlatformFaq[]
  // Another Reportei product that fits the reader better than the Connect, shown under "Quando a X faz mais sentido".
  related?: { before: string; label: string; href: string }
}

const CONNECT = {
  focus: "Métricas de marketing, CRM e e-commerce das contas dos seus clientes, dentro do seu produto. Também publica no Instagram e no Facebook e gerencia campanhas de Meta Ads.",
  tenants: "Sim. Seu sistema gera um link de conexão e o cliente autoriza as contas numa tela pronta do Connect.",
  brazil: "RD Station Marketing e CRM, Nuvemshop, Hotmart, Kiwify, Eduzz, Kommo, iFood, Magazord e Olist",
  billing: "Em reais, com conexões incluídas no plano e valor fixo por conexão adicional",
  language: "Português, com documentação e suporte do time do Reportei",
  trial: "15 dias grátis, sem cartão de crédito",
}

export const ALTERNATIVE_PAGES: AlternativePage[] = [
  {
    slug: "alternativa-zernio",
    competitor: "Zernio",
    competitorUrl: "https://zernio.com",
    title: "Alternativa à Zernio (antiga Late) em português | Reportei Connect",
    description:
      "Compare o Reportei Connect e a Zernio: métricas de 50 plataformas, incluindo RD Station, Nuvemshop e Hotmart, com cobrança em reais e suporte em português.",
    h1: "Alternativa à Zernio para quem precisa dos dados de marketing dos clientes no Brasil",
    intro:
      "A Zernio, antiga Late, é uma API para publicar, agendar e analisar conteúdo em redes sociais. O Reportei Connect é uma API para levar ao seu produto as métricas das contas dos seus clientes em 50 plataformas de mídia, CRM e e-commerce, incluindo as brasileiras.",
    rows: [
      {
        label: "Foco",
        connect: CONNECT.focus,
        competitor: "Publicação, agendamento e análise de conteúdo em redes sociais, com gestão de campanhas de anúncios.",
      },
      {
        label: "Contas dos seus clientes",
        connect: CONNECT.tenants,
        competitor: "Sim. Um perfil por cliente, com fluxo de OAuth hospedado pela Zernio.",
      },
      {
        label: "Plataformas brasileiras",
        connect: CONNECT.brazil,
        competitor: "RD Station, Nuvemshop, Hotmart, Kiwify, Kommo e iFood não aparecem na lista pública de plataformas.",
      },
      {
        label: "Cobrança",
        connect: CONNECT.billing,
        competitor: "Em dólar, por conta conectada, com as duas primeiras grátis.",
      },
      { label: "Idioma", connect: CONNECT.language, competitor: "Site e documentação em inglês." },
      { label: "Teste", connect: CONNECT.trial, competitor: "Duas contas conectadas grátis, sem cartão." },
    ],
    whenCompetitor: [
      "Seu produto é principalmente de publicação e agendamento em muitas redes sociais.",
      "Seus clientes estão fora do Brasil e você já fatura em dólar.",
    ],
    whenConnect: [
      "Você precisa de métricas de mídia paga junto com CRM e e-commerce, como RD Station, Kommo e Nuvemshop.",
      "Seus clientes são brasileiros e você quer pagar em reais, sem variação cambial.",
      "Você quer documentação, contrato e suporte em português.",
    ],
    faq: [
      {
        q: "A Zernio e a Late são a mesma empresa?",
        a: "Sim. A Late (getlate.dev) passou a se chamar Zernio, e o domínio antigo redireciona para zernio.com.",
      },
      {
        q: "O Reportei Connect também publica nas redes sociais?",
        a: "Publica no Instagram e no Facebook dos seus clientes, além de criar e gerenciar campanhas de Meta Ads. O foco do Connect é a leitura de métricas de 50 plataformas.",
      },
    ],
  },
  {
    slug: "alternativa-composio",
    competitor: "Composio",
    competitorUrl: "https://composio.dev",
    title: "Alternativa à Composio para dados de marketing | Reportei Connect",
    description:
      "Compare o Reportei Connect e a Composio: uma API focada em métricas de marketing, CRM e e-commerce, com plataformas brasileiras, preço em reais e suporte em português.",
    h1: "Alternativa à Composio para o seu agente ler dados de marketing",
    intro:
      "A Composio dá a agentes de IA acesso a mais de mil apps, com autenticação gerenciada. O Reportei Connect é especializado em métricas de marketing, CRM e e-commerce: entrega os números das contas dos seus clientes num formato único, pronto para o agente analisar.",
    rows: [
      {
        label: "Foco",
        connect: CONNECT.focus,
        competitor: "Ferramentas para agentes de IA executarem ações em mais de mil apps, com autenticação gerenciada.",
      },
      {
        label: "Contas dos seus clientes",
        connect: CONNECT.tenants,
        competitor: "Sim, por usuário. Para a tela de consentimento mostrar a sua marca, é preciso configurar o seu próprio app OAuth.",
      },
      {
        label: "Formato dos dados",
        connect: "Métricas com o mesmo formato em todas as plataformas, com o valor do período e o do período anterior.",
        competitor: "Cada toolkit segue as ações e o formato da API de origem.",
      },
      {
        label: "Plataformas brasileiras",
        connect: CONNECT.brazil,
        competitor: "Tem RD Station Marketing e Kommo. Nuvemshop, Hotmart, Kiwify e iFood não aparecem na lista pública de toolkits.",
      },
      { label: "Cobrança", connect: CONNECT.billing, competitor: "Em dólar, por volume de chamadas, com plano gratuito." },
      { label: "Idioma", connect: CONNECT.language, competitor: "Site e documentação em inglês." },
    ],
    whenCompetitor: [
      "Seu agente precisa agir em muitos tipos de app, como e-mail, calendário, Git e planilhas, além de marketing.",
      "Você já fatura em dólar e trabalha com documentação em inglês.",
    ],
    whenConnect: [
      "O que o seu agente precisa são métricas de mídia, CRM e e-commerce prontas para comparar.",
      "Seus clientes usam plataformas brasileiras como Nuvemshop, Hotmart e iFood.",
      "Você quer pagar em reais e ter suporte em português.",
    ],
    faq: [
      {
        q: "O Connect funciona com agentes de IA?",
        a: "Sim. O prompt da página inicial orienta Claude Code, Cursor ou Codex a abrir o cadastro, ler a especificação OpenAPI e implementar a integração. As métricas chegam no mesmo formato em todas as plataformas.",
      },
    ],
  },
  {
    slug: "alternativa-supermetrics",
    competitor: "Supermetrics",
    competitorUrl: "https://supermetrics.com",
    title: "Alternativa à Supermetrics API para o seu produto | Reportei Connect",
    description:
      "Compare o Reportei Connect e a Supermetrics: API para levar os dados de marketing dos seus clientes ao seu software, com teste sem contato comercial e cobrança em reais.",
    h1: "Alternativa à Supermetrics para colocar dados de marketing dentro do seu produto",
    intro:
      "A Supermetrics leva dados de marketing para planilhas, ferramentas de BI e data warehouses, e o acesso à API fica no plano Enterprise. O Reportei Connect é uma API para o seu software consultar as contas dos seus clientes, com cadastro e teste online.",
    rows: [
      {
        label: "Foco",
        connect: CONNECT.focus,
        competitor: "Levar dados de marketing para planilhas, ferramentas de BI, data warehouses e chats de IA.",
      },
      {
        label: "Para quem",
        connect: "Times de produto e desenvolvedores que integram os dados no próprio software.",
        competitor: "Profissionais de marketing e analistas. A oferta para desenvolvedores é separada.",
      },
      {
        label: "Acesso à API",
        connect: "Cadastro e chave de API online, no plano padrão.",
        competitor: "API de dados e de plataforma listadas só no plano Enterprise, com demonstração comercial.",
      },
      {
        label: "Plataformas brasileiras",
        connect: CONNECT.brazil,
        competitor: "RD Station, Nuvemshop, Hotmart, Kiwify, Kommo e iFood não aparecem na lista pública de conectores.",
      },
      { label: "Cobrança", connect: CONNECT.billing, competitor: "Em dólar, por destinos, fontes e contas." },
      { label: "Teste", connect: CONNECT.trial, competitor: "14 dias grátis, sem dados de pagamento." },
    ],
    whenCompetitor: [
      "Quem vai usar os dados é o time de marketing, em Google Sheets, Looker Studio ou num data warehouse.",
      "Você precisa de conectores para plataformas de mídia que não estão no catálogo do Connect.",
    ],
    whenConnect: [
      "Os dados vão aparecer dentro do seu produto, para os seus clientes.",
      "Você quer começar sem reunião comercial, com cadastro e teste online.",
      "Seus clientes usam RD Station, Nuvemshop, Hotmart ou outras plataformas brasileiras.",
    ],
    faq: [
      {
        q: "Dá para usar o Connect para alimentar planilhas e BI?",
        a: "Dá, consumindo a API no seu código. O Connect foi feito para produtos de software que mostram os dados aos próprios clientes, e não traz conectores prontos para planilhas.",
      },
    ],
    related: {
      before: "Se o time de marketing quer os dados no Google Sheets, sem programar, o Reportei tem o",
      label: "Reportei Sync, que compara com a Supermetrics nesse uso",
      href: "https://reportei.com/supermetrics-x-reportei-sync/",
    },
  },
  {
    slug: "alternativa-windsor-ai",
    competitor: "Windsor.ai",
    competitorUrl: "https://windsor.ai",
    title: "Alternativa ao Windsor.ai para o seu produto | Reportei Connect",
    description:
      "Compare o Reportei Connect e o Windsor.ai: API para o seu software consultar as contas de marketing dos seus clientes, com Nuvemshop, Hotmart e iFood, cobrança em reais e suporte em português.",
    h1: "Alternativa ao Windsor.ai para levar dados de marketing ao seu software",
    intro:
      "O Windsor.ai conecta mais de 350 fontes a ferramentas de BI, planilhas e data warehouses. O Reportei Connect é uma API para o seu produto consultar as contas que cada cliente conectou, com tela de conexão pronta e webhooks de status.",
    rows: [
      {
        label: "Foco",
        connect: CONNECT.focus,
        competitor: "Conectores sem código que enviam dados de marketing para BI, planilhas, data warehouses e chats de IA.",
      },
      {
        label: "Contas dos seus clientes",
        connect: `${CONNECT.tenants} Seu sistema recebe um webhook quando uma conexão muda de status.`,
        competitor: "Links de autorização para outras pessoas conectarem as contas, que ficam vinculadas à sua equipe no Windsor.",
      },
      {
        label: "Plataformas brasileiras",
        connect: CONNECT.brazil,
        competitor: "Tem RD Station Marketing e Kommo. Nuvemshop, Hotmart, Kiwify e iFood não aparecem na lista pública de conectores.",
      },
      { label: "Cobrança", connect: CONNECT.billing, competitor: "Em dólar, por fontes de dados e contas, com plano gratuito limitado." },
      { label: "Idioma", connect: CONNECT.language, competitor: "Site e documentação em inglês." },
      { label: "Teste", connect: CONNECT.trial, competitor: "30 dias de teste." },
    ],
    whenCompetitor: [
      "Você quer um pipeline de dados para o seu próprio BI ou data warehouse, sem escrever código.",
      "Você precisa de fontes que estão fora do catálogo do Connect.",
    ],
    whenConnect: [
      "Cada cliente do seu produto conecta as próprias contas e vê os dados dentro do seu sistema.",
      "Seus clientes usam Nuvemshop, Hotmart, Kiwify ou iFood.",
      "Você quer pagar em reais e ter suporte em português.",
    ],
    faq: [],
  },
]

export function findAlternativePage(slug: string) {
  return ALTERNATIVE_PAGES.find((page) => page.slug === slug)
}
