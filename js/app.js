/*
 * Núcleo de la aplicación: estado de la sesión, guardado local,
 * navegación entre pasos y utilidades para crear elementos.
 * Los pasos viven en js/pasos/ y se registran con CC.registrarPaso().
 */
window.CC = window.CC || {};

(function () {
  var CLAVE = "coaching-companion:borrador";

  /* ---------- Estado ---------- */
  CC.estadoInicial = function () {
    return {
      paso: 0,
      sesion: { representante: "", supervisor: "", fecha: hoyISO() },
      behaviorId: "",
      grow: {
        goal: { marcadas: [], notas: "" },
        reality: { marcadas: [], notas: "" },
        options: { marcadas: [], notas: "" },
        way: { marcadas: [], notas: "" }
      },
      etapaActiva: "goal",
      senales: [],          // ids "causa:indice"
      causas: [],           // ids de causa confirmados
      estilo: "",
      ayudas: [],           // textos de ayuda elegidos
      ayudaOtra: "",
      smart: { s: "", m: "", a: "", r: "", t: "", fechaLimite: "", fechaSeguimiento: "" }
    };
  };

  CC.estado = CC.estadoInicial();

  CC.cargar = function () {
    try {
      var txt = window.localStorage.getItem(CLAVE);
      if (txt) {
        var guardado = JSON.parse(txt);
        CC.estado = combinar(CC.estadoInicial(), guardado);
      }
    } catch (e) { /* sin almacenamiento: se trabaja solo en memoria */ }
  };

  var temporizador = null;
  function escribir() {
    temporizador = null;
    try {
      window.localStorage.setItem(CLAVE, JSON.stringify(CC.estado));
      avisar("Borrador guardado en este navegador");
    } catch (e) { avisar(""); }
  }
  CC.guardar = function () {
    clearTimeout(temporizador);
    temporizador = setTimeout(escribir, 300);
  };
  /* Si se cierra o recarga la página con cambios pendientes, guardarlos ya. */
  window.addEventListener("pagehide", function () { if (temporizador) { clearTimeout(temporizador); escribir(); } });

  CC.reiniciar = function () {
    try { window.localStorage.removeItem(CLAVE); } catch (e) {}
    CC.estado = CC.estadoInicial();
    CC.irA(0);
  };

  /* ---------- Consultas sobre los datos ---------- */
  CC.behaviorActual = function () {
    for (var i = 0; i < CC.behaviors.length; i++) {
      if (CC.behaviors[i].id === CC.estado.behaviorId) return CC.behaviors[i];
    }
    return null;
  };
  CC.causaPorId = function (id) {
    for (var i = 0; i < CC.causasRaiz.length; i++) if (CC.causasRaiz[i].id === id) return CC.causasRaiz[i];
    return null;
  };
  CC.estiloPorId = function (id) {
    for (var i = 0; i < CC.estilosAprendizaje.length; i++) if (CC.estilosAprendizaje[i].id === id) return CC.estilosAprendizaje[i];
    return null;
  };

  /* ---------- Navegación ---------- */
  CC.pasos = [];
  CC.registrarPaso = function (paso) { CC.pasos.push(paso); };

  CC.irA = function (indice) {
    if (indice < 0 || indice >= CC.pasos.length) return;
    CC.estado.paso = indice;
    CC.guardar();
    CC.dibujar();
    var main = document.getElementById("contenido");
    main.focus({ preventScroll: true });
    window.scrollTo(0, 0);
  };

  CC.dibujar = function () {
    var paso = CC.pasos[CC.estado.paso];
    var nav = document.getElementById("pasos");
    nav.innerHTML = "";
    CC.pasos.forEach(function (p, i) {
      var listo = p.listo ? p.listo() : false;
      var b = CC.el("button", {
        type: "button",
        className: "paso" + (i === CC.estado.paso ? " activo" : "") + (listo ? " listo" : ""),
        onclick: function () { CC.irA(i); },
        "aria-current": i === CC.estado.paso ? "step" : null
      }, [
        CC.el("span", { className: "num" }, [listo && i !== CC.estado.paso ? "✓" : String(i + 1)]),
        CC.el("span", { className: "txt" }, [p.titulo])
      ]);
      nav.appendChild(b);
    });

    var main = document.getElementById("contenido");
    main.innerHTML = "";
    paso.dibujar(main);

    document.getElementById("btn-atras").style.visibility = CC.estado.paso === 0 ? "hidden" : "visible";
    var sig = document.getElementById("btn-siguiente");
    var ultimo = CC.estado.paso === CC.pasos.length - 1;
    sig.style.visibility = ultimo ? "hidden" : "visible";
    sig.textContent = ultimo ? "" : "Siguiente: " + CC.pasos[CC.estado.paso + 1].titulo + " →";
  };

  /* Vuelve a dibujar solo la barra de pasos (para las marcas ✓). */
  CC.refrescarPasos = function () {
    var nav = document.getElementById("pasos");
    var botones = nav.querySelectorAll(".paso");
    CC.pasos.forEach(function (p, i) {
      var listo = p.listo ? p.listo() : false;
      botones[i].classList.toggle("listo", listo);
      botones[i].querySelector(".num").textContent = listo && i !== CC.estado.paso ? "✓" : String(i + 1);
    });
  };

  /* ---------- Utilidades ---------- */
  CC.el = function (etiqueta, attrs, hijos) {
    var n = document.createElement(etiqueta);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        var v = attrs[k];
        if (v === null || v === undefined || v === false) return;
        if (k === "className") n.className = v;
        else if (k.indexOf("on") === 0 && typeof v === "function") n.addEventListener(k.slice(2), v);
        else if (k === "value") n.value = v;
        else if (k === "checked") n.checked = !!v;
        else n.setAttribute(k, v === true ? "" : v);
      });
    }
    (hijos || []).forEach(function (h) {
      if (h === null || h === undefined || h === false) return;
      n.appendChild(typeof h === "string" ? document.createTextNode(h) : h);
    });
    return n;
  };

  /* Agrega o quita un valor de una lista del estado. */
  CC.alternar = function (lista, valor, activo) {
    var i = lista.indexOf(valor);
    if (activo && i === -1) lista.push(valor);
    if (!activo && i !== -1) lista.splice(i, 1);
  };

  CC.etiquetaEjemplo = function () {
    return CC.el("span", { className: "chip chip-ejemplo", title: "Behavior de ejemplo: edita datos/behaviors.js" }, ["EJEMPLO"]);
  };

  CC.chipsMetricas = function (metricas) {
    return CC.el("span", { className: "metricas" }, metricas.map(function (m) {
      return CC.el("span", { className: "chip" }, [m]);
    }));
  };

  CC.formatearFecha = function (iso) {
    if (!iso) return "";
    var p = iso.split("-");
    return p.length === 3 ? p[2] + "/" + p[1] + "/" + p[0] : iso;
  };

  function hoyISO() {
    var d = new Date();
    var m = String(d.getMonth() + 1); if (m.length < 2) m = "0" + m;
    var dia = String(d.getDate()); if (dia.length < 2) dia = "0" + dia;
    return d.getFullYear() + "-" + m + "-" + dia;
  }
  CC.hoyISO = hoyISO;

  CC.sumarDias = function (iso, dias) {
    var p = iso.split("-");
    var d = new Date(+p[0], +p[1] - 1, +p[2] + dias);
    var m = String(d.getMonth() + 1); if (m.length < 2) m = "0" + m;
    var dia = String(d.getDate()); if (dia.length < 2) dia = "0" + dia;
    return d.getFullYear() + "-" + m + "-" + dia;
  };

  function combinar(base, extra) {
    Object.keys(extra || {}).forEach(function (k) {
      if (base[k] && typeof base[k] === "object" && !Array.isArray(base[k]) && extra[k] && typeof extra[k] === "object") {
        combinar(base[k], extra[k]);
      } else if (k in base) {
        base[k] = extra[k];
      }
    });
    return base;
  }

  function avisar(texto) {
    var a = document.getElementById("aviso-guardado");
    if (a) a.textContent = texto;
  }
})();
