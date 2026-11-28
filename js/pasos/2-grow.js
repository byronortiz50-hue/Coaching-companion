/* Paso 2: preguntas de autodescubrimiento por etapa GROW. */
(function () {
  var el = CC.el;

  CC.registrarPaso({
    id: "grow",
    titulo: "Preguntas GROW",
    listo: function () {
      var g = CC.estado.grow;
      return ["goal", "reality", "options", "way"].every(function (k) {
        return g[k].marcadas.length > 0 || g[k].notas.trim() !== "";
      });
    },
    dibujar: function (cont) {
      var b = CC.behaviorActual();

      var cabecera = el("section", { className: "tarjeta" }, [
        el("h2", {}, ["2. Preguntas de autodescubrimiento"]),
        b ? el("div", {}, [
              el("p", { className: "contexto" }, ["Behavior: ", el("strong", {}, [b.nombre]), " ", CC.chipsMetricas(b.metricas)]),
              CC.subBehaviorActual() ? el("p", { className: "contexto tenue" }, ["Sub-Behavior: " + CC.subBehaviorActual()]) : null
            ])
          : el("p", { className: "alerta" }, ["Aún no elegiste un behavior. Verás solo las preguntas generales. ",
              el("button", { type: "button", className: "enlace", onclick: function () { CC.irA(0); } }, ["Elegir behavior"])]),
        el("p", { className: "ayuda" }, [
          "Marca las preguntas que vas haciendo y anota lo que responde el representante. No hace falta usarlas todas: elige las que sirvan para la conversación."
        ])
      ]);
      cont.appendChild(cabecera);

      var pestanas = el("div", { className: "pestanas", role: "tablist" });
      var panel = el("section", { className: "tarjeta panel-grow", role: "tabpanel" });

      CC.etapasGrow.forEach(function (et) {
        pestanas.appendChild(el("button", {
          type: "button", role: "tab",
          className: "pestana" + (CC.estado.etapaActiva === et.id ? " activa" : ""),
          "aria-selected": CC.estado.etapaActiva === et.id ? "true" : "false",
          onclick: function () {
            CC.estado.etapaActiva = et.id;
            CC.guardar();
            Array.prototype.forEach.call(pestanas.children, function (p) { p.classList.remove("activa"); p.setAttribute("aria-selected", "false"); });
            this.classList.add("activa");
            this.setAttribute("aria-selected", "true");
            pintarEtapa();
          }
        }, [el("span", { className: "letra" }, [et.letra]), et.nombre + " · " + et.nombreEs]));
      });
      cont.appendChild(pestanas);
      cont.appendChild(panel);

      function pintarEtapa() {
        var et = CC.etapasGrow.filter(function (e) { return e.id === CC.estado.etapaActiva; })[0] || CC.etapasGrow[0];
        var datos = CC.estado.grow[et.id];
        panel.innerHTML = "";

        panel.appendChild(el("div", { className: "proposito" }, [
          el("p", {}, [el("strong", {}, ["Propósito: "]), et.proposito]),
          el("p", { className: "consejo" }, [el("strong", {}, ["Consejo: "]), et.consejo])
        ]));

        if (b && b.preguntas && b.preguntas[et.id] && b.preguntas[et.id].length) {
          panel.appendChild(el("h3", {}, ["Preguntas para este behavior"]));
          panel.appendChild(listaPreguntas(b.preguntas[et.id], et.id, "b"));
        }
        panel.appendChild(el("h3", {}, ["Preguntas generales"]));
        panel.appendChild(listaPreguntas(et.preguntas, et.id, "g"));

        if (et.id === "reality") {
          panel.appendChild(el("h3", {}, ["Preguntas para descubrir la causa raíz"]));
          panel.appendChild(el("p", { className: "ayuda" }, [
            "Úsalas para entender si el reto es de conocimiento, habilidad, voluntad o confianza. En el siguiente paso confirmas la causa."
          ]));
          CC.causasRaiz.forEach(function (c) {
            panel.appendChild(el("details", { className: "grupo-causa" }, [
              el("summary", {}, [el("strong", {}, [c.nombre]), " · " + c.nombreEs + " — ", el("span", { className: "tenue" }, [c.resumen])]),
              listaPreguntas(c.preguntas, et.id, "c-" + c.id)
            ]));
          });
        }

        panel.appendChild(el("label", { className: "campo campo-notas" }, [
          el("span", {}, ["Notas: lo que dijo el representante en " + et.nombre]),
          el("textarea", {
            rows: "4", value: datos.notas,
            placeholder: "Respuestas, ideas o compromisos que mencionó…",
            oninput: function (e) { datos.notas = e.target.value; CC.guardar(); CC.refrescarPasos(); }
          })
        ]));
      }

      function listaPreguntas(preguntas, etapa, prefijo) {
        var datos = CC.estado.grow[etapa];
        return el("ul", { className: "preguntas" }, preguntas.map(function (texto, i) {
          var clave = prefijo + ":" + i;
          return el("li", {}, [
            el("label", {}, [
              el("input", {
                type: "checkbox", checked: datos.marcadas.indexOf(clave) !== -1,
                onchange: function (e) { CC.alternar(datos.marcadas, clave, e.target.checked); CC.guardar(); CC.refrescarPasos(); }
              }),
              el("span", {}, [texto])
            ])
          ]);
        }));
      }

      pintarEtapa();
    }
  });
})();
