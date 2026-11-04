import type { Messages, Rich } from "@/lib/messages/pt"

export const en: Messages = {
  meta: {
    homeTitle: "Marketing data API for SaaS | Reportei Connect",
    homeDescription: (n) =>
      `An API for your software to query your customers' Instagram, Meta Ads, Google Ads, RD Station and ${n - 4} more marketing, CRM and e-commerce platforms.`,
    softwareDescription: (n) =>
      `An API that brings your customers' metrics from ${n} marketing, CRM and e-commerce platforms into your product.`,
    integrationsTitle: (n) => `Reportei Connect integrations: ${n} marketing, CRM and e-commerce APIs`,
    integrationsDescription: (n) =>
      `Meta Ads, Google Ads, Instagram, TikTok, HubSpot, Shopify and more: the ${n} platforms your product reaches through a single API.`,
    ogImageAlt: "Reportei Connect: data from 50 platforms in one API",
  },
  language: {
    label: "Language",
  },
  header: {
    nav: {
      practice: "In practice",
      integrations: "Integrations",
      clients: "Customers",
      ai: "With AI",
      pricing: "Pricing",
      docs: "Docs",
    },
    login: "Log in",
    signup: "Start free trial",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  footer: {
    tagline: (n) => `${n} marketing, CRM and e-commerce integrations in one API for your system.`,
    product: "Product",
    company: "Company",
    apis: "APIs",
    developers: "Developers",
    whatIs: "What it is",
    practice: "In practice",
    integrations: "Integrations",
    pricing: "Plans and pricing",
    faq: "FAQ",
    about: "About Reportei",
    stories: "Customer stories",
    comparisons: "Comparisons",
    contact: "Contact",
    allIntegrations: "All integrations",
    toolkits: "Toolkits",
    guides: "API guides",
    docs: "Documentation",
    ai: "Build it with AI",
    signup: "Start free trial",
    copyright: (year) => `© ${year} Reportei Connect. A Reportei product.`,
    terms: "Terms of service",
  },
  hero: {
    title: "Marketing data API for your product.",
    copy: (n) =>
      `Connect your customers' accounts on ${n} marketing, CRM and e-commerce platforms, such as Instagram, Meta Ads, Google Ads and RD Station. Access the metrics through a single API and build your own analyses, reports and dashboards.`,
    signup: "Start free trial",
    demo: "Book a demo",
    trial: "15-day trial. No credit card required.",
    buildWith: "Build it with",
    seePrompt: "See the prompt",
  },
  productShots: {
    heading: "Inside Connect",
    tabsLabel: "Connect screens",
    enlarge: "Open the {label} screenshot in a new tab",
    metrics: {
      label: "Metrics",
      alt: "The Explorer interface: Meta Ads reach metric selected, with the payload sent and the API response.",
      caption: "Pick the metrics, see the real API response and copy the code in cURL, Node.js, Python or PHP.",
    },
    posts: {
      label: "Posts",
      alt: "Connect's posts panel: a customer's Instagram posts with type, status and publishing date.",
      caption: "Follow every post published to your customers' accounts through the API, with type, status and publishing time.",
    },
    ads: {
      label: "Ads",
      alt: "Connect's ads panel: a customer's Meta Ads campaigns and ad sets with objective, status and budget.",
      caption: "See the campaigns, ad sets and ads created through the API, with the status and budget of each.",
    },
  },
  clients: {
    heading: "Companies already using Reportei Connect",
    newTab: (name) => `${name} (opens in a new tab)`,
    caseLabel: (name) => `${name} case study`,
  },
  whatIs: {
    title: "What is Reportei Connect?",
    copy: (n) =>
      `An API that brings data from ${n} integrations into your system. You connect your customers' accounts and use the metrics inside your product.`,
    about:
      "Built by Reportei, with more than 10 years of experience in marketing reports and over 10,000 active customers.",
    pillars: [
      {
        title: "Connect accounts",
        body: "Use the Connect flow so your customers authorize access to the accounts on the platforms they use.",
      },
      {
        title: "Collect data",
        body: "Access marketing, CRM and e-commerce data through integrations maintained by Reportei.",
      },
      {
        title: "Deliver metrics",
        body: "Query the data Connect supports through a documented API, within each account's permissions.",
      },
    ],
  },
  apiDemo: {
    eyebrow: "In practice",
    title: "One API call, the result in your customer's account.",
    copy: "See what you send to Connect and what happens on the other side, for each part of the API.",
    tabsLabel: "Parts of the API",
    footnote: "Illustrative values. The full contract of each endpoint is in the",
    footnoteLink: "API documentation",
    placeholders: {
      accountKey: "<your account key>",
      customerToken: "<customer token>",
      metaConnection: "<Meta Ads connection>",
    },
    metrics: {
      label: "Metrics",
      step: "Query",
      title: "Request the metrics of a connected account",
      body: "You choose the connection, the period and the metrics. Connect fetches them from the platform and returns the values in the same format for every integration.",
      inProduct: "In your product",
      account: "Your customer's Meta Ads · September",
      reach: "Total reach",
      reachHint: "people saw the ads at least once",
    },
    ads: {
      label: "Ads",
      panel: "In your customer's ad account",
      campaign: "Campaign",
      adset: "Ad set",
      ad: "Ad",
      traffic: "Traffic",
      placements: "Facebook and Instagram",
      offer: "Up to 50% off",
      shopNow: "Shop now",
      adName: "Black Friday, image",
      budget: "R${amount}/day",
      was: "R${amount}",
      inReview: "In review",
      active: "Active",
      running: "Running",
      create: {
        step: "Create",
        title: "Create the campaign, the ad set and the ad in one call",
        body: "Everything starts paused and is only activated at the last step. If something fails midway, nothing keeps running on your customer's money.",
      },
      adjust: {
        step: "Adjust",
        title: "Change budget and status without opening the ads manager",
        body: "Every write is logged and can be retried with the same Idempotency-Key without duplicating anything.",
      },
      track: {
        step: "Track",
        title: "Know when the platform approved it",
        body: "The effective status comes straight from the platform, so your product shows whether the ad is in review, running or was rejected.",
      },
    },
    posts: {
      label: "Posts",
      instagramPanel: "On your customer's Instagram",
      facebookPanel: "On your customer's Page",
      brand: "My Brand",
      handle: "my_brand",
      caption: "Summer collection #summer",
      facebookCaption: "Summer collection coming to stores",
      firstComment: "Link in bio!",
      now: "Just now",
      nowPublic: "Just now · Public",
      publishing: "Publishing…",
      like: "Like",
      comment: "Comment",
      share: "Share",
      statusPublishing: "Publishing",
      statusPublished: "Published",
      publish: {
        step: "Publish",
        title: "Publish to your customer's Instagram",
        body: "You send the caption and the media. Connect uploads the content through the account your customer already connected and handles the publishing.",
      },
      track: {
        step: "Track",
        title: "Know when the post went live",
        body: "Look it up by uuid or by your own reference. The response brings the status of each media item and the link to the published post.",
      },
      facebook: {
        step: "Facebook",
        title: "The same call for a Facebook Page",
        body: "Switch the integration and the same format publishes to your customer's Page. You don't learn a new API for each network.",
      },
    },
  },
  howItWorks: {
    title: "How it works in practice",
    copy: "From your customers' accounts to your system's features.",
    steps: [
      {
        title: "Connect the accounts",
        body: (n) => `Choose among ${n} integrations and ask your customer to authorize the accounts you will use.`,
      },
      {
        title: "Query the API",
        body: () => "Integrate your system with Connect and query the metrics available in the connected accounts.",
      },
      {
        title: "Use it in your product",
        body: () =>
          "Combine the metrics with your internal data and build reports, dashboards and analyses for your customers.",
      },
    ],
    flowCaption: "Data flow: accounts connected on the platforms, Reportei Connect and your product.",
    connected: "Connected accounts",
    connectedHint: "Google Ads, Meta Ads, CRMs and e-commerce",
    product: "Your product",
    productHint: "Reports, dashboards and analyses",
  },
  problems: {
    eyebrow: "What we take care of",
    title: "The work you don't have to do.",
    copy: "Integrating a platform is the easy part. Keeping the integration working for hundreds of accounts is what eats up the team.",
    items: [
      {
        problem: "App review on every platform",
        solution:
          "Meta, Google, LinkedIn and TikTok review your app before releasing third-party data. With Connect, you use integrations that have already passed those reviews.",
      },
      {
        problem: "One OAuth flow per network",
        solution:
          "You generate a connection link and your customer authorizes the accounts on a ready-made screen hosted by Connect. Your code implements no platform's OAuth.",
      },
      {
        problem: "Tokens that expire",
        solution: "Connect renews tokens before they expire and regularly checks that each connection still has access.",
      },
      {
        problem: "Connections that drop without warning",
        solution:
          "When a connection changes status or is removed, your system receives a webhook and can alert the customer right away.",
      },
      {
        problem: "Every API returns a different format",
        solution:
          "Metrics from every platform arrive in the same format, with the value for the period and for the previous period.",
      },
      {
        problem: "APIs that change all the time",
        solution:
          "New versions, deprecated fields and rate limits are handled by the Reportei team, which has maintained these integrations for over 10 years.",
      },
    ],
  },
  caseStudy: {
    eyebrow: "Connect in practice · Leadster",
    title: "Media data in Leadster's dashboard.",
    paragraphs: [
      "Leadster already gathered data on leads and interactions from its chatbots. What was missing was tying those results to media spend.",
      "With Reportei Connect, it started crossing its internal data with Google Ads, Meta Ads and LinkedIn Ads in its Super Dashboard.",
      "Cost per conversion, CPM and performance by campaign, in a consolidated view of the channels.",
    ],
    readCase: "Read the full case study (Portuguese)",
    watch: "Watch the presentation",
  },
  carousel: {
    roledescription: "carousel",
    label: "Leadster Super Dashboard screens",
    previous: "Previous slide",
    next: "Next slide",
    slides: [
      "Leadster Super Dashboard - custom events and spend per conversion",
      "Google Ads campaigns with detailed spend and conversion metrics",
      "Consolidated view by channel - Google Ads, LinkedIn Ads and Meta Ads",
      "Spend per conversion with cost per lead and conversion rate",
      "Full campaign analysis with metrics from every channel",
    ],
  },
  networks: {
    title: "{n} integrations for your product",
    copy: "Paid media, social networks, CRM and e-commerce. Find the platforms you need and access their data through the Reportei Connect API.",
    searchLabel: "Search integrations",
    searchPlaceholder: "E.g. Google Ads, HubSpot or Shopify",
    filterLabel: "Filter integrations by category",
    all: "All ({n})",
    found: { one: "1 integration found", other: "{n} integrations found" },
    note: "An integration is a platform available in the catalog. A connection is an account on that platform linked to Connect, and it is the unit used for billing.",
    seePlan: "See how the plan works.",
    details: "Details of each integration.",
  },
  categories: {
    "Mídia paga": "Paid media",
    "Redes sociais": "Social networks",
    "Analytics e SEO": "Analytics and SEO",
    "Marketing e CRM": "Marketing and CRM",
    Atendimento: "Customer service",
    "E-commerce e vendas": "E-commerce and sales",
  },
  integrationNames: {
    "Perfil da Empresa no Google": "Google Business Profile",
    "LinkedIn (páginas)": "LinkedIn (pages)",
    "LinkedIn (perfis pessoais)": "LinkedIn (personal profiles)",
  },
  ai: {
    eyebrow: "Build it with AI",
    title: "Your coding agent does the integration.",
    copy: "Copy the prompt and paste it into Claude Code, Cursor or Codex. It guides the agent to open your sign-up, read the API specification and implement the integration in your project's backend.",
    note: "You fill in your details when the agent asks and review the implementation before shipping.",
    windowTitle: "your-project · coding agent",
    promptEcho: "> I need to integrate Reportei Connect into this project…",
    transcript: [
      "Reading app.connect.reportei.com/provision-trial.md",
      "Sign-up link sent. Waiting for you to create the account",
      "Account created. Key saved as CONNECT_API_KEY in .env",
      "Reading the specification at /openapi.json",
      "Creating customers and the connection link in the backend",
      "Smoke test: metrics from a connected account",
    ],
    transcriptCaption:
      "Example of what the agent does when following the prompt: reads the instructions, waits for the sign-up, stores the key in .env, reads the specification and implements the integration.",
    resources: {
      docs: {
        title: "API documentation",
        body: "Endpoints, authentication, errors and examples for every resource.",
        cta: "Read the docs",
      },
      openapi: {
        title: "OpenAPI specification",
        body: "The API contract in a single file, for your agent to read before writing code.",
        cta: "Open openapi.json",
      },
      explorer: {
        title: "Connect Explorer",
        body: "Connect an account, pick the metrics and copy a ready-made payload into your code.",
        cta: "Try it in the Explorer",
      },
    },
  },
  delegate: {
    sentence:
      "I need to integrate Reportei Connect into this project. Read the instructions at https://app.connect.reportei.com/provision-trial.md and follow the steps described there.",
    copy: "Copy prompt",
    copied: "Copied!",
    copiedStatus: "Prompt copied",
  },
  pricing: {
    eyebrow: "Plans and pricing",
    title: "Grow with your customers. Connect keeps up.",
    copy: "One plan with connections included and a fixed price per additional connection, the same on every platform in the catalog. No setup fee.",
    connectionTitle: "What counts as a connection?",
    connectionBody:
      "Each platform account your customer connects to Connect counts as one connection. A single customer can have several connections.",
    exampleTitle: "Example: one customer of your software",
    example: ["1 Instagram profile", "1 Google Ads account", "1 Meta Ads account"],
    oneConnection: "1 connection",
    exampleTotal: "1 customer, 3 connected accounts = 3 connections",
    footer:
      "Every integration is available on the plan. The monthly fee varies with the number of accounts your customers connect.",
    billingQuestions: "Billing questions",
    embedTitle: "Reportei Connect plans and pricing",
    fallbackTitle: "Connect plan",
    fallbackBody:
      "Connections included in the plan and a fixed price per additional connection, the same on every platform. See the prices and estimate what you would pay.",
    fallbackCta: "See plans and pricing",
  },
  faq: {
    title: "Frequently asked questions",
    productGroup: "About Connect",
    pricingGroup: "Pricing and connections",
    termsBefore: "See the full conditions in the",
    termsLink: "Reportei Connect terms of service",
    product: [
      {
        q: () => "What can I do with Reportei Connect?",
        a: (n): Rich[] => [
          [
            `Connect your customers' accounts on ${n} marketing, CRM and e-commerce platforms and query their metrics through a single API.`,
          ],
          [
            "You can also publish to your customers' Instagram and Facebook and, on Meta Ads, create and manage campaigns, ad sets and ads, all through the same connected accounts.",
          ],
        ],
      },
      {
        q: () => "Do I need to create and get an app approved on each platform?",
        a: (): Rich[] => [
          [
            "No. Connect's integrations have already passed the platforms' reviews. Your customer authorizes access to the accounts and you query the data through the API, without registering your own app on each network.",
          ],
        ],
      },
      {
        q: () => "Do my customers need a Reportei account?",
        a: (): Rich[] => [
          [
            "No. Your system generates a connection link and the customer authorizes the accounts on a ready-made Connect screen. After that, they keep using only your product.",
          ],
        ],
      },
      {
        q: () => "What data can I query?",
        a: (): Rich[] => [
          [
            "The metrics supported on each platform, within the permissions of the connected account. The metrics catalog of each integration is in the API and in the Connect Explorer, where you test the query before writing code.",
          ],
        ],
      },
      {
        q: () => "How are my customers' tokens stored?",
        a: (): Rich[] => [
          [
            "Your system never handles the platforms' tokens. They are stored encrypted in Connect, which renews each one before it expires and uses it only to fetch the data you requested.",
          ],
        ],
      },
      {
        q: () => "What if a customer's connection loses access?",
        a: (): Rich[] => [
          [
            "Connect checks connections regularly. When one changes status or is removed, your system receives a webhook and can ask the customer to connect the account again.",
          ],
        ],
      },
      {
        q: () => "Can I implement it with an AI agent?",
        a: (): Rich[] => [
          [
            "Yes. The prompt in the ",
            { link: "ia", text: "Build it with AI" },
            " section guides Claude Code, Cursor or Codex to open your sign-up, read the OpenAPI specification and implement the integration in your project's backend.",
          ],
        ],
      },
    ],
    pricing: [
      {
        q: () => "What is the difference between a customer and a connection?",
        a: (): Rich[] => [
          [
            "One end customer of your product can have several connections. Each connection is one of that customer's accounts on one platform. If they connect an Instagram account and a Google Ads account, that is two connections.",
          ],
        ],
      },
      {
        q: (n) => `Are all ${n} integrations included in the plan?`,
        a: (): Rich[] => [
          [
            "Yes. They are all available on the same plan and have the same price per connection. Access depends on the permissions of the connected account and is limited to the data and metrics Connect supports.",
          ],
        ],
      },
      {
        q: () => "How are several accounts on the same platform counted?",
        a: (): Rich[] => [
          [
            "Each connected account counts as one connection, even if it belongs to the same customer. For example, three Google Ads accounts are three connections.",
          ],
        ],
      },
      {
        q: () => "How is the bill calculated?",
        a: (): Rich[] => [
          [
            "The billed quantity is the daily average of active connections during the cycle, rounded up. Connections above those included in the plan are charged at the additional price in the price table.",
          ],
          [
            "If the plan includes 10 connections and the rounded average for the cycle is 14, you pay for the plan plus 4 additional connections.",
          ],
        ],
      },
      {
        q: () => "If I remove an account, does the price go down?",
        a: (): Rich[] => [
          [
            "Removing an account reduces the number of active connections. The effect on the bill depends on how many days it was active in the cycle and on the final daily average, rounded up. The plan's base price still includes the plan's connections.",
          ],
        ],
      },
      {
        q: () => "Can I try it without a credit card?",
        a: (): Rich[] => [["Yes. You can try Reportei Connect for 15 days without adding a credit card."]],
      },
      {
        q: () => "Can I cancel at any time?",
        a: (): Rich[] => [
          ["Yes. You can request cancellation at any time and it takes effect at the end of the current billing cycle."],
        ],
      },
    ],
  },
  cta: {
    title: "See Connect applied to your product.",
    copy: "Try it for 15 days with no card, or walk our team through your use case.",
    signup: "Start free trial",
    demo: "Book a demo",
  },
  integrationsPage: {
    eyebrow: "Integrations",
    title: (n) => `${n} platforms in one API for your product`,
    copy: "Your customers connect their paid media, social, CRM and e-commerce accounts. Your system queries the metrics of all of them through the same API, in the same format.",
    popular: "Most requested APIs",
    apiOf: (platform) => `${platform} API`,
    catalog: "Full catalog",
    comparisons: "Comparisons",
    versus: (competitor) => `Connect or ${competitor}`,
  },
  toolkits: {
    breadcrumb: "Toolkits",
    home: {
      eyebrow: "Toolkits",
      title: (n) => `Beyond data: ${n} apps your product operates`,
      copy: (tools) =>
        `Send WhatsApp messages, create Jira issues, book on Google Calendar. ${tools} tools your product and your AI agents run on your customer's account, through the same API.`,
      cta: (n) => `See all ${n} toolkits`,
    },
    hub: {
      metaTitle: (n, tools) => `Reportei Connect toolkits: ${n} apps and ${tools} tools through one API`,
      metaDescription: (n, tools) =>
        `WhatsApp, Notion, Jira, Stripe, Google Calendar and ${n - 5} more apps: ${tools} tools your product and your AI agents run on your customers' accounts through one API.`,
      eyebrow: "Toolkits",
      h1: (n) => `${n} apps your product and your AI agents operate through one API`,
      copy: "Your customer connects the app account once. Your system sends messages, creates tasks, reads contacts and books meetings by calling the tools through the same endpoint, without building each app's API.",
      toolCount: (n) => (n === 1 ? "1 tool" : `${n} tools`),
      stats: (n, tools) => `${n} toolkits · ${tools} tools`,
    },
    categories: {
      communication: "Communication",
      crm: "CRM and sales",
      marketing: "Marketing",
      email_marketing: "Email marketing",
      ecommerce: "E-commerce",
      finance: "Finance and payments",
      support: "Customer support",
      project_management: "Project management",
      productivity: "Productivity",
      scheduling: "Scheduling",
      analytics: "Analytics",
      file_storage: "File storage",
      developer_tools: "Developer tools",
    },
    auth: {
      api_key: {
        label: "API key",
        body: "Your customer pastes the app's key on a Connect screen, or your system sends the key with POST /api/customer-toolkits, with no screen.",
      },
      basic: {
        label: "Username and password",
        body: "Your customer enters the app credentials on a Connect screen, or your system sends them with POST /api/customer-toolkits, with no screen.",
      },
      oauth2: {
        label: "OAuth with your product's app",
        body: (slug) =>
          `You register your product's OAuth app once, with POST /api/merchants/credentials/${slug}, and your customer authorizes the account on a consent screen. Connect renews the token when it is about to expire.`,
      },
    },
    hostParams: (params) => `When connecting, your customer also enters ${params}: the address of their account on the app's API.`,
    toolkit: {
      metaTitle: (name) => `${name} API for SaaS and AI agents | Reportei Connect`,
      h1: (name) => `${name} in your product and your AI agents, through one API`,
      signup: "Start free trial",
      docs: "Read the docs",
      trial: "15 days to try it. No credit card.",
      sampleCaption: (tool) => `Example: the "${tool}" tool on an account your customer connected.`,
      howEyebrow: "How it works",
      howTitle: (name) => `From a connected customer to the first ${name} call.`,
      steps: (name) => [
        {
          title: "Your customer connects the account",
          body: `Your system opens a Connect session for the toolkit and your customer connects their ${name} account. You get the connection id.`,
        },
        {
          title: "Your product calls the tool",
          body: "A POST to /api/tools/{tool}/execute with the connection id and the arguments. The response is the app's own, with the same status and body.",
        },
        {
          title: "Connect handles the rest",
          body: "It stores the credential encrypted, renews OAuth tokens and records every execution in an audit trail you query through the API.",
        },
      ],
      useCasesEyebrow: "Use cases",
      useCasesTitle: (name) => `What your product does with ${name}.`,
      connectEyebrow: "Connection",
      connectTitle: "How your customer connects the account",
      toolsEyebrow: "Tools",
      toolsTitle: (name, n) => `${n} ${name} tools`,
      seeAllTools: (n) => `See all ${n} tools`,
      faqTitle: (name) => `Questions about the ${name} toolkit`,
      faq: (name, tools, modes) => [
        {
          q: `Do I need to build against the ${name} API?`,
          a: `No. Connect ships ${tools} ${name} tools, described and ready. Your customer connects the account and your system calls every tool through the same endpoint, with the same request format.`,
        },
        {
          q: `How does my customer connect their ${name} account?`,
          a: `With the mode the toolkit accepts: ${modes}. Connect stores the credential encrypted and never returns it to your system.`,
        },
        {
          q: "Does it work with AI agents?",
          a: "Yes. Each tool's input is described in JSON Schema, which your agent uses directly as a tool definition. The agent picks the tool and the arguments, and your system makes the call to Connect.",
        },
        {
          q: "Does my customer need a Reportei account?",
          a: "No. Your customer connects the account on a Connect screen, or your system sends the credential through the API, and they keep using only your product.",
        },
      ],
      relatedTitle: "Toolkits in the same category",
      allToolkits: (n) => `See all ${n} toolkits`,
      officialDocs: (name) => `Official ${name} documentation`,
    },
    toolsPage: {
      metaTitle: (name, n) => `${name}: all ${n} API tools | Reportei Connect`,
      metaDescription: (name, n, examples) =>
        `The ${n} tools of the ${name} toolkit on Reportei Connect: ${examples} and more. Each one with its parameters and a sample call.`,
      h1: (name) => `${name} tools`,
      copy: (name, n) =>
        `The ${n} ${name} operations your product runs on your customer's account through Connect. All of them use the same endpoint, POST /api/tools/{tool}/execute.`,
    },
    tool: {
      metaTitle: (tool, name) => `${name} API: ${tool} | Reportei Connect`,
      h1: (tool, name) => `${tool} with the ${name} API`,
      requestTitle: "The request",
      requestCopy:
        "Your system sends your customer's connection id and the tool arguments. The headers are the same as the rest of the Connect API: your product's token and your customer's token.",
      responseTitle: "The response",
      responseCopy:
        "Connect returns the app's response status and body as they came, with the X-Toolkit-Execution-Id header. Every execution is recorded and can be read with GET /api/tools/executions/{uuid}.",
      paramsTitle: "Parameters",
      paramsNote: "",
      columns: { name: "Parameter", type: "Type", required: "Required", description: "Description" },
      yes: "Yes",
      no: "No",
      values: "Values:",
      noParams: "This tool takes no arguments.",
      connectionsTitle: "Supported connections",
      connectionsCopy: (name) =>
        `Your customer connects their ${name} account once, with one of the modes below. The same connection serves every tool of the toolkit.`,
      aiTitle: "Ready for AI agents",
      aiCopy: (slug) =>
        `This tool's input is a JSON Schema, available at GET /api/tools/${slug}. It becomes your agent's tool definition with no conversion.`,
      identifier: "Identifier",
      otherTools: (name) => `Other ${name} tools`,
    },
  },
}
