// A paragraph with inline links. `link` names a destination the component resolves for the current locale.
export type Rich = (string | { link: "ia" | "precos" | "terms"; text: string })[]

// `integrations` counts the native integrations, the ones with metrics; `toolkits` counts the toolkits.
type Faq = { q: (integrations: number) => string; a: (integrations: number, toolkits: number) => Rich[] }
const faqs = (items: Faq[]) => items

// Strings that reach client components must be plain data, so those use {placeholders} filled by `fill`.
export const pt = {
  meta: {
    homeTitle: "API de dados de marketing para SaaS | Reportei Connect",
    homeDescription: (n: number) =>
      `API para o seu software consultar Instagram, Meta Ads, Google Ads, RD Station e mais ${n - 4} plataformas de marketing, CRM e e-commerce dos seus clientes.`,
    softwareDescription: (n: number) =>
      `API para levar ao seu produto as métricas de ${n} plataformas de marketing, CRM e e-commerce dos seus clientes.`,
    integrationsTitle: (n: number) => `Integrações do Reportei Connect: ${n} plataformas em uma API`,
    integrationsDescription: (n: number) =>
      `Meta Ads, Google Ads, Instagram, RD Station, HubSpot, WhatsApp, Slack e mais: as ${n} plataformas que o seu produto acessa por uma única API.`,
    ogImageAlt: (n: number) => `Reportei Connect: ${n} integrações em uma API`,
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
    tagline: (n: number, toolkits: number) =>
      `Métricas de ${n} plataformas de marketing, CRM e e-commerce e ações em mais ${toolkits} apps, em uma API para o seu sistema.`,
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
    toolkits: "Toolkits",
    guides: "Guias de APIs",
    docs: "Documentação",
    ai: "Implementar com IA",
    signup: "Começar teste grátis",
    copyright: (year: number) => `© ${year} Reportei Connect. Um produto do Reportei.`,
    terms: "Termos de serviço",
  },
  hero: {
    title: (total: number) => `Integre ${total} plataformas ao seu sistema com uma única API.`,
    copy: (n: number, toolkits: number) =>
      `Consulte métricas de ${n} plataformas de marketing, CRM e e-commerce, como Meta Ads, Google Ads e RD Station, e execute ações em mais ${toolkits} apps dos seus clientes, como WhatsApp, Slack e ClickUp.`,
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
          "Nas integrações nativas padrão, você usa os apps mantidos pelo Connect, já revisados pelas plataformas. Toolkits com OAuth exigem cadastrar o app do seu produto.",
      },
      {
        problem: "Um fluxo de OAuth por rede",
        solution:
          "Você gera um link e seu cliente autoriza as contas numa tela hospedada pelo Connect. Nos toolkits com OAuth, você cadastra antes as credenciais do app do seu produto.",
      },
      {
        problem: "Tokens que expiram",
        solution:
          "O Connect gerencia a renovação nas integrações com suporte a ela. Contas conectadas com app próprio da Meta exigem reconexão quando o token perde a validade.",
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
          "Versões novas, campos depreciados e limites de requisição ficam com o time do Reportei, que mantém integrações de marketing há mais de 10 anos.",
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
    copy: "Mídia paga, redes sociais, CRM e e-commerce para consultar métricas, e toolkits para executar ações em apps como WhatsApp, Slack e ClickUp. Encontre as plataformas que você precisa e use todas pela API do Reportei Connect.",
    searchLabel: "Buscar integração",
    searchPlaceholder: "Ex.: Google Ads, HubSpot ou Shopify",
    filterLabel: "Filtrar integrações por categoria",
    all: "Todas ({n})",
    found: { one: "1 integração encontrada", other: "{n} integrações encontradas" },
    note: "Uma integração é uma plataforma disponível no catálogo. Uma conexão é uma conta dessa plataforma vinculada ao Connect, e é a unidade usada na cobrança.",
    seePlan: "Veja como funciona o plano.",
    details: "Detalhes de cada integração.",
    toolkitBadge: "Toolkit",
    toolkitHint: "Executa ações, sem métricas",
  },
  // Keys are the category ids in lib/integrations.ts.
  categories: {
    "Mídia paga": "Mídia paga",
    "Redes sociais": "Redes sociais",
    "Analytics e SEO": "Analytics e SEO",
    "Marketing e CRM": "Marketing e CRM",
    Atendimento: "Atendimento e comunicação",
    "E-commerce e vendas": "E-commerce e vendas",
    Financeiro: "Financeiro",
    Produtividade: "Produtividade",
    "Ferramentas de dev": "Ferramentas de dev",
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
        a: (n: number, toolkits: number): Rich[] => [
          [
            `Conectar as contas dos seus clientes em ${n} plataformas de marketing, CRM e e-commerce e consultar as métricas delas por uma única API.`,
          ],
          [
            "Também dá para publicar no Instagram, Facebook, Threads, LinkedIn, Pinterest e YouTube Shorts dos seus clientes e, no Meta Ads, no Google Ads e no TikTok Ads, criar e gerenciar campanhas, conjuntos e anúncios, conforme as permissões das contas conectadas.",
          ],
          [
            `Com os toolkits, seu produto executa ações em mais ${toolkits} apps dos seus clientes, como enviar mensagens no WhatsApp, criar tarefas no ClickUp ou avisar um canal do Slack. Toolkits não trazem métricas.`,
          ],
        ],
      },
      {
        q: () => "Preciso criar e aprovar um app em cada plataforma?",
        a: (): Rich[] => [
          [
            "Nas integrações nativas padrão, você usa os apps mantidos pelo Connect, sem cadastrar um app próprio em cada rede. Já os toolkits com OAuth exigem registrar as credenciais do app do seu produto no Connect e cumprir as exigências da plataforma. Seu cliente sempre precisa autorizar o acesso. Outros modos de conexão usam as credenciais exigidas pelo app.",
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
            "O Connect guarda as credenciais criptografadas e as usa nas consultas e ações autorizadas. A renovação depende do modo de conexão e do suporte do provedor. Quando você usa um app próprio da Meta, o Connect não verifica nem renova os tokens emitidos por esse app; se perderem a validade, é preciso reconectar a conta.",
          ],
        ],
      },
      {
        q: () => "E se a conexão de um cliente perder o acesso?",
        a: (): Rich[] => [
          [
            "Nas integrações nativas gerenciadas, o Connect verifica as conexões periodicamente e avisa por webhook quando mudam de status ou são removidas. Seu sistema também deve tratar erros de autorização nas chamadas e pedir a reconexão quando necessário. Tokens de app próprio da Meta não passam por essa verificação automática.",
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
    copy: (n: number, toolkits: number) =>
      `Seus clientes conectam as contas de mídia paga, redes sociais, CRM e e-commerce. Seu sistema consulta as métricas dessas ${n} plataformas pela mesma API, no mesmo formato, e executa ações em mais ${toolkits} apps com os toolkits.`,
    popular: "APIs mais procuradas",
    apiOf: (platform: string) => `API do ${platform}`,
    catalog: "Catálogo completo",
    comparisons: "Comparativos",
    versus: (competitor: string) => `Connect ou ${competitor}`,
  },
  toolkits: {
    breadcrumb: "Toolkits",
    breadcrumbLabel: "Trilha",
    home: {
      eyebrow: "Toolkits",
      title: (n: number) => `Além dos dados: ${n} apps que o seu produto opera`,
      copy: (tools: string) =>
        `Envie mensagens no WhatsApp, crie tarefas no Jira, agende no Google Calendar. São ${tools} tools que o seu produto e os seus agentes de IA executam na conta do cliente, pela mesma API.`,
      cta: (n: number) => `Ver os ${n} toolkits`,
    },
    hub: {
      metaTitle: (n: number, tools: string) => `Toolkits do Reportei Connect: ${n} apps e ${tools} tools por uma API`,
      metaDescription: (n: number, tools: string) =>
        `WhatsApp, Notion, Jira, Stripe e mais ${n - 4} apps: ${tools} tools que o seu produto e os seus agentes de IA executam na conta dos clientes.`,
      eyebrow: "Toolkits",
      h1: (n: number) => `${n} apps que o seu produto e os seus agentes de IA operam por uma API`,
      copy: "Seu cliente conecta a conta do app uma vez. Seu sistema envia mensagens, cria tarefas, lê contatos e agenda reuniões chamando as tools pelo mesmo endpoint, sem implementar a API de cada app.",
      toolCount: (n: number) => (n === 1 ? "1 tool" : `${n} tools`),
      stats: (n: number, tools: string) => `${n} toolkits · ${tools} tools`,
    },
    categories: {
      communication: "Comunicação",
      crm: "CRM e vendas",
      marketing: "Marketing",
      email_marketing: "E-mail marketing",
      ecommerce: "E-commerce",
      finance: "Finanças e pagamentos",
      support: "Atendimento",
      project_management: "Gestão de projetos",
      productivity: "Produtividade",
      scheduling: "Agendamento",
      analytics: "Analytics",
      file_storage: "Arquivos",
      developer_tools: "Ferramentas de desenvolvimento",
    } as Record<string, string>,
    auth: {
      api_key: {
        label: "Chave de API",
        body: "O cliente cola a chave do app numa tela do Connect, ou o seu sistema envia a chave por POST /api/customer-toolkits, sem tela.",
      },
      basic: {
        label: "Usuário e senha",
        body: "O cliente informa as credenciais do app numa tela do Connect, ou o seu sistema as envia por POST /api/customer-toolkits, sem tela.",
      },
      oauth2: {
        label: "OAuth com o app do seu produto",
        body: (slug: string) =>
          `Você cadastra o app OAuth do seu produto uma vez, em POST /api/merchants/credentials/${slug}, e o cliente autoriza a conta numa tela de consentimento. O Connect renova o token quando ele está para vencer.`,
      },
    },
    hostParams: (params: string) =>
      `Na conexão, o cliente informa também ${params}: o endereço da conta dele na API do app.`,
    toolkit: {
      metaTitle: (name: string) => `API do ${name} para SaaS e agentes de IA`,
      h1: (name: string) => `${name} no seu produto e nos seus agentes de IA, por uma API`,
      signup: "Começar teste grátis",
      docs: "Ver documentação",
      trial: "15 dias para testar. Sem cartão de crédito.",
      sampleCaption: (tool: string) => `Exemplo: a tool "${tool}" numa conta conectada pelo seu cliente.`,
      howEyebrow: "Como funciona",
      howTitle: (name: string) => `Do cliente conectado à primeira chamada no ${name}.`,
      steps: (name: string) => [
        {
          title: "O cliente conecta a conta",
          body: `Seu sistema abre uma sessão do Connect para o toolkit e o cliente conecta a conta do ${name}. Você recebe o id da conexão.`,
        },
        {
          title: "Seu produto chama a tool",
          body: "Um POST em /api/tools/{tool}/execute com o id da conexão e os argumentos. Em caso de sucesso, o Connect preserva o status e o corpo da resposta do app.",
        },
        {
          title: "O Connect cuida do resto",
          body: "Guarda a credencial criptografada, renova tokens quando a conexão usa OAuth com suporte a renovação e registra as execuções numa trilha de auditoria consultável pela API.",
        },
      ],
      useCasesEyebrow: "Para que usar",
      useCasesTitle: (name: string) => `O que o seu produto faz com o ${name}.`,
      connectEyebrow: "Conexão",
      connectTitle: "Como o seu cliente conecta a conta",
      toolsEyebrow: "Tools",
      toolsTitle: (name: string, n: number) => `${n} tools do ${name}`,
      seeAllTools: (n: number) => `Ver as ${n} tools`,
      faqTitle: (name: string) => `Perguntas sobre o toolkit do ${name}`,
      faq: (name: string, tools: number, modes: string) => [
        {
          q: `Preciso implementar a API do ${name}?`,
          a: `Não. O Connect já traz ${tools} tools do ${name} descritas e prontas. Seu cliente conecta a conta e o seu sistema chama cada tool pelo mesmo endpoint, com o mesmo formato de requisição.`,
        },
        {
          q: `Como o cliente conecta a conta do ${name}?`,
          a: `Pelo modo que o toolkit aceita: ${modes}. O Connect guarda a credencial criptografada e nunca a devolve ao seu sistema.`,
        },
        {
          q: "Funciona com agentes de IA?",
          a: "Sim. O input de cada tool é descrito em JSON Schema, que o seu agente usa direto como definição de tool. O agente escolhe a tool e os argumentos, e o seu sistema faz a chamada ao Connect.",
        },
        {
          q: "Meu cliente precisa ter conta no Reportei?",
          a: "Não. O cliente conecta a conta numa tela do Connect, ou o seu sistema envia a credencial pela API, e ele continua usando só o seu produto.",
        },
      ],
      relatedTitle: "Toolkits da mesma categoria",
      allToolkits: (n: number) => `Ver os ${n} toolkits`,
      officialDocs: (name: string) => `Documentação oficial do ${name}`,
    },
    toolsPage: {
      metaTitle: (name: string, n: number) => `${name}: as ${n} tools da API`,
      metaDescription: (name: string, n: number, examples: string) =>
        `As ${n} tools do toolkit ${name} no Reportei Connect: ${examples} e mais. Cada uma com os parâmetros e um exemplo de chamada.`,
      h1: (name: string) => `Tools do ${name}`,
      copy: (name: string, n: number) =>
        `As ${n} operações do ${name} que o seu produto executa na conta do cliente pelo Connect. Todas usam o mesmo endpoint, POST /api/tools/{tool}/execute.`,
    },
    tool: {
      metaTitle: (tool: string, name: string) => `API do ${name}: ${tool}`,
      metaSuffix: (name: string) => `Execute na conta do ${name} do seu cliente pelo Reportei Connect.`,
      h1: (tool: string, name: string) => `${tool} no ${name}, por uma API`,
      requestTitle: "A chamada",
      requestCopy:
        "Seu sistema envia o id da conexão do cliente e os argumentos da tool. Os headers são os mesmos de toda a API do Connect: o token do seu produto e o token do cliente.",
      responseTitle: "A resposta",
      responseCopy:
        "Em caso de sucesso, o Connect preserva o status e o corpo da resposta do app. Erros HTTP retornados pelo app usam o envelope {error, api_error}; falhas de autenticação ou validação podem ocorrer antes da execução. O header X-Toolkit-Execution-Id identifica a execução registrada, consultável em GET /api/tools/executions/{uuid}.",
      paramsTitle: "Parâmetros",
      paramsNote: "As descrições dos parâmetros seguem a documentação oficial do app, em inglês.",
      columns: { name: "Parâmetro", type: "Tipo", required: "Obrigatório", description: "Descrição" },
      yes: "Sim",
      no: "Não",
      values: "Valores:",
      noParams: "Esta tool não recebe argumentos.",
      connectionsTitle: "Conexões possíveis",
      connectionsCopy: (name: string) =>
        `O seu cliente conecta a conta do ${name} uma vez, por um dos modos abaixo. A mesma conexão serve para todas as tools do toolkit.`,
      aiTitle: "Pronta para agentes de IA",
      aiCopy: (slug: string) =>
        `O input desta tool é um JSON Schema, disponível em GET /api/tools/${slug}. Ele vira a definição de tool do seu agente sem conversão.`,
      identifier: "Identificador",
      otherTools: (name: string) => `Outras tools do ${name}`,
    },
  },
  features: {
    home: {
      eyebrow: "Funcionalidades",
      title: "Além de ler dados: publique, anuncie e chame LLMs pela mesma API",
      copy: "Use as contas conectadas dos seus clientes para publicar posts, gerenciar Meta Ads, Google Ads e TikTok Ads e consultar métricas. Para chamar modelos de IA, cadastre sua própria chave do provedor. Cada ação tem uma página com um exemplo de chamada.",
      cards: {
        posts: "Publique no Instagram, Facebook, Threads, LinkedIn, Pinterest e YouTube Shorts.",
        ads: "Crie, impulsione e gerencie anúncios no Meta Ads, no Google Ads e no TikTok Ads dos seus clientes.",
        metrics: (n: number) => `Números, gráficos e tabelas de ${n} plataformas no mesmo formato.`,
        llm: "OpenAI, Anthropic e Meta no formato da OpenAI, com a sua chave.",
      },
      seeAll: (area: string) => `Tudo de ${area}`,
    },
    nav: "Funcionalidades",
    breadcrumbLabel: "Trilha",
    areas: {
      posts: {
        name: "Posts",
        metaTitle: "API de publicação em redes sociais para SaaS",
        metaDescription: "Publique carrossel, reels, stories, pins e Shorts nas contas dos seus clientes no Instagram, Facebook, Threads, LinkedIn, Pinterest e YouTube por uma API.",
        h1: "Publique nas redes dos seus clientes por uma API",
        intro: "Seu cliente conecta as contas uma vez. Seu produto publica no Instagram, no Facebook, no Threads, no LinkedIn, no Pinterest e no YouTube Shorts pelo mesmo endpoint, e acompanha cada publicação até o fim.",
      },
      ads: {
        name: "Ads",
        metaTitle: "API de Meta Ads, Google Ads e TikTok Ads para criar e gerenciar anúncios",
        metaDescription: "Crie campanhas, conjuntos e anúncios no Meta Ads, no Google Ads e no TikTok Ads dos seus clientes, impulsione posts, segmente públicos e edite orçamentos por uma API.",
        h1: "Crie e gerencie anúncios no Meta Ads, no Google Ads e no TikTok Ads dos seus clientes por uma API",
        intro: "Tudo nasce pausado, toda escrita é idempotente e uma falha no meio desfaz o que já tinha sido criado. Seu produto opera a conta de anúncios do cliente sem passar pela revisão de app da Meta.",
      },
      metrics: {
        name: "Metrics",
        metaTitle: "API de métricas de marketing para SaaS",
        metaDescription: (n: number) => `Métricas de ${n} plataformas de marketing, CRM e e-commerce dos seus clientes por uma API: números, gráficos, tabelas e comparação de períodos.`,
        h1: "Métricas de marketing dos seus clientes por uma API",
        intro: "Seu cliente conecta as contas e seu produto consulta números, gráficos e tabelas no mesmo formato, de qualquer plataforma do catálogo, na hora ou por webhook.",
      },
      llm: {
        name: "LLM",
        metaTitle: "API de LLM no formato da OpenAI com a sua chave",
        metaDescription: "Chame modelos da OpenAI, da Anthropic e da Meta no formato da API da OpenAI, com a sua chave de cada provedor, streaming, fallback e tools.",
        h1: "OpenAI, Anthropic e Meta numa API só, com a sua chave",
        intro: "Um endpoint no formato de chat completions da OpenAI para os modelos dos três provedores. A chamada usa a chave que você cadastrou em cada provedor, e trocar de modelo é trocar uma string.",
      },
    },
    hub: {
      capabilities: "O que dá para fazer",
      integrations: "Métricas por plataforma",
      integrationsCopy: "O catálogo de cada plataforma, com o que dá para consultar e o identificador de cada métrica.",
      models: "Modelos disponíveis",
      otherAreas: "Outras funcionalidades",
      sampleCaption: (title: string) => `Exemplo: ${title}.`,
      sampleLink: "Ver a página",
    },
    capability: {
      h1: (title: string) => `${title} pela API`,
      metaTitle: (title: string) => `${title} pela API`,
      can: "O que dá para fazer",
      rules: "Regras e limites",
      request: "A chamada",
      fields: "Campos principais",
      columns: { name: "Campo", type: "Tipo", required: "Obrigatório", description: "Descrição" },
      yes: "Sim",
      no: "Não",
      worksWith: "Funciona com",
      useCases: "Para quem",
      faq: "Perguntas frequentes",
      related: "Relacionadas",
      seeAll: (area: string) => `Ver tudo que dá para fazer em ${area}`,
      signup: "Começar teste grátis",
      docs: "Ver documentação",
    },
    metricsIntegration: {
      metaTitle: (name: string) => `Métricas do ${name} pela API`,
      metaDescription: (name: string, n: number, examples: string) => `${n} métricas do ${name} dos seus clientes por uma API: ${examples} e mais. Números, gráficos e tabelas no mesmo formato.`,
      h1: (name: string) => `Métricas do ${name} pela API`,
      intro: (name: string, n: number) => `Seu cliente conecta a conta do ${name} e seu produto consulta ${n} métricas pelo mesmo endpoint das outras plataformas. Cada métrica tem um identificador (reference_key) que vai na chamada.`,
      groups: { number_v1: "Números", chart_v1: "Gráficos", datatable_v1: "Tabelas", datagrid_v1: "Tabelas" } as Record<string, string>,
      count: (n: number) => (n === 1 ? "1 métrica" : `${n} métricas`),
      sampleCaption: (title: string) => `Exemplo: a métrica "${title}" de uma conta conectada.`,
      comparisonCaption: (title: string) => `Exemplo: "${title}" em outubro, comparado a setembro.`,
      examplesTitle: (name: string) => `Mais exemplos de chamadas no ${name}`,
      examplesCopy: "O mesmo endpoint para cada tipo de métrica. Os campos metrics e dimensions de cada item vêm do catálogo da plataforma (GET /api/metrics/{integration_slug}).",
      exampleKinds: { chart_v1: "Gráfico", datatable_v1: "Tabela", number_v1: "Número" } as Record<string, string>,
      others: "Métricas de outras plataformas",
    },
    llmModel: {
      metaTitle: (name: string) => `API do ${name} com a sua chave`,
      metaDescription: (name: string, provider: string) => `Chame o ${name}, da ${provider}, no formato da API da OpenAI pelo Reportei Connect, com a sua própria chave, streaming e fallback para outros modelos.`,
      h1: (name: string) => `${name} pela API, com a sua chave`,
      intro: (name: string, provider: string) => `O ${name} é um modelo da ${provider}. Pelo Connect, você chama ele no formato de chat completions da OpenAI, com a chave que cadastrou na ${provider}, e troca para outro modelo mudando só o campo model.`,
      specs: { provider: "Provedor", context: "Janela de contexto", output: "Saída máxima", tools: "Tools (function calling)", vision: "Imagens na entrada", tokens: (n: string) => `${n} tokens` },
      sampleCaption: "A chamada no formato da OpenAI. A chave do provedor é a sua, cadastrada uma vez no Connect.",
      others: "Outros modelos",
    },
  },
}

export type Messages = typeof pt
