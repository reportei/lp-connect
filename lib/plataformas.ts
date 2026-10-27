// One landing page per platform, matched to the "api <platform>" searches the Connect buys on Google.
// Metric lists are examples taken from the Reportei catalog; the full catalog lives in the Connect Explorer.

export type PlatformFaq = { q: string; a: string }

export type PlatformPage = {
  slug: string
  platform: string
  logo: string
  title: string
  description: string
  h1: string
  intro: string
  // What a team has to go through to read this data with the platform's own API.
  officialSteps: string[]
  metrics: string[]
  extra?: { title: string; body: string }
  useCases: { title: string; body: string }[]
  example?: { reference: string; label: string; value: string; caption: string }
  faq: PlatformFaq[]
  related: string[]
}

const COMMON_FAQ: PlatformFaq[] = [
  {
    q: "Quanto custa?",
    a: "O plano do Connect inclui um número de conexões e cobra um valor fixo por conexão adicional, igual em qualquer plataforma do catálogo. Cada conta conectada por um cliente seu conta como uma conexão. Os valores atualizados estão na seção de preços da página inicial. Você testa por 15 dias sem cartão de crédito.",
  },
  {
    q: "Meu cliente precisa ter conta no Reportei?",
    a: "Não. Seu sistema gera um link de conexão, o cliente autoriza as contas numa tela pronta do Connect e continua usando só o seu produto.",
  },
]

export const PLATFORM_PAGES: PlatformPage[] = [
  {
    slug: "api-instagram",
    platform: "Instagram",
    logo: "instagram_business",
    title: "API do Instagram para o seu produto | Reportei Connect",
    description:
      "Métricas de perfis, posts, Reels e Stories do Instagram dos seus clientes no seu sistema, por uma API. Sem criar app nem passar pela revisão da Meta.",
    h1: "API do Instagram: métricas e posts dos seus clientes no seu produto",
    intro:
      "Conecte os perfis profissionais do Instagram dos seus clientes e consulte alcance, impressões, seguidores, posts, Reels e Stories por uma API em português. O Connect cuida do app na Meta, do OAuth e dos tokens.",
    officialSteps: [
      "Criar um app no Meta for Developers e configurar o login com Facebook ou Instagram.",
      "Pedir acesso avançado às permissões de insights e passar pela revisão de app da Meta, com vídeo do fluxo.",
      "Concluir a verificação da empresa no Gerenciador de Negócios.",
      "Guardar e renovar o token de cada perfil conectado, e tratar as mudanças de versão da Graph API.",
    ],
    metrics: [
      "Alcance e impressões do perfil",
      "Seguidores e novos seguidores",
      "Seguidores por gênero, idade e cidade",
      "Desempenho de cada post e Reel",
      "Alcance, impressões e retenção de Stories",
      "Respostas, avanços, voltas e saídas de Stories",
      "Cliques no perfil e no site",
    ],
    extra: {
      title: "Também publica",
      body: "Pelas mesmas contas conectadas, seu produto agenda e publica posts no Instagram e no Facebook dos seus clientes pela API do Connect.",
    },
    useCases: [
      {
        title: "Ferramentas de social media",
        body: "Mostre o desempenho dos perfis dentro do seu painel e publique pelo mesmo produto.",
      },
      {
        title: "Plataformas de influenciadores",
        body: "Leia alcance e audiência dos perfis conectados para comparar criadores com dados da própria conta.",
      },
      {
        title: "CRMs e ERPs",
        body: "Cruze o resultado do Instagram com vendas e leads que já estão no seu sistema.",
      },
    ],
    example: {
      reference: "ig:story_replies",
      label: "Respostas de Stories",
      value: "55.645",
      caption: "Exemplo de consulta: respostas de Stories de um perfil conectado no período.",
    },
    faq: [
      {
        q: "Funciona com qualquer perfil do Instagram?",
        a: "Funciona com perfis profissionais (empresa ou criador de conteúdo). É uma exigência da própria Meta para liberar métricas pela API.",
      },
      {
        q: "Preciso criar um app na Meta?",
        a: "Não. As integrações do Connect já passaram pela revisão da Meta. Seu cliente autoriza o perfil e você consulta os dados pela API do Connect.",
      },
      ...COMMON_FAQ,
    ],
    related: ["api-meta-ads", "api-tiktok-ads", "api-linkedin-ads"],
  },
  {
    slug: "api-meta-ads",
    platform: "Meta Ads",
    logo: "meta_ads",
    title: "API do Meta Ads (Facebook Ads) para o seu produto | Reportei Connect",
    description:
      "Investimento, alcance, cliques, CPC, CPM e conversões das contas de Meta Ads dos seus clientes no seu sistema. Uma API, sem app review da Meta.",
    h1: "API do Meta Ads: dados das campanhas dos seus clientes no seu produto",
    intro:
      "Conecte as contas de anúncio do Facebook e do Instagram dos seus clientes e consulte investimento, alcance, cliques e conversões por uma API. Sem criar app na Meta e sem pedir acesso à Marketing API.",
    officialSteps: [
      "Criar um app no Meta for Developers e adicionar a Marketing API.",
      "Pedir acesso avançado à permissão de leitura de anúncios e passar pela revisão de app.",
      "Concluir a verificação da empresa e respeitar os limites de chamadas por conta de anúncio.",
      "Renovar os tokens e adaptar o código a cada nova versão da API.",
    ],
    metrics: [
      "Valor investido",
      "Alcance, impressões e frequência",
      "Cliques, CTR e CPC médio",
      "CPM médio",
      "Compras no Facebook e no Instagram",
      "Custo por contato no site",
      "Resultados por campanha, conjunto e anúncio",
    ],
    extra: {
      title: "Também cria campanhas",
      body: "Além de ler métricas, a API do Connect cria e gerencia campanhas, conjuntos e anúncios nas contas de Meta Ads conectadas.",
    },
    useCases: [
      {
        title: "Custo por lead no seu CRM",
        body: "A Leadster cruzou investimento do Meta Ads, Google Ads e LinkedIn Ads com os leads dos chatbots e passou a mostrar o custo por conversão de cada canal.",
      },
      {
        title: "Dashboards para agências",
        body: "Entregue o resultado das campanhas dentro do seu software, junto com os dados que só você tem.",
      },
      {
        title: "Agentes de IA",
        body: "Dê ao seu agente as métricas reais das contas para ele analisar, comparar períodos e sugerir ajustes.",
      },
    ],
    example: {
      reference: "fb_ads:reach",
      label: "Alcance total",
      value: "46.847",
      caption: "Exemplo de consulta: alcance de uma conta de Meta Ads conectada em setembro.",
    },
    faq: [
      {
        q: "Dá para filtrar por campanha, conjunto ou anúncio?",
        a: "Sim. As consultas aceitam o ID e o tipo da entidade (campanha, conjunto ou anúncio) para filtrar os resultados.",
      },
      {
        q: "Preciso pedir acesso à Marketing API?",
        a: "Não. A integração do Connect já tem os acessos aprovados pela Meta. Seu cliente autoriza a conta de anúncio e você consulta pela API do Connect.",
      },
      ...COMMON_FAQ,
    ],
    related: ["api-instagram", "api-google-ads", "api-tiktok-ads"],
  },
  {
    slug: "api-google-ads",
    platform: "Google Ads",
    logo: "google_ads",
    title: "API do Google Ads para o seu produto | Reportei Connect",
    description:
      "Cliques, impressões, custo, conversões e palavras-chave das contas de Google Ads dos seus clientes no seu sistema, sem projeto no Google Cloud nem pedido de nível de acesso.",
    h1: "API do Google Ads: dados das contas dos seus clientes no seu produto",
    intro:
      "Conecte as contas de Google Ads dos seus clientes e consulte custo, cliques, conversões e palavras-chave por uma API. Sem projeto no Google Cloud, sem pedir nível de acesso e sem verificação de marca.",
    officialSteps: [
      "Criar um projeto no Google Cloud e ativar a Google Ads API. Desde 9 de setembro de 2026 o acesso fica no projeto, e o developer token deixou de existir.",
      "Pedir o acesso Explorer, de até 2.880 operações por dia em contas reais. Para passar disso, o Basic ou o Standard, que exigem verificação de marca.",
      "Configurar a tela de consentimento OAuth para os seus clientes autorizarem as contas.",
      "Escrever consultas em GAQL, migrar para cada nova versão da API antes que a antiga seja desligada e respeitar as cotas.",
    ],
    metrics: [
      "Cliques, impressões e CTR",
      "Custo, CPC médio e CPM médio",
      "Conversões, taxa e custo por conversão",
      "Envios de formulário de lead",
      "Impressões do número de telefone",
      "Resultados por campanha, grupo de anúncios e palavra-chave",
      "Cliques, conversões e custo por dispositivo",
    ],
    useCases: [
      {
        title: "Custo por lead no seu CRM",
        body: "Mostre quanto cada lead custou no Google Ads ao lado do que aconteceu com ele no funil.",
      },
      {
        title: "Plataformas de e-commerce",
        body: "Cruze o custo das campanhas com os pedidos da loja e mostre o retorno de cada uma.",
      },
      {
        title: "Relatórios dentro do seu produto",
        body: "Entregue o desempenho das campanhas sem mandar o cliente para outro painel.",
      },
    ],
    faq: [
      {
        q: "Ainda preciso de developer token do Google Ads?",
        a: "O Google descontinuou o developer token em 9 de setembro de 2026. Hoje o acesso à API fica num projeto do Google Cloud, com os níveis Test, Explorer, Basic e Standard. Com o Connect você não precisa de projeto nem de nível de acesso: seu cliente autoriza a conta e você consulta os dados pela API do Connect.",
      },
      {
        q: "Funciona com contas gerenciadas por MCC?",
        a: "O cliente autoriza com o usuário que tem acesso às contas, e cada conta conectada vira uma conexão.",
      },
      ...COMMON_FAQ,
    ],
    related: ["api-meta-ads", "api-google-analytics-4", "api-linkedin-ads"],
  },
  {
    slug: "api-tiktok-ads",
    platform: "TikTok Ads",
    logo: "tiktokads",
    title: "API do TikTok Ads para o seu produto | Reportei Connect",
    description:
      "Impressões, alcance, visualizações de vídeo, cliques, conversões e custo das contas de TikTok Ads dos seus clientes, por uma API. Sem app na TikTok for Business.",
    h1: "API do TikTok Ads: campanhas dos seus clientes no seu produto",
    intro:
      "Conecte as contas de anúncio do TikTok dos seus clientes e consulte impressões, visualizações de vídeo, cliques e conversões por uma API. O app de desenvolvedor e a aprovação ficam com o Connect.",
    officialSteps: [
      "Cadastrar-se como desenvolvedor no TikTok for Business e criar um app da Marketing API.",
      "Esperar a TikTok revisar e aprovar o app e os escopos.",
      "Implementar a autorização de cada anunciante e renovar os tokens.",
    ],
    metrics: [
      "Impressões, alcance e frequência",
      "Visualizações e tempo médio de exibição dos vídeos",
      "Reprodução de 25%, 50%, 75% e 100% do vídeo",
      "Cliques, CTR e CPC",
      "Conversões e custo total",
      "Impressões por idade, gênero e plataforma",
      "Campanhas e anúncios em destaque",
    ],
    useCases: [
      {
        title: "Painéis de mídia paga",
        body: "Coloque o TikTok Ads ao lado do Meta Ads e do Google Ads no mesmo painel do seu produto.",
      },
      {
        title: "Ferramentas para criadores e marcas",
        body: "Mostre como os vídeos patrocinados performam até o fim da reprodução.",
      },
      {
        title: "Agentes de IA",
        body: "Entregue ao seu agente os números reais de cada campanha para análise.",
      },
    ],
    faq: [
      {
        q: "Também tem o TikTok orgânico?",
        a: "Sim. O catálogo inclui TikTok e TikTok Business, com visualizações, curtidas, compartilhamentos, comentários e vídeos em destaque.",
      },
      ...COMMON_FAQ,
    ],
    related: ["api-meta-ads", "api-instagram", "api-google-ads"],
  },
  {
    slug: "api-linkedin-ads",
    platform: "LinkedIn Ads",
    logo: "linkedin_ads",
    title: "API do LinkedIn Ads para o seu produto | Reportei Connect",
    description:
      "Impressões, cliques, engajamento, seguidores e custo das contas de LinkedIn Ads dos seus clientes, por uma API. Sem pedir acesso à Advertising API.",
    h1: "API do LinkedIn Ads: dados das campanhas B2B dos seus clientes no seu produto",
    intro:
      "Conecte as contas de LinkedIn Ads e as páginas de empresa dos seus clientes e consulte impressões, cliques, engajamento e custo por uma API. Sem solicitar acesso à Advertising API do LinkedIn.",
    officialSteps: [
      "Criar um app no LinkedIn Developers vinculado a uma página de empresa.",
      "Solicitar o produto Advertising API e esperar a análise do LinkedIn.",
      "Implementar o OAuth de cada membro e renovar os tokens antes de expirarem.",
    ],
    metrics: [
      "Impressões e cliques",
      "Custo",
      "Engajamento total, curtidas, comentários e compartilhamentos",
      "Seguidores ganhos com anúncios",
      "Posts patrocinados em destaque",
      "Alcance, impressões e novos seguidores da página",
    ],
    useCases: [
      {
        title: "Custo por lead B2B",
        body: "A Leadster usa o Connect para mostrar o custo por conversão do LinkedIn Ads ao lado do Google Ads e do Meta Ads.",
      },
      {
        title: "Ferramentas de ABM e vendas",
        body: "Traga o investimento em LinkedIn para perto das contas e oportunidades do seu sistema.",
      },
      {
        title: "Painéis de marketing B2B",
        body: "Junte página orgânica e anúncios num mesmo relatório dentro do seu produto.",
      },
    ],
    faq: [
      {
        q: "Inclui as páginas de empresa e os perfis pessoais?",
        a: "Sim. O catálogo tem LinkedIn Ads, LinkedIn de páginas e LinkedIn de perfis pessoais, cada um como uma integração.",
      },
      ...COMMON_FAQ,
    ],
    related: ["api-google-ads", "api-meta-ads", "api-hubspot"],
  },
  {
    slug: "api-google-analytics-4",
    platform: "Google Analytics 4",
    logo: "google_analytics_4",
    title: "API do Google Analytics 4 (GA4) para o seu produto | Reportei Connect",
    description:
      "Usuários, sessões, eventos, conversões, compras e receita das propriedades GA4 dos seus clientes no seu sistema, por uma API.",
    h1: "API do Google Analytics 4: dados dos sites dos seus clientes no seu produto",
    intro:
      "Conecte as propriedades GA4 dos seus clientes e consulte usuários, eventos, conversões e receita por uma API. Sem montar projeto no Google Cloud nem passar pela verificação do app.",
    officialSteps: [
      "Criar um projeto no Google Cloud e ativar a Google Analytics Data API.",
      "Configurar a tela de consentimento OAuth, que o Google pode exigir verificar antes de liberar o app para contas de outras empresas.",
      "Montar as consultas de dimensões e métricas e respeitar as cotas por propriedade.",
    ],
    metrics: [
      "Usuários e novos usuários",
      "Sessões, páginas por visita e número de eventos",
      "Conversões",
      "Compras e novos compradores",
      "Adições ao carrinho e checkouts",
      "Receita de e-commerce e de publicidade",
      "ARPU e ARPPU",
    ],
    useCases: [
      {
        title: "E-commerce e ERPs",
        body: "Mostre de onde vieram as vendas da loja ao lado dos pedidos que já estão no seu sistema.",
      },
      {
        title: "Ferramentas de SEO e conteúdo",
        body: "Some o tráfego do GA4 com os dados do Search Console no mesmo painel.",
      },
      {
        title: "Relatórios para agências",
        body: "Entregue o funil do site dos clientes, da aquisição à receita, dentro do seu produto.",
      },
    ],
    faq: [
      {
        q: "Tem o Universal Analytics e o Search Console também?",
        a: "Sim. O catálogo tem Google Analytics, Google Analytics 4, Google Search Console e Perfil da Empresa no Google.",
      },
      ...COMMON_FAQ,
    ],
    related: ["api-google-ads", "api-nuvemshop", "api-rd-station"],
  },
  {
    slug: "api-rd-station",
    platform: "RD Station",
    logo: "rd",
    title: "API do RD Station Marketing e CRM para o seu produto | Reportei Connect",
    description:
      "Leads, conversões, oportunidades e e-mails do RD Station Marketing e do RD Station CRM dos seus clientes no seu sistema, por uma API em português.",
    h1: "API do RD Station: leads e conversões dos seus clientes no seu produto",
    intro:
      "Conecte o RD Station Marketing e o RD Station CRM dos seus clientes e consulte leads, conversões e oportunidades por uma API. Uma conexão por conta, sem criar app na RD.",
    officialSteps: [
      "Criar um app na central de desenvolvedores da RD Station.",
      "Implementar o OAuth de cada conta e renovar o token de acesso sempre que ele expirar.",
      "Integrar Marketing e CRM separadamente, porque cada produto tem sua própria API.",
    ],
    metrics: [
      "Leads e leads qualificados",
      "Conversões de leads, de leads qualificados e de clientes",
      "Oportunidades e conversões de oportunidades",
      "Aberturas, cliques e bounces únicos de e-mail",
      "Marcações de spam",
      "Número de campanhas",
      "No CRM: oportunidades criadas, perdidas e em andamento, vendas e ticket médio",
    ],
    useCases: [
      {
        title: "Custo por lead",
        body: "Cruze os leads do RD Station com o investimento do Meta Ads e do Google Ads e mostre o custo de cada um.",
      },
      {
        title: "ERPs e sistemas de gestão",
        body: "Leve o funil de marketing para dentro do sistema que o cliente já usa no dia a dia.",
      },
      {
        title: "Painéis para agências de inbound",
        body: "Entregue leads, e-mails e oportunidades num relatório só, dentro do seu produto.",
      },
    ],
    faq: [
      {
        q: "Funciona com o RD Station Marketing e com o CRM?",
        a: "Sim. São duas integrações no catálogo, RD Station Marketing e RD Station CRM, e cada conta conectada conta como uma conexão.",
      },
      ...COMMON_FAQ,
    ],
    related: ["api-hubspot", "api-meta-ads", "api-google-ads"],
  },
  {
    slug: "api-hubspot",
    platform: "HubSpot",
    logo: "hubspot_marketing",
    title: "API do HubSpot Marketing e CRM para o seu produto | Reportei Connect",
    description:
      "Contatos, formulários, landing pages, e-mails e negócios do HubSpot dos seus clientes no seu sistema, por uma API. Também Pipedrive, Kommo e ActiveCampaign.",
    h1: "API do HubSpot: marketing e CRM dos seus clientes no seu produto",
    intro:
      "Conecte o HubSpot Marketing e o HubSpot CRM dos seus clientes e consulte contatos, formulários, e-mails e negócios por uma API. Na mesma API estão Pipedrive, Kommo, ActiveCampaign, Mailchimp e RD Station.",
    officialSteps: [
      "Criar uma conta de desenvolvedor e um app público no HubSpot.",
      "Implementar o OAuth e renovar o token de acesso, que tem validade curta.",
      "Repetir o processo em cada CRM que seus clientes usam, com APIs e formatos diferentes.",
    ],
    metrics: [
      "Novos contatos",
      "Visualizações e envios de formulários",
      "Visualizações e taxa de rejeição das landing pages",
      "Exibições de CTA",
      "E-mails enviados, entregues, abertos e clicados",
      "Sessões por origem e por parâmetro UTM",
      "No CRM: negócios criados, fechados e perdidos, taxa de fechamento e receita",
    ],
    useCases: [
      {
        title: "Um conector para vários CRMs",
        body: "Atenda clientes de HubSpot, Pipedrive, Kommo e RD Station CRM com a mesma integração e o mesmo formato de resposta.",
      },
      {
        title: "Custo por lead e por negócio",
        body: "Junte o CRM com o investimento em mídia e mostre quanto custou cada oportunidade.",
      },
      {
        title: "Painéis de inbound",
        body: "Leve formulários, landing pages e e-mails para dentro do seu produto.",
      },
    ],
    faq: [
      {
        q: "Quais CRMs estão no catálogo?",
        a: "HubSpot Marketing, HubSpot CRM, RD Station CRM, Pipedrive, Kommo e GoHighLevel, além de ActiveCampaign, Mailchimp, Klaviyo e E-goi para e-mail.",
      },
      ...COMMON_FAQ,
    ],
    related: ["api-rd-station", "api-linkedin-ads", "api-meta-ads"],
  },
  {
    slug: "api-nuvemshop",
    platform: "Nuvemshop",
    logo: "nuvem_shop",
    title: "API da Nuvemshop, Shopify e WooCommerce para o seu produto | Reportei Connect",
    description:
      "Vendas, ticket médio, produtos e clientes das lojas Nuvemshop, Shopify e WooCommerce dos seus clientes, ao lado dos dados de mídia, por uma API.",
    h1: "API da Nuvemshop: vendas das lojas dos seus clientes no seu produto",
    intro:
      "Conecte as lojas Nuvemshop, Shopify e WooCommerce dos seus clientes e consulte as vendas por uma API, no mesmo formato das métricas de Meta Ads e Google Ads. Também tem Magazord, Olist, Hotmart, Eduzz e Kiwify.",
    officialSteps: [
      "Criar um app no portal de parceiros de cada plataforma de loja.",
      "Implementar a instalação do app em cada loja e guardar os tokens.",
      "Converter os formatos de pedido de cada plataforma para um só no seu sistema.",
    ],
    metrics: [
      "Total de vendas e ticket médio",
      "Produtos vendidos",
      "Carrinhos convertidos e carrinhos que podem virar venda",
      "Clientes novos e recorrentes",
      "Desempenho dos cupons",
      "Meios de envio selecionados",
      "Na Shopify: pedidos, devoluções, descontos e lucro por produto",
    ],
    useCases: [
      {
        title: "ERPs e sistemas de gestão",
        body: "Mostre ao lojista quanto ele vendeu e quanto investiu em mídia, sem ele sair do seu sistema.",
      },
      {
        title: "Ferramentas de performance",
        body: "Calcule o retorno das campanhas com os pedidos reais da loja.",
      },
      {
        title: "Agências de e-commerce",
        body: "Entregue venda e mídia no mesmo relatório para cada loja atendida.",
      },
    ],
    faq: [
      {
        q: "Quais plataformas de e-commerce estão no catálogo?",
        a: "Shopify, WooCommerce, Nuvemshop, Magazord e Olist, além de Hotmart, Eduzz e Kiwify para produtos digitais e iFood, Goomer, Cardápio Web e Repediu para delivery.",
      },
      ...COMMON_FAQ,
    ],
    related: ["api-google-analytics-4", "api-meta-ads", "api-google-ads"],
  },
]

export function findPlatformPage(slug: string) {
  return PLATFORM_PAGES.find((page) => page.slug === slug)
}
