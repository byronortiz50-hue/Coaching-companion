/* Paso 5: plan de acción SMART y resumen para copiar a la herramienta de registro. */
(function () {
  var el = CC.el;

  var CRITERIOS = [
    { id: "s", letra: "S", nombre: "Específico", guia: "¿Qué va a hacer exactamente, en qué llamadas o momentos?" },
    { id: "m", letra: "M", nombre: "Medible", guia: "¿Con qué número o métrica sabremos que lo logró?" },
    { id: "a", letra: "A", nombre: "Alcanzable", guia: "¿Qué apoyo tendrá? ¿Es realista con su carga actual?" },
    { id: "r", letra: "R", nombre: "Relevante", guia: "¿Por qué importa para el cliente, la métrica y el representante?" },
    { id: "t", letra: "T", nombre: "Con tiempo definido", guia: "¿Para cuándo y cuándo es el seguimiento?" }
  ];

  CC.registrarPaso({
    id: "plan",
    titulo: "Plan SMART",
    listo: function () {
      var s = CC.estado.smart;
      return CRITERIOS.every(function (c) { return s[c.id].trim() !== ""; }) && !!s.fechaLimite;
    },
    dibujar: function (cont) {
      var s = CC.estado.smart;
      var b = CC.behaviorActual();
      var resumen = el("pre", { className: "resumen", id: "resumen" });
      var revisiones = el("ul", { className: "revisiones" });

      var campos = el("div", { className: "smart" });
      CRITERIOS.forEach(function (c) {
        campos.appendChild(el("label", { className: "campo smart-campo" }, [
          el("span", {}, [el("span", { className: "letra" }, [c.letra]), c.nombre]),
          el("span", { className: "tenue" }, [c.guia]),
          el("textarea", {
            rows: "2", value: s[c.id], "data-criterio": c.id,
            oninput: function (e) { s[c.id] = e.target.value; cambio(); }
          })
        ]));
      });

      var fechas = el("div", { className: "fila-campos" }, [
        campoFecha("Fecha límite del plan", "fechaLimite"),
        campoFecha("Fecha de seguimiento", "fechaSeguimiento")
      ]);

      cont.appendChild(el("section", { className: "tarjeta" }, [
        el("h2", {}, ["5. Plan de acción SMART"]),
        el("p", { className: "ayuda" }, [
          "Escríbelo con las palabras del representante (lo que dijo en Way forward). Puedes partir de un borrador automático y ajustarlo."
        ]),
        el("button", { type: "button", className: "btn btn-sec btn-peq", onclick: sugerir }, ["Llenar borrador en campos vacíos"]),
        campos,
        fechas,
        el("h3", {}, ["Revisión rápida"]),
        revisiones
      ]));

      cont.appendChild(el("section", { className: "tarjeta" }, [
        el("h2", {}, ["Resumen de la sesión"]),
        el("p", { className: "ayuda" }, ["Cópialo y pégalo en la herramienta donde registran las sesiones de coaching."]),
        el("div", { className: "acciones" }, [
          el("button", { type: "button", className: "btn", onclick: copiar }, ["Copiar resumen"]),
          el("button", { type: "button", className: "btn btn-sec", onclick: function () { window.print(); } }, ["Imprimir"]),
          el("span", { className: "aviso-copia", id: "aviso-copia", "aria-live": "polite" })
        ]),
        resumen
      ]));

      function campoFecha(etiqueta, clave) {
        return el("label", { className: "campo" }, [
          el("span", {}, [etiqueta]),
          el("input", { type: "date", value: s[clave], oninput: function (e) { s[clave] = e.target.value; cambio(); } })
        ]);
      }

      function sugerir() {
        var est = CC.estiloPorId(CC.estado.estilo);
        var causas = CC.estado.causas.map(function (id) { var c = CC.causaPorId(id); return c ? c.nombre : id; });
        var ayudas = CC.estado.ayudas.concat(lineas(CC.estado.ayudaOtra));
        if (!s.fechaLimite) s.fechaLimite = CC.sumarDias(CC.estado.sesion.fecha || CC.hoyISO(), 30);
        if (!s.fechaSeguimiento) s.fechaSeguimiento = CC.sumarDias(CC.estado.sesion.fecha || CC.hoyISO(), 7);
        var borrador = {
          s: b ? "Aplicar \"" + b.nombre + "\" en todas las llamadas: " +
            (CC.subBehaviorActual() || (b.seVeBien || []).map(minuscula).join("; ")) : "",
          m: b ? b.medible + (CC.estado.sesion.metrica ? " Llevar " + CC.estado.sesion.metrica + " del valor actual a la meta." : "") : "",
          a: ayudas.length ? "Con apoyo de: " + ayudas.join("; ") + (est ? " (adaptado a estilo " + est.nombre.toLowerCase() + ")" : "") : "",
          r: b ? (CC.estado.sesion.metrica ? "Mejora " + CC.estado.sesion.metrica : "Mejora la experiencia del cliente") +
            (causas.length ? " y atiende la causa raíz identificada (" + causas.join(", ") + ")." : ".") : "",
          t: "Aplicar desde la próxima llamada; seguimiento el " + CC.formatearFecha(s.fechaSeguimiento) + " y cierre del plan el " + CC.formatearFecha(s.fechaLimite) + "."
        };
        CRITERIOS.forEach(function (c) { if (!s[c.id].trim() && borrador[c.id]) s[c.id] = borrador[c.id]; });
        CC.guardar();
        CC.dibujar();
      }

      function cambio() { CC.guardar(); CC.refrescarPasos(); revisar(); resumen.textContent = CC.textoResumen(); }

      function revisar() {
        var checks = [
          { ok: s.s.trim().length > 25, txt: "Específico: describe una acción concreta (no solo \"mejorar\")." },
          { ok: /\d/.test(s.m), txt: "Medible: incluye un número, porcentaje o meta." },
          { ok: s.a.trim() !== "", txt: "Alcanzable: menciona el apoyo o los recursos." },
          { ok: s.r.trim() !== "", txt: "Relevante: explica por qué importa." },
          { ok: !!s.fechaLimite && !!s.fechaSeguimiento, txt: "Con tiempo: tiene fecha límite y fecha de seguimiento." },
          { ok: !s.fechaLimite || !s.fechaSeguimiento || s.fechaSeguimiento <= s.fechaLimite, txt: "El seguimiento es antes de la fecha límite." }
        ];
        revisiones.innerHTML = "";
        checks.forEach(function (c) {
          revisiones.appendChild(el("li", { className: c.ok ? "ok" : "pendiente" }, [(c.ok ? "✓ " : "○ ") + c.txt]));
        });
      }

      function copiar() {
        var texto = CC.textoResumen();
        var aviso = document.getElementById("aviso-copia");
        function exito() { aviso.textContent = "Copiado ✓"; }
        function respaldo() {
          var ta = el("textarea", { value: texto, style: "position:fixed;left:-9999px" });
          document.body.appendChild(ta);
          ta.select();
          try { document.execCommand("copy"); exito(); } catch (e) { aviso.textContent = "Selecciona el texto y cópialo manualmente."; }
          document.body.removeChild(ta);
        }
        if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(texto).then(exito, respaldo);
        else respaldo();
      }

      revisar();
      resumen.textContent = CC.textoResumen();
    }
  });

  function lineas(t) { return (t || "").split("\n").map(function (x) { return x.trim(); }).filter(Boolean); }
  function minuscula(t) { return t.charAt(0).toLowerCase() + t.slice(1).replace(/\.$/, ""); }

  /* Texto plano con toda la sesión. */
  CC.textoResumen = function () {
    var e = CC.estado, s = e.smart, b = CC.behaviorActual();
    var r = [];
    r.push("SESIÓN DE COACHING (modelo GROW)");
    r.push("Fecha: " + CC.formatearFecha(e.sesion.fecha) +
      (e.sesion.representante ? " | Representante: " + e.sesion.representante : "") +
      (e.sesion.supervisor ? " | Supervisor: " + e.sesion.supervisor : ""));
    if (e.sesion.metrica) r.push("Métrica: " + e.sesion.metrica);
    r.push("Behavior: " + (b ? b.nombre : "(sin elegir)"));
    if (CC.subBehaviorActual()) r.push("Sub-Behavior: " + CC.subBehaviorActual());
    r.push("");
    CC.etapasGrow.forEach(function (et) {
      var notas = e.grow[et.id].notas.trim();
      r.push(et.letra + " - " + et.nombre + ": " + (notas || "—"));
    });
    r.push("");
    var causas = e.causas.map(function (id) { var c = CC.causaPorId(id); return c ? c.nombre + " (" + c.nombreEs + ")" : id; });
    r.push("Causa raíz: " + (causas.join(", ") || "—"));
    var est = CC.estiloPorId(e.estilo);
    r.push("Estilo de aprendizaje: " + (est ? est.nombre : "—"));
    var ayudas = e.ayudas.concat(lineas(e.ayudaOtra));
    r.push("Acciones de apoyo:" + (ayudas.length ? "" : " —"));
    ayudas.forEach(function (a) { r.push("  • " + a); });
    r.push("");
    r.push("PLAN DE ACCIÓN SMART");
    r.push("S (Específico): " + (s.s || "—"));
    r.push("M (Medible): " + (s.m || "—"));
    r.push("A (Alcanzable): " + (s.a || "—"));
    r.push("R (Relevante): " + (s.r || "—"));
    r.push("T (Tiempo): " + (s.t || "—"));
    r.push("Fecha límite: " + (CC.formatearFecha(s.fechaLimite) || "—") + " | Seguimiento: " + (CC.formatearFecha(s.fechaSeguimiento) || "—"));
    return r.join("\n");
  };
})();
