// The capabilities of each Connect area, one landing page each. The facts behind every page
// (fields, limits, sample request) are in lib/features/copy/{slug}.json, checked against the
// Connect OpenAPI spec by scripts/check-feature-copy.mjs.

export const FEATURE_AREAS = ["posts", "ads", "metrics", "llm"] as const
export type FeatureArea = (typeof FEATURE_AREAS)[number]

export type Capability = {
  slug: string
  area: FeatureArea
  // The Connect operations the page is about, as in the OpenAPI spec.
  operations: string[]
  // Connect integration slugs the capability works with; the logos come from lib/integrations.
  integrations: string[]
  related: string[]
}

const POSTS_INSTAGRAM = ["instagram_business", "instagram"]

export const CAPABILITIES: Capability[] = [
  // Posts
  { slug: "instagram-carousel", area: "posts", operations: ["POST /posts"], integrations: POSTS_INSTAGRAM, related: ["instagram-reels", "instagram-stories", "instagram-first-comment"] },
  { slug: "instagram-reels", area: "posts", operations: ["POST /posts"], integrations: POSTS_INSTAGRAM, related: ["instagram-trial-reels", "instagram-carousel", "large-video-upload"] },
  { slug: "instagram-stories", area: "posts", operations: ["POST /posts"], integrations: POSTS_INSTAGRAM, related: ["instagram-reels", "facebook-stories", "post-status"] },
  { slug: "instagram-trial-reels", area: "posts", operations: ["POST /posts"], integrations: POSTS_INSTAGRAM, related: ["instagram-reels", "instagram-collaborators", "post-status"] },
  { slug: "instagram-collaborators", area: "posts", operations: ["POST /posts"], integrations: POSTS_INSTAGRAM, related: ["instagram-carousel", "instagram-reels", "instagram-first-comment"] },
  { slug: "instagram-first-comment", area: "posts", operations: ["POST /posts"], integrations: POSTS_INSTAGRAM, related: ["instagram-carousel", "instagram-collaborators", "threads-post"] },
  { slug: "facebook-page-post", area: "posts", operations: ["POST /posts"], integrations: ["facebook"], related: ["facebook-reels", "facebook-stories", "instagram-carousel"] },
  { slug: "facebook-reels", area: "posts", operations: ["POST /posts"], integrations: ["facebook"], related: ["facebook-page-post", "instagram-reels", "large-video-upload"] },
  { slug: "facebook-stories", area: "posts", operations: ["POST /posts"], integrations: ["facebook"], related: ["facebook-page-post", "instagram-stories", "post-status"] },
  { slug: "threads-post", area: "posts", operations: ["POST /posts"], integrations: ["threads"], related: ["instagram-carousel", "linkedin-page-post", "post-status"] },
  { slug: "linkedin-page-post", area: "posts", operations: ["POST /posts"], integrations: ["linkedin"], related: ["linkedin-profile-post", "threads-post", "post-status"] },
  { slug: "linkedin-profile-post", area: "posts", operations: ["POST /posts"], integrations: ["linkedin_personal"], related: ["linkedin-page-post", "threads-post", "all-customers-posts"] },
  { slug: "pinterest-pin", area: "posts", operations: ["POST /posts", "GET /posts/pinterest/boards", "GET /posts/pinterest/boards/{board_id}/sections"], integrations: ["pinterest"], related: ["pinterest-board", "instagram-carousel", "post-status"] },
  { slug: "pinterest-board", area: "posts", operations: ["POST /posts/pinterest/boards", "GET /posts/pinterest/boards"], integrations: ["pinterest"], related: ["pinterest-pin", "all-customers-posts", "post-status"] },
  { slug: "youtube-shorts", area: "posts", operations: ["POST /posts", "GET /posts/youtube/categories"], integrations: ["youtube"], related: ["large-video-upload", "instagram-reels", "facebook-reels"] },
  { slug: "post-status", area: "posts", operations: ["GET /posts/{uuid}", "GET /posts"], integrations: ["instagram_business", "facebook", "threads", "linkedin", "pinterest", "youtube"], related: ["all-customers-posts", "instagram-carousel", "large-video-upload"] },
  { slug: "large-video-upload", area: "posts", operations: ["POST /media", "POST /media/uploads", "PUT /media/uploads/{uuid}/parts/{part}", "POST /media/uploads/{uuid}/complete", "GET /media/uploads/{uuid}"], integrations: ["instagram_business", "facebook", "youtube", "linkedin", "threads", "pinterest"], related: ["youtube-shorts", "instagram-reels", "facebook-reels"] },
  { slug: "all-customers-posts", area: "posts", operations: ["GET /merchants/posts"], integrations: ["instagram_business", "facebook", "threads", "linkedin", "pinterest", "youtube"], related: ["post-status", "linkedin-page-post", "instagram-carousel"] },

  // Ads (Meta Ads, and Google Ads where it is supported)
  { slug: "create-campaign", area: "ads", operations: ["POST /ads/campaigns", "GET /ads/options", "GET /ads/google_adwords/conversion-actions"], integrations: ["facebook_ads", "google_adwords"], related: ["create-adset", "create-ad", "edit-budget"] },
  { slug: "create-adset", area: "ads", operations: ["POST /ads/adsets", "GET /ads/options"], integrations: ["facebook_ads", "google_adwords"], related: ["targeting", "edit-budget", "create-ad"] },
  { slug: "create-ad", area: "ads", operations: ["POST /ads"], integrations: ["facebook_ads", "google_adwords"], related: ["validate-ad", "upload-ad-media", "create-campaign"] },
  { slug: "boost-post", area: "ads", operations: ["POST /ads/boost", "GET /ads/facebook_ads/posts"], integrations: ["facebook_ads"], related: ["create-ad", "targeting", "pause-activate"] },
  { slug: "validate-ad", area: "ads", operations: ["POST /ads/validate"], integrations: ["facebook_ads", "google_adwords"], related: ["create-ad", "create-campaign", "duplicate"] },
  { slug: "duplicate", area: "ads", operations: ["POST /ads/{id}/duplicate", "POST /ads/adsets/{id}/duplicate", "POST /ads/campaigns/{id}/duplicate"], integrations: ["facebook_ads"], related: ["pause-activate", "edit-budget", "create-ad"] },
  { slug: "pause-activate", area: "ads", operations: ["PATCH /ads/campaigns/{id}", "PATCH /ads/adsets/{id}", "PATCH /ads/{id}"], integrations: ["facebook_ads"], related: ["edit-budget", "delete", "live-campaigns"] },
  { slug: "edit-budget", area: "ads", operations: ["PATCH /ads/campaigns/{id}", "PATCH /ads/adsets/{id}"], integrations: ["facebook_ads"], related: ["pause-activate", "create-campaign", "create-adset"] },
  { slug: "delete", area: "ads", operations: ["DELETE /ads/campaigns/{id}", "DELETE /ads/adsets/{id}", "DELETE /ads/{id}"], integrations: ["facebook_ads"], related: ["pause-activate", "live-campaigns", "all-customers-ads"] },
  { slug: "live-campaigns", area: "ads", operations: ["GET /ads/campaigns", "GET /ads/adsets", "GET /ads"], integrations: ["facebook_ads"], related: ["all-customers-ads", "pause-activate", "edit-budget"] },
  { slug: "all-customers-ads", area: "ads", operations: ["GET /merchants/ads/campaigns", "GET /merchants/ads/adsets", "GET /merchants/ads"], integrations: ["facebook_ads"], related: ["live-campaigns", "pause-activate", "create-campaign"] },
  { slug: "upload-ad-media", area: "ads", operations: ["POST /ads/facebook_ads/media", "GET /ads/facebook_ads/videos/{id}", "POST /ads/google_adwords/media", "GET /ads/google_adwords/videos/{id}", "GET /ads/google_adwords/library"], integrations: ["facebook_ads", "google_adwords"], related: ["create-ad", "validate-ad", "boost-post"] },
  { slug: "targeting", area: "ads", operations: ["GET /ads/targeting/search"], integrations: ["facebook_ads", "google_adwords"], related: ["custom-audiences", "create-adset", "boost-post"] },
  { slug: "custom-audiences", area: "ads", operations: ["GET /ads/audiences"], integrations: ["facebook_ads", "google_adwords"], related: ["targeting", "create-adset", "pixel-events"] },
  { slug: "pixel-events", area: "ads", operations: ["GET /ads/facebook_ads/pixels", "GET /ads/facebook_ads/pixels/{id}/events"], integrations: ["facebook_ads"], related: ["custom-conversions", "create-adset", "custom-audiences"] },
  { slug: "custom-conversions", area: "ads", operations: ["POST /ads/facebook_ads/custom-conversions", "GET /ads/facebook_ads/custom-conversions"], integrations: ["facebook_ads"], related: ["pixel-events", "create-adset", "create-ad"] },

  // Metrics
  { slug: "metrics-webhook", area: "metrics", operations: ["POST /metrics/get-data-async"], integrations: [], related: ["compare-periods", "charts", "tables"] },
  { slug: "compare-periods", area: "metrics", operations: ["POST /metrics/get-data"], integrations: [], related: ["charts", "tables", "metrics-webhook"] },
  { slug: "charts", area: "metrics", operations: ["POST /metrics/get-data"], integrations: [], related: ["tables", "compare-periods", "metrics-webhook"] },
  { slug: "tables", area: "metrics", operations: ["POST /metrics/get-data"], integrations: [], related: ["charts", "compare-periods", "metrics-webhook"] },

  // LLM
  { slug: "one-api-three-providers", area: "llm", operations: ["POST /llm/chat/completions", "GET /llm/models"], integrations: [], related: ["switch-providers", "model-fallback", "models-and-prices"] },
  { slug: "switch-providers", area: "llm", operations: ["POST /llm/chat/completions"], integrations: [], related: ["one-api-three-providers", "model-fallback", "streaming"] },
  { slug: "model-fallback", area: "llm", operations: ["POST /llm/chat/completions"], integrations: [], related: ["switch-providers", "streaming", "function-calling"] },
  { slug: "streaming", area: "llm", operations: ["POST /llm/chat/completions"], integrations: [], related: ["function-calling", "model-fallback", "vision"] },
  { slug: "function-calling", area: "llm", operations: ["POST /llm/chat/completions"], integrations: [], related: ["vision", "streaming", "models-and-prices"] },
  { slug: "vision", area: "llm", operations: ["POST /llm/chat/completions"], integrations: [], related: ["function-calling", "streaming", "models-and-prices"] },
  { slug: "models-and-prices", area: "llm", operations: ["GET /llm/models"], integrations: [], related: ["one-api-three-providers", "function-calling", "vision"] },
]
