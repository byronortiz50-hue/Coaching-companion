/*
 * ============================================================
 *  PREGUNTAS GENERALES POR ETAPA GROW
 * ============================================================
 *  Se muestran para cualquier behavior, después de las preguntas
 *  propias del behavior (datos/behaviors.js).
 *  Puedes agregar, quitar o cambiar preguntas libremente.
 * ============================================================
 */
window.CC = window.CC || {};

CC.etapasGrow = [
  {
    id: "goal",
    letra: "G",
    nombre: "Goal",
    nombreEs: "Meta",
    proposito: "Que el representante defina qué quiere lograr. La meta debe ser suya, no del supervisor.",
    consejo: "Deja que hable primero. Si la meta que propone es muy baja o muy alta, pregunta \"¿qué haría falta para…?\" en lugar de corregirla.",
    preguntas: [
      "¿Qué te gustaría lograr al terminar esta sesión?",
      "Si este behavior estuviera al 100%, ¿qué sería diferente en tus llamadas?",
      "¿Por qué es importante para ti mejorar en esto?",
      "¿Cómo se vería el éxito en 30 días?",
      "¿Qué impacto tendría en tus clientes? ¿Y en tus métricas?"
    ]
  },
  {
    id: "reality",
    letra: "R",
    nombre: "Reality",
    nombreEs: "Realidad",
    proposito: "Entender qué pasa hoy y por qué. Aquí se descubre la causa raíz (will, skill, knowledge, confidence).",
    consejo: "Usa ejemplos concretos (una llamada monitoreada, un caso reciente). Pregunta \"qué\" y \"cómo\" más que \"por qué\" para no sonar acusatorio.",
    preguntas: [
      "¿Qué está pasando hoy con este behavior? Dame un ejemplo reciente.",
      "Del 1 al 10, ¿dónde te ubicas hoy? ¿Por qué no un número más bajo?",
      "¿Qué has intentado hasta ahora? ¿Qué funcionó y qué no?",
      "¿Qué está fuera de tu control en esta situación?",
      "Escuchando la llamada, ¿qué harías diferente?"
    ]
  },
  {
    id: "options",
    letra: "O",
    nombre: "Options",
    nombreEs: "Opciones",
    proposito: "Que el representante genere varias alternativas antes de elegir. El supervisor complementa al final, no al inicio.",
    consejo: "Pide al menos tres ideas. Cuando se quede sin ideas, pregunta \"¿y qué más?\". Ofrece tus sugerencias solo después.",
    preguntas: [
      "¿Qué podrías hacer diferente?",
      "¿Qué más? (repite hasta tener al menos tres ideas)",
      "¿Qué haría el mejor representante del equipo en esta situación?",
      "Si no hubiera ningún obstáculo, ¿qué harías?",
      "¿Qué apoyo necesitas de mí o del equipo?",
      "De todas estas ideas, ¿cuál crees que tendría más impacto?"
    ]
  },
  {
    id: "way",
    letra: "W",
    nombre: "Way forward",
    nombreEs: "Camino a seguir",
    proposito: "Convertir la opción elegida en un compromiso concreto. Esto alimenta el plan de acción SMART.",
    consejo: "Pide que el representante diga el compromiso con sus propias palabras. Acuerda una fecha de seguimiento antes de terminar.",
    preguntas: [
      "¿Qué vas a hacer exactamente y cuándo empiezas?",
      "¿Qué obstáculos podrían aparecer y cómo los vas a manejar?",
      "Del 1 al 10, ¿qué tan comprometido estás con este plan? ¿Qué lo subiría un punto?",
      "¿Cómo vamos a saber que está funcionando?",
      "¿Cuándo revisamos juntos el avance?"
    ]
  }
];
