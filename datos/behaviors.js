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
 *   descripcion   Qué es el behavior, en una frase (español).
 *   preguntas     Preguntas de autodescubrimiento propias de este
 *                 behavior para cada etapa GROW. Se muestran antes
 *                 que las preguntas generales (datos/preguntas-grow.js).
 *                 goal / reality / options / way (Way forward).
 *   medible       Sugerencia de cómo medir el avance del behavior
 *                 (plan SMART). La métrica se elige en cada sesión:
 *                 cualquier behavior aplica a cualquier métrica.
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
    descripcion: "Revisar la cuenta al inicio de la interacción (NBA, memos, tenure, uso, plan, balance, cargos, créditos previos e historial de pagos) para anticipar problemas, ofertas y decisiones de crédito o pago.",
    preguntas: {
      goal: [
        "¿Qué te gustaría saber del cliente antes de que termine de explicar su problema?",
        "Si hicieras la auditoría visual en todas tus llamadas, ¿qué cambiaría en la métrica que estamos trabajando?"
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
    medible: "Auditoría visual completa y NBA abierto al inicio en 9 de 10 interacciones monitoreadas",
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
    medible: "Uso correcto de la herramienta acordada en 9 de 10 interacciones monitoreadas",
    ejemplo: false
  },
  {
    id: "thank-the-customer",
    nombre: "Thank the Customer",
    subBehaviors: [
      "Verbalize appreciation for the customer: New accounts, tenure, military, line additions, customer effort"
    ],
    descripcion: "Expresar aprecio genuino y específico al cliente (cuenta nueva, tenure, militar, líneas nuevas, esfuerzo del cliente).",
    preguntas: {
      goal: [
        "¿Cómo te gustaría que el cliente se sintiera al terminar la llamada?",
        "¿Qué crees que pasaría con tus resultados si cada cliente se sintiera valorado?"
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
    medible: "Agradecimiento personalizado en 9 de 10 interacciones monitoreadas",
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
    medible: "Expectativas claras (tiempo y próximos pasos) en 9 de 10 interacciones monitoreadas",
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
    medible: "Self help ofrecido con beneficio explicado en 9 de 10 interacciones aplicables",
    ejemplo: false
  },
  {
    id: "save-offer",
    nombre: "Save Offer",
    subBehaviors: [
      "Utilize the retention guide to demonstrate reasons to stay with T-Mobile"
    ],
    descripcion: "Usar la guía de retención para mostrar al cliente razones concretas para quedarse.",
    preguntas: {
      goal: [
        "Cuando un cliente quiere cancelar, ¿qué te gustaría lograr en esa conversación?",
        "¿Cómo te darías cuenta de que la oferta realmente conectó con lo que le importa al cliente?"
      ],
      reality: [
        "¿En qué momento abres la guía de retención durante la llamada?",
        "¿Qué razones para quedarse le das hoy al cliente? ¿Cómo eliges cuáles?",
        "En esta llamada, ¿qué necesidad del cliente escuchaste antes de ofrecer algo?"
      ],
      options: [
        "¿Cómo podrías conectar la oferta con lo que el cliente te contó?",
        "¿Qué partes de la guía podrías tener listas para las objeciones más comunes?"
      ],
      way: [
        "¿Qué vas a hacer distinto en tu próxima llamada de cancelación?",
        "¿Cómo vamos a revisar juntos cómo te fue?"
      ]
    },
    medible: "Guía de retención utilizada con razones personalizadas en 9 de 10 llamadas de cancelación monitoreadas.",
    ejemplo: false
  },
  {
    id: "retention-escalation",
    nombre: "Retention & Escalation Handling",
    subBehaviors: [
      "Retention & Escalation Handling - save offers, preventing churn"
    ],
    descripcion: "Manejar retenciones y escalaciones con ofertas de permanencia para evitar la pérdida del cliente (churn).",
    preguntas: {
      goal: [
        "¿Qué te gustaría que pasara cuando un cliente pide escalar o cancelar?",
        "¿Cómo te gustaría sentirte al manejar a un cliente molesto que quiere irse?"
      ],
      reality: [
        "Cuéntame qué haces en los primeros momentos cuando el cliente pide un supervisor o cancelar.",
        "¿Qué intentas antes de escalar la llamada?",
        "¿Qué ofertas de permanencia conoces y cuándo las usas?"
      ],
      options: [
        "¿Qué podrías intentar tú antes de escalar?",
        "¿Cómo podrías calmar al cliente para que esté dispuesto a escuchar una oferta?"
      ],
      way: [
        "¿Qué paso vas a agregar antes de escalar o aceptar una cancelación?",
        "¿Qué apoyo necesitas de mí para lograrlo?"
      ]
    },
    medible: "Oferta de permanencia antes de escalar o cancelar en 9 de 10 llamadas aplicables monitoreadas.",
    ejemplo: false
  },
  {
    id: "restate",
    nombre: "Restate",
    subBehaviors: [
      "Immediately acknowledge the customer's issue or desired resolution by restating the issue back to them in your own words"
    ],
    descripcion: "Reconocer de inmediato el problema o la resolución que busca el cliente, repitiéndolo con tus propias palabras.",
    preguntas: {
      goal: [
        "¿Qué quieres que sienta el cliente después de explicarte su problema?",
        "¿Qué cambiaría en la llamada si confirmaras desde el inicio lo que el cliente necesita?"
      ],
      reality: [
        "¿Qué haces justo después de que el cliente termina de explicar su problema?",
        "En esta llamada, ¿repetiste el problema con tus palabras? ¿Cómo reaccionó el cliente?",
        "¿Te ha pasado que resuelves algo distinto a lo que el cliente quería?"
      ],
      options: [
        "¿Qué frase podrías usar para repetir el problema sin sonar a guion?",
        "¿Cómo podrías incluir también la resolución que el cliente espera?"
      ],
      way: [
        "¿Cómo vas a empezar a repetir el problema en cada llamada?",
        "¿Cómo te vas a dar cuenta de que lo estás haciendo?"
      ]
    },
    medible: "Restate inmediato con palabras propias en 9 de 10 interacciones monitoreadas.",
    ejemplo: false
  },
  {
    id: "relate",
    nombre: "Relate",
    subBehaviors: [
      "Build relationship around T-Mobile products and services and/or Reinforce Value",
      "Relate to the customers' frustrations/concerns without making disparaging comments about company, employees, partners, products. One Team Together!"
    ],
    descripcion: "Construir relación con el cliente, reforzar el valor de productos y servicios y conectar con sus frustraciones sin hablar mal de la compañía.",
    preguntas: {
      goal: [
        "¿Qué tipo de conexión te gustaría lograr con el cliente?",
        "¿Cómo te gustaría responder cuando el cliente se queja de la compañía?"
      ],
      reality: [
        "¿Qué haces hoy para conectar con el cliente más allá del problema?",
        "Cuando el cliente está frustrado, ¿qué le dices? ¿Cómo suena?",
        "¿Te ha pasado que, por empatizar, terminas dándole la razón contra la compañía o un compañero?"
      ],
      options: [
        "¿Cómo podrías mostrar que entiendes su frustración sin hablar mal de nadie?",
        "¿Qué valor de los productos o servicios podrías resaltar según lo que usa el cliente?"
      ],
      way: [
        "¿Qué frase vas a usar para conectar con un cliente frustrado?",
        "¿En qué llamadas vas a practicarlo primero?"
      ]
    },
    medible: "Conexión con el cliente sin comentarios negativos en 9 de 10 interacciones monitoreadas.",
    ejemplo: false
  },
  {
    id: "recap",
    nombre: "Recap",
    subBehaviors: [
      "Paraphrase how you resolved the initial call reason and adjacent issues to ensure customer is clear on the resolution while verbalizing and sending your personal guarantee for resolution"
    ],
    descripcion: "Resumir cómo se resolvió el motivo de la llamada y los issues adyacentes, y dar y enviar la garantía personal de resolución.",
    preguntas: {
      goal: [
        "¿Qué quieres que el cliente tenga claro al colgar?",
        "¿Cómo te gustaría cerrar tus llamadas?"
      ],
      reality: [
        "¿Cómo cierras hoy una llamada después de resolver?",
        "¿Incluyes los issues adyacentes en el resumen? ¿Por qué sí o por qué no?",
        "¿Cuándo das y envías tu garantía personal de resolución?"
      ],
      options: [
        "¿Qué estructura corta podrías usar para el recap?",
        "¿Cómo podrías verbalizar la garantía para que suene personal y no de guion?"
      ],
      way: [
        "¿Cómo vas a cerrar tus llamadas a partir de hoy?",
        "¿Cómo vamos a revisar que el recap esté en tus llamadas?"
      ]
    },
    medible: "Recap con issues adyacentes y garantía personal en 9 de 10 interacciones monitoreadas.",
    ejemplo: false
  },
  {
    id: "process-compliance",
    nombre: "Process compliance",
    subBehaviors: [
      "Process Compliance - followed required steps, accuracy, security and documentation"
    ],
    descripcion: "Seguir los pasos requeridos con precisión, cumpliendo seguridad y documentación.",
    preguntas: {
      goal: [
        "¿Qué te gustaría lograr en cumplimiento de procesos?",
        "¿Por qué crees que es importante seguir cada paso para el cliente y para ti?"
      ],
      reality: [
        "¿Qué pasos del proceso sientes que se te pasan con más frecuencia?",
        "¿Cómo haces hoy la verificación de seguridad y la documentación?",
        "¿Qué pasa en la llamada que hace que te saltes un paso?"
      ],
      options: [
        "¿Qué te ayudaría a no olvidar los pasos requeridos?",
        "¿Cómo podrías documentar mientras hablas con el cliente?"
      ],
      way: [
        "¿Qué paso del proceso te comprometes a cuidar en cada llamada?",
        "¿Cuándo revisamos juntos tus notas y verificaciones?"
      ]
    },
    medible: "Pasos requeridos, seguridad y documentación completos en 10 de 10 interacciones revisadas.",
    ejemplo: false
  },
  {
    id: "probing-questions",
    nombre: "Probing Questions",
    subBehaviors: [
      "Ask 'who' and 'how' questions about current lines to uncover AAL opportunities",
      "Ask if there are specific charges the customer is asking about to better understand their concern",
      "Ask open ended questions about how the customer uses their device/service in order to determine needs and sales offers",
      "Ask questions to determine situation - duration - location to start the troubleshooting process",
      "Ask targeted questions (\"who\", \"how\", \"what\", \"when\", etc.) about specific line charges to understand the cause of billing concern and move the conversation forward",
      "Ask the customer why they are considering discontinuing service with T-Mobile",
      "Move to a direct question to close the sale and confirm/gain agreement on the outcome with the customer"
    ],
    descripcion: "Hacer preguntas abiertas y específicas para entender la situación, la necesidad o la preocupación del cliente y llevar la conversación a un acuerdo.",
    preguntas: {
      goal: [
        "¿Qué te gustaría entender del cliente antes de proponer una solución?",
        "¿Cómo cambiarían tus llamadas si llegaras más rápido a la causa del problema?"
      ],
      reality: [
        "¿Qué preguntas haces normalmente al inicio de la llamada?",
        "¿Cuándo usas preguntas abiertas y cuándo cerradas?",
        "En esta llamada, ¿qué información te faltó y qué pregunta te la habría dado?",
        "¿Cómo cierras la conversación para confirmar el acuerdo con el cliente?"
      ],
      options: [
        "¿Qué preguntas de situación, duración y ubicación podrías hacer siempre antes del troubleshooting?",
        "¿Qué preguntas 'quién' y 'cómo' te ayudarían a descubrir necesidades u oportunidades?",
        "¿Qué pregunta directa podrías usar para cerrar y confirmar el acuerdo?"
      ],
      way: [
        "¿Qué pregunta nueva vas a incorporar en tus llamadas?",
        "¿Cómo vamos a revisar si te está ayudando?"
      ]
    },
    medible: "Preguntas de sondeo adecuadas al tipo de llamada en 9 de 10 interacciones monitoreadas.",
    ejemplo: false
  },
  {
    id: "power-words",
    nombre: "Power Words",
    subBehaviors: [
      "Use power words to demonstrate eagerness to resolve"
    ],
    descripcion: "Usar palabras que transmitan seguridad y ganas de resolver el problema del cliente.",
    preguntas: {
      goal: [
        "¿Cómo te gustaría que el cliente percibiera tu disposición para ayudarlo?",
        "¿Qué quieres que el cliente sienta cuando escucha tus primeras palabras?"
      ],
      reality: [
        "¿Qué frases usas hoy para mostrarle al cliente que lo vas a ayudar?",
        "Escuchando esta llamada, ¿qué palabras transmitieron seguridad? ¿Cuáles transmitieron duda?",
        "¿Usas palabras como 'intentar' o 'creo que'? ¿Cómo crees que las recibe el cliente?"
      ],
      options: [
        "¿Qué palabras o frases podrías usar para mostrar ganas de resolver?",
        "¿Qué frase te sale natural y no suena a guion?"
      ],
      way: [
        "¿Qué tres frases vas a empezar a usar desde hoy?",
        "¿Cómo te vas a acordar de usarlas?"
      ]
    },
    medible: "Power words presentes en 9 de 10 interacciones monitoreadas.",
    ejemplo: false
  },
  {
    id: "plan-product-knowledge",
    nombre: "Plan & Product Knowledge",
    subBehaviors: [
      "Plan & Product Knowledge - Plans upgrades, trade-ins, device options"
    ],
    descripcion: "Conocer planes, upgrades, trade-ins y opciones de equipos para dar información correcta y recomendar lo adecuado.",
    preguntas: {
      goal: [
        "¿Qué tan seguro te gustaría sentirte al explicar planes y equipos?",
        "¿Qué te gustaría poder recomendar al cliente sin dudar?"
      ],
      reality: [
        "¿Qué planes, upgrades o trade-ins se te hacen más difíciles de explicar?",
        "¿Dónde buscas la información cuando tienes una duda?",
        "En esta llamada, ¿la información que diste fue completa y correcta?"
      ],
      options: [
        "¿Qué recurso podrías revisar para reforzar lo que menos dominas?",
        "¿Cómo podrías comparar opciones para el cliente de forma sencilla?"
      ],
      way: [
        "¿Qué plan u opción vas a estudiar primero esta semana?",
        "¿Cómo vamos a confirmar que ya lo dominas?"
      ]
    },
    medible: "Información correcta de planes, upgrades y equipos en 10 de 10 interacciones revisadas.",
    ejemplo: false
  },
  {
    id: "payment-handling",
    nombre: "Payment Handling",
    subBehaviors: [
      "Payment Handling - Payments, Payment Arrangements, collections"
    ],
    descripcion: "Manejar pagos, arreglos de pago y cobranza de forma correcta y concretando un compromiso con el cliente.",
    preguntas: {
      goal: [
        "¿Qué te gustaría lograr cuando un cliente tiene saldo pendiente?",
        "¿Cómo te gustaría sentirte al hablar de pagos con el cliente?"
      ],
      reality: [
        "¿En qué momento de la llamada hablas del saldo pendiente?",
        "¿Qué opciones de pago o arreglos ofreces hoy?",
        "¿Qué pasa por tu mente cuando tienes que pedir un pago?"
      ],
      options: [
        "¿Cómo podrías conectar el pago con el beneficio de mantener el servicio activo?",
        "¿Qué opciones podrías ofrecer antes de que el cliente diga que no?"
      ],
      way: [
        "¿Qué frase vas a usar para iniciar la conversación de pago?",
        "¿Cuántos pagos o arreglos te propones concretar en tu próximo turno?"
      ]
    },
    medible: "Pago o arreglo de pago ofrecido en el 100% de llamadas con saldo pendiente.",
    ejemplo: false
  },
  {
    id: "ownership",
    nombre: "Ownership",
    subBehaviors: [
      "Avoid placing blame (take ownership of previous experiences) and if external assistance is needed to resolve, did you partner with the right people?",
      "Send your personal guarantee via Atlas, especially after complex situations have been addressed",
      "Tell your customer you know how important it is to resolve their issue(s)"
    ],
    descripcion: "Hacerse responsable de la experiencia del cliente sin culpar a otros, buscar el apoyo correcto y comprometerse personalmente con la resolución.",
    preguntas: {
      goal: [
        "¿Qué te gustaría que el cliente sintiera sobre tu compromiso con su problema?",
        "¿Cómo te gustaría manejar las experiencias anteriores negativas del cliente?"
      ],
      reality: [
        "¿Qué dices cuando el cliente se queja de una llamada anterior?",
        "Cuando necesitas ayuda de otra área, ¿cómo eliges con quién trabajar?",
        "¿Cuándo envías tu garantía personal por Atlas?"
      ],
      options: [
        "¿Cómo podrías asumir la experiencia anterior sin culpar a nadie?",
        "¿Qué frase podrías usar para decirle al cliente que su problema es importante para ti?"
      ],
      way: [
        "¿Qué vas a hacer distinto la próxima vez que un cliente llegue molesto por otra llamada?",
        "¿Cómo vamos a revisar que envíes tu garantía personal?"
      ]
    },
    medible: "Ownership sin culpar a otros y garantía personal enviada en 9 de 10 interacciones aplicables.",
    ejemplo: false
  },
  {
    id: "onboarding",
    nombre: "Onboarding",
    subBehaviors: [
      "Onboard the customer (new/existing) to any sales offers, TEX Experience Branding, or Un-carrier moves accepted by giving them a specific task to complete related to the updates to the account. Utilize NBA if flagged"
    ],
    descripcion: "Guiar al cliente con una tarea concreta para completar los cambios aceptados en su cuenta (ofertas, TEX Experience Branding, Un-carrier moves), usando NBA si está marcado.",
    preguntas: {
      goal: [
        "¿Qué quieres que el cliente sepa hacer después de aceptar un cambio en su cuenta?",
        "¿Cómo te darías cuenta de que el cliente quedó listo para usar lo que aceptó?"
      ],
      reality: [
        "Cuando el cliente acepta una oferta, ¿qué le explicas después?",
        "¿Le das una tarea específica para completar? ¿Cuál?",
        "¿Revisas en NBA si hay algo marcado para onboarding?"
      ],
      options: [
        "¿Qué tarea concreta podrías darle al cliente según lo que aceptó?",
        "¿Cómo podrías confirmar que entendió lo que tiene que hacer?"
      ],
      way: [
        "¿Qué vas a decirle al cliente después de cada oferta aceptada?",
        "¿Cómo vamos a saber que lo estás haciendo?"
      ]
    },
    medible: "Onboarding con tarea específica en 9 de 10 ofertas o cambios aceptados monitoreados.",
    ejemplo: false
  }
];
