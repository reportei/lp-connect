import { withBase } from "@/lib/base-path"

export const INTEGRATION_CATEGORIES = [
  "Mídia paga",
  "Redes sociais",
  "Analytics e SEO",
  "Marketing e CRM",
  "Atendimento",
  "E-commerce e vendas",
] as const

export type IntegrationCategory = (typeof INTEGRATION_CATEGORIES)[number]

export type Integration = {
  name: string
  category: IntegrationCategory
  logo?: string
  // Extra search terms, so "GA4" or "Bing Ads" still find the entry.
  aliases?: string
  // Slug of the integration's own landing page, when it has one (see lib/plataformas.ts).
  page?: string
}

export const INTEGRATIONS: Integration[] = [
  { name: "Meta Ads", category: "Mídia paga", logo: "meta_ads", page: "api-meta-ads" },
  { name: "Facebook", category: "Redes sociais", logo: "facebook" },
  { name: "Instagram Business", category: "Redes sociais", logo: "instagram_business", page: "api-instagram" },
  { name: "Threads", category: "Redes sociais", logo: "threads" },
  { name: "Google Ads", category: "Mídia paga", logo: "google_ads", page: "api-google-ads" },
  { name: "Google Analytics", category: "Analytics e SEO", logo: "google_analytics" },
  { name: "Google Analytics 4", category: "Analytics e SEO", logo: "google_analytics_4", aliases: "GA4", page: "api-google-analytics-4" },
  {
    name: "Perfil da Empresa no Google",
    category: "Analytics e SEO",
    logo: "google_my_business",
    aliases: "Google Meu Negócio Google Business Profile",
  },
  { name: "Google Search Console", category: "Analytics e SEO", logo: "search_console" },
  { name: "YouTube", category: "Redes sociais", logo: "youtube" },
  { name: "LinkedIn (páginas)", category: "Redes sociais", logo: "linkedin" },
  { name: "LinkedIn (perfis pessoais)", category: "Redes sociais", logo: "linkedin", aliases: "LinkedIn Personal" },
  { name: "LinkedIn Ads", category: "Mídia paga", logo: "linkedin_ads", page: "api-linkedin-ads" },
  { name: "TikTok", category: "Redes sociais", logo: "/logos/tiktok.svg" },
  { name: "TikTok Business", category: "Redes sociais", logo: "/logos/tiktok.svg" },
  { name: "TikTok Ads", category: "Mídia paga", logo: "tiktokads", page: "api-tiktok-ads" },
  { name: "X Ads", category: "Mídia paga", logo: "twitter_ads", aliases: "Twitter Ads" },
  { name: "Pinterest", category: "Redes sociais", logo: "pinterest" },
  { name: "Pinterest Ads", category: "Mídia paga", logo: "pinterest" },
  { name: "Spotify Ads", category: "Mídia paga", logo: "spotify_ads" },
  { name: "Microsoft Ads", category: "Mídia paga", logo: "microsoft_ads", aliases: "Microsoft Advertising Bing Ads" },
  { name: "Kwai Ads", category: "Mídia paga", logo: "kwai_ads" },
  { name: "RD Station Marketing", category: "Marketing e CRM", logo: "rd", page: "api-rd-station" },
  { name: "RD Station CRM", category: "Marketing e CRM", logo: "rd_crm", page: "api-rd-station" },
  { name: "HubSpot Marketing", category: "Marketing e CRM", logo: "hubspot_marketing", page: "api-hubspot" },
  { name: "HubSpot CRM", category: "Marketing e CRM", logo: "hubspot_marketing", page: "api-hubspot" },
  { name: "Pipedrive", category: "Marketing e CRM", logo: "pipedrive" },
  { name: "Kommo", category: "Marketing e CRM", logo: "kommo" },
  { name: "GoHighLevel", category: "Marketing e CRM", logo: "go_high_level" },
  { name: "ActiveCampaign", category: "Marketing e CRM", logo: "active_campaign" },
  { name: "Mailchimp", category: "Marketing e CRM", logo: "mailchimp" },
  { name: "Klaviyo", category: "Marketing e CRM", logo: "klaviyo" },
  { name: "E-goi", category: "Marketing e CRM", logo: "egoi" },
  { name: "PhoneTrack", category: "Atendimento", logo: "phonetrack" },
  { name: "CallRail", category: "Atendimento", logo: "callrail" },
  { name: "Twilio", category: "Atendimento", logo: "twilio" },
  { name: "Keyword.com", category: "Analytics e SEO", logo: "keyword" },
  { name: "GreatPages", category: "Marketing e CRM", logo: "great_pages" },
  { name: "Shopify", category: "E-commerce e vendas", logo: "shopify" },
  { name: "WooCommerce", category: "E-commerce e vendas", logo: "woo_commerce" },
  { name: "Nuvemshop", category: "E-commerce e vendas", logo: "nuvem_shop", page: "api-nuvemshop" },
  { name: "Magazord", category: "E-commerce e vendas", logo: "magazord" },
  { name: "Olist", category: "E-commerce e vendas", logo: "olist" },
  { name: "Hotmart", category: "E-commerce e vendas", logo: "hotmart" },
  { name: "Eduzz", category: "E-commerce e vendas", logo: "eduzz" },
  { name: "Kiwify", category: "E-commerce e vendas", logo: "kiwify" },
  { name: "iFood", category: "E-commerce e vendas", logo: "ifood" },
  { name: "Goomer", category: "E-commerce e vendas", logo: "goomer" },
  { name: "Cardápio Web", category: "E-commerce e vendas", logo: "cardapio_web" },
  { name: "Repediu", category: "E-commerce e vendas", logo: "repediuapi" },
]

export function integrationLogoSrc(logo: string) {
  return withBase(logo.startsWith("/") ? logo : `/images/integrations/${logo}.svg`)
}
