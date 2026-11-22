/*
 * ============================================================
 *  BEHAVIORS  (archivo para editar)
 * ============================================================
 *  ⚠ EJEMPLOS: estos behaviors son de muestra. Reemplázalos por
 *  la lista oficial de la operación.
 *
 *  Cómo agregar uno nuevo: copia un bloque { ... }, pégalo al
 *  final de la lista (separado por coma) y cambia el texto.
 *
 *  Campos:
 *   id            Identificador corto, sin espacios ni acentos.
 *   nombre        Cómo lo verá el supervisor.
 *   metricas      Una o varias de: "NPS", "7D FCR", "Stay Connected",
 *                 "CRT", "HSE", "C&A/100".
 *   descripcion   Qué es el behavior, en una frase.
 *   seVeBien      Lista de conductas observables cuando se hace bien.
 *   preguntas     Preguntas de autodescubrimiento propias de este
 *                 behavior para cada etapa GROW. Se muestran antes
 *                 que las preguntas generales (datos/preguntas-grow.js).
 *                 goal / reality / options / way (Way forward).
 *   medible       Sugerencia de cómo medir el avance (para el plan SMART).
 *   ejemplo       true = behavior de ejemplo (muestra la etiqueta EJEMPLO).
 * ============================================================
 */
window.CC = window.CC || {};

CC.behaviors = [
  {
    id: "verificar-solucion",
    nombre: "Verificar la solución antes de cerrar la llamada",
    metricas: ["7D FCR", "NPS"],
    descripcion: "Confirmar con el cliente, en la llamada, que el problema técnico quedó resuelto antes de despedirse.",
    seVeBien: [
      "Pide al cliente que pruebe el servicio o equipo mientras sigue en línea.",
      "Pregunta si hay algún otro síntoma o problema relacionado.",
      "Resume lo que se hizo y qué debe esperar el cliente después."
    ],
    preguntas: {
      goal: [
        "¿Qué te gustaría que pasara con tus rellamadas a 7 días en el próximo mes?",
        "¿Cómo te darías cuenta de que un cliente colgó con su problema realmente resuelto?"
      ],
      reality: [
        "Cuando terminas el troubleshooting, ¿qué haces justo antes de despedirte?",
        "En las últimas llamadas que volvieron en 7 días, ¿qué tenían en común?",
        "¿En qué tipo de llamadas sientes que es difícil probar con el cliente en línea?"
      ],
      options: [
        "¿Qué podrías decirle al cliente para que pruebe el servicio sin que se sienta una pérdida de tiempo?",
        "¿Qué compañero tiene un FCR alto y qué crees que hace diferente al cerrar?"
      ],
      way: [
        "¿Qué frase de verificación vas a usar a partir de hoy?",
        "¿Cómo vas a recordar hacerlo en cada llamada?"
      ]
    },
    medible: "Bajar el % de rellamadas a 7 días (7D FCR) del actual a la meta del equipo; verificación presente en 9 de 10 llamadas monitoreadas.",
    ejemplo: true
  },
  {
    id: "troubleshooting-completo",
    nombre: "Diagnóstico completo con troubleshooting estructurado",
    metricas: ["7D FCR", "CRT"],
    descripcion: "Seguir los pasos de diagnóstico en orden y usar la base de conocimiento para llegar a la causa del problema, no solo al síntoma.",
    seVeBien: [
      "Hace preguntas de sondeo antes de proponer una solución.",
      "Sigue el flujo de troubleshooting sin saltarse pasos.",
      "Consulta la base de conocimiento cuando el caso no es rutinario."
    ],
    preguntas: {
      goal: [
        "¿Qué tan seguro te gustaría sentirte al diagnosticar un caso que no has visto antes?",
        "¿Qué impacto quieres lograr en tu tiempo de resolución?"
      ],
      reality: [
        "Cuéntame cómo empiezas el diagnóstico cuando el cliente describe el problema.",
        "¿En qué momento decides saltarte un paso del flujo? ¿Por qué?",
        "¿Cuándo fue la última vez que usaste la base de conocimiento? ¿Te ayudó?"
      ],
      options: [
        "¿Qué preguntas de sondeo podrías hacer siempre al inicio?",
        "¿Qué te ayudaría a encontrar más rápido el artículo correcto en la base de conocimiento?"
      ],
      way: [
        "¿Qué tipo de caso vas a practicar primero?",
        "¿Cómo vamos a saber en una semana si el cambio está funcionando?"
      ]
    },
    medible: "Flujo de troubleshooting completo en 9 de 10 llamadas monitoreadas; mejora de 7D FCR y CRT hacia la meta.",
    ejemplo: true
  },
  {
    id: "expectativas-claras",
    nombre: "Fijar expectativas claras y próximos pasos",
    metricas: ["NPS", "7D FCR"],
    descripcion: "Explicar al cliente qué va a pasar, cuándo y qué hacer si no ocurre, para que no tenga que volver a llamar.",
    seVeBien: [
      "Da tiempos concretos (por ejemplo, \"en 24 a 48 horas\").",
      "Explica qué debe hacer el cliente si algo no sucede.",
      "Confirma que el cliente entendió."
    ],
    preguntas: {
      goal: [
        "¿Cómo te gustaría que el cliente describiera tu llamada en la encuesta?",
        "¿Qué quieres que el cliente sepa al colgar?"
      ],
      reality: [
        "¿Cómo le explicas hoy al cliente lo que sigue después de la llamada?",
        "¿Qué comentarios de NPS has recibido sobre claridad o tiempos?"
      ],
      options: [
        "¿Cómo podrías confirmar que el cliente entendió sin que suene repetitivo?",
        "¿Qué información le serviría al cliente tener por escrito?"
      ],
      way: [
        "¿Qué tres datos vas a dar siempre al cerrar?",
        "¿En qué llamadas vas a empezar a aplicarlo?"
      ]
    },
    medible: "Próximos pasos con tiempo concreto en 9 de 10 llamadas monitoreadas; NPS hacia la meta del equipo.",
    ejemplo: true
  },
  {
    id: "empatia",
    nombre: "Empatía y reconocimiento del impacto en el cliente",
    metricas: ["NPS"],
    descripcion: "Reconocer cómo el problema técnico afecta al cliente y mostrar compromiso para resolverlo.",
    seVeBien: [
      "Reconoce la situación del cliente con sus propias palabras.",
      "Usa un tono que transmite interés, no solo un guion.",
      "Mantiene informado al cliente durante esperas o pruebas."
    ],
    preguntas: {
      goal: [
        "¿Qué te gustaría que el cliente sintiera al terminar la llamada?",
        "Si tu NPS mejorara, ¿qué sería diferente en tus llamadas?"
      ],
      reality: [
        "¿Cómo reaccionas cuando el cliente llega molesto por un problema que se repite?",
        "Escuchando esta llamada, ¿en qué momento crees que el cliente se sintió escuchado? ¿Y en cuál no?"
      ],
      options: [
        "¿De qué otras maneras podrías mostrarle al cliente que entiendes su situación?",
        "¿Qué haces cuando sientes que la llamada te está afectando a ti?"
      ],
      way: [
        "¿Qué vas a hacer distinto en los primeros dos minutos de cada llamada?",
        "¿Cómo te gustaría que te diera retroalimentación sobre esto?"
      ]
    },
    medible: "Reconocimiento de empatía en 9 de 10 llamadas monitoreadas; NPS individual hacia la meta.",
    ejemplo: true
  },
  {
    id: "oferta-pago",
    nombre: "Ofrecer y concretar el pago a clientes con saldo vencido",
    metricas: ["Stay Connected"],
    descripcion: "Identificar clientes con past due, explicar el saldo con claridad y concretar un pago o arreglo durante la llamada.",
    seVeBien: [
      "Revisa el estado de cuenta al inicio de la llamada.",
      "Menciona el saldo con naturalidad y sin juzgar.",
      "Ofrece opciones de pago y pide un compromiso concreto."
    ],
    preguntas: {
      goal: [
        "¿Qué resultado te gustaría ver en tu Stay Connected este mes?",
        "¿Cómo te gustaría sentirte cuando hablas de dinero con un cliente?"
      ],
      reality: [
        "¿En qué momento de la llamada revisas si el cliente tiene saldo vencido?",
        "¿Qué pasa por tu mente cuando tienes que mencionar el saldo?",
        "¿Qué objeciones escuchas más y cómo respondes hoy?"
      ],
      options: [
        "¿Cómo podrías conectar el pago con el beneficio de mantener el servicio funcionando?",
        "¿Qué opciones de pago podrías ofrecer antes de que el cliente diga que no?"
      ],
      way: [
        "¿Qué frase vas a usar para iniciar la conversación de pago?",
        "¿Cuántos ofrecimientos te comprometes a hacer en tu próximo turno?"
      ]
    },
    medible: "Oferta de pago en el 100% de llamadas con past due; Stay Connected hacia la meta.",
    ejemplo: true
  },
  {
    id: "elegibilidad-garantia",
    nombre: "Validar elegibilidad antes de un cambio por garantía",
    metricas: ["HSE", "C&A/100"],
    descripcion: "Completar el troubleshooting y validar la elegibilidad antes de procesar un cambio de equipo por garantía.",
    seVeBien: [
      "Agota el troubleshooting antes de ofrecer el cambio.",
      "Valida los criterios de garantía según la política.",
      "Documenta el motivo del cambio."
    ],
    preguntas: {
      goal: [
        "¿Qué te gustaría lograr con tus cambios de garantía (HSE) este mes?",
        "¿Cómo sabrías que un cambio de equipo realmente era necesario?"
      ],
      reality: [
        "¿Cuándo decides que el equipo necesita cambio?",
        "¿Qué haces cuando el cliente pide el cambio desde el inicio de la llamada?",
        "¿Qué tan claros tienes los criterios de elegibilidad?"
      ],
      options: [
        "¿Qué pasos podrías confirmar siempre antes de ofrecer el cambio?",
        "¿Cómo podrías explicarle al cliente por qué primero vamos a probar otras soluciones?"
      ],
      way: [
        "¿Qué checklist vas a usar antes de procesar un cambio?",
        "¿Cuándo revisamos juntos tus próximos cambios?"
      ]
    },
    medible: "Cambios de garantía con troubleshooting completo y elegibilidad validada en 10 de 10 casos revisados; HSE hacia la meta.",
    ejemplo: true
  },
  {
    id: "creditos-politica",
    nombre: "Aplicar créditos y ajustes según la política",
    metricas: ["C&A/100"],
    descripcion: "Usar créditos y ajustes solo cuando corresponde y en el monto correcto, resolviendo primero la causa del problema.",
    seVeBien: [
      "Resuelve la causa antes de ofrecer un crédito.",
      "Aplica el monto que indica la política.",
      "Explica el crédito con claridad y lo documenta."
    ],
    preguntas: {
      goal: [
        "¿Dónde te gustaría estar en C&A/100 dentro de un mes?",
        "¿Qué significa para ti un crédito bien aplicado?"
      ],
      reality: [
        "¿En qué situaciones sueles ofrecer un crédito?",
        "¿Qué pasa cuando el cliente pide un crédito y no aplica?",
        "¿Qué tan fácil te resulta encontrar la política de créditos durante la llamada?"
      ],
      options: [
        "¿Qué otra cosa de valor le podrías ofrecer al cliente en lugar de un crédito?",
        "¿Cómo podrías decir que no a un crédito sin afectar la experiencia?"
      ],
      way: [
        "¿Qué pregunta te vas a hacer antes de aplicar un crédito?",
        "¿Cómo vamos a dar seguimiento a tus ajustes de esta semana?"
      ]
    },
    medible: "C&A/100 dentro de la meta; créditos según política en 10 de 10 casos revisados.",
    ejemplo: true
  },
  {
    id: "control-llamada",
    nombre: "Control de la llamada y uso eficiente del tiempo",
    metricas: ["CRT"],
    descripcion: "Guiar la llamada hacia la resolución, minimizando esperas y silencios innecesarios.",
    seVeBien: [
      "Explica al cliente por qué y cuánto durará cada espera.",
      "Trabaja en las herramientas mientras conversa.",
      "Redirige con amabilidad cuando la conversación se desvía."
    ],
    preguntas: {
      goal: [
        "¿Qué te gustaría lograr con tu tiempo de resolución (CRT)?",
        "¿Cómo sería una llamada bien controlada para ti?"
      ],
      reality: [
        "¿En qué parte de la llamada sientes que se te va más el tiempo?",
        "¿Cuántas veces y por cuánto tiempo pones en espera al cliente?",
        "¿Qué haces cuando el cliente empieza a hablar de otros temas?"
      ],
      options: [
        "¿Qué podrías preparar antes de poner al cliente en espera?",
        "¿Qué atajos en las herramientas te podrían ahorrar tiempo?"
      ],
      way: [
        "¿Qué cambio vas a hacer primero para reducir esperas?",
        "¿Cómo vas a medir tu progreso esta semana?"
      ]
    },
    medible: "Reducir el CRT del actual hacia la meta del equipo; esperas explicadas en 9 de 10 llamadas monitoreadas.",
    ejemplo: true
  }
];
