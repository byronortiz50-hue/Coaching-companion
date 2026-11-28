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

      var detalle = el("div", { className: "behavior-detalle" });
      var selSub = el("select", { id: "sel-sub", onchange: function (e) {
        CC.estado.subBehavior = e.target.value === "" ? -1 : Number(e.target.value);
        CC.guardar(); pintarDetalle(); CC.refrescarPasos();
      } });
      var ordenados = CC.behaviors.slice().sort(function (x, y) { return x.nombre.localeCompare(y.nombre); });
      var selBehavior = el("select", { id: "sel-behavior", onchange: function (e) {
        var b = CC.behaviors.filter(function (x) { return x.id === e.target.value; })[0] || null;
        CC.estado.behaviorId = b ? b.id : null;
        CC.estado.subBehavior = b && b.subBehaviors && b.subBehaviors.length === 1 ? 0 : -1;
        CC.guardar(); pintarSub(); pintarDetalle(); CC.refrescarPasos();
      } }, [el("option", { value: "" }, ["Elige un behavior"])].concat(ordenados.map(function (b) {
        return el("option", { value: b.id, selected: b.id === CC.estado.behaviorId }, [b.nombre]);
      })));

      function pintarSub() {
        var b = CC.behaviorActual();
        var subs = b && b.subBehaviors ? b.subBehaviors : [];
        selSub.innerHTML = "";
        selSub.appendChild(el("option", { value: "" }, [!b ? "Primero elige un behavior" : subs.length ? "Elige un sub-behavior" : "Este behavior no tiene sub-behaviors"]));
        subs.forEach(function (t, i) {
          selSub.appendChild(el("option", { value: String(i), selected: CC.estado.subBehavior === i }, [t]));
        });
        selSub.disabled = !subs.length;
      }

      function pintarDetalle() {
        var b = CC.behaviorActual();
        detalle.innerHTML = "";
        if (!b) return;
        detalle.appendChild(el("p", {}, [b.descripcion]));
        var sub = CC.subBehaviorActual();
        if (sub) {
          detalle.appendChild(el("div", { className: "se-ve-bien" }, [
            el("span", { className: "etq" }, ["Sub-Behavior elegido:"]),
            el("p", {}, [sub])
          ]));
        } else if (!(b.subBehaviors && b.subBehaviors.length) && b.seVeBien && b.seVeBien.length) {
          detalle.appendChild(el("div", { className: "se-ve-bien" }, [
            el("span", { className: "etq" }, ["Cómo se ve cuando se hace bien:"]),
            el("ul", {}, b.seVeBien.map(function (t) { return el("li", {}, [t]); }))
          ]));
        }
      }
      pintarSub();
      pintarDetalle();

      cont.appendChild(el("section", { className: "tarjeta" }, [
        el("div", { className: "selectores-behavior" }, [
          el("label", { className: "campo" }, [el("span", {}, ["Behavior"]), selBehavior]),
          el("label", { className: "campo" }, [el("span", {}, ["Sub-Behavior"]), selSub])
        ]),
        detalle,
        el("p", { className: "nota" }, [
          "Para agregar o cambiar behaviors y sub-behaviors, edita el archivo datos/behaviors.js."
        ])
      ]));
    }
  });

  function selectorMetrica(s) {
    return el("label", { className: "campo" }, [
      el("span", {}, ["Métrica a mejorar"]),
      el("select", {
        id: "sel-metrica", onchange: function (e) { s.metrica = e.target.value; CC.guardar(); }
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
