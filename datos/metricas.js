/*
 * ============================================================
 *  MÉTRICAS
 * ============================================================
 *  Cualquier behavior se puede trabajar con cualquier métrica.
 *  El supervisor elige en cada sesión qué métrica se busca mejorar.
 * ============================================================
 */
window.CC = window.CC || {};

CC.metricas = [
  { id: "NPS", descripcion: "Net Promoter Score" },
  { id: "7D FCR", descripcion: "El cliente no vuelve a llamar antes de 7 días" },
  { id: "Stay Connected", descripcion: "Cobro a clientes con saldo vencido (past due)" },
  { id: "CRT", descripcion: "Customer Resolution Time" },
  { id: "HSE", descripcion: "Cambios de garantía" },
  { id: "C&A/100", descripcion: "Créditos o ajustes por cada 100 llamadas" }
];
