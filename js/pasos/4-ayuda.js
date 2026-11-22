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

      /* Opciones por causa */
      var seccion = el("section", { className: "tarjeta" }, [el("h3", {}, ["Opciones de ayuda sugeridas"])]);
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
})();
