/*
 * ============================================================
 *  RECOMENDACIONES PERSONALIZADAS
 *  (behavior / sub-behavior × métrica × causa raíz × estilo)
 * ============================================================
 *  La recomendación del paso 4 se arma con cuatro piezas:
 *
 *   CC.metricaDetalle[métrica]
 *       queMide     Qué mide la métrica y hacia dónde debe moverse.
 *       indicador   Cómo medir el avance en la métrica (plan SMART).
 *       porCausa    Por qué la métrica se cae cuando la causa es
 *                   knowledge, skill, will o confidence.
 *
 *   CC.impacto[behaviorId][métrica]
 *       Cómo ese behavior mueve esa métrica. Cualquier behavior
 *       aplica a cualquier métrica; esto explica el "cómo".
 *
 *   CC.impactoSub[behaviorId][númeroDeSubBehavior][métrica]
 *       (Opcional) Texto más preciso para un sub-behavior concreto.
 *       Si existe, reemplaza al de CC.impacto. El número empieza
 *       en 0, en el mismo orden que en datos/behaviors.js.
 *
 *   CC.accionesPorCausa[causa][estilo]
 *       Acciones de coaching adaptadas al estilo de aprendizaje.
 *       Se personalizan con estas marcas:
 *         {behavior}  nombre del behavior
 *         {paso}      el sub-behavior elegido (o el behavior)
 *         {metrica}   la métrica elegida
 * ============================================================
 */
window.CC = window.CC || {};

CC.metricaDetalle = {
  "NPS": {
    queMide: "Qué tan dispuesto está el cliente a recomendarnos después de la interacción. Se busca subirlo.",
    indicador: "Subir el NPS del representante en las encuestas del periodo",
    porCausa: {
      knowledge: "El cliente se va con información incompleta o incorrecta y siente que no le resolvieron; la encuesta castiga la falta de dominio.",
      skill: "El representante sabe qué decir, pero la forma (tono, orden, claridad) no transmite cuidado; el cliente califica la experiencia, no solo la solución.",
      will: "El cliente percibe desinterés o trato mecánico; es lo que más baja la recomendación aunque el problema se resuelva.",
      confidence: "Las dudas, muletillas o titubeos hacen que el cliente desconfíe de la solución y no recomiende."
    }
  },
  "7D FCR": {
    queMide: "Que el cliente no vuelva a llamar antes de 7 días por el mismo motivo. Se busca subir el porcentaje resuelto al primer contacto.",
    indicador: "Bajar las rellamadas a 7 días del representante",
    porCausa: {
      knowledge: "No conoce el paso o la política correcta, así que la solución queda incompleta y el cliente vuelve a llamar.",
      skill: "Conoce la solución, pero la ejecuta incompleta o sin confirmar que funcionó, y el issue reaparece.",
      will: "Cierra rápido sin asegurar la resolución ni los issues adyacentes porque no ve el valor de hacerlo.",
      confidence: "Evita explicar o comprometerse con una solución, transfiere o deja la llamada abierta, y el cliente regresa."
    }
  },
  "Stay Connected": {
    queMide: "Que los clientes con saldo vencido (past due) paguen o hagan un arreglo y sigan conectados. Se busca subirlo.",
    indicador: "Subir el porcentaje de clientes past due con pago o arreglo de pago",
    porCausa: {
      knowledge: "No conoce las opciones de pago, arreglos o fechas de suspensión, así que no puede ofrecer una salida concreta.",
      skill: "No encuentra el momento ni la forma de pedir el pago y la conversación termina sin compromiso.",
      will: "Evita pedir el pago porque no es el motivo de la llamada o siente que incomoda al cliente.",
      confidence: "Le incomoda hablar de dinero; pide el pago con dudas y el cliente lo posterga."
    }
  },
  "CRT": {
    queMide: "El tiempo que toma resolver el caso del cliente. Se busca bajarlo sin sacrificar la calidad.",
    indicador: "Bajar el tiempo de resolución (CRT) del representante",
    porCausa: {
      knowledge: "Busca la información en plena llamada o en el lugar equivocado y alarga la resolución.",
      skill: "Trabaja en secuencia en vez de en paralelo, navega lento en las herramientas o pierde el hilo.",
      will: "No prioriza la eficiencia; deja silencios, repite pasos o alarga la llamada sin necesidad.",
      confidence: "Duda, pide ayuda o revisa varias veces antes de actuar, y el caso tarda más."
    }
  },
  "HSE": {
    queMide: "Cambios de equipo por garantía. Se busca bajar los cambios que no eran necesarios.",
    indicador: "Bajar los cambios de garantía (HSE) evitables del representante",
    porCausa: {
      knowledge: "No conoce el troubleshooting completo o los criterios de garantía y manda a cambio un equipo que se podía arreglar.",
      skill: "Hace el troubleshooting incompleto o desordenado y llega a la garantía antes de agotar los pasos.",
      will: "Ofrece el cambio como salida rápida porque es más fácil que hacer todo el troubleshooting.",
      confidence: "Cede ante la presión del cliente que pide equipo nuevo en lugar de guiarlo por los pasos."
    }
  },
  "C&A/100": {
    queMide: "Créditos o ajustes por cada 100 llamadas. Se busca bajar los créditos que no correspondían.",
    indicador: "Bajar los créditos y ajustes por cada 100 llamadas (C&A/100)",
    porCausa: {
      knowledge: "No conoce la política de créditos o no sabe explicar el cargo, así que acredita para salir del paso.",
      skill: "No sabe negociar ni explicar el cargo con claridad, y el crédito termina siendo la única salida.",
      will: "Usa el crédito como atajo para cerrar la llamada o para evitar la molestia del cliente.",
      confidence: "Cede ante el primer reclamo del cliente porque no se siente seguro de sostener la política."
    }
  }
};

CC.impacto = {
  "visual-audit": {
    "NPS": "Al revisar la cuenta antes de preguntar, el cliente no tiene que repetir su historia y siente que lo conocen.",
    "7D FCR": "Detecta desde el inicio cargos, issues pendientes y oportunidades, y los resuelve todos en la misma llamada.",
    "Stay Connected": "Ve el balance vencido y el historial de pagos desde el inicio, y prepara la conversación de pago.",
    "CRT": "Tener la foto completa de la cuenta evita preguntas y búsquedas durante la llamada.",
    "HSE": "Revisar memos y uso muestra si el equipo ya tuvo troubleshooting o cambios antes, y evita un cambio innecesario.",
    "C&A/100": "Revisar créditos previos e historial evita dar un crédito repetido o que no corresponde."
  },
  "tools-resources": {
    "NPS": "Dar información correcta y completa (C2, The Fix) y enviarla por escrito genera confianza en la solución.",
    "7D FCR": "Seguir The Fix completo y enviar instrucciones y próximos pasos por ATLAS o Grand Central evita que el cliente vuelva a llamar.",
    "Stay Connected": "Revisar NBA y promociones permite ofrecer opciones de pago o planes que ayudan al cliente a ponerse al día.",
    "CRT": "Ir directo a la herramienta correcta (Memos, NBA, The Fix) acorta el diagnóstico y la resolución.",
    "HSE": "Seguir el troubleshooting de The Fix paso a paso resuelve el equipo sin necesidad de un cambio de garantía.",
    "C&A/100": "Leer la política en C2 da la respuesta correcta y evita créditos dados por no saber explicarla."
  },
  "thank-the-customer": {
    "NPS": "Un agradecimiento específico (tenure, militar, líneas nuevas) hace que el cliente se sienta valorado y lo recuerde en la encuesta.",
    "7D FCR": "Reconocer el esfuerzo del cliente cierra la llamada en buenos términos y reduce rellamadas por insatisfacción.",
    "Stay Connected": "Agradecer el pago o el compromiso de pago refuerza la conducta y mejora el cumplimiento del arreglo.",
    "CRT": "Un agradecimiento breve y genuino mejora la conversación sin alargarla.",
    "HSE": "Agradecer la paciencia durante el troubleshooting hace que el cliente acepte completar los pasos en vez de exigir un cambio.",
    "C&A/100": "Valorar al cliente con palabras reduce la sensación de que necesita una compensación económica."
  },
  "set-expectations": {
    "NPS": "Un cliente que sabe qué va a pasar y cuándo no se lleva sorpresas, y eso protege su calificación.",
    "7D FCR": "Explicar la próxima factura, los tiempos y qué hacer después elimina la razón más común para volver a llamar.",
    "Stay Connected": "Dejar claras las fechas de pago, suspensión y reconexión ayuda a que el cliente cumpla su arreglo.",
    "CRT": "Expectativas claras evitan que el cliente regrese a preguntar y alargue el caso.",
    "HSE": "Explicar cuánto tarda en verse el resultado del troubleshooting evita que el cliente pida un cambio por impaciencia.",
    "C&A/100": "Explicar por adelantado prorrateos y cargos de la próxima factura evita reclamos y créditos después."
  },
  "self-help": {
    "NPS": "Un cliente que sabe resolver por sí mismo se siente con control y con menos esfuerzo.",
    "7D FCR": "Enseñar a confirmar o resolver por web, app o IVR evita llamadas de seguimiento.",
    "Stay Connected": "Mostrar cómo pagar o programar pagos por web, app o IVR facilita que el cliente se mantenga al día.",
    "CRT": "Las próximas gestiones se resuelven sin un agente, y el cliente obtiene resultados más rápido.",
    "HSE": "Enseñar ajustes básicos del equipo por la app evita que el cliente llame pidiendo un cambio.",
    "C&A/100": "Enseñar a revisar la factura y el uso en la app reduce reclamos que terminan en créditos."
  },
  "save-offer": {
    "NPS": "Razones personalizadas para quedarse muestran que la compañía valora al cliente.",
    "7D FCR": "Resolver el motivo real de la cancelación evita que el cliente vuelva a llamar para cancelar.",
    "Stay Connected": "Una oferta de retención bien elegida puede bajar la cuenta del cliente y facilitar que se ponga al día.",
    "CRT": "Usar la guía de retención lleva directo a la oferta adecuada sin dar vueltas.",
    "HSE": "Si el motivo es el equipo, ofrecer alternativas de la guía evita cambios de garantía como moneda de retención.",
    "C&A/100": "Ofrecer razones de valor en lugar de créditos retiene sin aumentar los ajustes."
  },
  "retention-escalation": {
    "NPS": "Manejar la escalación con calma y una oferta de permanencia cambia la percepción de un cliente molesto.",
    "7D FCR": "Resolver la escalación en el primer contacto evita que el cliente vuelva a llamar pidiendo un supervisor.",
    "Stay Connected": "Una oferta de permanencia puede incluir un arreglo que mantenga conectado al cliente con saldo vencido.",
    "CRT": "Tomar la escalación sin transferir innecesariamente acorta el tiempo total de resolución.",
    "HSE": "Ofrecer permanencia con soluciones al problema real evita cambios de equipo usados solo para calmar al cliente.",
    "C&A/100": "Ofertas de permanencia dentro de la política evitan créditos excesivos para retener."
  },
  "restate": {
    "NPS": "Repetir el problema con tus palabras demuestra que escuchaste y el cliente se siente entendido desde el inicio.",
    "7D FCR": "Confirmar qué busca el cliente evita resolver el problema equivocado y que vuelva a llamar.",
    "Stay Connected": "Reconocer la situación del cliente antes de hablar del saldo abre la puerta a un compromiso de pago.",
    "CRT": "Alinear el problema al inicio evita diagnósticos equivocados que alargan la llamada.",
    "HSE": "Precisar el síntoma real del equipo dirige el troubleshooting y evita un cambio innecesario.",
    "C&A/100": "Entender exactamente el reclamo permite explicarlo bien en vez de acreditar por no tenerlo claro."
  },
  "relate": {
    "NPS": "Conectar con la frustración del cliente y reforzar el valor del servicio mejora directamente su disposición a recomendar.",
    "7D FCR": "Un cliente que se siente comprendido acepta la solución y no llama de nuevo buscando otra respuesta.",
    "Stay Connected": "La relación de confianza facilita hablar del saldo vencido sin que el cliente se ponga a la defensiva.",
    "CRT": "Una buena relación reduce la resistencia y hace la conversación más fluida.",
    "HSE": "Reforzar el valor del equipo y conectar con el cliente ayuda a que acepte completar el troubleshooting.",
    "C&A/100": "Reforzar el valor de productos y servicios reduce la sensación de que necesita una compensación."
  },
  "recap": {
    "NPS": "Cerrar con un resumen y la garantía personal de resolución deja al cliente tranquilo y seguro.",
    "7D FCR": "Resumir lo resuelto y los issues adyacentes, y enviar la garantía, asegura que no quede nada pendiente.",
    "Stay Connected": "Repasar el monto y la fecha del pago o arreglo aumenta la probabilidad de que el cliente cumpla.",
    "CRT": "Un recap claro evita llamadas de aclaración que alargan la resolución.",
    "HSE": "Resumir los pasos de troubleshooting aplicados evita que el cliente vuelva pidiendo un cambio.",
    "C&A/100": "Dejar claro lo acordado evita reclamos posteriores que terminan en créditos."
  },
  "process-compliance": {
    "NPS": "Seguir el proceso con precisión da resultados consistentes y evita errores que molestan al cliente.",
    "7D FCR": "Completar todos los pasos requeridos asegura que la solución quede bien hecha a la primera.",
    "Stay Connected": "Cumplir el proceso de cobranza y arreglos de pago asegura que el compromiso quede registrado y válido.",
    "CRT": "Un proceso bien seguido evita retrabajo y correcciones posteriores.",
    "HSE": "Cumplir los criterios del proceso de garantía evita cambios que no corresponden.",
    "C&A/100": "Seguir la política de ajustes evita créditos fuera de proceso."
  },
  "probing-questions": {
    "NPS": "Las preguntas correctas muestran interés genuino y llevan a una solución que de verdad le sirve al cliente.",
    "7D FCR": "Descubrir la causa real y las necesidades ocultas permite resolver todo en una sola llamada.",
    "Stay Connected": "Preguntar por la situación del cliente permite encontrar el arreglo de pago que sí puede cumplir.",
    "CRT": "Preguntas específicas llegan rápido al diagnóstico en vez de probar soluciones al azar.",
    "HSE": "Preguntas precisas sobre el síntoma separan un problema de configuración de una falla real del equipo.",
    "C&A/100": "Entender el origen del reclamo permite resolverlo con una explicación en vez de un crédito."
  },
  "power-words": {
    "NPS": "Palabras de seguridad y compromiso (\"me encargo\", \"vamos a resolverlo\") elevan la confianza del cliente.",
    "7D FCR": "Un lenguaje firme hace que el cliente confíe en la solución y no busque una segunda opinión.",
    "Stay Connected": "Hablar con seguridad sobre el pago y sus beneficios ayuda a concretar el compromiso.",
    "CRT": "Frases claras y decididas evitan rodeos y avanzan la conversación.",
    "HSE": "Transmitir seguridad en el troubleshooting reduce la insistencia del cliente en un equipo nuevo.",
    "C&A/100": "Un lenguaje seguro al explicar los cargos reduce la presión para dar créditos."
  },
  "plan-product-knowledge": {
    "NPS": "Recomendar el plan o equipo adecuado con información correcta hace que el cliente sienta que recibió un buen consejo.",
    "7D FCR": "Información correcta de planes, upgrades y trade-ins evita sorpresas que generan rellamadas.",
    "Stay Connected": "Conocer los planes permite ofrecer uno que se ajuste a lo que el cliente puede pagar.",
    "CRT": "Dominar las opciones evita búsquedas y consultas durante la llamada.",
    "HSE": "Conocer bien el equipo permite resolver dudas de uso que no son fallas y evitar cambios.",
    "C&A/100": "Explicar bien lo que incluye cada plan evita reclamos por cargos inesperados y los créditos que generan."
  },
  "payment-handling": {
    "NPS": "Un manejo de pagos claro y respetuoso hace que el cliente se sienta apoyado, no presionado.",
    "7D FCR": "Procesar el pago o arreglo correctamente evita llamadas para corregirlo o confirmarlo.",
    "Stay Connected": "Concretar el pago o un arreglo con fecha y monto es lo que mueve directamente esta métrica.",
    "CRT": "Dominar el proceso de pago lo completa sin demoras ni errores.",
    "HSE": "Separar la conversación de pago de la del equipo evita ofrecer un cambio como concesión.",
    "C&A/100": "Ofrecer arreglos de pago en lugar de ajustes reduce los créditos para salir del paso."
  },
  "ownership": {
    "NPS": "Un representante que se hace cargo sin culpar a otros genera confianza y lealtad.",
    "7D FCR": "Comprometerse personalmente con la resolución y buscar el apoyo correcto evita que el cliente quede pendiente.",
    "Stay Connected": "Asumir la conversación del saldo vencido, aunque no sea el motivo de la llamada, mantiene al cliente conectado.",
    "CRT": "Resolver en lugar de transferir o devolver el caso acorta el tiempo total de resolución.",
    "HSE": "Hacerse cargo del troubleshooting completo evita usar el cambio de equipo como salida rápida.",
    "C&A/100": "Resolver la causa del problema en vez de compensarlo reduce los créditos."
  },
  "onboarding": {
    "NPS": "Acompañar al cliente a completar los cambios aceptados hace que disfrute lo que contrató.",
    "7D FCR": "Una tarea concreta para terminar la configuración evita que llame porque no supo completarla.",
    "Stay Connected": "Un cliente que usa bien sus servicios ve su valor y tiene más motivación para mantenerse al día.",
    "CRT": "Guiar la tarea en la llamada evita gestiones posteriores que alargan la resolución.",
    "HSE": "Configurar bien el equipo nuevo desde el inicio evita que parezca una falla y termine en cambio.",
    "C&A/100": "Completar bien ofertas y cambios en la cuenta evita errores de facturación que terminan en créditos."
  },
  "negotiate": {
    "NPS": "Negociar con transparencia hace que el cliente sienta un trato justo aunque no reciba todo lo que pidió.",
    "7D FCR": "Un acuerdo claro y aceptado evita que el cliente vuelva a llamar buscando otra respuesta.",
    "Stay Connected": "Negociar un pago o arreglo realista es la vía directa para que el cliente se ponga al día.",
    "CRT": "Llegar a un acuerdo sin dar vueltas acorta la conversación.",
    "HSE": "Negociar alternativas evita conceder un cambio de equipo que no corresponde.",
    "C&A/100": "Negociar considerando el impacto para la compañía evita créditos que no correspondían."
  },
  "memo-account": {
    "NPS": "Un buen memo evita que el próximo agente le haga repetir todo al cliente.",
    "7D FCR": "Documentar qué se hizo y qué queda pendiente permite que, si el cliente vuelve, se resuelva rápido y bien.",
    "Stay Connected": "Dejar el arreglo de pago (monto y fecha) en el memo permite darle seguimiento y que se cumpla.",
    "CRT": "Un memo claro ahorra tiempo de investigación en contactos futuros.",
    "HSE": "Documentar el troubleshooting realizado evita que otro agente mande un cambio sin necesidad.",
    "C&A/100": "Registrar los créditos y su razón evita que se den créditos duplicados."
  },
  "dead-air": {
    "NPS": "Explicar lo que estás haciendo mientras trabajas evita que el cliente se sienta abandonado.",
    "7D FCR": "Usar los silencios para descubrir otros issues permite resolverlos en la misma llamada.",
    "Stay Connected": "Los momentos de espera son una buena oportunidad para mencionar el saldo y las opciones de pago.",
    "CRT": "Llenar los silencios con preguntas útiles aprovecha el tiempo en lugar de alargarlo.",
    "HSE": "Narrar los pasos del troubleshooting mantiene al cliente involucrado y paciente hasta el final.",
    "C&A/100": "Mantener la conversación activa reduce la frustración que lleva a pedir créditos."
  },
  "customer-friendly-terms": {
    "NPS": "Un lenguaje sencillo hace que el cliente entienda y se sienta respetado.",
    "7D FCR": "Si el cliente entiende la solución sin términos técnicos, puede seguirla sin volver a llamar.",
    "Stay Connected": "Explicar el saldo, la suspensión y las opciones en palabras sencillas facilita el compromiso de pago.",
    "CRT": "Evitar jerga reduce repeticiones y aclaraciones durante la llamada.",
    "HSE": "Instrucciones de troubleshooting en palabras sencillas hacen que el cliente las complete con éxito.",
    "C&A/100": "Explicar los cargos en lenguaje claro evita malentendidos que terminan en créditos."
  },
  "customer-education": {
    "NPS": "Un cliente que aprende algo útil valora la llamada más allá de la solución.",
    "7D FCR": "Enseñar procesos, avisos y reclamos hace que el cliente sepa qué hacer y no vuelva a llamar.",
    "Stay Connected": "Educar sobre fechas de pago, avisos de suspensión y opciones evita que el cliente caiga en past due.",
    "CRT": "Un cliente educado resuelve dudas simples sin necesidad de un agente.",
    "HSE": "Enseñar el uso correcto del equipo evita reportes de falla que terminan en cambio.",
    "C&A/100": "Educar sobre la factura y los cargos reduce reclamos que terminan en créditos."
  },
  "common-pleasantries": {
    "NPS": "Cortesías auténticas y el nombre del cliente hacen que la experiencia se sienta personal.",
    "7D FCR": "Un trato cordial hace que el cliente confíe y acepte la solución propuesta.",
    "Stay Connected": "La cortesía hace que la conversación del pago se sienta respetuosa y no como un cobro agresivo.",
    "CRT": "Cortesías breves y sin interrumpir mantienen la llamada fluida.",
    "HSE": "Un cliente bien tratado tiene más paciencia para completar el troubleshooting.",
    "C&A/100": "Un trato amable reduce la escalada emocional que lleva a pedir compensaciones."
  },
  "collect": {
    "NPS": "Ofrecer ayuda con el saldo de forma amable evita sorpresas desagradables como una suspensión.",
    "7D FCR": "Resolver el saldo en la misma llamada evita que el cliente vuelva por una suspensión o aviso.",
    "Stay Connected": "Pedir el pago del saldo, aunque no sea el motivo de la llamada, es el behavior que más mueve esta métrica.",
    "CRT": "Resolver el pago en la misma interacción evita un contacto adicional por cobranza.",
    "HSE": "Mantener la cuenta al día evita que restricciones por saldo se confundan con fallas del equipo.",
    "C&A/100": "Cobrar el saldo en lugar de ajustarlo reduce créditos dados para evitar la conversación."
  },
  "check-for-understanding": {
    "NPS": "Confirmar que el cliente entendió le da tranquilidad y evita frustración posterior.",
    "7D FCR": "Preguntas cerradas al final aseguran que el cliente entendió la solución y los próximos pasos.",
    "Stay Connected": "Confirmar el monto, la fecha y el método de pago asegura que el arreglo se cumpla.",
    "CRT": "Verificar el entendimiento a tiempo evita corregir malentendidos más adelante.",
    "HSE": "Confirmar que el cliente sabe repetir el troubleshooting evita que pida un cambio después.",
    "C&A/100": "Confirmar que el cliente entendió los cargos evita reclamos y créditos posteriores."
  },
  "account-management": {
    "NPS": "Una cuenta bien administrada evita errores que molestan al cliente.",
    "7D FCR": "Información y usuarios actualizados evitan problemas de acceso o autorización que generan rellamadas.",
    "Stay Connected": "Datos de contacto actualizados permiten que los avisos de pago lleguen al cliente.",
    "CRT": "Una cuenta en orden se valida y gestiona más rápido.",
    "HSE": "Información de equipo y líneas correcta evita gestiones de garantía en la línea equivocada.",
    "C&A/100": "Administrar bien usuarios y datos evita errores que terminan en ajustes."
  },
  "act-as-a-consultant": {
    "NPS": "Recomendar según las necesidades del cliente y reforzar su decisión lo hace sentir bien asesorado.",
    "7D FCR": "Una recomendación ajustada a la necesidad real evita que el cliente llame para cambiar lo que contrató.",
    "Stay Connected": "Asesorar sobre un plan o servicio que se ajuste a su presupuesto ayuda al cliente a mantenerse al día.",
    "CRT": "Ir directo a la recomendación correcta con beneficios concretos acorta la decisión del cliente.",
    "HSE": "Asesorar sobre el equipo y su uso adecuado evita cambios por expectativas no cumplidas.",
    "C&A/100": "Recomendar lo adecuado evita cargos que el cliente luego reclama y que terminan en crédito."
  },
  "active-listening": {
    "NPS": "Que el cliente no tenga que repetir nada es de lo que más valora en una llamada.",
    "7D FCR": "Escuchar todos los detalles permite resolver el problema completo y no solo una parte.",
    "Stay Connected": "Escuchar la situación económica del cliente permite proponer un arreglo que sí pueda cumplir.",
    "CRT": "No pedir que el cliente repita ahorra tiempo en cada llamada.",
    "HSE": "Captar todos los síntomas que describe el cliente lleva al troubleshooting correcto.",
    "C&A/100": "Escuchar el reclamo completo permite responder con una explicación en vez de un crédito."
  },
  "ai-tool-utilization": {
    "NPS": "Las herramientas de IA ayudan a dar respuestas precisas y rápidas que el cliente aprecia.",
    "7D FCR": "Usar la IA para confirmar pasos y políticas reduce errores que causan rellamadas.",
    "Stay Connected": "La IA puede sugerir opciones de pago y argumentos según el caso del cliente.",
    "CRT": "Resúmenes y sugerencias automáticas aceleran el diagnóstico y la documentación.",
    "HSE": "La IA guía el troubleshooting completo antes de llegar a la garantía.",
    "C&A/100": "Consultar la política con IA antes de acreditar evita créditos que no corresponden."
  },
  "apology-empathy": {
    "NPS": "La empatía personalizada en cada momento de molestia es de lo que más pesa en la recomendación.",
    "7D FCR": "Un cliente que se siente escuchado acepta la solución y no vuelve a llamar para quejarse.",
    "Stay Connected": "Mostrar empatía por la situación económica del cliente abre la puerta a un compromiso de pago.",
    "CRT": "Una disculpa a tiempo calma al cliente y permite avanzar más rápido a la solución.",
    "HSE": "Reconocer la molestia por el equipo baja la presión del cliente por un cambio inmediato.",
    "C&A/100": "La empatía bien expresada reemplaza al crédito como forma de reconocer la molestia."
  },
  "be-confident": {
    "NPS": "Un representante seguro transmite que sabe lo que hace, y el cliente confía en la solución.",
    "7D FCR": "Explicar la solución con firmeza hace que el cliente la siga en vez de buscar otra opinión.",
    "Stay Connected": "Pedir el pago con seguridad aumenta la probabilidad de concretar el compromiso.",
    "CRT": "Sin muletillas ni dudas, la explicación es más corta y directa.",
    "HSE": "Sostener el troubleshooting con seguridad evita ceder ante la presión de un cambio.",
    "C&A/100": "Explicar y sostener la política con seguridad reduce los créditos dados por presión."
  },
  "be-efficient": {
    "NPS": "Una llamada ágil y sin preguntas innecesarias reduce el esfuerzo del cliente.",
    "7D FCR": "Anticipar dudas y resolverlas en la llamada evita que el cliente vuelva a llamar.",
    "Stay Connected": "Trabajar en paralelo deja tiempo para tratar el saldo sin alargar la llamada.",
    "CRT": "Anticipar, trabajar en paralelo y usar las herramientas es lo que más baja el tiempo de resolución.",
    "HSE": "Un troubleshooting ágil y ordenado evita que el cliente se canse y exija un cambio.",
    "C&A/100": "Resolver de forma eficiente reduce la frustración que lleva a pedir créditos."
  },
  "billing-explanation-resolution": {
    "NPS": "Que el cliente por fin entienda su factura cambia su percepción de la compañía.",
    "7D FCR": "Explicar cada cargo con claridad evita que el cliente vuelva a llamar con la misma duda en la siguiente factura.",
    "Stay Connected": "Cuando el cliente entiende lo que debe, es más fácil que acepte pagarlo o hacer un arreglo.",
    "CRT": "Una explicación clara y ordenada resuelve la duda de facturación en menos tiempo.",
    "HSE": "Aclarar cargos de equipo y garantía evita gestiones de cambio por malentendidos de facturación.",
    "C&A/100": "Explicar el cargo en lugar de acreditarlo es la forma más directa de bajar esta métrica."
  }
};

/* Textos opcionales para sub-behaviors concretos (ver explicación arriba). */
CC.impactoSub = {
  "tools-resources": {
    0: { "HSE": "Seguir todos los pasos de troubleshooting aplicables antes de considerar la garantía es lo que evita el cambio innecesario." },
    1: { "HSE": "Completar los pasos de The Fix corrige el equipo o servicio y evita el cambio de garantía." },
    2: { "Stay Connected": "Abrir NBA al inicio muestra si hay saldo vencido u ofertas para posicionar el pago desde el principio." },
    3: { "C&A/100": "Leer la política en C2 antes de responder da la información correcta y evita acreditar por duda." },
    5: { "CRT": "Revisar Memos antes de preguntar evita repetir diagnósticos ya hechos y acorta la resolución." }
  }
};

/*
 * Acciones de coaching por causa raíz y estilo de aprendizaje.
 * "todos" se agrega con cualquier estilo.
 */
CC.accionesPorCausa = {
  knowledge: {
    visual: [
      "Mostrar en pantalla, en la herramienta real, cómo se hace: “{paso}”, y dejarle una captura o diagrama del flujo.",
      "Ver juntos un dashboard de {metrica} y señalar en qué llamadas faltó {behavior}."
    ],
    auditivo: [
      "Explicar en conversación cómo se hace “{paso}” y pedirle que lo repita con sus palabras.",
      "Escuchar juntos una llamada donde se aplica bien {behavior} y comentar cómo movió {metrica}."
    ],
    lectura: [
      "Compartir el artículo o la política que explica “{paso}” y pedirle un resumen escrito de los puntos clave.",
      "Pedirle que escriba una guía rápida de {behavior} con el impacto en {metrica}."
    ],
    kinestesico: [
      "Recorrer en las herramientas reales, paso a paso, cómo se hace “{paso}”.",
      "Resolver 3 casos de práctica de {behavior} buscando la información en la base de conocimiento."
    ],
    todos: [
      "Confirmar que sabe dónde consultar la información de {behavior} en plena llamada."
    ]
  },
  skill: {
    visual: [
      "Ver la grabación de una de sus llamadas, pausar donde debía hacer “{paso}” y comparar con un ejemplo modelo.",
      "Darle una tarjeta visual con la secuencia de “{paso}” para tener a la vista durante las llamadas."
    ],
    auditivo: [
      "Escuchar juntos una de sus llamadas y comentar en voz alta el momento exacto de “{paso}”.",
      "Hacer role play conversado de “{paso}” y darle retroalimentación inmediata."
    ],
    lectura: [
      "Escribir juntos un guion o frases clave para “{paso}” que pueda consultar durante la llamada.",
      "Pedirle que anote, después de 5 llamadas, si aplicó “{paso}” y qué pasó con el cliente."
    ],
    kinestesico: [
      "Hacer role play de “{paso}” con distintos tipos de cliente hasta que salga fluido.",
      "Hacer side-by-side: el representante toma llamadas y aplica “{paso}” con retroalimentación al momento."
    ],
    todos: [
      "Programar monitoreos cortos la próxima semana enfocados solo en “{paso}” para reforzar la práctica."
    ]
  },
  will: {
    visual: [
      "Mostrarle con datos su {metrica} frente a la meta y frente a quienes aplican {behavior}.",
      "Graficar juntos cómo cambiaría su {metrica} si aplica “{paso}” en todas las llamadas."
    ],
    auditivo: [
      "Escuchar juntos una llamada donde no aplicó {behavior} y preguntarle cómo se sintió el cliente.",
      "Conversar sobre qué gana él o ella (meta, reconocimiento, menos llamadas difíciles) al mejorar {metrica}."
    ],
    lectura: [
      "Compartirle comentarios escritos de clientes (encuestas) relacionados con {behavior}.",
      "Pedirle que escriba su propio compromiso: por qué “{paso}” importa para el cliente y para su {metrica}."
    ],
    kinestesico: [
      "Ponerle un reto corto: aplicar “{paso}” en las próximas 10 llamadas y revisar juntos el resultado en {metrica}.",
      "Invertir los roles: que haga de cliente mientras el supervisor omite {behavior}, y comentar cómo se sintió."
    ],
    todos: [
      "Acordar un reconocimiento concreto cuando cumpla el objetivo de {metrica}.",
      "Explorar si hay algo del proceso o del entorno que le quita motivación para aplicar {behavior}."
    ]
  },
  confidence: {
    visual: [
      "Mostrarle grabaciones de sus propias llamadas donde sí aplicó “{paso}” bien.",
      "Ver juntos su avance en {metrica} semana a semana para que note el progreso."
    ],
    auditivo: [
      "Escuchar una llamada suya donde lo hizo bien y destacar en voz alta qué funcionó.",
      "Practicar en voz alta frases firmes para “{paso}” hasta que suenen naturales."
    ],
    lectura: [
      "Escribir juntos frases de respaldo para “{paso}” que pueda tener a la mano.",
      "Llevar un registro escrito de sus llamadas exitosas con {behavior} para revisarlo cuando dude."
    ],
    kinestesico: [
      "Hacer role play de “{paso}” empezando con clientes fáciles y subiendo la dificultad poco a poco.",
      "Acompañarlo en las primeras llamadas reales donde aplique “{paso}” y luego retirar el apoyo."
    ],
    todos: [
      "Reconocer en público o en privado cada vez que aplique {behavior}, para reforzar su seguridad."
    ]
  }
};
