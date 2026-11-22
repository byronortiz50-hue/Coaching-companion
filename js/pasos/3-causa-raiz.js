/* Paso 3: identificar la causa raíz con señales observables. */
(function () {
  var el = CC.el;

  CC.registrarPaso({
    id: "causa",
    titulo: "Causa raíz",
    listo: function () { return CC.estado.causas.length > 0; },
    dibujar: function (cont) {
      var sugerencia = el("div", { className: "sugerencia", "aria-live": "polite" });

      cont.appendChild(el("section", { className: "tarjeta" }, [
        el("h2", {}, ["3. ¿Cuál es la causa raíz?"]),
        el("p", { className: "ayuda" }, [
          "Marca las señales que viste en la conversación y en los monitoreos. La herramienta sugiere la causa más probable, pero tú decides: confirma una o varias."
        ]),
        sugerencia
      ]));

      var rejilla = el("div", { className: "rejilla-causas" });
      cont.appendChild(rejilla);

      CC.causasRaiz.forEach(function (c) {
        var confirmada = CC.estado.causas.indexOf(c.id) !== -1;
        var tarjeta = el("section", { className: "tarjeta causa" + (confirmada ? " confirmada" : ""), "data-causa": c.id }, [
          el("h3", {}, [c.nombre, el("span", { className: "tenue" }, [" · " + c.nombreEs])]),
          el("p", {}, [c.resumen]),
          el("p", { className: "prueba" }, [c.pruebaRapida]),
          el("ul", { className: "senales" }, c.senales.map(function (s, i) {
            var clave = c.id + ":" + i;
            return el("li", {}, [el("label", {}, [
              el("input", {
                type: "checkbox", checked: CC.estado.senales.indexOf(clave) !== -1,
                onchange: function (e) { CC.alternar(CC.estado.senales, clave, e.target.checked); CC.guardar(); actualizar(); }
              }),
              el("span", {}, [s])
            ])]);
          })),
          el("div", { className: "barra" }, [el("span", { className: "relleno" })]),
          el("label", { className: "confirmar" }, [
            el("input", {
              type: "checkbox", checked: confirmada,
              onchange: function (e) {
                CC.alternar(CC.estado.causas, c.id, e.target.checked);
                tarjeta.classList.toggle("confirmada", e.target.checked);
                CC.guardar(); CC.refrescarPasos(); actualizar();
              }
            }),
            el("span", {}, ["Confirmar como causa raíz"])
          ])
        ]);
        rejilla.appendChild(tarjeta);
      });

      function actualizar() {
        var conteo = {};
        var maximo = 0;
        CC.causasRaiz.forEach(function (c) {
          var n = CC.estado.senales.filter(function (s) { return s.split(":")[0] === c.id; }).length;
          conteo[c.id] = n;
          if (n > maximo) maximo = n;
          var t = rejilla.querySelector('[data-causa="' + c.id + '"] .relleno');
          if (t) t.style.width = Math.round((n / c.senales.length) * 100) + "%";
        });

        sugerencia.innerHTML = "";
        if (maximo === 0) {
          sugerencia.appendChild(el("p", { className: "tenue" }, ["Marca señales para ver una sugerencia."]));
          return;
        }
        var probables = CC.causasRaiz.filter(function (c) { return conteo[c.id] === maximo; });
        var nombres = probables.map(function (c) { return c.nombre + " (" + c.nombreEs + ")"; }).join(" o ");
        var p = el("p", {}, [
          "Según las señales marcadas, la causa más probable es ",
          el("strong", {}, [nombres]), "."
        ]);
        sugerencia.appendChild(p);
        var sinConfirmar = probables.filter(function (c) { return CC.estado.causas.indexOf(c.id) === -1; });
        if (sinConfirmar.length && CC.estado.causas.length === 0) {
          sugerencia.appendChild(el("button", {
            type: "button", className: "btn btn-peq",
            onclick: function () {
              sinConfirmar.forEach(function (c) { CC.alternar(CC.estado.causas, c.id, true); });
              CC.guardar(); CC.dibujar();
            }
          }, ["Confirmar sugerencia"]));
        }
      }
      actualizar();
    }
  });
})();
