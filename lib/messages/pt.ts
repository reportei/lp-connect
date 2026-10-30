// A paragraph with inline links. `link` names a destination the component resolves for the current locale.
export type Rich = (string | { link: "ia" | "precos" | "terms"; text: string })[]

type Faq = { q: (integrations: number) => string; a: (integrations: number) => Rich[] }
const faqs = (items: Faq[]) => items

// Strings that reach client components must be plain data, so those use {placeholders} filled by `fill`.
export const pt = {
  meta: {
    homeTitle: (n: number) => `Reportei Connect | Dados de ${n} plataformas em uma API`,
    homeDescription: (n: number) =>
      `Conecte as contas de marketing, CRM e e-commerce dos seus clientes e acesse as métricas de ${n} plataformas por uma única API.`,
    softwareDescription: (n: number) =>
      `API para levar ao seu produto as métricas de ${n} plataformas de marketing, CRM e e-commerce dos seus clientes.`,
    integrationsTitle: (n: number) => `Integrações do Reportei Connect: ${n} APIs de marketing, CRM e e-commerce`,
    integrationsDescription: (n: number) =>
      `Meta Ads, Google Ads, Instagram, TikTok, RD Station, HubSpot, Nuvemshop e mais: as ${n} plataformas que o seu produto acessa por uma única API.`,
    ogImageAlt: "Reportei Connect: dados de 50 plataformas em uma API",
  },
  language: {
    label: "Idioma",
  },
  header: {
    nav: {
      practice: "Na prática",
      integrations: "Integrações",
      clients: "Clientes",
      ai: "Com IA",
      pricing: "Preços",
      docs: "Documentação",
    },
    login: "Entrar",
    signup: "Começar teste grátis",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
  },
  footer: {
    tagline: (n: number) => `${n} integrações de marketing, CRM e e-commerce em uma API para o seu sistema.`,
    product: "Produto",
    company: "Empresa",
    apis: "APIs",
    developers: "Desenvolvedores",
    whatIs: "O que é",
    practice: "Na prática",
    integrations: "Integrações",
    pricing: "Planos e preços",
    faq: "Perguntas frequentes",
    about: "Sobre o Reportei",
    stories: "Histórias de clientes",
    comparisons: "Comparativos",
    contact: "Contato",
    allIntegrations: "Todas as integrações",
    guides: "Guias de APIs",
    docs: "Documentação",
    ai: "Implementar com IA",
    signup: "Começar teste grátis",
    copyright: (year: number) => `© ${year} Reportei Connect. Um produto do Reportei.`,
    terms: "Termos de serviço",
  },
  hero: {
    title: (n: number) => `Dados de ${n} plataformas, no seu produto.`,
    copy: "Conecte as contas de marketing, CRM e e-commerce dos seus clientes. Acesse as métricas em uma única API e crie suas próprias análises, relatórios e dashboards.",
    signup: "Começar teste grátis",
    demo: "Agendar demonstração",
    trial: "15 dias para testar. Sem cartão de crédito.",
    buildWith: "Implemente com",
    seePrompt: "Ver o prompt",
  },
  productShots: {
    heading: "Por dentro do Connect",
    tabsLabel: "Telas do Connect",
    enlarge: "Ampliar captura de {label} em nova aba",
    metrics: {
      label: "Métricas",
      alt: "Interface real do Explorer: métrica de alcance do Meta Ads selecionada, com o payload enviado e a resposta da API.",
      caption: "Escolha as métricas, veja a resposta real da API e copie o código em cURL, Node.js, Python ou PHP.",
    },
    posts: {
      label: "Posts",
      alt: "Painel de posts do Connect: publicações de um cliente no Instagram com tipo, status e data de publicação.",
      caption:
        "Acompanhe cada post publicado nas contas dos seus clientes pela API, com tipo, status e horário de publicação.",
    },
    ads: {
      label: "Ads",
      alt: "Painel de anúncios do Connect: campanhas e conjuntos do Meta Ads de um cliente com objetivo, status e orçamento.",
      caption: "Veja campanhas, conjuntos e anúncios criados pela API, com status e orçamento de cada um.",
    },
  },
  clients: {
    heading: "Empresas que já usam o Reportei Connect",
    newTab: (name: string) => `${name} (abre em nova aba)`,
    caseLabel: (name: string) => `Case ${name}`,
  },
  whatIs: {
    title: "O que é o Reportei Connect?",
    copy: (n: number) =>
      `Uma API para levar dados de ${n} integrações ao seu sistema. Você conecta as contas dos seus clientes e usa as métricas dentro do seu produto.`,
    about:
      "Criado pelo Reportei, que tem mais de 10 anos de experiência em relatórios de marketing e atende mais de 10 mil clientes ativos.",
    pillars: [
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
    ],
  },
  apiDemo: {
    eyebrow: "Na prática",
    title: "Uma chamada à API, o resultado na conta do seu cliente.",
    copy: "Veja o que você envia ao Connect e o que acontece do outro lado, em cada parte da API.",
    tabsLabel: "Partes da API",
    footnote: "Valores ilustrativos. O contrato completo de cada endpoint está na",
    footnoteLink: "documentação da API",
    placeholders: {
      accountKey: "<chave da sua conta>",
      customerToken: "<token do cliente>",
      metaConnection: "<conexão Meta Ads>",
    },
    metrics: {
      label: "Métricas",
      step: "Consultar",
      title: "Peça as métricas de uma conta conectada",
      body: "Você escolhe a conexão, o período e as métricas. O Connect busca na plataforma e devolve os valores no mesmo formato para qualquer integração.",
      inProduct: "No seu produto",
      account: "Meta Ads do seu cliente · setembro",
      reach: "Alcance total",
      reachHint: "pessoas viram os anúncios pelo menos uma vez",
    },
    ads: {
      label: "Anúncios",
      panel: "Na conta de anúncios do seu cliente",
      campaign: "Campanha",
      adset: "Conjunto",
      ad: "Anúncio",
      traffic: "Tráfego",
      placements: "Facebook e Instagram",
      offer: "Até 50% off",
      shopNow: "Comprar agora",
      adName: "Black Friday, imagem",
      budget: "R$ {amount}/dia",
      was: "R$ {amount}",
      inReview: "Em análise",
      active: "Ativo",
      running: "Rodando",
      create: {
        step: "Criar",
        title: "Crie a campanha, o conjunto e o anúncio numa chamada",
        body: "Tudo nasce pausado e só é ativado no último passo. Se algo falhar no meio, nada fica rodando com o dinheiro do seu cliente.",
      },
      adjust: {
        step: "Ajustar",
        title: "Mude orçamento e status sem abrir o gerenciador",
        body: "Cada escrita é registrada e pode ser repetida com a mesma Idempotency-Key sem duplicar nada.",
      },
      track: {
        step: "Acompanhar",
        title: "Saiba quando a plataforma aprovou",
        body: "O status efetivo vem direto da plataforma, então seu produto mostra se o anúncio está em análise, rodando ou foi recusado.",
      },
    },
    posts: {
      label: "Publicações",
      instagramPanel: "No Instagram do seu cliente",
      facebookPanel: "Na página do seu cliente",
      brand: "Minha Marca",
      handle: "minha_marca",
      caption: "Coleção de verão #verao",
      facebookCaption: "Coleção de verão chegando às lojas",
      firstComment: "Link na bio!",
      now: "Agora",
      nowPublic: "Agora · Público",
      publishing: "Publicando…",
      like: "Curtir",
      comment: "Comentar",
      share: "Compartilhar",
      statusPublishing: "Publicando",
      statusPublished: "Publicado",
      publish: {
        step: "Publicar",
        title: "Publique no Instagram do seu cliente",
        body: "Você manda a legenda e a mídia. O Connect sobe o conteúdo pela conta que o cliente já conectou e cuida da publicação.",
      },
      track: {
        step: "Acompanhar",
        title: "Saiba quando o post foi ao ar",
        body: "Consulte pelo uuid ou pela sua própria referência. A resposta traz o status de cada mídia e o link do post publicado.",
      },
      facebook: {
        step: "Facebook",
        title: "A mesma chamada para a página do Facebook",
        body: "Troque a integração e o mesmo formato publica na página do cliente. Você não aprende uma API nova por rede.",
      },
    },
  },
  howItWorks: {
    title: "Como funciona na prática",
    copy: "Das contas dos seus clientes às funcionalidades do seu sistema.",
    steps: [
      {
        title: "Conecte as contas",
        body: (n: number) =>
          `Escolha entre ${n} integrações e solicite ao seu cliente a autorização das contas que serão usadas.`,
      },
      {
        title: "Consulte a API",
        body: () => "Integre seu sistema ao Connect e consulte as métricas disponíveis nas contas conectadas.",
      },
      {
        title: "Use no seu produto",
        body: () =>
          "Combine as métricas com seus dados internos e crie relatórios, dashboards e análises para seus clientes.",
      },
    ],
    flowCaption: "Fluxo dos dados: contas conectadas nas plataformas, Reportei Connect e seu produto.",
    connected: "Contas conectadas",
    connectedHint: "Google Ads, Meta Ads, CRMs e e-commerces",
    product: "Seu produto",
    productHint: "Relatórios, dashboards e análises",
  },
  problems: {
    eyebrow: "O que fica com a gente",
    title: "O trabalho que você não precisa fazer.",
    copy: "Integrar uma plataforma é a parte fácil. Manter a integração funcionando para centenas de contas é o que consome o time.",
    items: [
      {
        problem: "Aprovação de app em cada plataforma",
        solution:
          "Meta, Google, LinkedIn e TikTok revisam o app antes de liberar dados de terceiros. Com o Connect, você usa integrações que já passaram por essas revisões.",
      },
      {
        problem: "Um fluxo de OAuth por rede",
        solution:
          "Você gera um link de conexão e seu cliente autoriza as contas numa tela pronta, hospedada pelo Connect. Seu código não implementa OAuth de nenhuma plataforma.",
      },
      {
        problem: "Tokens que expiram",
        solution:
          "O Connect renova os tokens antes de vencerem e verifica periodicamente se cada conexão continua com acesso.",
      },
      {
        problem: "Conexões que caem sem aviso",
        solution:
          "Quando uma conexão muda de status ou é removida, seu sistema recebe um webhook e pode avisar o cliente na hora.",
      },
      {
        problem: "Cada API devolve um formato",
        solution:
          "As métricas de todas as plataformas chegam no mesmo formato, com o valor do período e o do período anterior.",
      },
      {
        problem: "APIs que mudam o tempo todo",
        solution:
          "Versões novas, campos depreciados e limites de requisição ficam com o time do Reportei, que mantém essas integrações há mais de 10 anos.",
      },
    ],
  },
  caseStudy: {
    eyebrow: "Connect na prática · Leadster",
    title: "Os dados de mídia no dashboard da Leadster.",
    paragraphs: [
      "A Leadster já reunia dados de leads e interações dos seus chatbots. Faltava conectar esses resultados ao investimento em mídia.",
      "Com o Reportei Connect, passou a cruzar seus dados internos com Google Ads, Meta Ads e LinkedIn Ads no Super Dashboard.",
      "Custo por conversão, CPM e desempenho por campanha, em uma visão consolidada dos canais.",
    ],
    readCase: "Ler o case completo",
    watch: "Assistir à apresentação",
  },
  carousel: {
    roledescription: "carrossel",
    label: "Telas do Super Dashboard Leadster",
    previous: "Slide anterior",
    next: "Próximo slide",
    slides: [
      "Super Dashboard Leadster - Customização de eventos e investimentos por conversão",
      "Campanhas Google Ads com métricas detalhadas de investimento e conversão",
      "Visão consolidada por canal - Google Ads, LinkedIn Ads e Meta Ads",
      "Investimentos por conversão com custo por lead e taxa de conversão",
      "Análise completa de campanhas com métricas de todos os canais",
    ],
  },
  networks: {
    title: "{n} integrações para o seu produto",
    copy: "Mídia paga, redes sociais, CRM e e-commerce. Encontre as plataformas que você precisa e acesse seus dados pela API do Reportei Connect.",
    searchLabel: "Buscar integração",
    searchPlaceholder: "Ex.: Google Ads, HubSpot ou Shopify",
    filterLabel: "Filtrar integrações por categoria",
    all: "Todas ({n})",
    found: { one: "1 integração encontrada", other: "{n} integrações encontradas" },
    note: "Uma integração é uma plataforma disponível no catálogo. Uma conexão é uma conta dessa plataforma vinculada ao Connect, e é a unidade usada na cobrança.",
    seePlan: "Veja como funciona o plano.",
    details: "Detalhes de cada integração.",
  },
  // Keys are the category ids in lib/integrations.ts.
  categories: {
    "Mídia paga": "Mídia paga",
    "Redes sociais": "Redes sociais",
    "Analytics e SEO": "Analytics e SEO",
    "Marketing e CRM": "Marketing e CRM",
    Atendimento: "Atendimento",
    "E-commerce e vendas": "E-commerce e vendas",
  },
  // Only the names that change between languages; brand names stay as they are.
  integrationNames: {} as Record<string, string>,
  ai: {
    eyebrow: "Implemente com IA",
    title: "Seu agente de código faz a integração.",
    copy: "Copie o prompt e cole no Claude Code, Cursor ou Codex. Ele orienta o agente a abrir o seu cadastro, ler a especificação da API e implementar a integração no backend do seu projeto.",
    note: "Você preenche seus dados quando o agente pedir e revisa a implementação antes de publicar.",
    windowTitle: "seu-projeto · agente de código",
    promptEcho: "> Preciso integrar o Reportei Connect neste projeto…",
    transcript: [
      "Lendo app.connect.reportei.com/provision-trial.md",
      "Link de cadastro enviado. Aguardando você criar a conta",
      "Conta criada. Chave salva em CONNECT_API_KEY no .env",
      "Lendo a especificação em /openapi.json",
      "Criando customers e o link de conexão no backend",
      "Teste de fumaça: métricas de uma conta conectada",
    ],
    transcriptCaption:
      "Exemplo do que o agente faz ao seguir o prompt: lê as instruções, espera o cadastro, guarda a chave no .env, lê a especificação e implementa a integração.",
    resources: {
      docs: {
        title: "Documentação da API",
        body: "Endpoints, autenticação, erros e exemplos de cada recurso.",
        cta: "Ver documentação",
      },
      openapi: {
        title: "Especificação OpenAPI",
        body: "O contrato da API em um arquivo, para o seu agente ler antes de escrever código.",
        cta: "Abrir openapi.json",
      },
      explorer: {
        title: "Connect Explorer",
        body: "Conecte uma conta, escolha as métricas e copie o payload pronto para o seu código.",
        cta: "Testar no Explorer",
      },
    },
  },
  delegate: {
    sentence:
      "Preciso integrar o Reportei Connect neste projeto. Leia as instruções em https://app.connect.reportei.com/provision-trial.md e siga o passo a passo descrito lá.",
    copy: "Copiar prompt",
    copied: "Copiado!",
    copiedStatus: "Prompt copiado",
  },
  pricing: {
    eyebrow: "Planos e preços",
    title: "Cresça com seus clientes. O Connect acompanha.",
    copy: "Um plano com conexões incluídas e preço fixo por conexão adicional, igual em qualquer plataforma do catálogo. Sem custo de implantação.",
    connectionTitle: "O que conta como uma conexão?",
    connectionBody:
      "Cada conta de uma plataforma que seu cliente conecta ao Connect conta como uma conexão. Um mesmo cliente pode ter várias conexões.",
    exampleTitle: "Exemplo: um cliente do seu software",
    example: ["1 perfil do Instagram", "1 conta do Google Ads", "1 conta do Meta Ads"],
    oneConnection: "1 conexão",
    exampleTotal: "1 cliente, 3 contas conectadas = 3 conexões",
    footer:
      "Todas as integrações estão disponíveis no plano. A mensalidade varia com a quantidade de contas conectadas pelos seus clientes.",
    billingQuestions: "Dúvidas sobre a cobrança",
    embedTitle: "Planos e preços do Reportei Connect",
    fallbackTitle: "Plano Connect",
    fallbackBody:
      "Conexões incluídas no plano e valor fixo por conexão adicional, igual em qualquer plataforma. Veja os valores e simule quanto você pagaria.",
    fallbackCta: "Ver planos e preços",
  },
  faq: {
    title: "Perguntas frequentes",
    productGroup: "Sobre o Connect",
    pricingGroup: "Preços e conexões",
    termsBefore: "Consulte as condições completas nos",
    termsLink: "termos de serviço do Reportei Connect",
    product: faqs([
      {
        q: () => "O que dá para fazer com o Reportei Connect?",
        a: (n: number): Rich[] => [
          [
            `Conectar as contas dos seus clientes em ${n} plataformas de marketing, CRM e e-commerce e consultar as métricas delas por uma única API.`,
          ],
          [
            "Também dá para publicar no Instagram e no Facebook dos seus clientes e, no Meta Ads, criar e gerenciar campanhas, conjuntos e anúncios, tudo pelas mesmas contas conectadas.",
          ],
        ],
      },
      {
        q: () => "Preciso criar e aprovar um app em cada plataforma?",
        a: (): Rich[] => [
          [
            "Não. As integrações do Connect já passaram pelas revisões das plataformas. Seu cliente autoriza o acesso às contas e você consulta os dados pela API, sem cadastrar app próprio em cada rede.",
          ],
        ],
      },
      {
        q: () => "Meus clientes precisam ter conta no Reportei?",
        a: (): Rich[] => [
          [
            "Não. Seu sistema gera um link de conexão e o cliente autoriza as contas numa tela pronta do Connect. Depois, ele continua usando só o seu produto.",
          ],
        ],
      },
      {
        q: () => "Quais dados posso consultar?",
        a: (): Rich[] => [
          [
            "As métricas suportadas em cada plataforma, dentro das permissões da conta conectada. O catálogo de métricas de cada integração está na API e no Connect Explorer, onde você testa a consulta antes de escrever código.",
          ],
        ],
      },
      {
        q: () => "Como os tokens dos meus clientes ficam guardados?",
        a: (): Rich[] => [
          [
            "Seu sistema não lida com os tokens das plataformas. Eles ficam criptografados no Connect, que renova cada um antes de vencer e o usa só para buscar os dados que você pediu.",
          ],
        ],
      },
      {
        q: () => "E se a conexão de um cliente perder o acesso?",
        a: (): Rich[] => [
          [
            "O Connect verifica as conexões periodicamente. Quando uma delas muda de status ou é removida, seu sistema recebe um webhook e pode pedir ao cliente que conecte a conta de novo.",
          ],
        ],
      },
      {
        q: () => "Posso implementar com um agente de IA?",
        a: (): Rich[] => [
          [
            "Sim. O prompt da seção ",
            { link: "ia", text: "Implemente com IA" },
            " orienta Claude Code, Cursor ou Codex a abrir seu cadastro, ler a especificação OpenAPI e implementar a integração no backend do seu projeto.",
          ],
        ],
      },
    ]),
    pricing: faqs([
      {
        q: () => "Qual é a diferença entre cliente e conexão?",
        a: (): Rich[] => [
          [
            "Um cliente final do seu produto pode ter várias conexões. Cada conexão corresponde a uma conta desse cliente em uma plataforma. Se ele conectar uma conta do Instagram e uma do Google Ads, serão duas conexões.",
          ],
        ],
      },
      {
        q: (n: number) => `As ${n} integrações estão incluídas no plano?`,
        a: (): Rich[] => [
          [
            "Sim. Todas estão disponíveis no mesmo plano e têm o mesmo preço por conexão. O acesso depende das permissões da conta conectada e se limita aos dados e às métricas suportados pelo Connect.",
          ],
        ],
      },
      {
        q: () => "Como são contadas várias contas da mesma plataforma?",
        a: (): Rich[] => [
          [
            "Cada conta conectada conta como uma conexão, mesmo que pertença ao mesmo cliente. Por exemplo, três contas de Google Ads representam três conexões.",
          ],
        ],
      },
      {
        q: () => "Como é calculado o valor da cobrança?",
        a: (): Rich[] => [
          [
            "A quantidade faturada é a média diária de conexões ativas durante o ciclo, arredondada para cima. As conexões acima das incluídas no plano são cobradas pelo valor adicional da tabela de preços.",
          ],
          [
            "Se o plano incluir 10 conexões e a média arredondada do ciclo for 14, você paga o plano e mais 4 conexões adicionais.",
          ],
        ],
      },
      {
        q: () => "Se eu remover uma conta, o valor diminui?",
        a: (): Rich[] => [
          [
            "Remover uma conta reduz o número de conexões ativas. O efeito na cobrança depende de quantos dias ela ficou ativa no ciclo e da média diária final, arredondada para cima. O valor base do plano continua incluindo as conexões do plano.",
          ],
        ],
      },
      {
        q: () => "Posso testar sem cartão de crédito?",
        a: (): Rich[] => [["Sim. Você pode testar o Reportei Connect por 15 dias sem cadastrar cartão de crédito."]],
      },
      {
        q: () => "Posso cancelar a qualquer momento?",
        a: (): Rich[] => [
          [
            "Sim. O cancelamento pode ser solicitado a qualquer momento e passa a valer ao final do ciclo de cobrança vigente.",
          ],
        ],
      },
    ]),
  },
  cta: {
    title: "Veja o Connect aplicado ao seu produto.",
    copy: "Teste por 15 dias sem cartão, ou mostre seu cenário ao nosso time.",
    signup: "Começar teste grátis",
    demo: "Agendar demonstração",
  },
  integrationsPage: {
    eyebrow: "Integrações",
    title: (n: number) => `${n} plataformas em uma API para o seu produto`,
    copy: "Seus clientes conectam as contas de mídia paga, redes sociais, CRM e e-commerce. Seu sistema consulta as métricas de todas elas pela mesma API, no mesmo formato.",
    popular: "APIs mais procuradas",
    apiOf: (platform: string) => `API do ${platform}`,
    catalog: "Catálogo completo",
    comparisons: "Comparativos",
    versus: (competitor: string) => `Connect ou ${competitor}`,
  },
}

export type Messages = typeof pt
