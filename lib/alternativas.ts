// "Alternativa a X" pages for the competitor terms the Connect buys on Google.
// Every competitor cell comes from that company's own site; update each page's checkedAt and sources when re-checking it.
// No price comparison on purpose: the Connect price lives in the app embed, and a cheaper-than claim needs both prices side by side.

import { NATIVE_COUNT, TOOLKIT_COUNT } from "@/lib/catalog"
import type { PlatformFaq } from "@/lib/plataformas"

export const CHECKED_AT = "27/10/2026"

export type ComparisonRow = { label: string; connect: string; competitor: string }

export type AlternativePage = {
  slug: string
  competitor: string
  competitorUrl: string
  checkedAt?: string
  sources?: { label: string; href: string }[]
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

// Current product scope for the comparisons rechecked on 11/11/2026.
// Keep the older comparisons unchanged until their own review.
const CONNECT_CURRENT = {
  focus: `Métricas de ${NATIVE_COUNT} plataformas de marketing, CRM e e-commerce; publicação de posts; gestão de Meta Ads; e ações em ${TOOLKIT_COUNT} apps por toolkits.`,
  postsAndAds: "Posts em Instagram, Facebook, Threads, LinkedIn e Pinterest, além de Shorts no YouTube. Criação e gestão de campanhas, conjuntos e anúncios no Meta Ads. Os formatos variam por rede.",
  data: "Metrics entrega as métricas suportadas em uma estrutura comum. Toolkits usam parâmetros próprios por operação e, em caso de sucesso, retornam o status e o corpo da resposta do app.",
  auth: "Integrações que usam o app Reportei dispensam um app próprio. Toolkits OAuth exigem o app do seu produto; outros modos usam as credenciais previstas no catálogo.",
  billing: "Em reais, por plano e quantidade de conexões, conforme os valores e condições vigentes.",
}

export const ALTERNATIVE_PAGES: AlternativePage[] = [
  {
    slug: "alternativa-zernio",
    competitor: "Zernio",
    competitorUrl: "https://zernio.com",
    checkedAt: "11/11/2026",
    sources: [
      { label: "Plataformas Zernio", href: "https://docs.zernio.com/platforms" },
      { label: "Contas de clientes Zernio", href: "https://docs.zernio.com/multi-tenant" },
      { label: "Preços Zernio", href: "https://zernio.com/pricing" },
      { label: "Documentação Connect", href: "https://developers.reportei.com/connect" },
    ],
    title: "Alternativa à Zernio para SaaS no Brasil | Reportei Connect",
    description:
      "Compare Reportei Connect e Zernio para integrar métricas, publicações e ações ao seu SaaS. Veja os recursos, a autenticação e a cobrança de cada API.",
    h1: "Alternativa à Zernio para conectar marketing, CRM e e-commerce ao seu produto",
    intro:
      `A Zernio reúne publicação, mensagens, anúncios e análise de redes sociais em uma API. O Reportei Connect combina métricas de ${NATIVE_COUNT} plataformas de marketing, CRM e e-commerce com publicação de posts, gestão de Meta Ads e toolkits para executar ações em ${TOOLKIT_COUNT} apps dos seus clientes.`,
    rows: [
      {
        label: "Escopo",
        connect: CONNECT_CURRENT.focus,
        competitor: "Publicação e agendamento, mensagens e comentários, anúncios e analytics nas plataformas atendidas.",
      },
      {
        label: "Publicação e anúncios",
        connect: CONNECT_CURRENT.postsAndAds,
        competitor: "Publicação em várias redes e gestão de anúncios nas redes suportadas. Consulte o catálogo para confirmar os formatos e operações do seu caso.",
      },
      {
        label: "Dados e ações",
        connect: CONNECT_CURRENT.data,
        competitor: "Endpoints de publicação, inbox, anúncios e analytics. A cobertura de dados e operações depende da plataforma.",
      },
      {
        label: "Contas dos seus clientes",
        connect: CONNECT.tenants,
        competitor: "Perfis para organizar clientes e fluxo de conexão das contas, com autorização nas plataformas.",
      },
      {
        label: "Autenticação",
        connect: CONNECT_CURRENT.auth,
        competitor: "Conexão hospedada para autorizar contas nas plataformas. Os métodos e permissões disponíveis dependem da integração.",
      },
      {
        label: "Plataformas brasileiras",
        connect: CONNECT.brazil,
        competitor: "Confira no catálogo oficial se as plataformas e operações dos seus clientes estão cobertas.",
      },
      {
        label: "Cobrança",
        connect: CONNECT_CURRENT.billing,
        competitor: "Em dólar, por contas conectadas e usos específicos, conforme a tabela vigente.",
      },
      { label: "Idioma", connect: CONNECT.language, competitor: "Documentação técnica pública em inglês. Consulte os canais de suporte disponíveis." },
      { label: "Teste", connect: CONNECT.trial, competitor: "Duas contas conectadas grátis, sem cartão." },
    ],
    whenCompetitor: [
      "Publicação, agendamento, mensagens ou comentários em várias redes são o centro do seu produto.",
      "As plataformas e operações do seu projeto estão cobertas pela API da Zernio.",
      "O modelo de contas e consumo em dólar atende ao seu negócio.",
    ],
    whenConnect: [
      "Seu produto precisa reunir dados de mídia, CRM e e-commerce, incluindo plataformas usadas por empresas brasileiras.",
      "Você quer combinar métricas com posts, gestão de Meta Ads ou ações nos apps atendidos pelos toolkits.",
      "Cobrança em reais, documentação e suporte em português são importantes para sua operação.",
    ],
    faq: [
      {
        q: "O Reportei Connect também publica nas redes sociais?",
        a: "Sim. Posts permite publicar em Instagram, Facebook, Threads, LinkedIn e Pinterest, além de Shorts no YouTube. Os formatos, campos e permissões variam por rede. A área Ads permite criar e gerenciar campanhas, conjuntos e anúncios no Meta Ads.",
      },
      {
        q: "O Connect substitui todas as funções da Zernio?",
        a: "A escolha depende das operações do seu produto. Compare as redes, os formatos, as métricas e os recursos de mensagens e anúncios necessários. As APIs têm catálogos e limites próprios; uma integração com a mesma plataforma não garante as mesmas funções.",
      },
      {
        q: "Preciso criar um app OAuth?",
        a: "Nas integrações que usam o app Reportei, seu cliente autoriza o acesso pelo fluxo do Connect. Os toolkits OAuth usam o app do seu produto, que você cadastra no Connect. Cada toolkit informa seus modos de conexão e requisitos.",
      },
    ],
  },
  {
    slug: "alternativa-composio",
    competitor: "Composio",
    competitorUrl: "https://composio.dev",
    checkedAt: "11/11/2026",
    sources: [
      { label: "Toolkits Composio", href: "https://docs.composio.dev/toolkits" },
      { label: "Autenticação Composio", href: "https://docs.composio.dev/docs/authentication" },
      { label: "Consentimento com sua marca", href: "https://docs.composio.dev/docs/authentication/white-labeling-authentication" },
      { label: "Preços da plataforma Composio", href: "https://composio.dev/pricing/platform" },
      { label: "Documentação Connect", href: "https://developers.reportei.com/connect" },
    ],
    title: "Alternativa à Composio para marketing | Reportei Connect",
    description:
      "Compare Reportei Connect e Composio para seu SaaS ou agente de IA. Entenda métricas, toolkits, autenticação e cobrança para escolher a integração.",
    h1: "Alternativa à Composio para integrar dados de marketing e ações ao seu produto",
    intro:
      `A Composio oferece ferramentas e autenticação para agentes e aplicações acessarem contas dos usuários em diversos apps. O Reportei Connect reúne métricas de ${NATIVE_COUNT} plataformas de marketing, CRM e e-commerce e também permite publicar posts, gerenciar Meta Ads e executar ações em ${TOOLKIT_COUNT} apps por toolkits.`,
    rows: [
      {
        label: "Escopo",
        connect: CONNECT_CURRENT.focus,
        competitor: "Ferramentas para agentes e aplicações, descoberta e execução de tools, autenticação por usuário e eventos, conforme o toolkit.",
      },
      {
        label: "Métricas e respostas",
        connect: CONNECT_CURRENT.data,
        competitor: "Cada tool possui seu contrato de entrada e saída. A cobertura e os dados disponíveis dependem do toolkit e da operação.",
      },
      {
        label: "Ações",
        connect: `${CONNECT_CURRENT.postsAndAds} Toolkits acrescentam operações em outros apps, como mensagens, tarefas e arquivos.`,
        competitor: "Operações em diversas categorias de apps, disponíveis pelo catálogo de tools e APIs da plataforma.",
      },
      {
        label: "Contas dos seus clientes",
        connect: CONNECT.tenants,
        competitor: "Conexões vinculadas ao usuário da sua aplicação, com links hospedados para autorização e gestão de credenciais.",
      },
      {
        label: "Autenticação",
        connect: CONNECT_CURRENT.auth,
        competitor: "Apps OAuth gerenciados e configurações próprias, conforme a integração e o cenário. É possível usar seu app para personalizar o consentimento e os escopos.",
      },
      {
        label: "Plataformas brasileiras",
        connect: CONNECT.brazil,
        competitor: "Consulte o catálogo para confirmar os apps, as tools e os requisitos necessários ao seu produto.",
      },
      { label: "Cobrança", connect: CONNECT_CURRENT.billing, competitor: "Em dólar, com franquias e cobrança por uso. Chamadas, eventos, conexões gerenciadas e adicionais seguem regras próprias." },
      { label: "Idioma", connect: CONNECT.language, competitor: "Documentação técnica pública em inglês. Suporte e recursos adicionais dependem da oferta contratada." },
    ],
    whenCompetitor: [
      "Você quer avaliar uma infraestrutura de tools, autenticação e eventos para agentes ou aplicações que atuam em diversas categorias de apps.",
      "Os toolkits e requisitos de autenticação da Composio atendem às operações do seu projeto.",
      "O modelo de cobrança por uso e o ecossistema de SDKs se ajustam à sua implementação.",
    ],
    whenConnect: [
      "Seu produto precisa de métricas de mídia, CRM e e-commerce em uma estrutura comum para análise.",
      "Seus clientes usam integrações como RD Station, Nuvemshop, Hotmart e iFood, e você quer reunir esses dados no seu software.",
      "Você também precisa das operações oferecidas por Posts, Ads ou Toolkits, com cobrança do Connect em reais e suporte em português.",
    ],
    faq: [
      {
        q: "O Connect funciona com agentes de IA?",
        a: "Sim. Seu agente pode consultar a API e executar as operações disponíveis. O catálogo de tools informa os argumentos de cada operação. Para implementar, há documentação, OpenAPI e um fluxo guiado para agentes de código.",
      },
      {
        q: "Todas as respostas do Connect têm o mesmo formato?",
        a: "As métricas atendidas por Metrics usam uma estrutura comum. Nos Toolkits, os campos variam por operação e, em caso de sucesso, o status e o corpo da resposta vêm do app conectado. Erros HTTP retornados pelo app usam o envelope {error, api_error}. Consulte o contrato do recurso antes de integrar.",
      },
      {
        q: "A Composio também gerencia OAuth?",
        a: "Sim. A Composio oferece autenticação gerenciada e configurações com app próprio. No Connect, os requisitos também variam por família: integrações que usam o app Reportei e toolkits OAuth têm modelos distintos. Compare os requisitos das plataformas que você precisa conectar.",
      },
      {
        q: "O Connect substitui todas as tools da Composio?",
        a: "Os catálogos têm coberturas diferentes. Verifique cada operação necessária, seus parâmetros, permissões e limites. O fato de os dois produtos integrarem um app não comprova que ofereçam as mesmas ações.",
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
