/* Arranque: carga el borrador guardado y conecta los botones generales. */
(function () {
  CC.cargar();

  document.getElementById("btn-atras").addEventListener("click", function () { CC.irA(CC.estado.paso - 1); });
  document.getElementById("btn-siguiente").addEventListener("click", function () { CC.irA(CC.estado.paso + 1); });
  /* Confirmación en dos toques (sin ventanas emergentes, que algunos visores bloquean). */
  var btnNueva = document.getElementById("btn-nueva");
  var esperando = null;
  btnNueva.addEventListener("click", function () {
    if (esperando) {
      clearTimeout(esperando); esperando = null;
      btnNueva.textContent = "Nueva sesión"; btnNueva.classList.remove("btn-nueva-confirmar");
      CC.reiniciar();
      return;
    }
    btnNueva.textContent = "¿Borrar borrador? Toca otra vez";
    btnNueva.classList.add("btn-nueva-confirmar");
    esperando = setTimeout(function () {
      esperando = null;
      btnNueva.textContent = "Nueva sesión"; btnNueva.classList.remove("btn-nueva-confirmar");
    }, 4000);
  });

  if (CC.estado.paso >= CC.pasos.length) CC.estado.paso = 0;
  CC.dibujar();
})();
