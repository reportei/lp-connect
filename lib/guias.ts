// How-to guides for the informational searches around each platform's API ("api instagram",
// "google ads api", "api linkedin"). Every claim comes from the official docs listed in `sources`;
// re-check them before changing the text, since these APIs change often.

import type { PlatformFaq } from "@/lib/plataformas"

export type GuideBlock = string | { list: string[]; ordered?: boolean } | { table: string[][] }

export type GuideSection = { h2: string; blocks: GuideBlock[] }

export type Guide = {
  slug: string
  title: string
  description: string
  h1: string
  lead: string
  checkedAt: string
  platformPage: string
  platform: string
  sections: GuideSection[]
  shortcut: string
  faq: PlatformFaq[]
  sources: { label: string; url: string }[]
}

export const GUIDES: Guide[] = [
  {
    slug: "api-instagram",
    title: "API do Instagram em 2026: permissões, revisão da Meta e tokens | Reportei Connect",
    description:
      "Como acessar métricas de contas profissionais pela API do Instagram: as duas versões da API, as permissões de insights, a revisão de app, a verificação da empresa e a validade dos tokens.",
    h1: "API do Instagram em 2026: como acessar as métricas de contas profissionais",
    lead: "O caminho oficial para ler alcance, impressões e insights de perfis do Instagram dos seus clientes, passo a passo, e o que muda entre as duas versões da API.",
    checkedAt: "27/10/2026",
    platformPage: "api-instagram",
    platform: "Instagram",
    sections: [
      {
        h2: "As duas versões da API do Instagram",
        blocks: [
          "A Meta oferece a API do Instagram de duas formas. Elas leem os mesmos tipos de dado, mas o login e as permissões são diferentes.",
          {
            table: [
              ["", "Com login do Instagram", "Com login do Facebook"],
              ["Endereço", "graph.instagram.com", "graph.facebook.com"],
              ["Página do Facebook", "Não precisa", "Precisa estar vinculada ao perfil"],
              ["Permissões de insights", "instagram_business_basic e instagram_business_manage_insights", "instagram_basic, instagram_manage_insights e pages_read_engagement"],
            ],
          },
          "Nas duas, só contas profissionais (empresa ou criador de conteúdo) funcionam. A API não lê dados de contas pessoais, e algumas métricas não existem em perfis com menos de 100 seguidores.",
        ],
      },
      {
        h2: "Acesso avançado, revisão de app e verificação da empresa",
        blocks: [
          "Para ler perfis que você não administra, como os dos seus clientes, o app precisa de acesso avançado às permissões. Esse acesso exige duas etapas:",
          {
            list: [
              "Revisão de app pela Meta, em que você mostra como cada permissão é usada no seu produto.",
              "Verificação da empresa no Gerenciador de Negócios, obrigatória desde fevereiro de 2023.",
            ],
          },
        ],
      },
      {
        h2: "Tokens e renovação",
        blocks: [
          {
            list: [
              "O código de autorização e o token de curta duração valem 1 hora.",
              "O token de longa duração vale 60 dias.",
              "Ele pode ser renovado depois de ter pelo menos 24 horas e antes de vencer. Se vencer, o cliente precisa autorizar o perfil de novo.",
            ],
          },
        ],
      },
      {
        h2: "Passo a passo resumido",
        blocks: [
          {
            ordered: true,
            list: [
              "Criar um app no Meta for Developers.",
              "Escolher a versão da API: login do Instagram ou login do Facebook.",
              "Adicionar as permissões de insights da versão escolhida.",
              "Concluir a verificação da empresa.",
              "Enviar o app para a revisão da Meta e esperar a aprovação do acesso avançado.",
              "Implementar o login, trocar o token curto pelo de 60 dias e guardar o token de cada perfil.",
              "Renovar cada token antes de vencer e avisar o cliente quando um perfil perder o acesso.",
            ],
          },
        ],
      },
    ],
    shortcut:
      "O Reportei Connect já passou por essas etapas. Seu cliente autoriza o perfil numa tela pronta, você consulta as métricas pela API do Connect, e o Connect guarda e renova os tokens. O mesmo vale para Facebook, Meta Ads e o resto do catálogo.",
    faq: [
      {
        q: "Dá para usar a API do Instagram com conta pessoal?",
        a: "Não. A API de insights só funciona com contas profissionais, de empresa ou de criador de conteúdo.",
      },
      {
        q: "Quanto tempo vale o token do Instagram?",
        a: "O token de longa duração vale 60 dias e pode ser renovado depois de 24 horas, enquanto ainda estiver válido.",
      },
      {
        q: "Preciso de Página do Facebook?",
        a: "Só na versão com login do Facebook. Na versão com login do Instagram, a Página não é necessária.",
      },
    ],
    sources: [
      { label: "Meta: visão geral da plataforma do Instagram", url: "https://developers.facebook.com/docs/instagram-platform/overview" },
      { label: "Meta: insights da API do Instagram", url: "https://developers.facebook.com/documentation/instagram-platform/insights" },
      { label: "Meta: login empresarial do Instagram e tokens", url: "https://developers.facebook.com/docs/instagram-platform/instagram-api-with-instagram-login/business-login" },
      { label: "Meta: verificação da empresa", url: "https://developers.facebook.com/docs/development/release/business-verification/" },
    ],
  },
  {
    slug: "google-ads-api-developer-token",
    title: "O developer token do Google Ads acabou: como acessar a API agora | Reportei Connect",
    description:
      "Desde 9 de setembro de 2026 a API do Google Ads não usa mais developer token. Veja como funciona o acesso por projeto do Google Cloud e os níveis Test, Explorer, Basic e Standard.",
    h1: "O developer token do Google Ads acabou: como acessar a API agora",
    lead: "Em 9 de setembro de 2026 o Google descontinuou o developer token. O acesso à API do Google Ads passou a ficar no projeto do Google Cloud. Veja o que mudou e como pedir cada nível de acesso.",
    checkedAt: "27/10/2026",
    platformPage: "api-google-ads",
    platform: "Google Ads",
    sections: [
      {
        h2: "O que mudou",
        blocks: [
          {
            list: [
              "Não é mais preciso developer token nem conta de administrador (MCC) para começar.",
              "O nível de acesso fica associado ao projeto do Google Cloud.",
              "Quem já tinha token teve o nível transferido para os projetos que usaram a API nos 90 dias anteriores à mudança.",
              "Os tokens antigos ainda podem ir nas chamadas, mas são ignorados.",
              "A central de API dentro da conta de administrador vai ser removida.",
            ],
          },
        ],
      },
      {
        h2: "Os quatro níveis de acesso",
        blocks: [
          {
            table: [
              ["Nível", "Contas", "Operações por dia", "Como conseguir"],
              ["Test", "Só contas de teste", "15.000", "Liberado ao ativar a API no projeto"],
              ["Explorer", "Contas reais", "2.880", "Pedido na página da Google Ads API no Cloud, com análise automática na maioria dos casos"],
              ["Basic", "Teste e reais", "15.000", "Exige verificação de marca do projeto"],
              ["Standard", "Teste e reais", "Sem limite", "Exige verificação de marca e análise de cerca de 10 dias úteis"],
            ],
          },
          "O dia é contado numa janela móvel de 24 horas. O Explorer não permite criar contas, gerenciar usuários nem usar o planejamento de palavras-chave.",
        ],
      },
      {
        h2: "Passo a passo para começar",
        blocks: [
          {
            ordered: true,
            list: [
              "Criar um projeto no Google Cloud.",
              "Ativar a Google Ads API. O projeto recebe o nível Test.",
              "Pedir o nível Explorer na página da Google Ads API no console do Cloud.",
              "Configurar a tela de consentimento OAuth para os seus clientes autorizarem as contas.",
              "Quando precisar de mais volume, fazer a verificação de marca e pedir Basic ou Standard.",
              "Acompanhar as versões da API. Cada versão fica disponível por cerca de um ano antes de ser desligada.",
            ],
          },
        ],
      },
    ],
    shortcut:
      "Com o Reportei Connect você pula o projeto no Cloud, os níveis de acesso e a verificação de marca. Seu cliente autoriza a conta de Google Ads numa tela pronta e você consulta cliques, custo, conversões e palavras-chave pela API do Connect, no mesmo formato de Meta Ads, GA4 e outras plataformas.",
    faq: [
      {
        q: "Ainda preciso de developer token do Google Ads?",
        a: "Não. O Google descontinuou o developer token em 9 de setembro de 2026. O acesso agora é concedido ao projeto do Google Cloud.",
      },
      {
        q: "Meu código antigo para de funcionar?",
        a: "Segundo o Google, não. O nível de acesso do token foi transferido para os projetos usados nos 90 dias anteriores, e o token enviado nas chamadas passa a ser ignorado.",
      },
      {
        q: "Quanto dá para consultar no nível Explorer?",
        a: "Até 2.880 operações por dia em contas reais e 15.000 em contas de teste.",
      },
    ],
    sources: [
      { label: "Google: developer token e a migração para projetos", url: "https://developers.google.com/google-ads/api/docs/api-policy/developer-token" },
      { label: "Google: níveis de acesso da API", url: "https://developers.google.com/google-ads/api/docs/api-policy/access-levels" },
      { label: "Google: ciclo de versões da API", url: "https://developers.google.com/google-ads/api/docs/productionize/stay-updated" },
    ],
  },
  {
    slug: "api-linkedin",
    title: "API do LinkedIn: o que é liberado e o que precisa de aprovação | Reportei Connect",
    description:
      "O que qualquer desenvolvedor pode usar na API do LinkedIn, o que exige aprovação (anúncios e páginas de empresa), como pedir acesso e quanto tempo valem os tokens.",
    h1: "API do LinkedIn: o que é liberado e o que precisa de aprovação",
    lead: "Login e compartilhamento são abertos a qualquer app. Dados de anúncios e de páginas de empresa dependem de aprovação do LinkedIn. Veja como funciona cada caso.",
    checkedAt: "27/10/2026",
    platformPage: "api-linkedin-ads",
    platform: "LinkedIn",
    sections: [
      {
        h2: "Liberado para qualquer app",
        blocks: [
          {
            list: [
              "Sign In with LinkedIn, por OpenID Connect, com nome, foto e e-mail do membro.",
              "Share on LinkedIn, para publicar em nome do próprio membro.",
            ],
          },
        ],
      },
      {
        h2: "Precisa de aprovação",
        blocks: [
          {
            list: [
              "Advertising API, para ler e gerenciar contas de anúncio.",
              "Community Management API, para páginas de empresa: publicações, seguidores e métricas.",
            ],
          },
          "As duas usam OAuth de três pernas, em que o membro autoriza o app. O fluxo sem usuário não está disponível para essas APIs.",
        ],
      },
      {
        h2: "Como pedir acesso",
        blocks: [
          {
            ordered: true,
            list: [
              "Criar uma Página de empresa no LinkedIn.",
              "Criar o app no LinkedIn Developer Portal, vinculado a essa Página.",
              "Conferir os casos de uso que o LinkedIn não permite.",
              "Pedir o produto na aba Products do app e preencher o formulário.",
            ],
          },
          "O LinkedIn pode negar o pedido mesmo quando os requisitos são cumpridos.",
        ],
      },
      {
        h2: "Níveis Development e Standard",
        blocks: [
          {
            table: [
              ["API", "Development", "Standard"],
              ["Advertising", "Gerencia até 5 contas de anúncio", "Pedido com vídeo do app"],
              ["Community Management", "500 chamadas por app e 100 por membro a cada 24 horas, por até 12 meses", "Formulário, gravação de tela e credenciais de teste"],
            ],
          },
        ],
      },
      {
        h2: "Tokens",
        blocks: [
          {
            list: [
              "O código de autorização vale 30 minutos.",
              "O token de acesso vale 60 dias.",
              "A renovação automática por refresh token é liberada só para parceiros selecionados. Fora disso, o membro autoriza de novo.",
            ],
          },
        ],
      },
    ],
    shortcut:
      "O Reportei Connect já tem as integrações de LinkedIn Ads, páginas de empresa e perfis pessoais. Seu cliente autoriza as contas numa tela pronta e você consulta impressões, cliques, engajamento e custo pela API do Connect.",
    faq: [
      {
        q: "Qualquer app pode ler dados de anúncios do LinkedIn?",
        a: "Não. A Advertising API exige aprovação do LinkedIn, e o nível Development gerencia até 5 contas de anúncio.",
      },
      {
        q: "Quanto tempo vale o token do LinkedIn?",
        a: "O token de acesso vale 60 dias. A renovação automática só é liberada para parceiros selecionados.",
      },
    ],
    sources: [
      { label: "LinkedIn: como obter acesso", url: "https://learn.microsoft.com/en-us/linkedin/shared/authentication/getting-access" },
      { label: "LinkedIn: ampliar o acesso às APIs de marketing", url: "https://learn.microsoft.com/en-us/linkedin/marketing/increasing-access" },
      { label: "LinkedIn: início rápido das APIs de marketing", url: "https://learn.microsoft.com/en-us/linkedin/marketing/quick-start" },
      { label: "LinkedIn: fluxo de autorização e tokens", url: "https://learn.microsoft.com/en-us/linkedin/shared/authentication/authorization-code-flow" },
    ],
  },
]

export function findGuide(slug: string) {
  return GUIDES.find((guide) => guide.slug === slug)
}
