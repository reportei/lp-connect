import type { Messages, Rich } from "@/lib/messages/pt"

export const es: Messages = {
  meta: {
    homeTitle: "API de datos de marketing para SaaS | Reportei Connect",
    homeDescription: (n) =>
      `API para que tu software consulte Instagram, Meta Ads, Google Ads, RD Station y ${n - 4} plataformas más de marketing, CRM y e-commerce de tus clientes.`,
    softwareDescription: (n) =>
      `API para llevar a tu producto las métricas de ${n} plataformas de marketing, CRM y e-commerce de tus clientes.`,
    integrationsTitle: (n) => `Integraciones de Reportei Connect: ${n} APIs de marketing, CRM y e-commerce`,
    integrationsDescription: (n) =>
      `Meta Ads, Google Ads, Instagram, TikTok, HubSpot, Shopify y más: las ${n} plataformas a las que tu producto accede con una única API.`,
    ogImageAlt: "Reportei Connect: datos de 50 plataformas en una API",
  },
  language: {
    label: "Idioma",
  },
  header: {
    nav: {
      practice: "En la práctica",
      integrations: "Integraciones",
      clients: "Clientes",
      ai: "Con IA",
      pricing: "Precios",
      docs: "Documentación",
    },
    login: "Iniciar sesión",
    signup: "Empezar prueba gratis",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
  },
  footer: {
    tagline: (n) => `${n} integraciones de marketing, CRM y e-commerce en una API para tu sistema.`,
    product: "Producto",
    company: "Empresa",
    apis: "APIs",
    developers: "Desarrolladores",
    whatIs: "Qué es",
    practice: "En la práctica",
    integrations: "Integraciones",
    pricing: "Planes y precios",
    faq: "Preguntas frecuentes",
    about: "Sobre Reportei",
    stories: "Casos de clientes",
    comparisons: "Comparativas",
    contact: "Contacto",
    allIntegrations: "Todas las integraciones",
    toolkits: "Toolkits",
    guides: "Guías de APIs",
    docs: "Documentación",
    ai: "Implementar con IA",
    signup: "Empezar prueba gratis",
    copyright: (year) => `© ${year} Reportei Connect. Un producto de Reportei.`,
    terms: "Términos de servicio",
  },
  hero: {
    title: "API de datos de marketing para tu producto.",
    copy: (n) =>
      `Conecta las cuentas de tus clientes en ${n} plataformas de marketing, CRM y e-commerce, como Instagram, Meta Ads, Google Ads y RD Station. Accede a las métricas con una única API y crea tus propios análisis, informes y dashboards.`,
    signup: "Empezar prueba gratis",
    demo: "Agendar una demo",
    trial: "15 días de prueba. Sin tarjeta de crédito.",
    buildWith: "Impleméntalo con",
    seePrompt: "Ver el prompt",
  },
  productShots: {
    heading: "Connect por dentro",
    tabsLabel: "Pantallas de Connect",
    enlarge: "Ampliar la captura de {label} en una pestaña nueva",
    metrics: {
      label: "Métricas",
      alt: "Interfaz real del Explorer: métrica de alcance de Meta Ads seleccionada, con el payload enviado y la respuesta de la API.",
      caption: "Elige las métricas, mira la respuesta real de la API y copia el código en cURL, Node.js, Python o PHP.",
    },
    posts: {
      label: "Posts",
      alt: "Panel de posts de Connect: publicaciones de un cliente en Instagram con tipo, estado y fecha de publicación.",
      caption:
        "Sigue cada post publicado en las cuentas de tus clientes a través de la API, con tipo, estado y hora de publicación.",
    },
    ads: {
      label: "Ads",
      alt: "Panel de anuncios de Connect: campañas y conjuntos de Meta Ads de un cliente con objetivo, estado y presupuesto.",
      caption: "Mira las campañas, los conjuntos y los anuncios creados por la API, con el estado y el presupuesto de cada uno.",
    },
  },
  clients: {
    heading: "Empresas que ya usan Reportei Connect",
    newTab: (name) => `${name} (se abre en una pestaña nueva)`,
    caseLabel: (name) => `Caso ${name}`,
  },
  whatIs: {
    title: "¿Qué es Reportei Connect?",
    copy: (n) =>
      `Una API para llevar datos de ${n} integraciones a tu sistema. Conectas las cuentas de tus clientes y usas las métricas dentro de tu producto.`,
    about:
      "Creado por Reportei, con más de 10 años de experiencia en informes de marketing y más de 10 mil clientes activos.",
    pillars: [
      {
        title: "Conectar cuentas",
        body: "Usa el flujo de Connect para que tus clientes autoricen el acceso a las cuentas de las plataformas que utilizan.",
      },
      {
        title: "Recopilar datos",
        body: "Accede a datos de marketing, CRM y e-commerce mediante las integraciones que mantiene Reportei.",
      },
      {
        title: "Ofrecer métricas",
        body: "Consulta los datos que admite Connect con una API documentada, respetando los permisos de cada cuenta.",
      },
    ],
  },
  apiDemo: {
    eyebrow: "En la práctica",
    title: "Una llamada a la API, el resultado en la cuenta de tu cliente.",
    copy: "Mira lo que envías a Connect y lo que ocurre del otro lado, en cada parte de la API.",
    tabsLabel: "Partes de la API",
    footnote: "Valores ilustrativos. El contrato completo de cada endpoint está en la",
    footnoteLink: "documentación de la API",
    placeholders: {
      accountKey: "<clave de tu cuenta>",
      customerToken: "<token del cliente>",
      metaConnection: "<conexión de Meta Ads>",
    },
    metrics: {
      label: "Métricas",
      step: "Consultar",
      title: "Pide las métricas de una cuenta conectada",
      body: "Eliges la conexión, el período y las métricas. Connect las busca en la plataforma y devuelve los valores en el mismo formato para cualquier integración.",
      inProduct: "En tu producto",
      account: "Meta Ads de tu cliente · septiembre",
      reach: "Alcance total",
      reachHint: "personas vieron los anuncios al menos una vez",
    },
    ads: {
      label: "Anuncios",
      panel: "En la cuenta publicitaria de tu cliente",
      campaign: "Campaña",
      adset: "Conjunto",
      ad: "Anuncio",
      traffic: "Tráfico",
      placements: "Facebook e Instagram",
      offer: "Hasta 50% off",
      shopNow: "Comprar ahora",
      adName: "Black Friday, imagen",
      budget: "R$ {amount}/día",
      was: "R$ {amount}",
      inReview: "En revisión",
      active: "Activo",
      running: "En circulación",
      create: {
        step: "Crear",
        title: "Crea la campaña, el conjunto y el anuncio en una llamada",
        body: "Todo nace pausado y solo se activa en el último paso. Si algo falla a mitad de camino, nada queda en circulación con el dinero de tu cliente.",
      },
      adjust: {
        step: "Ajustar",
        title: "Cambia presupuesto y estado sin abrir el administrador",
        body: "Cada escritura queda registrada y puede repetirse con la misma Idempotency-Key sin duplicar nada.",
      },
      track: {
        step: "Seguir",
        title: "Entérate cuando la plataforma lo aprobó",
        body: "El estado efectivo viene directo de la plataforma, así que tu producto muestra si el anuncio está en revisión, en circulación o fue rechazado.",
      },
    },
    posts: {
      label: "Publicaciones",
      instagramPanel: "En el Instagram de tu cliente",
      facebookPanel: "En la página de tu cliente",
      brand: "Mi Marca",
      handle: "mi_marca",
      caption: "Colección de verano #verano",
      facebookCaption: "La colección de verano llega a las tiendas",
      firstComment: "¡Link en la bio!",
      now: "Ahora",
      nowPublic: "Ahora · Público",
      publishing: "Publicando…",
      like: "Me gusta",
      comment: "Comentar",
      share: "Compartir",
      statusPublishing: "Publicando",
      statusPublished: "Publicado",
      publish: {
        step: "Publicar",
        title: "Publica en el Instagram de tu cliente",
        body: "Envías el texto y el contenido multimedia. Connect sube el contenido con la cuenta que el cliente ya conectó y se encarga de la publicación.",
      },
      track: {
        step: "Seguir",
        title: "Entérate cuando el post salió al aire",
        body: "Consulta por el uuid o por tu propia referencia. La respuesta trae el estado de cada archivo y el enlace del post publicado.",
      },
      facebook: {
        step: "Facebook",
        title: "La misma llamada para la página de Facebook",
        body: "Cambia la integración y el mismo formato publica en la página del cliente. No aprendes una API nueva por cada red.",
      },
    },
  },
  howItWorks: {
    title: "Cómo funciona en la práctica",
    copy: "De las cuentas de tus clientes a las funcionalidades de tu sistema.",
    steps: [
      {
        title: "Conecta las cuentas",
        body: (n) => `Elige entre ${n} integraciones y pide a tu cliente que autorice las cuentas que se usarán.`,
      },
      {
        title: "Consulta la API",
        body: () => "Integra tu sistema con Connect y consulta las métricas disponibles en las cuentas conectadas.",
      },
      {
        title: "Úsalo en tu producto",
        body: () =>
          "Combina las métricas con tus datos internos y crea informes, dashboards y análisis para tus clientes.",
      },
    ],
    flowCaption: "Flujo de datos: cuentas conectadas en las plataformas, Reportei Connect y tu producto.",
    connected: "Cuentas conectadas",
    connectedHint: "Google Ads, Meta Ads, CRMs y e-commerce",
    product: "Tu producto",
    productHint: "Informes, dashboards y análisis",
  },
  problems: {
    eyebrow: "De lo que nos encargamos",
    title: "El trabajo que no tienes que hacer.",
    copy: "Integrar una plataforma es la parte fácil. Mantener la integración funcionando para cientos de cuentas es lo que consume al equipo.",
    items: [
      {
        problem: "Aprobación de la app en cada plataforma",
        solution:
          "Meta, Google, LinkedIn y TikTok revisan la app antes de liberar datos de terceros. Con Connect, usas integraciones que ya pasaron esas revisiones.",
      },
      {
        problem: "Un flujo de OAuth por red",
        solution:
          "Generas un enlace de conexión y tu cliente autoriza las cuentas en una pantalla lista, alojada por Connect. Tu código no implementa el OAuth de ninguna plataforma.",
      },
      {
        problem: "Tokens que caducan",
        solution:
          "Connect renueva los tokens antes de que caduquen y verifica periódicamente que cada conexión siga teniendo acceso.",
      },
      {
        problem: "Conexiones que se caen sin aviso",
        solution:
          "Cuando una conexión cambia de estado o se elimina, tu sistema recibe un webhook y puede avisar al cliente en el momento.",
      },
      {
        problem: "Cada API devuelve un formato",
        solution:
          "Las métricas de todas las plataformas llegan en el mismo formato, con el valor del período y el del período anterior.",
      },
      {
        problem: "APIs que cambian todo el tiempo",
        solution:
          "Versiones nuevas, campos obsoletos y límites de solicitudes quedan a cargo del equipo de Reportei, que mantiene estas integraciones desde hace más de 10 años.",
      },
    ],
  },
  caseStudy: {
    eyebrow: "Connect en la práctica · Leadster",
    title: "Los datos de medios en el dashboard de Leadster.",
    paragraphs: [
      "Leadster ya reunía datos de leads e interacciones de sus chatbots. Faltaba conectar esos resultados con la inversión en medios.",
      "Con Reportei Connect, empezó a cruzar sus datos internos con Google Ads, Meta Ads y LinkedIn Ads en su Super Dashboard.",
      "Costo por conversión, CPM y rendimiento por campaña, en una vista consolidada de los canales.",
    ],
    readCase: "Leer el caso completo (en portugués)",
    watch: "Ver la presentación",
  },
  carousel: {
    roledescription: "carrusel",
    label: "Pantallas del Super Dashboard de Leadster",
    previous: "Diapositiva anterior",
    next: "Diapositiva siguiente",
    slides: [
      "Super Dashboard de Leadster - personalización de eventos e inversión por conversión",
      "Campañas de Google Ads con métricas detalladas de inversión y conversión",
      "Vista consolidada por canal - Google Ads, LinkedIn Ads y Meta Ads",
      "Inversión por conversión con costo por lead y tasa de conversión",
      "Análisis completo de campañas con métricas de todos los canales",
    ],
  },
  networks: {
    title: "{n} integraciones para tu producto",
    copy: "Medios pagados, redes sociales, CRM y e-commerce. Encuentra las plataformas que necesitas y accede a sus datos con la API de Reportei Connect.",
    searchLabel: "Buscar integración",
    searchPlaceholder: "Ej.: Google Ads, HubSpot o Shopify",
    filterLabel: "Filtrar integraciones por categoría",
    all: "Todas ({n})",
    found: { one: "1 integración encontrada", other: "{n} integraciones encontradas" },
    note: "Una integración es una plataforma disponible en el catálogo. Una conexión es una cuenta de esa plataforma vinculada a Connect, y es la unidad que se usa para facturar.",
    seePlan: "Mira cómo funciona el plan.",
    details: "Detalles de cada integración.",
  },
  categories: {
    "Mídia paga": "Medios pagados",
    "Redes sociais": "Redes sociales",
    "Analytics e SEO": "Analítica y SEO",
    "Marketing e CRM": "Marketing y CRM",
    Atendimento: "Atención al cliente",
    "E-commerce e vendas": "E-commerce y ventas",
  },
  integrationNames: {
    "Perfil da Empresa no Google": "Perfil de Empresa de Google",
    "LinkedIn (páginas)": "LinkedIn (páginas)",
    "LinkedIn (perfis pessoais)": "LinkedIn (perfiles personales)",
  },
  ai: {
    eyebrow: "Impleméntalo con IA",
    title: "Tu agente de código hace la integración.",
    copy: "Copia el prompt y pégalo en Claude Code, Cursor o Codex. Guía al agente para abrir tu registro, leer la especificación de la API e implementar la integración en el backend de tu proyecto.",
    note: "Completas tus datos cuando el agente te lo pide y revisas la implementación antes de publicarla.",
    windowTitle: "tu-proyecto · agente de código",
    promptEcho: "> Necesito integrar Reportei Connect en este proyecto…",
    transcript: [
      "Leyendo app.connect.reportei.com/provision-trial.md",
      "Enlace de registro enviado. Esperando a que crees la cuenta",
      "Cuenta creada. Clave guardada en CONNECT_API_KEY en el .env",
      "Leyendo la especificación en /openapi.json",
      "Creando customers y el enlace de conexión en el backend",
      "Prueba rápida: métricas de una cuenta conectada",
    ],
    transcriptCaption:
      "Ejemplo de lo que hace el agente al seguir el prompt: lee las instrucciones, espera el registro, guarda la clave en el .env, lee la especificación e implementa la integración.",
    resources: {
      docs: {
        title: "Documentación de la API",
        body: "Endpoints, autenticación, errores y ejemplos de cada recurso.",
        cta: "Ver documentación",
      },
      openapi: {
        title: "Especificación OpenAPI",
        body: "El contrato de la API en un archivo, para que tu agente lo lea antes de escribir código.",
        cta: "Abrir openapi.json",
      },
      explorer: {
        title: "Connect Explorer",
        body: "Conecta una cuenta, elige las métricas y copia el payload listo para tu código.",
        cta: "Probar en el Explorer",
      },
    },
  },
  delegate: {
    sentence:
      "Necesito integrar Reportei Connect en este proyecto. Lee las instrucciones en https://app.connect.reportei.com/provision-trial.md y sigue el paso a paso que se describe allí.",
    copy: "Copiar prompt",
    copied: "¡Copiado!",
    copiedStatus: "Prompt copiado",
  },
  pricing: {
    eyebrow: "Planes y precios",
    title: "Crece con tus clientes. Connect te acompaña.",
    copy: "Un plan con conexiones incluidas y precio fijo por conexión adicional, igual en cualquier plataforma del catálogo. Sin costo de implementación.",
    connectionTitle: "¿Qué cuenta como una conexión?",
    connectionBody:
      "Cada cuenta de una plataforma que tu cliente conecta a Connect cuenta como una conexión. Un mismo cliente puede tener varias conexiones.",
    exampleTitle: "Ejemplo: un cliente de tu software",
    example: ["1 perfil de Instagram", "1 cuenta de Google Ads", "1 cuenta de Meta Ads"],
    oneConnection: "1 conexión",
    exampleTotal: "1 cliente, 3 cuentas conectadas = 3 conexiones",
    footer:
      "Todas las integraciones están disponibles en el plan. La mensualidad varía según la cantidad de cuentas conectadas por tus clientes.",
    billingQuestions: "Dudas sobre la facturación",
    embedTitle: "Planes y precios de Reportei Connect",
    fallbackTitle: "Plan Connect",
    fallbackBody:
      "Conexiones incluidas en el plan y precio fijo por conexión adicional, igual en cualquier plataforma. Mira los precios y simula cuánto pagarías.",
    fallbackCta: "Ver planes y precios",
  },
  faq: {
    title: "Preguntas frecuentes",
    productGroup: "Sobre Connect",
    pricingGroup: "Precios y conexiones",
    termsBefore: "Consulta las condiciones completas en los",
    termsLink: "términos de servicio de Reportei Connect",
    product: [
      {
        q: () => "¿Qué puedo hacer con Reportei Connect?",
        a: (n): Rich[] => [
          [
            `Conectar las cuentas de tus clientes en ${n} plataformas de marketing, CRM y e-commerce y consultar sus métricas con una única API.`,
          ],
          [
            "También puedes publicar en el Instagram y el Facebook de tus clientes y, en Meta Ads, crear y gestionar campañas, conjuntos y anuncios, todo con las mismas cuentas conectadas.",
          ],
        ],
      },
      {
        q: () => "¿Necesito crear y aprobar una app en cada plataforma?",
        a: (): Rich[] => [
          [
            "No. Las integraciones de Connect ya pasaron las revisiones de las plataformas. Tu cliente autoriza el acceso a las cuentas y tú consultas los datos con la API, sin registrar una app propia en cada red.",
          ],
        ],
      },
      {
        q: () => "¿Mis clientes necesitan una cuenta en Reportei?",
        a: (): Rich[] => [
          [
            "No. Tu sistema genera un enlace de conexión y el cliente autoriza las cuentas en una pantalla lista de Connect. Después, sigue usando solo tu producto.",
          ],
        ],
      },
      {
        q: () => "¿Qué datos puedo consultar?",
        a: (): Rich[] => [
          [
            "Las métricas admitidas en cada plataforma, dentro de los permisos de la cuenta conectada. El catálogo de métricas de cada integración está en la API y en el Connect Explorer, donde pruebas la consulta antes de escribir código.",
          ],
        ],
      },
      {
        q: () => "¿Cómo se guardan los tokens de mis clientes?",
        a: (): Rich[] => [
          [
            "Tu sistema no maneja los tokens de las plataformas. Se guardan cifrados en Connect, que renueva cada uno antes de que caduque y lo usa solo para buscar los datos que pediste.",
          ],
        ],
      },
      {
        q: () => "¿Y si la conexión de un cliente pierde el acceso?",
        a: (): Rich[] => [
          [
            "Connect verifica las conexiones periódicamente. Cuando una cambia de estado o se elimina, tu sistema recibe un webhook y puede pedirle al cliente que vuelva a conectar la cuenta.",
          ],
        ],
      },
      {
        q: () => "¿Puedo implementarlo con un agente de IA?",
        a: (): Rich[] => [
          [
            "Sí. El prompt de la sección ",
            { link: "ia", text: "Impleméntalo con IA" },
            " guía a Claude Code, Cursor o Codex para abrir tu registro, leer la especificación OpenAPI e implementar la integración en el backend de tu proyecto.",
          ],
        ],
      },
    ],
    pricing: [
      {
        q: () => "¿Cuál es la diferencia entre cliente y conexión?",
        a: (): Rich[] => [
          [
            "Un cliente final de tu producto puede tener varias conexiones. Cada conexión corresponde a una cuenta de ese cliente en una plataforma. Si conecta una cuenta de Instagram y una de Google Ads, serán dos conexiones.",
          ],
        ],
      },
      {
        q: (n) => `¿Las ${n} integraciones están incluidas en el plan?`,
        a: (): Rich[] => [
          [
            "Sí. Todas están disponibles en el mismo plan y tienen el mismo precio por conexión. El acceso depende de los permisos de la cuenta conectada y se limita a los datos y las métricas que admite Connect.",
          ],
        ],
      },
      {
        q: () => "¿Cómo se cuentan varias cuentas de la misma plataforma?",
        a: (): Rich[] => [
          [
            "Cada cuenta conectada cuenta como una conexión, aunque pertenezca al mismo cliente. Por ejemplo, tres cuentas de Google Ads son tres conexiones.",
          ],
        ],
      },
      {
        q: () => "¿Cómo se calcula el importe de la factura?",
        a: (): Rich[] => [
          [
            "La cantidad facturada es el promedio diario de conexiones activas durante el ciclo, redondeado hacia arriba. Las conexiones por encima de las incluidas en el plan se cobran al precio adicional de la tabla de precios.",
          ],
          [
            "Si el plan incluye 10 conexiones y el promedio redondeado del ciclo es 14, pagas el plan y 4 conexiones adicionales.",
          ],
        ],
      },
      {
        q: () => "Si elimino una cuenta, ¿baja el importe?",
        a: (): Rich[] => [
          [
            "Eliminar una cuenta reduce el número de conexiones activas. El efecto en la factura depende de cuántos días estuvo activa en el ciclo y del promedio diario final, redondeado hacia arriba. El precio base del plan sigue incluyendo las conexiones del plan.",
          ],
        ],
      },
      {
        q: () => "¿Puedo probarlo sin tarjeta de crédito?",
        a: (): Rich[] => [["Sí. Puedes probar Reportei Connect durante 15 días sin registrar una tarjeta de crédito."]],
      },
      {
        q: () => "¿Puedo cancelar en cualquier momento?",
        a: (): Rich[] => [
          [
            "Sí. Puedes solicitar la cancelación en cualquier momento y se hace efectiva al final del ciclo de facturación en curso.",
          ],
        ],
      },
    ],
  },
  cta: {
    title: "Mira Connect aplicado a tu producto.",
    copy: "Pruébalo durante 15 días sin tarjeta, o cuéntale tu caso a nuestro equipo.",
    signup: "Empezar prueba gratis",
    demo: "Agendar una demo",
  },
  integrationsPage: {
    eyebrow: "Integraciones",
    title: (n) => `${n} plataformas en una API para tu producto`,
    copy: "Tus clientes conectan sus cuentas de medios pagados, redes sociales, CRM y e-commerce. Tu sistema consulta las métricas de todas ellas con la misma API, en el mismo formato.",
    popular: "APIs más buscadas",
    apiOf: (platform) => `API de ${platform}`,
    catalog: "Catálogo completo",
    comparisons: "Comparativas",
    versus: (competitor) => `Connect o ${competitor}`,
  },
  toolkits: {
    breadcrumb: "Toolkits",
    hub: {
      metaTitle: (n, tools) => `Toolkits de Reportei Connect: ${n} apps y ${tools} tools en una API`,
      metaDescription: (n, tools) =>
        `WhatsApp, Notion, Jira, Stripe, Google Calendar y ${n - 5} apps más: ${tools} tools que tu producto y tus agentes de IA ejecutan en las cuentas de tus clientes con una API.`,
      eyebrow: "Toolkits",
      h1: (n) => `${n} apps que tu producto y tus agentes de IA operan con una API`,
      copy: "Tu cliente conecta la cuenta de la app una sola vez. Tu sistema envía mensajes, crea tareas, lee contactos y agenda reuniones llamando a las tools por el mismo endpoint, sin implementar la API de cada app.",
      toolCount: (n) => (n === 1 ? "1 tool" : `${n} tools`),
      stats: (n, tools) => `${n} toolkits · ${tools} tools`,
    },
    categories: {
      communication: "Comunicación",
      crm: "CRM y ventas",
      marketing: "Marketing",
      email_marketing: "Email marketing",
      ecommerce: "E-commerce",
      finance: "Finanzas y pagos",
      support: "Atención al cliente",
      project_management: "Gestión de proyectos",
      productivity: "Productividad",
      scheduling: "Agendamiento",
      analytics: "Analítica",
      file_storage: "Archivos",
      developer_tools: "Herramientas para desarrolladores",
    },
    auth: {
      api_key: {
        label: "Clave de API",
        body: "Tu cliente pega la clave de la app en una pantalla de Connect, o tu sistema envía la clave con POST /api/customer-toolkits, sin pantalla.",
      },
      basic: {
        label: "Usuario y contraseña",
        body: "Tu cliente ingresa las credenciales de la app en una pantalla de Connect, o tu sistema las envía con POST /api/customer-toolkits, sin pantalla.",
      },
      oauth2: {
        label: "OAuth con la app de tu producto",
        body: (slug) =>
          `Registras la app OAuth de tu producto una sola vez, con POST /api/merchants/credentials/${slug}, y tu cliente autoriza la cuenta en una pantalla de consentimiento. Connect renueva el token cuando está por vencer.`,
      },
    },
    hostParams: (params) => `Al conectar, tu cliente también indica ${params}: la dirección de su cuenta en la API de la app.`,
    toolkit: {
      metaTitle: (name) => `API de ${name} para SaaS y agentes de IA | Reportei Connect`,
      h1: (name) => `${name} en tu producto y en tus agentes de IA, con una API`,
      signup: "Empezar prueba gratis",
      docs: "Ver documentación",
      trial: "15 días de prueba. Sin tarjeta de crédito.",
      sampleCaption: (tool) => `Ejemplo: la tool "${tool}" en una cuenta conectada por tu cliente.`,
      howEyebrow: "Cómo funciona",
      howTitle: (name) => `Del cliente conectado a la primera llamada a ${name}.`,
      steps: (name) => [
        {
          title: "Tu cliente conecta la cuenta",
          body: `Tu sistema abre una sesión de Connect para el toolkit y tu cliente conecta su cuenta de ${name}. Recibes el id de la conexión.`,
        },
        {
          title: "Tu producto llama a la tool",
          body: "Un POST a /api/tools/{tool}/execute con el id de la conexión y los argumentos. La respuesta es la de la propia app, con el mismo status y cuerpo.",
        },
        {
          title: "Connect se encarga del resto",
          body: "Guarda la credencial cifrada, renueva los tokens OAuth y registra cada ejecución en un historial de auditoría que consultas por la API.",
        },
      ],
      useCasesEyebrow: "Casos de uso",
      useCasesTitle: (name) => `Qué hace tu producto con ${name}.`,
      connectEyebrow: "Conexión",
      connectTitle: "Cómo tu cliente conecta la cuenta",
      toolsEyebrow: "Tools",
      toolsTitle: (name, n) => `${n} tools de ${name}`,
      seeAllTools: (n) => `Ver las ${n} tools`,
      faqTitle: (name) => `Preguntas sobre el toolkit de ${name}`,
      faq: (name, tools, modes) => [
        {
          q: `¿Necesito implementar la API de ${name}?`,
          a: `No. Connect ya trae ${tools} tools de ${name} descritas y listas. Tu cliente conecta la cuenta y tu sistema llama a cada tool por el mismo endpoint, con el mismo formato de solicitud.`,
        },
        {
          q: `¿Cómo conecta mi cliente su cuenta de ${name}?`,
          a: `Con el modo que acepta el toolkit: ${modes}. Connect guarda la credencial cifrada y nunca la devuelve a tu sistema.`,
        },
        {
          q: "¿Funciona con agentes de IA?",
          a: "Sí. El input de cada tool está descrito en JSON Schema, que tu agente usa directamente como definición de tool. El agente elige la tool y los argumentos, y tu sistema hace la llamada a Connect.",
        },
        {
          q: "¿Mi cliente necesita una cuenta en Reportei?",
          a: "No. Tu cliente conecta la cuenta en una pantalla de Connect, o tu sistema envía la credencial por la API, y sigue usando solo tu producto.",
        },
      ],
      relatedTitle: "Toolkits de la misma categoría",
      allToolkits: (n) => `Ver los ${n} toolkits`,
      officialDocs: (name) => `Documentación oficial de ${name}`,
    },
    toolsPage: {
      metaTitle: (name, n) => `${name}: las ${n} tools de la API | Reportei Connect`,
      metaDescription: (name, n, examples) =>
        `Las ${n} tools del toolkit de ${name} en Reportei Connect: ${examples} y más. Cada una con sus parámetros y un ejemplo de llamada.`,
      h1: (name) => `Tools de ${name}`,
      copy: (name, n) =>
        `Las ${n} operaciones de ${name} que tu producto ejecuta en la cuenta de tu cliente con Connect. Todas usan el mismo endpoint, POST /api/tools/{tool}/execute.`,
    },
    tool: {
      metaTitle: (tool, name) => `${name}: ${tool} por API | Reportei Connect`,
      h1: (tool, name) => `${tool} en ${name}, con una API`,
      requestTitle: "La llamada",
      requestCopy:
        "Tu sistema envía el id de la conexión de tu cliente y los argumentos de la tool. Los headers son los mismos de toda la API de Connect: el token de tu producto y el token de tu cliente.",
      responseTitle: "La respuesta",
      responseCopy:
        "Connect devuelve el status y el cuerpo de la respuesta de la app tal como llegaron, con el header X-Toolkit-Execution-Id. Cada ejecución queda registrada y se consulta con GET /api/tools/executions/{uuid}.",
      paramsTitle: "Parámetros",
      paramsNote: "Las descripciones de los parámetros siguen la documentación oficial de la app, en inglés.",
      columns: { name: "Parámetro", type: "Tipo", required: "Obligatorio", description: "Descripción" },
      yes: "Sí",
      no: "No",
      values: "Valores:",
      noParams: "Esta tool no recibe argumentos.",
      connectionsTitle: "Conexiones posibles",
      connectionsCopy: (name) =>
        `Tu cliente conecta su cuenta de ${name} una sola vez, con uno de los modos de abajo. La misma conexión sirve para todas las tools del toolkit.`,
      aiTitle: "Lista para agentes de IA",
      aiCopy: (slug) =>
        `El input de esta tool es un JSON Schema, disponible en GET /api/tools/${slug}. Se convierte en la definición de tool de tu agente sin conversión.`,
      identifier: "Identificador",
      otherTools: (name) => `Otras tools de ${name}`,
    },
  },
}
