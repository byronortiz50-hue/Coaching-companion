/* Paso 1: datos de la sesión y elección del behavior a trabajar. */
(function () {
  var el = CC.el;

  CC.registrarPaso({
    id: "behavior",
    titulo: "Behavior",
    listo: function () {
      var b = CC.behaviorActual();
      if (!b) return false;
      return !(b.subBehaviors && b.subBehaviors.length) || !!CC.subBehaviorActual();
    },
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
          campo("Fecha", "date", s.fecha, function (v) { s.fecha = v; }),
          selectorMetrica(s)
        ])
      ]));

      var lista = el("div", { className: "lista-behaviors", role: "radiogroup", "aria-label": "Behaviors" });

      function pintarLista() {
        lista.innerHTML = "";
        CC.behaviors.slice().sort(function (x, y) { return x.nombre.localeCompare(y.nombre); }).forEach(function (b) {
          var elegido = b.id === CC.estado.behaviorId;
          lista.appendChild(el("div", { className: "behavior" + (elegido ? " elegido" : "") }, [
           el("label", { className: "behavior-cabecera" }, [
            el("input", {
              type: "radio", name: "behavior", value: b.id, checked: elegido,
              onchange: function () {
                CC.estado.behaviorId = b.id;
                CC.estado.subBehavior = b.subBehaviors && b.subBehaviors.length === 1 ? 0 : -1;
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
              el("p", {}, [b.descripcion])
            ])
           ]),
           elegido ? detalleElegido(b) : null
          ]));
        });
      }
      pintarLista();

      cont.appendChild(el("section", { className: "tarjeta" }, [
        lista,
        el("p", { className: "nota" }, [
          "Para agregar o cambiar behaviors y sub-behaviors, edita el archivo datos/behaviors.js."
        ])
      ]));
    }
  });

  /* Sub-behaviors (o, si no tiene, la lista "seVeBien") del behavior elegido. */
  function detalleElegido(b) {
    if (b.subBehaviors && b.subBehaviors.length) {
      var lista = el("div", { className: "sub-behaviors", role: "radiogroup", "aria-label": "Sub-behavior" });
      b.subBehaviors.forEach(function (texto, i) {
        lista.appendChild(el("label", { className: "sub-behavior" + (CC.estado.subBehavior === i ? " elegido" : "") }, [
          el("input", {
            type: "radio", name: "sub-behavior", checked: CC.estado.subBehavior === i,
            onchange: function () {
              CC.estado.subBehavior = i;
              CC.guardar();
              Array.prototype.forEach.call(lista.children, function (c, j) { c.classList.toggle("elegido", j === i); });
              CC.refrescarPasos();
            }
          }),
          el("span", {}, [texto])
        ]));
      });
      return el("div", { className: "se-ve-bien" }, [
        el("span", { className: "etq" }, ["Sub-Behavior: elige el que vas a trabajar"]),
        lista
      ]);
    }
    if (b.seVeBien && b.seVeBien.length) {
      return el("div", { className: "se-ve-bien" }, [
        el("span", { className: "etq" }, ["Cómo se ve cuando se hace bien:"]),
        el("ul", {}, b.seVeBien.map(function (t) { return el("li", {}, [t]); }))
      ]);
    }
    return null;
  }

  function selectorMetrica(s) {
    return el("label", { className: "campo" }, [
      el("span", {}, ["Métrica a mejorar"]),
      el("select", {
        onchange: function (e) { s.metrica = e.target.value; CC.guardar(); }
      }, [el("option", { value: "" }, ["(opcional)"])].concat(CC.metricas.map(function (m) {
        return el("option", { value: m.id, selected: s.metrica === m.id }, [m.id]);
      })))
    ]);
  }

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
