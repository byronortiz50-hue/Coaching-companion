/* Paso 1: datos de la sesión y elección del behavior a trabajar. */
(function () {
  var el = CC.el;

  CC.registrarPaso({
    id: "behavior",
    titulo: "Behavior",
    listo: function () { return !!CC.estado.behaviorId; },
    dibujar: function (cont) {
      var s = CC.estado.sesion;

      cont.appendChild(el("section", { className: "tarjeta" }, [
        el("h2", {}, ["1. ¿Qué behavior vamos a trabajar?"]),
        el("p", { className: "ayuda" }, [
          "Elige el behavior que observaste en el monitoreo o en las métricas. Las preguntas de los siguientes pasos se adaptan a él."
        ]),
        el("div", { className: "fila-campos" }, [
          campo("Representante", "text", s.representante, function (v) { s.representante = v; }, "Nombre (opcional)"),
          campo("Supervisor", "text", s.supervisor, function (v) { s.supervisor = v; }, "Nombre (opcional)"),
          campo("Fecha", "date", s.fecha, function (v) { s.fecha = v; })
        ])
      ]));

      /* Filtro por métrica */
      var metricas = [];
      CC.behaviors.forEach(function (b) {
        b.metricas.forEach(function (m) { if (metricas.indexOf(m) === -1) metricas.push(m); });
      });
      var filtro = { valor: "" };
      var lista = el("div", { className: "lista-behaviors", role: "radiogroup", "aria-label": "Behaviors" });

      var filtros = el("div", { className: "filtros" }, [el("span", { className: "etq" }, ["Filtrar por métrica:"])]);
      ["Todas"].concat(metricas).forEach(function (m) {
        filtros.appendChild(el("button", {
          type: "button",
          className: "chip chip-filtro" + (m === "Todas" ? " activo" : ""),
          onclick: function (e) {
            filtro.valor = m === "Todas" ? "" : m;
            Array.prototype.forEach.call(filtros.querySelectorAll(".chip-filtro"), function (c) { c.classList.remove("activo"); });
            e.currentTarget.classList.add("activo");
            pintarLista();
          }
        }, [m]));
      });

      function pintarLista() {
        lista.innerHTML = "";
        CC.behaviors.filter(function (b) {
          return !filtro.valor || b.metricas.indexOf(filtro.valor) !== -1;
        }).forEach(function (b) {
          var elegido = b.id === CC.estado.behaviorId;
          lista.appendChild(el("label", { className: "behavior" + (elegido ? " elegido" : "") }, [
            el("input", {
              type: "radio", name: "behavior", value: b.id, checked: elegido,
              onchange: function () {
                CC.estado.behaviorId = b.id;
                CC.guardar();
                pintarLista();
                CC.refrescarPasos();
              }
            }),
            el("div", { className: "behavior-cuerpo" }, [
              el("div", { className: "behavior-titulo" }, [
                el("strong", {}, [b.nombre]), " ",
                b.ejemplo ? CC.etiquetaEjemplo() : null
              ]),
              CC.chipsMetricas(b.metricas),
              el("p", {}, [b.descripcion]),
              elegido ? el("div", { className: "se-ve-bien" }, [
                el("span", { className: "etq" }, ["Cómo se ve cuando se hace bien:"]),
                el("ul", {}, b.seVeBien.map(function (t) { return el("li", {}, [t]); }))
              ]) : null
            ])
          ]));
        });
      }
      pintarLista();

      cont.appendChild(el("section", { className: "tarjeta" }, [
        filtros,
        lista,
        el("p", { className: "nota" }, [
          "Los behaviors marcados como EJEMPLO son de muestra. Para usar los oficiales, edita el archivo datos/behaviors.js."
        ])
      ]));
    }
  });

  function campo(etiqueta, tipo, valor, alCambiar, placeholder) {
    return el("label", { className: "campo" }, [
      el("span", {}, [etiqueta]),
      el("input", {
        type: tipo, value: valor || "", placeholder: placeholder || null,
        oninput: function (e) { alCambiar(e.target.value); CC.guardar(); }
      })
    ]);
  }
})();
