import { Buffer } from "node:buffer"
import type { Locale } from "@/lib/i18n"

// Editorial examples, separate from the generated catalog. No request is executed here.
// Contract: https://connect.reportei.com/openapi.json, checked 2026-11-11.
// Provider references and offline checks are listed in scripts/check-toolkit-examples.mjs.
export const GMAIL_MIME_LINES = [
  "From: sender@example.com",
  "To: recipient@example.com",
  "Subject: Connect example",
  "MIME-Version: 1.0",
  'Content-Type: multipart/alternative; boundary="connect-example"',
  "",
  "--connect-example",
  'Content-Type: text/plain; charset="UTF-8"',
  "Content-Transfer-Encoding: 8bit",
  "",
  "Hello! This is an example message.",
  "",
  "--connect-example",
  'Content-Type: text/html; charset="UTF-8"',
  "Content-Transfer-Encoding: 8bit",
  "",
  '<p style="margin:0 0 12px 0;font-family:Arial,sans-serif;font-size:14px;line-height:1.4;">Hello! This is an example message.</p>',
  "--connect-example--",
  "",
]

const gmailRaw = Buffer.from(GMAIL_MIME_LINES.join("\r\n"), "utf8").toString("base64url")

const ARGUMENTS: Record<string, Record<string, unknown>> = {
  whatsapp_send_message: {
    phone_number_id: "<phone_number_id>",
    messaging_product: "whatsapp",
    recipient_type: "individual",
    to: "<recipient_number_with_country_code>",
    type: "text",
    text: { body: "Hello! This is an example message.", preview_url: false },
  },
  slack_send_message: {
    channel: "<channel_id>",
    text: "Hello! This is an example message.",
  },
  gmail_send_message: { raw: gmailRaw },
}

type ExampleCopy = {
  placeholderNote: string
  notesTitle: string
  preparationTitle: string
  responseLabel: string
  responseNote: string
  tools: Record<string, { metaDescription: string; notes: string[]; conditions?: Record<string, string> }>
}

const COPY: Record<Locale, ExampleCopy> = {
  pt: {
    placeholderNote: "Exemplo ilustrativo. Substitua os tokens, o UUID da conexão e os dados de destino pelos seus. Esta página não executa a chamada.",
    notesTitle: "Antes de executar",
    preparationTitle: "Como preparar raw em JavaScript (Node.js)",
    responseLabel: "Formato ilustrativo de sucesso",
    responseNote: "O conteúdo abaixo é um exemplo, não o resultado de uma execução. Guarde o X-Toolkit-Execution-Id quando retornado para consultar a execução. O Connect não aplica retry nem idempotência: repetir um POST pode repetir o envio.",
    tools: {
      whatsapp_send_message: {
        metaDescription: "Envie texto ou templates pelo WhatsApp com o Reportei Connect. Veja o corpo da mensagem, os campos condicionais e os requisitos da conexão.",
        notes: [
          "Para type=text, envie text.body. O número de destino deve conter código do país e apenas dígitos. Use o phone_number_id da conta comercial conectada.",
          "Texto livre atende conversas dentro da janela de 24 horas após a mensagem do usuário. Para iniciar uma conversa fora dela, use type=template e um template aprovado, com language e os parâmetros exigidos pelo template.",
          "O ID retornado identifica a mensagem aceita pela API; não confirma entrega. Confira o corpo de eventuais erros do provedor em api_error.body.",
        ],
        conditions: { text: "Sim, se type=text", template: "Sim, se type=template", image: "Sim, se type=image", video: "Sim, se type=video", document: "Sim, se type=document", audio: "Sim, se type=audio" },
      },
      slack_send_message: {
        metaDescription: "Envie uma mensagem ao Slack pelo Reportei Connect. Exemplo com channel e text, opções de conteúdo, acesso ao canal e resposta da API.",
        notes: [
          "O exemplo usa text. Também é possível usar blocks ou markdown_text; não combine markdown_text com text ou blocks. Com blocks, inclua text como fallback de acessibilidade e notificações.",
          "Conecte o workspace com um app OAuth que tenha permissão de envio e acesso à conversa. Em canais privados, o app precisa ser membro; canais públicos também dependem das permissões concedidas.",
          "Confira ok no corpo da resposta, além do status HTTP. Erros como no_text, missing_scope e not_in_channel indicam conteúdo, escopo ou acesso que precisam de correção.",
        ],
        conditions: { text: "Sim, no exemplo de texto", blocks: "Alternativa de conteúdo", markdown_text: "Alternativa a text/blocks" },
      },
      gmail_send_message: {
        metaDescription: "Envie e-mails pelo Gmail com o Reportei Connect. Prepare a mensagem MIME em base64url e confira remetente, destinatários e respostas em conversa.",
        notes: [
          "raw contém a mensagem MIME completa em base64url, não apenas o texto do e-mail. O exemplo codifica versões text/plain e text/html em UTF-8, com CRLF entre as linhas MIME.",
          "Antes de codificar, substitua sender@example.com pela conta conectada ou um alias autorizado, e recipient@example.com pelo destinatário. Para assuntos com acentos, use uma biblioteca MIME que codifique os headers.",
          "Para responder numa conversa, envie threadId, preserve Subject e inclua References e In-Reply-To com o Message-ID correspondente. A conexão precisa de um escopo Gmail que permita envio.",
        ],
      },
    },
  },
  en: {
    placeholderNote: "Illustrative example. Replace the tokens, connection UUID and destination values with your own. This page does not execute the request.",
    notesTitle: "Before executing",
    preparationTitle: "Prepare raw in JavaScript (Node.js)",
    responseLabel: "Illustrative success format",
    responseNote: "The content below is an example, not a recorded execution. Save X-Toolkit-Execution-Id when returned to look up the execution. Connect provides no retries or idempotency: repeating a POST may send the message again.",
    tools: {
      whatsapp_send_message: {
        metaDescription: "Send WhatsApp text or templates with Reportei Connect. See the message body, conditional fields and connection requirements.",
        notes: [
          "For type=text, include text.body. The recipient number must contain the country code and digits only. Use the connected business account's phone_number_id.",
          "Free-form text is for conversations within 24 hours of the user's message. To start a conversation outside that window, use type=template with an approved template, language and its required parameters.",
          "The returned ID identifies a message accepted by the API; it does not confirm delivery. Inspect api_error.body for provider HTTP errors.",
        ],
        conditions: { text: "Yes, if type=text", template: "Yes, if type=template", image: "Yes, if type=image", video: "Yes, if type=video", document: "Yes, if type=document", audio: "Yes, if type=audio" },
      },
      slack_send_message: {
        metaDescription: "Send a Slack message with Reportei Connect. See a channel and text example, content options, channel access and the API response.",
        notes: [
          "This example uses text. You can also use blocks or markdown_text; do not combine markdown_text with text or blocks. With blocks, include text as an accessibility and notification fallback.",
          "Connect the workspace using an OAuth app with permission to send and access the conversation. The app must be a member of private channels; public channels also depend on granted permissions.",
          "Check ok in the response body, not only the HTTP status. Errors such as no_text, missing_scope and not_in_channel require changes to content, scopes or channel access.",
        ],
        conditions: { text: "Yes, in this text example", blocks: "Content alternative", markdown_text: "Alternative to text/blocks" },
      },
      gmail_send_message: {
        metaDescription: "Send Gmail messages with Reportei Connect. Prepare a base64url MIME message and check the sender, recipients and replies within a thread.",
        notes: [
          "raw holds the complete MIME message encoded as base64url, not just the email body. This example includes UTF-8 text/plain and text/html parts, with CRLF between MIME lines.",
          "Before encoding, replace sender@example.com with the connected account or an authorized alias, and recipient@example.com with the recipient. Use a MIME library to encode non-ASCII subject headers.",
          "For a reply in a thread, supply threadId, keep the Subject and include References and In-Reply-To for the corresponding Message-ID. The connection needs a Gmail scope that permits sending.",
        ],
      },
    },
  },
  es: {
    placeholderNote: "Ejemplo ilustrativo. Sustituye los tokens, el UUID de la conexión y los datos de destino por los tuyos. Esta página no ejecuta la petición.",
    notesTitle: "Antes de ejecutar",
    preparationTitle: "Cómo preparar raw en JavaScript (Node.js)",
    responseLabel: "Formato ilustrativo de éxito",
    responseNote: "El contenido es un ejemplo, no una ejecución registrada. Guarda X-Toolkit-Execution-Id cuando se devuelva para consultar la ejecución. Connect no aplica reintentos ni idempotencia: repetir un POST puede repetir el envío.",
    tools: {
      whatsapp_send_message: {
        metaDescription: "Envía texto o plantillas por WhatsApp con Reportei Connect. Consulta el cuerpo del mensaje, campos condicionales y requisitos de conexión.",
        notes: [
          "Para type=text, incluye text.body. El número de destino debe contener el código de país y solo dígitos. Usa el phone_number_id de la cuenta comercial conectada.",
          "El texto libre se usa dentro de las 24 horas posteriores al mensaje del usuario. Fuera de esa ventana, inicia la conversación con type=template y una plantilla aprobada, language y sus parámetros requeridos.",
          "El ID devuelto identifica un mensaje aceptado por la API, pero no confirma su entrega. Consulta api_error.body en los errores HTTP del proveedor.",
        ],
        conditions: { text: "Sí, si type=text", template: "Sí, si type=template", image: "Sí, si type=image", video: "Sí, si type=video", document: "Sí, si type=document", audio: "Sí, si type=audio" },
      },
      slack_send_message: {
        metaDescription: "Envía mensajes a Slack con Reportei Connect. Ejemplo con channel y text, opciones de contenido, acceso al canal y respuesta de la API.",
        notes: [
          "El ejemplo usa text. También puedes usar blocks o markdown_text; no combines markdown_text con text o blocks. Con blocks, incluye text para accesibilidad y notificaciones.",
          "Conecta el workspace con una app OAuth que pueda enviar y acceder a la conversación. La app debe ser miembro de los canales privados; los públicos también dependen de los permisos otorgados.",
          "Comprueba ok en la respuesta, además del estado HTTP. Errores como no_text, missing_scope y not_in_channel requieren corregir contenido, permisos o acceso al canal.",
        ],
        conditions: { text: "Sí, en este ejemplo de texto", blocks: "Alternativa de contenido", markdown_text: "Alternativa a text/blocks" },
      },
      gmail_send_message: {
        metaDescription: "Envía correos por Gmail con Reportei Connect. Prepara el mensaje MIME en base64url y revisa remitente, destinatarios y respuestas en un hilo.",
        notes: [
          "raw contiene el mensaje MIME completo en base64url, no solo el cuerpo del correo. El ejemplo incluye text/plain y text/html en UTF-8, con CRLF entre las líneas MIME.",
          "Antes de codificar, sustituye sender@example.com por la cuenta conectada o un alias autorizado, y recipient@example.com por el destinatario. Usa una biblioteca MIME para asuntos con caracteres no ASCII.",
          "Para responder en un hilo, envía threadId, conserva Subject e incluye References e In-Reply-To del Message-ID correspondiente. La conexión necesita un scope Gmail que permita enviar.",
        ],
      },
    },
  },
  fr: {
    placeholderNote: "Exemple illustratif. Remplacez les tokens, l’UUID de connexion et les données de destination par les vôtres. Cette page n’exécute pas la requête.",
    notesTitle: "Avant l’exécution",
    preparationTitle: "Préparer raw en JavaScript (Node.js)",
    responseLabel: "Format illustratif de réussite",
    responseNote: "Le contenu est un exemple, pas une exécution enregistrée. Conservez X-Toolkit-Execution-Id lorsqu’il est renvoyé pour consulter l’exécution. Connect ne gère ni relance ni idempotence : répéter un POST peut répéter l’envoi.",
    tools: {
      whatsapp_send_message: {
        metaDescription: "Envoyez du texte ou des modèles WhatsApp avec Reportei Connect. Corps du message, champs conditionnels et prérequis de connexion.",
        notes: [
          "Pour type=text, ajoutez text.body. Le numéro destinataire doit contenir l’indicatif du pays et uniquement des chiffres. Utilisez le phone_number_id du compte professionnel connecté.",
          "Le texte libre s’utilise dans les 24 heures suivant le message de l’utilisateur. En dehors de cette fenêtre, utilisez type=template avec un modèle approuvé, language et les paramètres qu’il exige.",
          "L’ID renvoyé identifie un message accepté par l’API ; il ne confirme pas sa livraison. Consultez api_error.body en cas d’erreur HTTP du fournisseur.",
        ],
        conditions: { text: "Oui, si type=text", template: "Oui, si type=template", image: "Oui, si type=image", video: "Oui, si type=video", document: "Oui, si type=document", audio: "Oui, si type=audio" },
      },
      slack_send_message: {
        metaDescription: "Envoyez un message Slack avec Reportei Connect. Exemple avec channel et text, options de contenu, accès au canal et réponse de l’API.",
        notes: [
          "Cet exemple utilise text. Vous pouvez aussi utiliser blocks ou markdown_text ; ne combinez pas markdown_text avec text ou blocks. Avec blocks, ajoutez text pour l’accessibilité et les notifications.",
          "Connectez le workspace avec une app OAuth autorisée à envoyer et à accéder à la conversation. L’app doit être membre des canaux privés ; les canaux publics dépendent aussi des permissions accordées.",
          "Vérifiez ok dans la réponse, en plus du statut HTTP. Des erreurs comme no_text, missing_scope et not_in_channel demandent de corriger le contenu, les permissions ou l’accès au canal.",
        ],
        conditions: { text: "Oui, dans cet exemple texte", blocks: "Autre option de contenu", markdown_text: "Alternative à text/blocks" },
      },
      gmail_send_message: {
        metaDescription: "Envoyez des e-mails Gmail avec Reportei Connect. Préparez le MIME en base64url et vérifiez expéditeur, destinataires et réponses dans un fil.",
        notes: [
          "raw contient le message MIME complet en base64url, pas seulement le corps du message. Cet exemple inclut text/plain et text/html en UTF-8, avec CRLF entre les lignes MIME.",
          "Avant l’encodage, remplacez sender@example.com par le compte connecté ou un alias autorisé, et recipient@example.com par le destinataire. Utilisez une bibliothèque MIME pour les sujets non ASCII.",
          "Pour répondre dans un fil, fournissez threadId, conservez Subject et ajoutez References et In-Reply-To pour le Message-ID correspondant. La connexion nécessite un scope Gmail permettant l’envoi.",
        ],
      },
    },
  },
}

const RESPONSES: Record<string, object> = {
  whatsapp_send_message: { messaging_product: "whatsapp", messages: [{ id: "wamid.EXAMPLE" }] },
  slack_send_message: { ok: true, channel: "C0123456789", ts: "1234567890.123456", message: { text: "Hello! This is an example message." } },
  gmail_send_message: { id: "example-message-id", threadId: "example-thread-id", labelIds: ["SENT"] },
}

export function reviewedToolExample(slug: string, locale: Locale) {
  const copy = COPY[locale]
  const tool = copy.tools[slug]
  if (!tool) return null
  return {
    ...tool,
    arguments: structuredClone(ARGUMENTS[slug]),
    placeholderNote: copy.placeholderNote,
    notesTitle: copy.notesTitle,
    preparationTitle: copy.preparationTitle,
    preparationCode: slug === "gmail_send_message"
      ? `// Node.js: replace the example addresses before encoding.\nconst mime = ${JSON.stringify(GMAIL_MIME_LINES, null, 2)}.join("\\r\\n");\n\nconst raw = Buffer.from(mime, "utf8").toString("base64url");\nconst body = {\n  customer_toolkit: "<connection UUID>",\n  arguments: { raw }\n};\n\n// Serialize body with JSON.stringify(body) in your HTTP client.`
      : null,
    responseLabel: copy.responseLabel,
    responseNote: copy.responseNote,
    responseExample: JSON.stringify(RESPONSES[slug], null, 2),
  }
}
