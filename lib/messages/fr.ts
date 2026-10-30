import type { Messages, Rich } from "@/lib/messages/pt"

export const fr: Messages = {
  meta: {
    homeTitle: (n) => `Reportei Connect | Les données de ${n} plateformes dans une API`,
    homeDescription: (n) =>
      `Connectez les comptes marketing, CRM et e-commerce de vos clients et accédez aux métriques de ${n} plateformes via une seule API.`,
    softwareDescription: (n) =>
      `Une API pour intégrer à votre produit les métriques de ${n} plateformes marketing, CRM et e-commerce de vos clients.`,
    integrationsTitle: (n) => `Intégrations Reportei Connect : ${n} API marketing, CRM et e-commerce`,
    integrationsDescription: (n) =>
      `Meta Ads, Google Ads, Instagram, TikTok, HubSpot, Shopify et plus : les ${n} plateformes auxquelles votre produit accède via une seule API.`,
    ogImageAlt: "Reportei Connect : les données de 50 plateformes dans une API",
  },
  language: {
    label: "Langue",
  },
  header: {
    nav: {
      practice: "En pratique",
      integrations: "Intégrations",
      clients: "Clients",
      ai: "Avec l'IA",
      pricing: "Tarifs",
      docs: "Documentation",
    },
    login: "Se connecter",
    signup: "Commencer l'essai gratuit",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
  },
  footer: {
    tagline: (n) => `${n} intégrations marketing, CRM et e-commerce dans une API pour votre système.`,
    product: "Produit",
    company: "Entreprise",
    apis: "API",
    developers: "Développeurs",
    whatIs: "Qu'est-ce que c'est",
    practice: "En pratique",
    integrations: "Intégrations",
    pricing: "Offres et tarifs",
    faq: "Questions fréquentes",
    about: "À propos de Reportei",
    stories: "Témoignages clients",
    comparisons: "Comparatifs",
    contact: "Contact",
    allIntegrations: "Toutes les intégrations",
    guides: "Guides des API",
    docs: "Documentation",
    ai: "Implémenter avec l'IA",
    signup: "Commencer l'essai gratuit",
    copyright: (year) => `© ${year} Reportei Connect. Un produit Reportei.`,
    terms: "Conditions d'utilisation",
  },
  hero: {
    title: (n) => `Les données de ${n} plateformes, dans votre produit.`,
    copy: "Connectez les comptes marketing, CRM et e-commerce de vos clients. Accédez aux métriques via une seule API et créez vos propres analyses, rapports et tableaux de bord.",
    signup: "Commencer l'essai gratuit",
    demo: "Réserver une démo",
    trial: "15 jours d'essai. Sans carte bancaire.",
    buildWith: "Implémentez avec",
    seePrompt: "Voir le prompt",
  },
  productShots: {
    heading: "Connect de l'intérieur",
    tabsLabel: "Écrans de Connect",
    enlarge: "Agrandir la capture {label} dans un nouvel onglet",
    metrics: {
      label: "Métriques",
      alt: "Interface réelle de l'Explorer : métrique de couverture Meta Ads sélectionnée, avec le payload envoyé et la réponse de l'API.",
      caption: "Choisissez les métriques, voyez la vraie réponse de l'API et copiez le code en cURL, Node.js, Python ou PHP.",
    },
    posts: {
      label: "Posts",
      alt: "Panneau des posts de Connect : publications Instagram d'un client avec type, statut et date de publication.",
      caption:
        "Suivez chaque post publié sur les comptes de vos clients via l'API, avec type, statut et heure de publication.",
    },
    ads: {
      label: "Ads",
      alt: "Panneau des annonces de Connect : campagnes et ensembles de publicités Meta Ads d'un client avec objectif, statut et budget.",
      caption: "Consultez les campagnes, ensembles de publicités et annonces créés via l'API, avec le statut et le budget de chacun.",
    },
  },
  clients: {
    heading: "Ils utilisent déjà Reportei Connect",
    newTab: (name) => `${name} (s'ouvre dans un nouvel onglet)`,
    caseLabel: (name) => `Étude de cas ${name}`,
  },
  whatIs: {
    title: "Qu'est-ce que Reportei Connect ?",
    copy: (n) =>
      `Une API pour amener les données de ${n} intégrations dans votre système. Vous connectez les comptes de vos clients et utilisez les métriques dans votre produit.`,
    about:
      "Créé par Reportei, fort de plus de 10 ans d'expérience dans le reporting marketing et de plus de 10 000 clients actifs.",
    pillars: [
      {
        title: "Connecter les comptes",
        body: "Utilisez le parcours Connect pour que vos clients autorisent l'accès aux comptes des plateformes qu'ils utilisent.",
      },
      {
        title: "Collecter les données",
        body: "Accédez aux données marketing, CRM et e-commerce grâce aux intégrations maintenues par Reportei.",
      },
      {
        title: "Mettre à disposition les métriques",
        body: "Interrogez les données prises en charge par Connect via une API documentée, dans le respect des autorisations de chaque compte.",
      },
    ],
  },
  apiDemo: {
    eyebrow: "En pratique",
    title: "Un appel à l'API, le résultat dans le compte de votre client.",
    copy: "Voyez ce que vous envoyez à Connect et ce qui se passe de l'autre côté, pour chaque partie de l'API.",
    tabsLabel: "Parties de l'API",
    footnote: "Valeurs fictives. Le contrat complet de chaque endpoint se trouve dans la",
    footnoteLink: "documentation de l'API",
    placeholders: {
      accountKey: "<clé de votre compte>",
      customerToken: "<token du client>",
      metaConnection: "<connexion Meta Ads>",
    },
    metrics: {
      label: "Métriques",
      step: "Interroger",
      title: "Demandez les métriques d'un compte connecté",
      body: "Vous choisissez la connexion, la période et les métriques. Connect les récupère sur la plateforme et renvoie les valeurs dans le même format pour toutes les intégrations.",
      inProduct: "Dans votre produit",
      account: "Meta Ads de votre client · septembre",
      reach: "Couverture totale",
      reachHint: "personnes ont vu les annonces au moins une fois",
    },
    ads: {
      label: "Annonces",
      panel: "Dans le compte publicitaire de votre client",
      campaign: "Campagne",
      adset: "Ensemble de publicités",
      ad: "Annonce",
      traffic: "Trafic",
      placements: "Facebook et Instagram",
      offer: "Jusqu'à -50 %",
      shopNow: "Acheter",
      adName: "Black Friday, image",
      budget: "{amount} R$/jour",
      was: "{amount} R$",
      inReview: "En examen",
      active: "Active",
      running: "Diffusée",
      create: {
        step: "Créer",
        title: "Créez la campagne, l'ensemble de publicités et l'annonce en un seul appel",
        body: "Tout est créé en pause et n'est activé qu'à la dernière étape. Si quelque chose échoue en cours de route, rien ne tourne avec l'argent de votre client.",
      },
      adjust: {
        step: "Ajuster",
        title: "Modifiez le budget et le statut sans ouvrir le gestionnaire de publicités",
        body: "Chaque écriture est enregistrée et peut être rejouée avec la même Idempotency-Key sans rien dupliquer.",
      },
      track: {
        step: "Suivre",
        title: "Sachez quand la plateforme a approuvé l'annonce",
        body: "Le statut effectif vient directement de la plateforme : votre produit indique si l'annonce est en examen, diffusée ou refusée.",
      },
    },
    posts: {
      label: "Publications",
      instagramPanel: "Sur l'Instagram de votre client",
      facebookPanel: "Sur la Page de votre client",
      brand: "Ma Marque",
      handle: "ma_marque",
      caption: "Collection d'été #ete",
      facebookCaption: "La collection d'été arrive en boutique",
      firstComment: "Lien dans la bio !",
      now: "À l'instant",
      nowPublic: "À l'instant · Public",
      publishing: "Publication…",
      like: "J'aime",
      comment: "Commenter",
      share: "Partager",
      statusPublishing: "Publication en cours",
      statusPublished: "Publié",
      publish: {
        step: "Publier",
        title: "Publiez sur l'Instagram de votre client",
        body: "Vous envoyez la légende et le média. Connect publie le contenu avec le compte que votre client a déjà connecté et s'occupe de la publication.",
      },
      track: {
        step: "Suivre",
        title: "Sachez quand le post est en ligne",
        body: "Consultez-le par son uuid ou par votre propre référence. La réponse indique le statut de chaque média et le lien du post publié.",
      },
      facebook: {
        step: "Facebook",
        title: "Le même appel pour une Page Facebook",
        body: "Changez d'intégration et le même format publie sur la Page de votre client. Pas de nouvelle API à apprendre pour chaque réseau.",
      },
    },
  },
  howItWorks: {
    title: "Comment ça marche en pratique",
    copy: "Des comptes de vos clients aux fonctionnalités de votre système.",
    steps: [
      {
        title: "Connectez les comptes",
        body: (n) => `Choisissez parmi ${n} intégrations et demandez à votre client d'autoriser les comptes à utiliser.`,
      },
      {
        title: "Interrogez l'API",
        body: () => "Intégrez votre système à Connect et interrogez les métriques disponibles dans les comptes connectés.",
      },
      {
        title: "Utilisez-les dans votre produit",
        body: () =>
          "Combinez les métriques avec vos données internes et créez des rapports, tableaux de bord et analyses pour vos clients.",
      },
    ],
    flowCaption: "Flux des données : comptes connectés sur les plateformes, Reportei Connect et votre produit.",
    connected: "Comptes connectés",
    connectedHint: "Google Ads, Meta Ads, CRM et e-commerce",
    product: "Votre produit",
    productHint: "Rapports, tableaux de bord et analyses",
  },
  problems: {
    eyebrow: "Ce dont nous nous chargeons",
    title: "Le travail que vous n'avez pas à faire.",
    copy: "Intégrer une plateforme est la partie facile. Maintenir l'intégration fonctionnelle pour des centaines de comptes, c'est ce qui occupe l'équipe.",
    items: [
      {
        problem: "Validation de l'app sur chaque plateforme",
        solution:
          "Meta, Google, LinkedIn et TikTok examinent l'app avant de donner accès aux données de tiers. Avec Connect, vous utilisez des intégrations qui ont déjà passé ces examens.",
      },
      {
        problem: "Un parcours OAuth par réseau",
        solution:
          "Vous générez un lien de connexion et votre client autorise les comptes sur un écran prêt à l'emploi, hébergé par Connect. Votre code n'implémente l'OAuth d'aucune plateforme.",
      },
      {
        problem: "Des tokens qui expirent",
        solution:
          "Connect renouvelle les tokens avant leur expiration et vérifie régulièrement que chaque connexion a toujours accès.",
      },
      {
        problem: "Des connexions qui tombent sans prévenir",
        solution:
          "Quand une connexion change de statut ou est supprimée, votre système reçoit un webhook et peut prévenir le client immédiatement.",
      },
      {
        problem: "Chaque API renvoie un format différent",
        solution:
          "Les métriques de toutes les plateformes arrivent dans le même format, avec la valeur de la période et celle de la période précédente.",
      },
      {
        problem: "Des API qui changent sans arrêt",
        solution:
          "Nouvelles versions, champs obsolètes et limites de requêtes sont gérés par l'équipe Reportei, qui maintient ces intégrations depuis plus de 10 ans.",
      },
    ],
  },
  caseStudy: {
    eyebrow: "Connect en pratique · Leadster",
    title: "Les données média dans le tableau de bord de Leadster.",
    paragraphs: [
      "Leadster réunissait déjà les données de leads et d'interactions de ses chatbots. Il manquait le lien entre ces résultats et l'investissement média.",
      "Avec Reportei Connect, l'entreprise croise désormais ses données internes avec Google Ads, Meta Ads et LinkedIn Ads dans son Super Dashboard.",
      "Coût par conversion, CPM et performance par campagne, dans une vue consolidée des canaux.",
    ],
    readCase: "Lire l'étude de cas complète (en portugais)",
    watch: "Voir la présentation",
  },
  carousel: {
    roledescription: "carrousel",
    label: "Écrans du Super Dashboard de Leadster",
    previous: "Diapositive précédente",
    next: "Diapositive suivante",
    slides: [
      "Super Dashboard de Leadster - personnalisation des événements et investissement par conversion",
      "Campagnes Google Ads avec métriques détaillées d'investissement et de conversion",
      "Vue consolidée par canal - Google Ads, LinkedIn Ads et Meta Ads",
      "Investissement par conversion avec coût par lead et taux de conversion",
      "Analyse complète des campagnes avec les métriques de tous les canaux",
    ],
  },
  networks: {
    title: "{n} intégrations pour votre produit",
    copy: "Médias payants, réseaux sociaux, CRM et e-commerce. Trouvez les plateformes dont vous avez besoin et accédez à leurs données via l'API Reportei Connect.",
    searchLabel: "Rechercher une intégration",
    searchPlaceholder: "Ex. : Google Ads, HubSpot ou Shopify",
    filterLabel: "Filtrer les intégrations par catégorie",
    all: "Toutes ({n})",
    found: { one: "1 intégration trouvée", other: "{n} intégrations trouvées" },
    note: "Une intégration est une plateforme disponible dans le catalogue. Une connexion est un compte de cette plateforme relié à Connect, et c'est l'unité utilisée pour la facturation.",
    seePlan: "Voir comment fonctionne l'offre.",
    details: "Détails de chaque intégration.",
  },
  categories: {
    "Mídia paga": "Médias payants",
    "Redes sociais": "Réseaux sociaux",
    "Analytics e SEO": "Analytics et SEO",
    "Marketing e CRM": "Marketing et CRM",
    Atendimento: "Service client",
    "E-commerce e vendas": "E-commerce et ventes",
  },
  integrationNames: {
    "Perfil da Empresa no Google": "Fiche d'établissement Google",
    "LinkedIn (páginas)": "LinkedIn (pages)",
    "LinkedIn (perfis pessoais)": "LinkedIn (profils personnels)",
  },
  ai: {
    eyebrow: "Implémentez avec l'IA",
    title: "Votre agent de code fait l'intégration.",
    copy: "Copiez le prompt et collez-le dans Claude Code, Cursor ou Codex. Il guide l'agent pour ouvrir votre inscription, lire la spécification de l'API et implémenter l'intégration dans le backend de votre projet.",
    note: "Vous renseignez vos informations quand l'agent les demande et relisez l'implémentation avant de la publier.",
    windowTitle: "votre-projet · agent de code",
    promptEcho: "> Je dois intégrer Reportei Connect à ce projet…",
    transcript: [
      "Lecture de app.connect.reportei.com/provision-trial.md",
      "Lien d'inscription envoyé. En attente de la création du compte",
      "Compte créé. Clé enregistrée dans CONNECT_API_KEY du .env",
      "Lecture de la spécification sur /openapi.json",
      "Création des customers et du lien de connexion dans le backend",
      "Test rapide : métriques d'un compte connecté",
    ],
    transcriptCaption:
      "Exemple de ce que fait l'agent en suivant le prompt : il lit les instructions, attend l'inscription, enregistre la clé dans le .env, lit la spécification et implémente l'intégration.",
    resources: {
      docs: {
        title: "Documentation de l'API",
        body: "Endpoints, authentification, erreurs et exemples pour chaque ressource.",
        cta: "Voir la documentation",
      },
      openapi: {
        title: "Spécification OpenAPI",
        body: "Le contrat de l'API dans un seul fichier, à faire lire à votre agent avant d'écrire du code.",
        cta: "Ouvrir openapi.json",
      },
      explorer: {
        title: "Connect Explorer",
        body: "Connectez un compte, choisissez les métriques et copiez le payload prêt pour votre code.",
        cta: "Essayer dans l'Explorer",
      },
    },
  },
  delegate: {
    sentence:
      "Je dois intégrer Reportei Connect à ce projet. Lis les instructions sur https://app.connect.reportei.com/provision-trial.md et suis les étapes qui y sont décrites.",
    copy: "Copier le prompt",
    copied: "Copié !",
    copiedStatus: "Prompt copié",
  },
  pricing: {
    eyebrow: "Offres et tarifs",
    title: "Grandissez avec vos clients. Connect suit le rythme.",
    copy: "Une offre avec des connexions incluses et un prix fixe par connexion supplémentaire, identique pour toutes les plateformes du catalogue. Sans frais de mise en place.",
    connectionTitle: "Qu'est-ce qui compte comme une connexion ?",
    connectionBody:
      "Chaque compte d'une plateforme que votre client connecte à Connect compte comme une connexion. Un même client peut avoir plusieurs connexions.",
    exampleTitle: "Exemple : un client de votre logiciel",
    example: ["1 profil Instagram", "1 compte Google Ads", "1 compte Meta Ads"],
    oneConnection: "1 connexion",
    exampleTotal: "1 client, 3 comptes connectés = 3 connexions",
    footer:
      "Toutes les intégrations sont disponibles dans l'offre. L'abonnement mensuel varie selon le nombre de comptes connectés par vos clients.",
    billingQuestions: "Questions sur la facturation",
    embedTitle: "Offres et tarifs de Reportei Connect",
    fallbackTitle: "Offre Connect",
    fallbackBody:
      "Des connexions incluses dans l'offre et un prix fixe par connexion supplémentaire, identique sur toutes les plateformes. Consultez les tarifs et simulez votre facture.",
    fallbackCta: "Voir les offres et tarifs",
  },
  faq: {
    title: "Questions fréquentes",
    productGroup: "À propos de Connect",
    pricingGroup: "Tarifs et connexions",
    termsBefore: "Consultez les conditions complètes dans les",
    termsLink: "conditions d'utilisation de Reportei Connect",
    product: [
      {
        q: () => "Que peut-on faire avec Reportei Connect ?",
        a: (n): Rich[] => [
          [
            `Connecter les comptes de vos clients sur ${n} plateformes marketing, CRM et e-commerce et interroger leurs métriques via une seule API.`,
          ],
          [
            "Vous pouvez aussi publier sur l'Instagram et le Facebook de vos clients et, sur Meta Ads, créer et gérer des campagnes, des ensembles de publicités et des annonces, toujours avec les mêmes comptes connectés.",
          ],
        ],
      },
      {
        q: () => "Dois-je créer et faire valider une app sur chaque plateforme ?",
        a: (): Rich[] => [
          [
            "Non. Les intégrations de Connect ont déjà passé les examens des plateformes. Votre client autorise l'accès aux comptes et vous interrogez les données via l'API, sans enregistrer votre propre app sur chaque réseau.",
          ],
        ],
      },
      {
        q: () => "Mes clients doivent-ils avoir un compte Reportei ?",
        a: (): Rich[] => [
          [
            "Non. Votre système génère un lien de connexion et le client autorise les comptes sur un écran Connect prêt à l'emploi. Ensuite, il continue à utiliser uniquement votre produit.",
          ],
        ],
      },
      {
        q: () => "Quelles données puis-je interroger ?",
        a: (): Rich[] => [
          [
            "Les métriques prises en charge sur chaque plateforme, dans la limite des autorisations du compte connecté. Le catalogue de métriques de chaque intégration se trouve dans l'API et dans le Connect Explorer, où vous testez la requête avant d'écrire du code.",
          ],
        ],
      },
      {
        q: () => "Comment les tokens de mes clients sont-ils stockés ?",
        a: (): Rich[] => [
          [
            "Votre système ne manipule pas les tokens des plateformes. Ils sont stockés chiffrés dans Connect, qui renouvelle chacun avant son expiration et ne l'utilise que pour récupérer les données que vous avez demandées.",
          ],
        ],
      },
      {
        q: () => "Et si la connexion d'un client perd l'accès ?",
        a: (): Rich[] => [
          [
            "Connect vérifie régulièrement les connexions. Quand l'une d'elles change de statut ou est supprimée, votre système reçoit un webhook et peut demander au client de reconnecter le compte.",
          ],
        ],
      },
      {
        q: () => "Puis-je l'implémenter avec un agent IA ?",
        a: (): Rich[] => [
          [
            "Oui. Le prompt de la section ",
            { link: "ia", text: "Implémentez avec l'IA" },
            " guide Claude Code, Cursor ou Codex pour ouvrir votre inscription, lire la spécification OpenAPI et implémenter l'intégration dans le backend de votre projet.",
          ],
        ],
      },
    ],
    pricing: [
      {
        q: () => "Quelle est la différence entre un client et une connexion ?",
        a: (): Rich[] => [
          [
            "Un client final de votre produit peut avoir plusieurs connexions. Chaque connexion correspond à un compte de ce client sur une plateforme. S'il connecte un compte Instagram et un compte Google Ads, cela fait deux connexions.",
          ],
        ],
      },
      {
        q: (n) => `Les ${n} intégrations sont-elles incluses dans l'offre ?`,
        a: (): Rich[] => [
          [
            "Oui. Elles sont toutes disponibles dans la même offre, au même prix par connexion. L'accès dépend des autorisations du compte connecté et se limite aux données et métriques prises en charge par Connect.",
          ],
        ],
      },
      {
        q: () => "Comment sont comptés plusieurs comptes d'une même plateforme ?",
        a: (): Rich[] => [
          [
            "Chaque compte connecté compte comme une connexion, même s'il appartient au même client. Par exemple, trois comptes Google Ads représentent trois connexions.",
          ],
        ],
      },
      {
        q: () => "Comment le montant facturé est-il calculé ?",
        a: (): Rich[] => [
          [
            "La quantité facturée est la moyenne quotidienne des connexions actives sur le cycle, arrondie à l'unité supérieure. Les connexions au-delà de celles incluses dans l'offre sont facturées au prix supplémentaire de la grille tarifaire.",
          ],
          [
            "Si l'offre inclut 10 connexions et que la moyenne arrondie du cycle est de 14, vous payez l'offre plus 4 connexions supplémentaires.",
          ],
        ],
      },
      {
        q: () => "Si je supprime un compte, le montant baisse-t-il ?",
        a: (): Rich[] => [
          [
            "Supprimer un compte réduit le nombre de connexions actives. L'effet sur la facture dépend du nombre de jours où il a été actif dans le cycle et de la moyenne quotidienne finale, arrondie à l'unité supérieure. Le prix de base de l'offre inclut toujours les connexions de l'offre.",
          ],
        ],
      },
      {
        q: () => "Puis-je essayer sans carte bancaire ?",
        a: (): Rich[] => [["Oui. Vous pouvez essayer Reportei Connect pendant 15 jours sans enregistrer de carte bancaire."]],
      },
      {
        q: () => "Puis-je résilier à tout moment ?",
        a: (): Rich[] => [
          [
            "Oui. La résiliation peut être demandée à tout moment et prend effet à la fin du cycle de facturation en cours.",
          ],
        ],
      },
    ],
  },
  cta: {
    title: "Voyez Connect appliqué à votre produit.",
    copy: "Essayez-le pendant 15 jours sans carte, ou présentez votre cas à notre équipe.",
    signup: "Commencer l'essai gratuit",
    demo: "Réserver une démo",
  },
  integrationsPage: {
    eyebrow: "Intégrations",
    title: (n) => `${n} plateformes dans une API pour votre produit`,
    copy: "Vos clients connectent leurs comptes de médias payants, réseaux sociaux, CRM et e-commerce. Votre système interroge les métriques de tous ces comptes via la même API, dans le même format.",
    popular: "API les plus demandées",
    apiOf: (platform) => `API ${platform}`,
    catalog: "Catalogue complet",
    comparisons: "Comparatifs",
    versus: (competitor) => `Connect ou ${competitor}`,
  },
}
