/* Arranque: carga el borrador guardado y conecta los botones generales. */
(function () {
  CC.cargar();

  document.getElementById("btn-atras").addEventListener("click", function () { CC.irA(CC.estado.paso - 1); });
  document.getElementById("btn-siguiente").addEventListener("click", function () { CC.irA(CC.estado.paso + 1); });
  document.getElementById("btn-nueva").addEventListener("click", function () {
    if (window.confirm("¿Empezar una sesión nueva? Se borrará el borrador actual de este navegador.")) CC.reiniciar();
  });

  if (CC.estado.paso >= CC.pasos.length) CC.estado.paso = 0;
  CC.dibujar();
})();
