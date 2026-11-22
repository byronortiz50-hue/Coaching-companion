/*
 * ============================================================
 *  ESTILOS DE APRENDIZAJE  (modelo VARK)
 * ============================================================
 *  El "id" debe coincidir con las llaves de "opciones" en
 *  datos/causas-raiz.js (visual, auditivo, lectura, kinestesico).
 * ============================================================
 */
window.CC = window.CC || {};

CC.estilosAprendizaje = [
  {
    id: "visual",
    nombre: "Visual",
    descripcion: "Aprende mejor viendo: diagramas, gráficas, demostraciones en pantalla.",
    pistas: "Pide que le muestres, dibuja mientras explica, recuerda dónde estaba algo en la pantalla."
  },
  {
    id: "auditivo",
    nombre: "Auditivo",
    descripcion: "Aprende mejor escuchando y conversando: explicaciones, grabaciones, discusión.",
    pistas: "Prefiere que se lo expliques, repite en voz alta, recuerda frases exactas."
  },
  {
    id: "lectura",
    nombre: "Lectura / escritura",
    descripcion: "Aprende mejor leyendo y escribiendo: artículos, guías, notas, resúmenes.",
    pistas: "Toma muchas notas, pide el documento o el enlace, prefiere instrucciones por escrito."
  },
  {
    id: "kinestesico",
    nombre: "Kinestésico (práctico)",
    descripcion: "Aprende mejor haciendo: práctica, role play, casos reales en las herramientas.",
    pistas: "Quiere probarlo de una vez, aprende por ensayo y error, se aburre con explicaciones largas."
  }
];

/* Pregunta sugerida para descubrir el estilo si no lo conoces. */
CC.preguntaEstilo = "Piensa en la última vez que aprendiste algo nuevo en el trabajo (una herramienta o un proceso). ¿Qué te ayudó más a aprenderlo: verlo, que te lo explicaran, leerlo o practicarlo?";
