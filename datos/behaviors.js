/*
 * ============================================================
 *  BEHAVIORS  (archivo para editar)
 * ============================================================
 *  Behaviors y sub-behaviors oficiales, con el mismo texto en
 *  inglés que la herramienta de registro de coaching.
 *  Faltan behaviors: agrégalos al final de la lista.
 *
 *  Cómo agregar uno nuevo: copia un bloque { ... }, pégalo al
 *  final de la lista (separado por coma) y cambia el texto.
 *
 *  Campos:
 *   id            Identificador corto, sin espacios ni acentos.
 *   nombre        Nombre exacto del behavior (como en la herramienta).
 *   subBehaviors  Lista de sub-behaviors, texto exacto.
 *   metricas      Métricas en las que impacta. Una o varias de:
 *                 "NPS", "7D FCR", "Stay Connected", "CRT", "HSE",
 *                 "C&A/100".
 *   descripcion   Qué es el behavior, en una frase (español).
 *   preguntas     Preguntas de autodescubrimiento propias de este
 *                 behavior para cada etapa GROW. Se muestran antes
 *                 que las preguntas generales (datos/preguntas-grow.js).
 *                 goal / reality / options / way (Way forward).
 *   medible       Sugerencia de cómo medir el avance (plan SMART).
 *   ejemplo       true = behavior de muestra (etiqueta EJEMPLO).
 *
 *  Plantilla vacía para copiar:
 *
 *  {
 *    id: "",
 *    nombre: "",
 *    subBehaviors: [
 *      ""
 *    ],
 *    metricas: [],
 *    descripcion: "",
 *    preguntas: { goal: [], reality: [], options: [], way: [] },
 *    medible: ""
 *  },
 * ============================================================
 */
window.CC = window.CC || {};

CC.behaviors = [
  {
    id: "visual-audit",
    nombre: "Visual Audit",
    subBehaviors: [
      "Complete a visual audit (NBA - previous memos - tenure - usage - rate plan - balance - additional charges) to identify sales offers & adjacent issues, reduce customer effort, or (tenure - previous credits - balance - payment history) prior to negotiating a credit / payment, etc",
      "Complete a visual audit early and access NBA - be prepared to transition to the treatment"
    ],
    metricas: ["7D FCR", "CRT", "C&A/100", "Stay Connected"],
    descripcion: "Revisar la cuenta al inicio de la interacción (NBA, memos, tenure, uso, plan, balance, cargos, créditos previos e historial de pagos) para anticipar problemas, ofertas y decisiones de crédito o pago.",
    preguntas: {
      goal: [
        "¿Qué te gustaría saber del cliente antes de que termine de explicar su problema?",
        "Si hicieras la auditoría visual en todas tus llamadas, ¿qué cambiaría en tu tiempo de resolución y en tus rellamadas?"
      ],
      reality: [
        "Cuéntame qué revisas en la cuenta en los primeros segundos de la llamada.",
        "¿En qué momento abres NBA? ¿Qué pasa cuando lo abres tarde?",
        "En esta llamada, ¿qué información de la cuenta (memos, balance, cargos) te habría ayudado a resolver antes?",
        "Antes de negociar un crédito o un pago, ¿qué revisas de tenure, créditos previos e historial de pagos?"
      ],
      options: [
        "¿Qué orden de revisión podrías seguir siempre para no olvidar nada?",
        "¿Cómo podrías hacer la auditoría mientras escuchas al cliente, sin dejar silencios largos?",
        "¿Qué issues adyacentes u ofertas podrías detectar si revisas uso y plan desde el inicio?"
      ],
      way: [
        "¿Qué vas a revisar primero en cada llamada a partir de hoy?",
        "¿Cómo vas a recordar abrir NBA al inicio?"
      ]
    },
    medible: "Auditoría visual completa y NBA abierto al inicio en 9 de 10 interacciones monitoreadas; 7D FCR y CRT hacia la meta.",
    ejemplo: false
  },
  {
    id: "tools-resources",
    nombre: "Tools & Resources",
    subBehaviors: [
      "Follow the applicable troubleshooting steps to address device and/or service issues",
      "Follow the steps in The Fix to correct a device/service issue",
      "Open NBA at the beginning of the call/chat to gain an understanding of how you want to position the treatment",
      "Pull up and read policy information in C2 to give correct and complete information to the customer related to their resolution",
      "Review and communicate relevant promotions and offers available for the customer",
      "Review Memos to understand previous calls and issues to reduce customer effort and reduce need for asking questions",
      "Use ATLAS The Fix to send instructions - next steps - resolution guarantee",
      "Use Grand Central to send instructions - next steps - resolution guarantee",
      "Utilize and send (via ATLAS The Fix) Common Procedures to educate the customer about how to use their device or service",
      "Utilize and send (via Grand Central) Common Procedures to educate the customer about how to use their device or service"
    ],
    metricas: ["7D FCR", "CRT", "HSE", "C&A/100"],
    descripcion: "Usar las herramientas y recursos (The Fix, C2, NBA, Memos, ATLAS, Grand Central) para dar una resolución correcta, completa y documentada.",
    preguntas: {
      goal: [
        "¿Qué tan seguro te gustaría sentirte de que la información que das es correcta y completa?",
        "¿Qué impacto quieres lograr en tus rellamadas usando mejor las herramientas?"
      ],
      reality: [
        "Cuando llega un problema de equipo o servicio, ¿qué herramienta abres primero y por qué?",
        "¿En qué casos sigues los pasos de The Fix completos y en cuáles te saltas alguno?",
        "¿Cuándo fue la última vez que leíste la política en C2 antes de responder? ¿Cómo te fue?",
        "¿Qué haces hoy para que el cliente se quede con las instrucciones y próximos pasos por escrito?"
      ],
      options: [
        "¿Qué herramienta te ahorraría más preguntas al cliente si la revisaras antes (Memos, NBA, C2)?",
        "¿Cuándo convendría enviar instrucciones o Common Procedures por ATLAS The Fix o Grand Central?",
        "¿Qué compañero domina estas herramientas y qué podrías aprender de él o ella?"
      ],
      way: [
        "¿Qué herramienta te comprometes a usar en cada llamada esta semana?",
        "¿Cómo vamos a saber que la estás usando bien?"
      ]
    },
    medible: "Uso correcto de la herramienta acordada en 9 de 10 interacciones monitoreadas; 7D FCR hacia la meta.",
    ejemplo: false
  },
  {
    id: "thank-the-customer",
    nombre: "Thank the Customer",
    subBehaviors: [
      "Verbalize appreciation for the customer: New accounts, tenure, military, line additions, customer effort"
    ],
    metricas: ["NPS"],
    descripcion: "Expresar aprecio genuino y específico al cliente (cuenta nueva, tenure, militar, líneas nuevas, esfuerzo del cliente).",
    preguntas: {
      goal: [
        "¿Cómo te gustaría que el cliente se sintiera al terminar la llamada?",
        "¿Qué crees que pasaría con tu NPS si cada cliente se sintiera valorado?"
      ],
      reality: [
        "¿En qué momento de la llamada agradeces al cliente hoy?",
        "¿Qué datos de la cuenta (tenure, militar, líneas nuevas) usas para personalizar el agradecimiento?",
        "Escuchando esta llamada, ¿el agradecimiento sonó genuino o de guion? ¿Por qué?"
      ],
      options: [
        "¿Cómo podrías reconocer el esfuerzo del cliente cuando ya llamó varias veces?",
        "¿Qué frases te salen naturales para agradecer sin sonar repetitivo?"
      ],
      way: [
        "¿Qué vas a decir distinto para agradecer a partir de la próxima llamada?",
        "¿Cómo te gustaría que te diera retroalimentación sobre esto?"
      ]
    },
    medible: "Agradecimiento personalizado en 9 de 10 interacciones monitoreadas; NPS individual hacia la meta.",
    ejemplo: false
  },
  {
    id: "set-expectations",
    nombre: "Set Expectations",
    subBehaviors: [
      "Give the customer expectations for the next bill (i.e. prorated charges, estimated bill amount, location of credit applied on bill, etc.)",
      "Give the customer the estimated time and next steps for resolution (i.e. trouble tickets, exchanges, handset refunds, text notifications, E-signature, shipping timeframes, etc.)",
      "If you have to refer the customer to the store per C2, give them a specific location, send the store information via ATLAS The Fix, and partner with the store (as needed)",
      "If you have to refer the customer to the store per Magenta Pulse Fetch, offer Assistance Locating the Nearest Store, give them a specific location.",
      "Providing information and setting expectations when transferring calls (escalation, internal transfer, external transfer, etc.)"
    ],
    metricas: ["NPS", "7D FCR"],
    descripcion: "Explicar al cliente qué va a pasar, cuándo y qué hacer después (próxima factura, tiempos de resolución, tienda o transferencia) para que no tenga que volver a llamar.",
    preguntas: {
      goal: [
        "¿Qué quieres que el cliente sepa con certeza cuando cuelga?",
        "¿Qué te gustaría que pasara con las rellamadas por dudas de factura o de seguimiento?"
      ],
      reality: [
        "¿Cómo le explicas hoy al cliente lo que verá en su próxima factura (prorrateos, monto estimado, crédito)?",
        "Cuando abres un ticket o un cambio de equipo, ¿qué tiempos y próximos pasos le das?",
        "Cuando refieres a tienda, ¿le das una ubicación específica? ¿Qué te lo impide a veces?",
        "Antes de transferir, ¿qué le explicas al cliente?"
      ],
      options: [
        "¿Cómo podrías confirmar que el cliente entendió sin que suene repetitivo?",
        "¿Qué información le serviría tener por escrito (por ejemplo, enviada por ATLAS The Fix)?",
        "¿Qué frase podrías usar para preparar al cliente antes de una transferencia?"
      ],
      way: [
        "¿Qué datos vas a dar siempre al cerrar la llamada?",
        "¿En qué tipo de llamadas vas a empezar a aplicarlo?"
      ]
    },
    medible: "Expectativas claras (tiempo y próximos pasos) en 9 de 10 interacciones monitoreadas; 7D FCR y NPS hacia la meta.",
    ejemplo: false
  },
  {
    id: "self-help",
    nombre: "Self Help",
    subBehaviors: [
      "Send links to the customer with information on how they can achieve/confirm resolution in the future through the web, IVR or phone along with the benefits (time saved, lowered effort, save on fees, etc.)",
      "Send the ATLAS The Fix link to the customer with information on how they can achieve/confirm resolution in the future through the web, IVR or phone along with the benefits (time saved, lowered effort, save on fees, etc.)",
      "Send the Grand Central link to the customer with information on how they can achieve/confirm resolution in the future through the web, IVR or phone along with the benefits (time saved, lowered effort, save on fees, etc.)",
      "Show the customer how they can achieve resolution in the future through the web, IVR or phone",
      "Show the customer how to use self-help options to avoid fees"
    ],
    metricas: ["7D FCR", "NPS"],
    descripcion: "Educar al cliente para que pueda resolver o confirmar por sí mismo en el futuro (web, IVR, teléfono), explicando los beneficios.",
    preguntas: {
      goal: [
        "¿Qué te gustaría que el cliente pudiera hacer solo la próxima vez?",
        "¿Cómo ayudaría al cliente, y a tus rellamadas, que conozca las opciones de self help?"
      ],
      reality: [
        "¿En qué llamadas le muestras al cliente cómo resolverlo solo? ¿En cuáles no?",
        "¿Cómo explicas los beneficios (tiempo, esfuerzo, ahorro en cargos)?",
        "¿Qué haces cuando el cliente dice que prefiere llamar?"
      ],
      options: [
        "¿Qué enlace podrías enviar (ATLAS The Fix, Grand Central) en lugar de solo explicarlo?",
        "¿Cómo podrías mostrarle el camino mientras está en línea contigo?",
        "¿Qué beneficio le importaría más a este tipo de cliente?"
      ],
      way: [
        "¿En cuántas llamadas por turno te comprometes a ofrecer self help?",
        "¿Qué enlace o frase vas a tener lista?"
      ]
    },
    medible: "Self help ofrecido con beneficio explicado en 9 de 10 interacciones aplicables; 7D FCR hacia la meta.",
    ejemplo: false
  }
];
