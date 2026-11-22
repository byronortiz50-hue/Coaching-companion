/*
 * ============================================================
 *  CAUSAS RAÍZ  (will, skill, knowledge, confidence)
 * ============================================================
 *  Para cada causa:
 *   senales       Lo que el supervisor puede observar o escuchar.
 *                 Al marcarlas, la herramienta sugiere la causa
 *                 más probable.
 *   preguntas     Preguntas de autodescubrimiento para la etapa
 *                 Reality, que ayudan a confirmar la causa.
 *   enfoque       Hacia dónde orientar la ayuda.
 *   opciones      Ideas de ayuda según el estilo de aprendizaje
 *                 del representante (ver datos/estilos-aprendizaje.js).
 *                 "todos" se muestra con cualquier estilo.
 * ============================================================
 */
window.CC = window.CC || {};

CC.causasRaiz = [
  {
    id: "knowledge",
    nombre: "Knowledge",
    nombreEs: "Conocimiento",
    resumen: "No sabe qué hacer o qué dice el procedimiento.",
    pruebaRapida: "¿Sabe cuál es el paso correcto si se lo preguntas directamente?  Si no lo sabe → Knowledge.",
    senales: [
      "No puede explicar el procedimiento o la política.",
      "Da información incorrecta o desactualizada al cliente.",
      "No sabe dónde buscar en la base de conocimiento.",
      "El proceso cambió hace poco o es nuevo en la línea."
    ],
    preguntas: [
      "Explícame, paso a paso, cómo se maneja este tipo de caso.",
      "¿Dónde buscarías la información si tuvieras una duda en plena llamada?",
      "¿Qué parte del proceso te resulta menos clara?",
      "¿Cuándo fue la última vez que revisaste el procedimiento?"
    ],
    enfoque: "Enseñar o refrescar el contenido y asegurar que sabe dónde consultarlo.",
    opciones: {
      todos: [
        "Revisar juntos el procedimiento o artículo de la base de conocimiento.",
        "Inscribir en el refuerzo o módulo de capacitación correspondiente."
      ],
      visual: [
        "Entregar un diagrama de flujo o infografía del proceso.",
        "Mostrar en pantalla dónde está el artículo en la base de conocimiento."
      ],
      auditivo: [
        "Explicar el proceso conversando y pedirle que lo repita con sus palabras.",
        "Escuchar juntos una llamada donde el proceso se hace bien."
      ],
      lectura: [
        "Compartir el artículo o política para leer y subrayar los puntos clave.",
        "Pedirle que escriba un resumen de una página del procedimiento."
      ],
      kinestesico: [
        "Recorrer el proceso en las herramientas reales, paso a paso.",
        "Resolver casos de práctica usando la base de conocimiento."
      ]
    }
  },
  {
    id: "skill",
    nombre: "Skill",
    nombreEs: "Habilidad",
    resumen: "Sabe qué hacer, pero todavía no lo ejecuta bien o con fluidez.",
    pruebaRapida: "¿Lo sabe explicar, pero al hacerlo en la llamada no le sale bien?  → Skill.",
    senales: [
      "Explica bien el proceso, pero en la llamada lo ejecuta incompleto o desordenado.",
      "Se le dificulta hacerlo con clientes difíciles o casos complejos.",
      "Es lento en las herramientas o pierde el hilo de la conversación.",
      "Mejora cuando practica, pero no es consistente."
    ],
    preguntas: [
      "Sabes cómo se hace; ¿qué pasa en la llamada que hace que no salga como quieres?",
      "¿En qué parte exacta te cuesta más?",
      "¿Con qué tipo de cliente o caso te resulta más difícil?",
      "Si lo practicáramos ahora, ¿cómo lo harías?"
    ],
    enfoque: "Práctica guiada y retroalimentación frecuente hasta que se vuelva hábito.",
    opciones: {
      todos: [
        "Role play del momento de la llamada que cuesta, con retroalimentación inmediata.",
        "Monitoreos adicionales enfocados solo en este behavior."
      ],
      visual: [
        "Ver una grabación propia junto a una de un top performer y comparar.",
        "Tarjeta visual de los pasos pegada en el puesto de trabajo."
      ],
      auditivo: [
        "Escuchar sus propias llamadas y autoevaluarse en voz alta.",
        "Side by side escuchando a un compañero con alto desempeño."
      ],
      lectura: [
        "Guion o frases de apoyo por escrito para practicar.",
        "Autoevaluación escrita de tres llamadas por semana."
      ],
      kinestesico: [
        "Role play repetido hasta lograr fluidez.",
        "Supervisor o mentor al lado durante llamadas reales (side by side inverso)."
      ]
    }
  },
  {
    id: "will",
    nombre: "Will",
    nombreEs: "Voluntad / motivación",
    resumen: "Sabe y puede hacerlo, pero no lo hace o no le ve sentido.",
    pruebaRapida: "¿Lo hace bien cuando sabe que lo están monitoreando, pero no el resto del tiempo?  → Will.",
    senales: [
      "Lo hace bien cuando sabe que lo monitorean, pero no siempre.",
      "No ve el beneficio o cree que \"no sirve\".",
      "Hay factores personales, de carga o de ambiente que le afectan.",
      "Muestra poco interés en la retroalimentación."
    ],
    preguntas: [
      "¿Qué tan importante es para ti este behavior, del 1 al 10? ¿Por qué ese número?",
      "¿Qué ganas tú y qué gana el cliente cuando lo haces?",
      "¿Qué hace que algunas veces lo hagas y otras no?",
      "¿Hay algo, dentro o fuera del trabajo, que esté afectando tu desempeño?",
      "¿Qué te motivaría a hacerlo en todas las llamadas?"
    ],
    enfoque: "Conectar el behavior con lo que le importa al representante, aclarar expectativas y consecuencias, y quitar obstáculos.",
    opciones: {
      todos: [
        "Conectar el behavior con una meta personal del representante (bono, crecimiento, reconocimiento).",
        "Aclarar la expectativa y el impacto en el cliente y en el equipo.",
        "Identificar y quitar obstáculos (carga, horario, herramientas)."
      ],
      visual: [
        "Mostrar su tendencia de métricas en una gráfica y dónde quiere llegar.",
        "Tablero visible del equipo con reconocimiento por avances."
      ],
      auditivo: [
        "Escuchar juntos un comentario real de NPS de un cliente afectado.",
        "Conversación uno a uno sobre sus metas profesionales."
      ],
      lectura: [
        "Compartir comentarios escritos de clientes (verbatims de encuesta).",
        "Que escriba su propio \"por qué\" y metas para el mes."
      ],
      kinestesico: [
        "Darle un rol activo: que comparta una buena práctica con el equipo.",
        "Reto corto con meta diaria y reconocimiento inmediato."
      ]
    }
  },
  {
    id: "confidence",
    nombre: "Confidence",
    nombreEs: "Confianza",
    resumen: "Sabe y puede, pero duda, se pone nervioso o evita el momento.",
    pruebaRapida: "¿Lo hace bien en práctica, pero lo evita o titubea con clientes reales?  → Confidence.",
    senales: [
      "Lo hace bien en práctica, pero lo evita con clientes reales.",
      "Titubea, se disculpa de más o cambia de tema en ese momento.",
      "Le preocupa la reacción del cliente (por ejemplo, al hablar de pagos o negar un crédito).",
      "Pide ayuda o transfiere aunque sabe la respuesta."
    ],
    preguntas: [
      "¿Cómo te sientes en ese momento de la llamada?",
      "¿Qué es lo peor que crees que podría pasar si lo haces?",
      "¿Cuándo te ha salido bien? ¿Qué hiciste esa vez?",
      "¿Qué te ayudaría a sentirte más seguro?"
    ],
    enfoque: "Construir seguridad con logros pequeños, reconocimiento y práctica en un ambiente seguro.",
    opciones: {
      todos: [
        "Reconocer en concreto lo que ya hace bien (con ejemplos de llamadas).",
        "Empezar con un objetivo pequeño y alcanzable, e ir subiendo."
      ],
      visual: [
        "Mostrarle sus propias llamadas exitosas como evidencia de que puede.",
        "Registro visual de sus avances semana a semana."
      ],
      auditivo: [
        "Escuchar sus mejores llamadas y comentar qué hizo bien.",
        "Practicar respuestas a objeciones en voz alta con el supervisor."
      ],
      lectura: [
        "Banco escrito de respuestas a las objeciones más comunes.",
        "Diario corto: una llamada exitosa por día y por qué salió bien."
      ],
      kinestesico: [
        "Role play en ambiente seguro, empezando por casos fáciles.",
        "Hacer las primeras llamadas reales con el supervisor al lado."
      ]
    }
  }
];
