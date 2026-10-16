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
}

export const INTEGRATIONS: Integration[] = [
  { name: "Meta Ads", category: "Mídia paga", logo: "meta_ads" },
  { name: "Facebook", category: "Redes sociais", logo: "facebook" },
  { name: "Instagram Business", category: "Redes sociais", logo: "instagram_business" },
  { name: "Threads", category: "Redes sociais", logo: "threads" },
  { name: "Google Ads", category: "Mídia paga", logo: "google_ads" },
  { name: "Google Analytics", category: "Analytics e SEO", logo: "google_analytics" },
  { name: "Google Analytics 4", category: "Analytics e SEO", logo: "google_analytics_4", aliases: "GA4" },
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
  { name: "LinkedIn Ads", category: "Mídia paga", logo: "linkedin_ads" },
  { name: "TikTok", category: "Redes sociais", logo: "/logos/tiktok.svg" },
  { name: "TikTok Business", category: "Redes sociais", logo: "/logos/tiktok.svg" },
  { name: "TikTok Ads", category: "Mídia paga", logo: "tiktokads" },
  { name: "X Ads", category: "Mídia paga", logo: "twitter_ads", aliases: "Twitter Ads" },
  { name: "Pinterest", category: "Redes sociais", logo: "pinterest" },
  { name: "Pinterest Ads", category: "Mídia paga", logo: "pinterest" },
  { name: "Spotify Ads", category: "Mídia paga" },
  { name: "Microsoft Ads", category: "Mídia paga", aliases: "Microsoft Advertising Bing Ads" },
  { name: "Kwai Ads", category: "Mídia paga" },
  { name: "RD Station Marketing", category: "Marketing e CRM", logo: "rd" },
  { name: "RD Station CRM", category: "Marketing e CRM", logo: "rd_crm" },
  { name: "HubSpot Marketing", category: "Marketing e CRM", logo: "hubspot_marketing" },
  { name: "HubSpot CRM", category: "Marketing e CRM", logo: "hubspot_marketing" },
  { name: "Pipedrive", category: "Marketing e CRM", logo: "pipedrive" },
  { name: "Kommo", category: "Marketing e CRM", logo: "kommo" },
  { name: "GoHighLevel", category: "Marketing e CRM" },
  { name: "ActiveCampaign", category: "Marketing e CRM", logo: "active_campaign" },
  { name: "Mailchimp", category: "Marketing e CRM", logo: "mailchimp" },
  { name: "Klaviyo", category: "Marketing e CRM" },
  { name: "E-goi", category: "Marketing e CRM", logo: "egoi" },
  { name: "PhoneTrack", category: "Atendimento", logo: "phonetrack" },
  { name: "CallRail", category: "Atendimento" },
  { name: "Twilio", category: "Atendimento" },
  { name: "Keyword.com", category: "Analytics e SEO" },
  { name: "GreatPages", category: "Marketing e CRM" },
  { name: "Shopify", category: "E-commerce e vendas", logo: "shopify" },
  { name: "WooCommerce", category: "E-commerce e vendas", logo: "woo_commerce" },
  { name: "Nuvemshop", category: "E-commerce e vendas", logo: "nuvem_shop" },
  { name: "Magazord", category: "E-commerce e vendas" },
  { name: "Olist", category: "E-commerce e vendas" },
  { name: "Hotmart", category: "E-commerce e vendas", logo: "hotmart" },
  { name: "Eduzz", category: "E-commerce e vendas", logo: "eduzz" },
  { name: "Kiwify", category: "E-commerce e vendas" },
  { name: "iFood", category: "E-commerce e vendas" },
  { name: "Goomer", category: "E-commerce e vendas" },
  { name: "Cardápio Web", category: "E-commerce e vendas" },
  { name: "Repediu", category: "E-commerce e vendas" },
]

export function integrationLogoSrc(logo: string) {
  return logo.startsWith("/") ? logo : `/images/integrations/${logo}.svg`
}
