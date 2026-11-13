import type { Messages, Rich } from "@/lib/messages/pt"

export const es: Messages = {
  meta: {
    homeTitle: "API de datos de marketing para SaaS | Reportei Connect",
    homeDescription: (n) =>
      `API para que tu software consulte Instagram, Meta Ads, Google Ads, RD Station y ${n - 4} plataformas más de marketing, CRM y e-commerce de tus clientes.`,
    softwareDescription: (n) =>
      `API para llevar a tu producto las métricas de ${n} plataformas de marketing, CRM y e-commerce de tus clientes.`,
    integrationsTitle: (n) => `Integraciones de Reportei Connect: ${n} plataformas en una API`,
    integrationsDescription: (n) =>
      `Meta Ads, Google Ads, Instagram, HubSpot, Shopify, WhatsApp, Slack y más: las ${n} plataformas a las que tu producto accede con una única API.`,
    ogImageAlt: (n) => `Reportei Connect: ${n} integraciones en una API`,
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
    tagline: (n, toolkits) =>
      `Métricas de ${n} plataformas de marketing, CRM y e-commerce y acciones en ${toolkits} apps más, en una API para tu sistema.`,
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
    title: (total) => `Integra ${total} plataformas a tu sistema con una única API.`,
    copy: (n, toolkits) =>
      `Consulta métricas de ${n} plataformas de marketing, CRM y e-commerce, como Meta Ads, Google Ads y RD Station, y ejecuta acciones en ${toolkits} apps más de tus clientes, como WhatsApp, Slack y ClickUp.`,
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
          "Las integraciones nativas estándar usan apps mantenidas por Connect que ya pasaron las revisiones de las plataformas. Los toolkits con OAuth requieren registrar la app de tu producto.",
      },
      {
        problem: "Un flujo de OAuth por red",
        solution:
          "Generas un enlace y tu cliente autoriza las cuentas en una pantalla alojada por Connect. Para los toolkits con OAuth, primero registras las credenciales de la app de tu producto.",
      },
      {
        problem: "Tokens que caducan",
        solution:
          "Connect gestiona la renovación en las integraciones que la admiten. Las cuentas conectadas con tu propia app de Meta deben reconectarse cuando el token deja de ser válido.",
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
          "Versiones nuevas, campos obsoletos y límites de solicitudes quedan a cargo del equipo de Reportei, que mantiene integraciones de marketing desde hace más de 10 años.",
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
    copy: "Medios pagados, redes sociales, CRM y e-commerce para consultar métricas, y toolkits para ejecutar acciones en apps como WhatsApp, Slack y ClickUp. Encuentra las plataformas que necesitas y úsalas todas con la API de Reportei Connect.",
    searchLabel: "Buscar integración",
    searchPlaceholder: "Ej.: Google Ads, HubSpot o Shopify",
    filterLabel: "Filtrar integraciones por categoría",
    all: "Todas ({n})",
    found: { one: "1 integración encontrada", other: "{n} integraciones encontradas" },
    note: "Una integración es una plataforma disponible en el catálogo. Una conexión es una cuenta de esa plataforma vinculada a Connect, y es la unidad que se usa para facturar.",
    seePlan: "Mira cómo funciona el plan.",
    details: "Detalles de cada integración.",
    toolkitBadge: "Toolkit",
    toolkitHint: "Ejecuta acciones, sin métricas",
  },
  categories: {
    "Mídia paga": "Medios pagados",
    "Redes sociais": "Redes sociales",
    "Analytics e SEO": "Analítica y SEO",
    "Marketing e CRM": "Marketing y CRM",
    Atendimento: "Atención y comunicación",
    "E-commerce e vendas": "E-commerce y ventas",
    Financeiro: "Finanzas",
    Produtividade: "Productividad",
    "Ferramentas de dev": "Herramientas para desarrolladores",
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
        a: (n, toolkits): Rich[] => [
          [
            `Conectar las cuentas de tus clientes en ${n} plataformas de marketing, CRM y e-commerce y consultar sus métricas con una única API.`,
          ],
          [
            "También puedes publicar en Instagram, Facebook, Threads, LinkedIn, Pinterest y YouTube Shorts de tus clientes y crear y gestionar campañas, conjuntos y anuncios de Meta Ads, Google Ads y TikTok Ads, según los permisos de las cuentas conectadas.",
          ],
          [
            `Con los toolkits, tu producto ejecuta acciones en ${toolkits} apps más de tus clientes, como enviar mensajes por WhatsApp, crear tareas en ClickUp o avisar a un canal de Slack. Los toolkits no traen métricas.`,
          ],
        ],
      },
      {
        q: () => "¿Necesito crear y aprobar una app en cada plataforma?",
        a: (): Rich[] => [
          [
            "Las integraciones nativas estándar usan apps mantenidas por Connect, sin que tengas que registrar una app propia en cada red. Los toolkits con OAuth requieren registrar las credenciales de la app de tu producto en Connect y cumplir los requisitos de la plataforma. Tu cliente siempre debe autorizar el acceso. Otros modos de conexión usan las credenciales que exige la app.",
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
            "Connect guarda las credenciales cifradas y las usa para consultas y acciones autorizadas. La renovación depende del modo de conexión y del soporte del proveedor. Si usas tu propia app de Meta, Connect no verifica ni renueva los tokens emitidos por esa app; si dejan de ser válidos, debes reconectar la cuenta.",
          ],
        ],
      },
      {
        q: () => "¿Y si la conexión de un cliente pierde el acceso?",
        a: (): Rich[] => [
          [
            "En las integraciones nativas gestionadas, Connect verifica las conexiones periódicamente y avisa por webhook cuando cambian de estado o se eliminan. Tu sistema también debe gestionar los errores de autorización de las llamadas y pedir la reconexión cuando sea necesario. Los tokens de tu propia app de Meta no se verifican automáticamente.",
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
    copy: (n, toolkits) =>
      `Tus clientes conectan sus cuentas de medios pagados, redes sociales, CRM y e-commerce. Tu sistema consulta las métricas de esas ${n} plataformas con la misma API, en el mismo formato, y ejecuta acciones en ${toolkits} apps más con los toolkits.`,
    popular: "APIs más buscadas",
    apiOf: (platform) => `API de ${platform}`,
    catalog: "Catálogo completo",
    comparisons: "Comparativas",
    versus: (competitor) => `Connect o ${competitor}`,
  },
  toolkits: {
    breadcrumb: "Toolkits",
    breadcrumbLabel: "Ruta de navegación",
    home: {
      eyebrow: "Toolkits",
      title: (n) => `Más allá de los datos: ${n} apps que tu producto opera`,
      copy: (tools) =>
        `Envía mensajes por WhatsApp, crea tareas en Jira, agenda en Google Calendar. Son ${tools} tools que tu producto y tus agentes de IA ejecutan en la cuenta de tu cliente, con la misma API.`,
      cta: (n) => `Ver los ${n} toolkits`,
    },
    hub: {
      metaTitle: (n, tools) => `Toolkits de Reportei Connect: ${n} apps y ${tools} tools en una API`,
      metaDescription: (n, tools) =>
        `WhatsApp, Notion, Jira, Stripe y ${n - 4} apps más: ${tools} tools que tu producto y tus agentes de IA ejecutan en las cuentas de tus clientes.`,
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
      metaTitle: (name) => `API de ${name} para SaaS y agentes de IA`,
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
          body: "Un POST a /api/tools/{tool}/execute con el id de la conexión y los argumentos. Si la llamada tiene éxito, Connect conserva el status y el cuerpo de la respuesta de la app.",
        },
        {
          title: "Connect se encarga del resto",
          body: "Guarda la credencial cifrada, renueva tokens en conexiones OAuth que admiten renovación y registra las ejecuciones en un historial de auditoría disponible por API.",
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
      metaTitle: (name, n) => `${name}: las ${n} tools de la API`,
      metaDescription: (name, n, examples) =>
        `Las ${n} tools del toolkit de ${name} en Reportei Connect: ${examples} y más. Cada una con sus parámetros y un ejemplo de llamada.`,
      h1: (name) => `Tools de ${name}`,
      copy: (name, n) =>
        `Las ${n} operaciones de ${name} que tu producto ejecuta en la cuenta de tu cliente con Connect. Todas usan el mismo endpoint, POST /api/tools/{tool}/execute.`,
    },
    tool: {
      metaTitle: (tool, name) => `API de ${name}: ${tool}`,
      metaSuffix: (name) => `Ejecútala en la cuenta de ${name} de tu cliente con Reportei Connect.`,
      h1: (tool, name) => `${tool} en ${name}, con una API`,
      requestTitle: "La llamada",
      requestCopy:
        "Tu sistema envía el id de la conexión de tu cliente y los argumentos de la tool. Los headers son los mismos de toda la API de Connect: el token de tu producto y el token de tu cliente.",
      responseTitle: "La respuesta",
      responseCopy:
        "Si la llamada tiene éxito, Connect conserva el status y el cuerpo de la respuesta de la app. Los errores HTTP devueltos por la app usan el objeto {error, api_error}; la autenticación o validación pueden fallar antes de la ejecución. El header X-Toolkit-Execution-Id identifica la ejecución registrada, disponible en GET /api/tools/executions/{uuid}.",
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
  features: {
    home: {
      eyebrow: "Funcionalidades",
      title: "Más allá de leer datos: publica, anuncia y llama a LLMs con la misma API",
      copy: "Usa las cuentas conectadas de tus clientes para publicar posts, gestionar Meta Ads, Google Ads y TikTok Ads y consultar métricas. Para llamar a modelos de IA, registra tu propia clave del proveedor. Cada acción tiene una página con un ejemplo de llamada.",
      cards: {
        posts: "Publica en Instagram, Facebook, Threads, LinkedIn, Pinterest y YouTube Shorts.",
        ads: "Crea, impulsa y gestiona anuncios en el Meta Ads, el Google Ads y el TikTok Ads de tus clientes.",
        metrics: (n) => `Números, gráficos y tablas de ${n} plataformas en el mismo formato.`,
        llm: "OpenAI, Anthropic y Meta en el formato de OpenAI, con tu clave.",
      },
      seeAll: (area) => `Todo de ${area}`,
    },
    nav: "Funcionalidades",
    breadcrumbLabel: "Ruta de navegación",
    areas: {
      posts: {
        name: "Posts",
        metaTitle: "API de publicación en redes sociales para SaaS",
        metaDescription: "Publica carruseles, reels, stories, pins y Shorts en las cuentas de tus clientes en Instagram, Facebook, Threads, LinkedIn, Pinterest y YouTube con una API.",
        h1: "Publica en las redes de tus clientes con una API",
        intro: "Tu cliente conecta las cuentas una sola vez. Tu producto publica en Instagram, Facebook, Threads, LinkedIn, Pinterest y YouTube Shorts por el mismo endpoint, y sigue cada publicación hasta el final.",
      },
      ads: {
        name: "Ads",
        metaTitle: "API de Meta Ads, Google Ads y TikTok Ads para crear y gestionar anuncios",
        metaDescription: "Crea campañas, conjuntos y anuncios en el Meta Ads, el Google Ads y el TikTok Ads de tus clientes, impulsa posts, segmenta públicos y edita presupuestos con una API.",
        h1: "Crea y gestiona anuncios en el Meta Ads, el Google Ads y el TikTok Ads de tus clientes con una API",
        intro: "Todo se crea pausado, cada escritura es idempotente y un fallo a mitad de camino deshace lo que ya se había creado. Tu producto opera la cuenta publicitaria del cliente sin pasar por la revisión de apps de Meta.",
      },
      metrics: {
        name: "Metrics",
        metaTitle: "API de métricas de marketing para tu SaaS",
        metaDescription: (n) => `Métricas de ${n} plataformas de marketing, CRM y e-commerce de tus clientes con una API: números, gráficos, tablas y comparación de períodos.`,
        h1: "Las métricas de marketing de tus clientes con una API",
        intro: "Tu cliente conecta las cuentas y tu producto consulta números, gráficos y tablas en el mismo formato, de cualquier plataforma del catálogo, al instante o por webhook.",
      },
      llm: {
        name: "LLM",
        metaTitle: "API de LLM en el formato de OpenAI con tu clave",
        metaDescription: "Llama a modelos de OpenAI, Anthropic y Meta en el formato de la API de OpenAI, con tu clave de cada proveedor, streaming, fallback y tools.",
        h1: "OpenAI, Anthropic y Meta en una sola API, con tu clave",
        intro: "Un endpoint en el formato de chat completions de OpenAI para los modelos de los tres proveedores. Cada llamada usa la clave que registraste en cada proveedor, y cambiar de modelo es cambiar un texto.",
      },
    },
    hub: {
      capabilities: "Qué puedes hacer",
      integrations: "Métricas por plataforma",
      integrationsCopy: "El catálogo de cada plataforma, con lo que puedes consultar y el identificador de cada métrica.",
      models: "Modelos disponibles",
      otherAreas: "Otras funcionalidades",
      sampleCaption: (title) => `Ejemplo: ${title}.`,
      sampleLink: "Ver la página",
    },
    capability: {
      h1: (title) => `${title} con la API`,
      metaTitle: (title) => `${title} con la API`,
      can: "Qué puedes hacer",
      rules: "Reglas y límites",
      request: "La llamada",
      fields: "Campos principales",
      columns: { name: "Campo", type: "Tipo", required: "Obligatorio", description: "Descripción" },
      yes: "Sí",
      no: "No",
      worksWith: "Funciona con",
      useCases: "Para quién",
      faq: "Preguntas frecuentes",
      related: "Relacionadas",
      seeAll: (area) => `Ver todo lo que puedes hacer con ${area}`,
      signup: "Empezar prueba gratis",
      docs: "Ver documentación",
    },
    metricsIntegration: {
      metaTitle: (name) => `API de métricas de ${name}`,
      metaDescription: (name, n, examples) => `${n} métricas de ${name} de tus clientes con una API: ${examples} y más. Números, gráficos y tablas en el mismo formato.`,
      h1: (name) => `Métricas de ${name} con la API`,
      intro: (name, n) => `Tu cliente conecta su cuenta de ${name} y tu producto consulta ${n} métricas por el mismo endpoint que las demás plataformas. Cada métrica tiene un identificador (reference_key) que va en la llamada.`,
      groups: { number_v1: "Números", chart_v1: "Gráficos", datatable_v1: "Tablas", datagrid_v1: "Tablas" },
      count: (n) => (n === 1 ? "1 métrica" : `${n} métricas`),
      sampleCaption: (title) => `Ejemplo: la métrica "${title}" de una cuenta conectada.`,
      comparisonCaption: (title) => `Ejemplo: "${title}" en octubre, comparado con septiembre.`,
      examplesTitle: (name) => `Más ejemplos de llamadas a ${name}`,
      examplesCopy: "El mismo endpoint para cada tipo de métrica. Los campos metrics y dimensions de cada ítem vienen del catálogo de la plataforma (GET /api/metrics/{integration_slug}).",
      exampleKinds: { chart_v1: "Gráfico", datatable_v1: "Tabla", number_v1: "Número" },
      others: "Métricas de otras plataformas",
    },
    llmModel: {
      metaTitle: (name) => `API de ${name} con tu clave`,
      metaDescription: (name, provider) => `Llama a ${name}, de ${provider}, en el formato de la API de OpenAI con Reportei Connect, con tu propia clave, streaming y fallback a otros modelos.`,
      h1: (name) => `${name} con la API, con tu clave`,
      intro: (name, provider) => `${name} es un modelo de ${provider}. Con Connect lo llamas en el formato de chat completions de OpenAI, con la clave que registraste en ${provider}, y cambias a otro modelo modificando solo el campo model.`,
      specs: { provider: "Proveedor", context: "Ventana de contexto", output: "Salida máxima", tools: "Tools (function calling)", vision: "Imágenes de entrada", tokens: (n) => `${n} tokens` },
      sampleCaption: "La llamada en el formato de OpenAI. La clave del proveedor es tuya, registrada una vez en Connect.",
      others: "Otros modelos",
    },
  },
}
