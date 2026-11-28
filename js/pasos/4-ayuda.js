/* Paso 4: estilo de aprendizaje y opciones de ayuda según la causa raíz. */
(function () {
  var el = CC.el;

  CC.registrarPaso({
    id: "ayuda",
    titulo: "Opciones de ayuda",
    listo: function () { return CC.estado.ayudas.length > 0 || CC.estado.ayudaOtra.trim() !== ""; },
    dibujar: function (cont) {
      /* Estilo de aprendizaje */
      var estilos = el("div", { className: "rejilla-estilos", role: "radiogroup", "aria-label": "Estilo de aprendizaje" });
      CC.estilosAprendizaje.forEach(function (e) {
        var elegido = CC.estado.estilo === e.id;
        estilos.appendChild(el("label", { className: "estilo" + (elegido ? " elegido" : "") }, [
          el("input", {
            type: "radio", name: "estilo", checked: elegido,
            onchange: function () { CC.estado.estilo = e.id; CC.guardar(); CC.dibujar(); }
          }),
          el("strong", {}, [e.nombre]),
          el("span", {}, [e.descripcion]),
          el("span", { className: "tenue" }, ["Pistas: " + e.pistas])
        ]));
      });

      cont.appendChild(el("section", { className: "tarjeta" }, [
        el("h2", {}, ["4. ¿Cómo lo vamos a ayudar?"]),
        el("h3", {}, ["Estilo de aprendizaje del representante"]),
        el("p", { className: "ayuda" }, ["Si no lo conoces, pregúntale: ", el("em", {}, ["“" + CC.preguntaEstilo + "”"])]),
        estilos
      ]));

      cont.appendChild(tarjetaRecomendacion());

      /* Opciones por causa */
      var seccion = el("section", { className: "tarjeta" }, [el("h3", {}, ["Más ideas de ayuda por causa raíz"])]);
      cont.appendChild(seccion);

      if (!CC.estado.causas.length) {
        seccion.appendChild(el("p", { className: "alerta" }, [
          "Primero confirma la causa raíz. ",
          el("button", { type: "button", className: "enlace", onclick: function () { CC.irA(2); } }, ["Ir a Causa raíz"])
        ]));
      } else {
        seccion.appendChild(el("p", { className: "ayuda" }, [
          "Recuerda: en la etapa Options el representante propone primero. Usa estas ideas para complementar. Marca las que acuerden."
        ]));
        CC.estado.causas.forEach(function (id) {
          var c = CC.causaPorId(id);
          if (!c) return;
          var ideas = (c.opciones.todos || []).slice();
          if (CC.estado.estilo && c.opciones[CC.estado.estilo]) ideas = c.opciones[CC.estado.estilo].concat(ideas);
          var grupo = el("div", { className: "grupo-ayuda" }, [
            el("h4", {}, [c.nombre + " · " + c.nombreEs]),
            el("p", { className: "tenue" }, ["Enfoque: " + c.enfoque]),
            el("ul", { className: "preguntas" }, ideas.map(function (texto) {
              return el("li", {}, [el("label", {}, [
                el("input", {
                  type: "checkbox", checked: CC.estado.ayudas.indexOf(texto) !== -1,
                  onchange: function (e) { CC.alternar(CC.estado.ayudas, texto, e.target.checked); CC.guardar(); CC.refrescarPasos(); }
                }),
                el("span", {}, [texto])
              ])]);
            }))
          ]);
          if (!CC.estado.estilo) grupo.appendChild(el("p", { className: "nota" }, ["Elige un estilo de aprendizaje para ver ideas adaptadas."]));
          seccion.appendChild(grupo);
        });
      }

      seccion.appendChild(el("label", { className: "campo campo-notas" }, [
        el("span", {}, ["Otras acciones que propuso el representante o que acordaron"]),
        el("textarea", {
          rows: "3", value: CC.estado.ayudaOtra,
          placeholder: "Una por línea",
          oninput: function (e) { CC.estado.ayudaOtra = e.target.value; CC.guardar(); CC.refrescarPasos(); }
        })
      ]));
    }
  });

  function casilla(texto) {
    return el("li", {}, [el("label", {}, [
      el("input", {
        type: "checkbox", checked: CC.estado.ayudas.indexOf(texto) !== -1,
        onchange: function (e) { CC.alternar(CC.estado.ayudas, texto, e.target.checked); CC.guardar(); CC.refrescarPasos(); }
      }),
      el("span", {}, [texto])
    ])]);
  }

  /* Recomendación para la combinación behavior / sub-behavior × métrica × causa × estilo. */
  function tarjetaRecomendacion() {
    var r = CC.recomendacion();
    var t = el("section", { className: "tarjeta recomendacion" }, [
      el("h3", {}, ["Recomendación para este caso"])
    ]);
    if (!r.behavior) {
      t.appendChild(el("p", { className: "alerta" }, ["Elige el behavior en el paso 1 para ver la recomendación."]));
      return t;
    }
    t.appendChild(el("p", { className: "combinacion" }, [
      el("strong", {}, [r.behavior.nombre]),
      r.sub ? " · " + r.sub : "",
      r.metrica ? " · " + r.metrica : "",
      r.causas.length ? " · " + r.causas.map(function (c) { return c.nombre; }).join(" + ") : "",
      r.estilo ? " · " + r.estilo.nombre : ""
    ]));
    var faltan = [];
    if (!r.metrica) faltan.push(el("button", { type: "button", className: "enlace", onclick: function () { CC.irA(0); } }, ["la métrica (paso 1)"]));
    if (!r.causas.length) faltan.push(el("button", { type: "button", className: "enlace", onclick: function () { CC.irA(2); } }, ["la causa raíz (paso 3)"]));
    if (!r.estilo) faltan.push("el estilo de aprendizaje (arriba)");
    if (faltan.length) {
      var aviso = el("p", { className: "nota" }, ["Para una recomendación más precisa, elige "]);
      faltan.forEach(function (f, i) { if (i) aviso.appendChild(document.createTextNode(i === faltan.length - 1 ? " y " : ", ")); aviso.appendChild(typeof f === "string" ? document.createTextNode(f) : f); });
      aviso.appendChild(document.createTextNode("."));
      t.appendChild(aviso);
    }
    if (r.metrica) {
      t.appendChild(el("div", { className: "rec-bloque" }, [
        el("span", { className: "etq" }, ["Cómo " + r.behavior.nombre + " mueve " + r.metrica]),
        el("p", {}, [r.impacto || "—"]),
        el("p", { className: "tenue" }, [r.queMide])
      ]));
    }
    r.causas.forEach(function (c) {
      if (r.metrica && c.porMetrica) {
        t.appendChild(el("div", { className: "rec-bloque" }, [
          el("span", { className: "etq" }, ["Por qué se cae " + r.metrica + " cuando la causa es " + c.nombre]),
          el("p", {}, [c.porMetrica])
        ]));
      }
      if (c.acciones.length) {
        t.appendChild(el("div", { className: "rec-bloque" }, [
          el("span", { className: "etq" }, ["Acciones sugeridas (" + c.nombre + (r.estilo ? ", estilo " + r.estilo.nombre.toLowerCase() : "") + ")"]),
          el("ul", { className: "preguntas" }, c.acciones.map(casilla))
        ]));
      }
    });
    t.appendChild(el("div", { className: "rec-bloque" }, [
      el("span", { className: "etq" }, ["Cómo medir el avance"]),
      el("p", {}, [r.behavior.medible + (r.indicador ? ". " + r.indicador + "." : "")])
    ]));
    return t;
  }
})();

/* Arma la recomendación a partir del estado actual. La usan los pasos 4 y 5. */
CC.recomendacion = function () {
  var e = CC.estado, b = CC.behaviorActual();
  var sub = CC.subBehaviorActual();
  var met = e.sesion.metrica || "";
  var det = (CC.metricaDetalle || {})[met] || null;
  var est = CC.estiloPorId(e.estilo);
  var impacto = "";
  if (b && met) {
    var porSub = ((CC.impactoSub || {})[b.id] || {})[e.subBehavior];
    impacto = (porSub && porSub[met]) || ((CC.impacto || {})[b.id] || {})[met] || "";
  }
  function poner(texto) {
    return texto.replace(/\{behavior\}/g, b ? b.nombre : "el behavior")
      .replace(/\{paso\}/g, sub || (b ? b.nombre : ""))
      .replace(/\{metrica\}/g, met || "la métrica");
  }
  var causas = e.causas.map(function (id) {
    var c = CC.causaPorId(id);
    if (!c) return null;
    var tabla = (CC.accionesPorCausa || {})[id] || {};
    var lista = (est && tabla[est.id] ? tabla[est.id] : []).concat(tabla.todos || []);
    return { id: id, nombre: c.nombre, porMetrica: det && det.porCausa ? det.porCausa[id] : "", acciones: lista.map(poner) };
  }).filter(Boolean);
  return {
    behavior: b, sub: sub, metrica: met, estilo: est,
    impacto: impacto, queMide: det ? det.queMide : "", indicador: det ? det.indicador : "",
    causas: causas
  };
};
