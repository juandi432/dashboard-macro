// Diccionario de nombres de países
const PAISES = {
  ECU: "Ecuador", COL: "Colombia", PER: "Perú", CHL: "Chile",
  BRA: "Brasil", MEX: "México", ARG: "Argentina", VEN: "Venezuela",
  USA: "EE.UU.", CHN: "China", KOR: "Corea del Sur"
};

// Catálogo limpio de los 48 indicadores de tu CSV
const CATALOGO = {
  crec_pib_real: { nombre: "Crecimiento del PIB real (% anual)", modulo: "crecimiento" },
  pib_nominal_usd_m: { nombre: "PIB nominal (millones USD)", modulo: "crecimiento" },
  pib_real_usd2018_m: { nombre: "PIB real Ecuador (millones USD 2018)", modulo: "crecimiento" },
  pib_nominal_lcu_100m: { nombre: "PIB nominal moneda local (100M yuanes)", modulo: "crecimiento" },
  pib_pc_usd: { nombre: "PIB per cápita (USD)", modulo: "crecimiento" },
  poblacion_miles: { nombre: "Población (miles de habitantes)", modulo: "crecimiento" },
  c_hogares_pct: { nombre: "Consumo de hogares (% PIB)", modulo: "crecimiento" },
  g_gob_pct: { nombre: "Consumo del gobierno (% PIB)", modulo: "crecimiento" },
  fbkf_pct: { nombre: "Formación bruta de capital fijo — Ecuador (% PIB)", modulo: "crecimiento" },
  fbk_pct: { nombre: "Formación bruta de capital — Internacional (% PIB)", modulo: "crecimiento" },
  var_exist_pct: { nombre: "Variación de existencias (% PIB)", modulo: "crecimiento" },
  x_pct: { nombre: "Exportaciones de bienes y servicios (% PIB)", modulo: "crecimiento" },
  m_pct: { nombre: "Importaciones de bienes y servicios (% PIB)", modulo: "crecimiento" },
  vab_agri_pct: { nombre: "VAB Agricultura (% PIB)", modulo: "crecimiento" },
  vab_ind_pct: { nombre: "VAB Industria (% PIB)", modulo: "crecimiento" },
  vab_petroleo_minas_pct: { nombre: "VAB Petróleo y minas (% PIB)", modulo: "crecimiento" },
  vab_serv_pct: { nombre: "VAB Servicios (% PIB)", modulo: "crecimiento" },

  desempleo_prom: { nombre: "Tasa de desempleo promedio anual (%)", modulo: "laboral" },

  inflacion_prom: { nombre: "Inflación promedio anual (%)", modulo: "inflacion" },
  inflacion_dic: { nombre: "Inflación interanual a diciembre (%)", modulo: "inflacion" },
  inflacion_ultima: { nombre: "Última inflación interanual (Oct 2026, %)", modulo: "inflacion" },

  tasa_activa_ref: { nombre: "Tasa activa referencial — Ecuador (%)", modulo: "financiero" },
  tasa_pasiva_ref: { nombre: "Tasa pasiva referencial — Ecuador (%)", modulo: "financiero" },
  tasa_politica_fin: { nombre: "Tasa de política monetaria fin de año (%)", modulo: "financiero" },
  ust10_fin: { nombre: "Rendimiento bono del Tesoro EE.UU. 10 años (%)", modulo: "financiero" },
  embi_fin_pb: { nombre: "Riesgo país EMBI — fin de año (pb)", modulo: "financiero" },
  embi_prom_pb: { nombre: "Riesgo país EMBI — promedio anual (pb)", modulo: "financiero" },
  credito_privado_pct_pib: { nombre: "Crédito al sector privado (% PIB)", modulo: "financiero" },
  credito_privado_usd_m: { nombre: "Crédito al sector privado — Ecuador (millones USD)", modulo: "financiero" },
  credito_privado_usd_m_ultimo: { nombre: "Crédito privado Ecuador — Ago 2026 (millones USD)", modulo: "financiero" },

  ingresos_spnf_pct: { nombre: "Ingresos totales del SPNF (% PIB)", modulo: "fiscal" },
  ing_petroleros_spnf_pct: { nombre: "Ingresos petroleros del SPNF (% PIB)", modulo: "fiscal" },
  ing_tributarios_spnf_pct: { nombre: "Ingresos tributarios del SPNF (% PIB)", modulo: "fiscal" },
  gastos_spnf_pct: { nombre: "Gastos totales del SPNF (% PIB)", modulo: "fiscal" },
  intereses_spnf_pct: { nombre: "Intereses de deuda del SPNF (% PIB)", modulo: "fiscal" },
  resultado_global_spnf_pct: { nombre: "Resultado fiscal global del SPNF (% PIB)", modulo: "fiscal" },
  resultado_primario_spnf_pct: { nombre: "Resultado fiscal primario del SPNF (% PIB)", modulo: "fiscal" },

  balanza_bienes_usd_m: { nombre: "Balanza comercial de bienes (millones USD)", modulo: "externo" },
  cuenta_corriente_usd_m: { nombre: "Cuenta corriente — Ecuador (millones USD)", modulo: "externo" },
  cuenta_corriente_pct_pib: { nombre: "Cuenta corriente — Internacional (% PIB)", modulo: "externo" },
  remesas_usd_m: { nombre: "Remesas recibidas (millones USD)", modulo: "externo" },
  ied_usd_m: { nombre: "Inversión Extranjera Directa neta (millones USD)", modulo: "externo" },
  reservas_usd_m: { nombre: "Reservas internacionales a diciembre (millones USD)", modulo: "externo" },
  reservas_usd_m_ultimo: { nombre: "Reservas internacionales — Oct 2026 (millones USD)", modulo: "externo" },
  itcer_2018: { nombre: "Tipo de Cambio Efectivo Real — ITCER (2018=100)", modulo: "externo" },

  crec_productividad: { nombre: "Crecimiento de la productividad laboral (% anual)", modulo: "productividad" },
  internet_pct: { nombre: "Penetración de internet (% población)", modulo: "productividad" },
  banda_ancha_100hab: { nombre: "Suscripciones banda ancha (por 100 hab.)", modulo: "productividad" }
};

let datosGlobales = [];
let paisesSeleccionados = new Set(["ECU", "COL", "PER", "CHL"]);

// 1. Cargar el archivo CSV al abrir la página
Papa.parse("datos.csv", {
  download: true,
  header: true,
  dynamicTyping: true,
  skipEmptyLines: true,
  complete: function (results) {
    datosGlobales = results.data;
    renderizarKPIs();
    llenarSelectorIndicadores();
    actualizarDashboard();
  },
  error: function (err) {
    document.getElementById("titulo-grafico").textContent =
      "Error al leer data/datos.csv. Asegúrate de abrir con Live Server o Vercel.";
    console.error(err);
  }
});

// 2. Generar las 4 tarjetas KPI superiores de Ecuador
function renderizarKPIs() {
  const kpis = [
    { key: "crec_pib_real", titulo: "Crecimiento PIB Real", sufijo: "%" },
    { key: "pib_nominal_usd_m", titulo: "PIB Nominal", sufijo: " M USD" },
    { key: "embi_fin_pb", titulo: "Riesgo País (EMBI)", sufijo: " pb" },
    { key: "reservas_usd_m_ultimo", titulo: "Reservas Internacionales", sufijo: " M USD" }
  ];

  const contenedor = document.getElementById("kpi-container");
  contenedor.innerHTML = "";

  kpis.forEach(item => {
    const filas = datosGlobales
      .filter(d => d.iso === "ECU" && d.key === item.key && d.value !== null)
      .sort((a, b) => b.year - a.year);

    if (filas.length > 0) {
      const ultimo = filas[0];
      const valorFormateado = Number(ultimo.value).toLocaleString("es-EC", { maximumFractionDigits: 2 });
      contenedor.innerHTML += `
        <div class="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
          <p class="text-xs font-medium text-slate-500">${item.titulo}</p>
          <p class="text-2xl font-bold text-slate-900 mt-1">${valorFormateado}${item.sufijo}</p>
          <p class="text-xs text-emerald-700 mt-1">Año: ${ultimo.year} · ${ultimo.unit}</p>
        </div>
      `;
    }
  });
}

// 3. Llenar desplegable de indicadores según el módulo elegido
function llenarSelectorIndicadores() {
  const modulo = document.getElementById("select-modulo").value;
  const select = document.getElementById("select-indicador");
  const clavesDisponibles = [...new Set(datosGlobales.map(d => d.key))];

  select.innerHTML = "";
  clavesDisponibles.forEach(key => {
    const info = CATALOGO[key] || { nombre: key, modulo: "otros" };
    if (modulo === "todos" || info.modulo === modulo) {
      const opt = document.createElement("option");
      opt.value = key;
      opt.textContent = info.nombre;
      select.appendChild(opt);
    }
  });
}

// 4. Actualizar botones de países, gráfico y tabla de fuentes
function actualizarDashboard() {
  const key = document.getElementById("select-indicador").value;
  const anioIni = Number(document.getElementById("input-anio-ini").value);
  const anioFin = Number(document.getElementById("input-anio-fin").value);
  const tipoGrafico = document.getElementById("select-tipo").value;

  const filasIndicador = datosGlobales.filter(d => d.key === key);
  const isosDisponibles = new Set(filasIndicador.map(d => d.iso));

  // Si ningún país seleccionado tiene datos para este indicador, activar automáticamente los disponibles
  const interseccion = [...paisesSeleccionados].filter(iso => isosDisponibles.has(iso));
  if (interseccion.length === 0 && isosDisponibles.size > 0) {
    paisesSeleccionados = new Set(isosDisponibles.has("ECU") ? ["ECU"] : [[...isosDisponibles][0]]);
  }

  // Dibujar botones de países
  const contPaises = document.getElementById("paises-container");
  contPaises.innerHTML = "";
  Object.keys(PAISES).forEach(iso => {
    const tieneDatos = isosDisponibles.has(iso);
    const activo = paisesSeleccionados.has(iso) && tieneDatos;

    const btn = document.createElement("button");
    btn.textContent = `${PAISES[iso]} (${iso})`;
    btn.disabled = !tieneDatos;
    btn.className = !tieneDatos
      ? "px-2.5 py-1 rounded-md text-xs bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200"
      : activo
        ? "px-2.5 py-1 rounded-md text-xs font-semibold bg-blue-600 text-white shadow-sm cursor-pointer"
        : "px-2.5 py-1 rounded-md text-xs bg-white text-slate-700 border border-slate-300 hover:bg-slate-100 cursor-pointer";

    btn.onclick = () => {
      if (paisesSeleccionados.has(iso)) paisesSeleccionados.delete(iso);
      else paisesSeleccionados.add(iso);
      actualizarDashboard();
    };
    contPaises.appendChild(btn);
  });

  // Preparar series para Plotly
  const trazas = [];
  const filasFiltradas = filasIndicador.filter(
    d => paisesSeleccionados.has(d.iso) && d.year >= anioIni && d.year <= anioFin
  );

  paisesSeleccionados.forEach(iso => {
    const serie = filasFiltradas
      .filter(d => d.iso === iso)
      .sort((a, b) => a.year - b.year);

    if (serie.length > 0) {
      trazas.push({
        x: serie.map(d => d.year),
        y: serie.map(d => d.value),
        name: `${PAISES[iso]} (${iso})`,
        type: serie.length === 1 ? "bar" : tipoGrafico === "bar" ? "bar" : "scatter",
        mode: "lines+markers",
        line: { width: iso === "ECU" ? 3.5 : 2 },
        marker: { size: 6 }
      });
    }
  });

  const infoCat = CATALOGO[key] || { nombre: key };
  const unidadTexto = filasFiltradas.length > 0 ? filasFiltradas[0].unit : "";

  document.getElementById("titulo-grafico").textContent = infoCat.nombre;
  document.getElementById("unidad-grafico").textContent = unidadTexto;

  Plotly.newPlot("grafico", trazas, {
    margin: { t: 20, r: 20, b: 45, l: 60 },
    hovermode: "x unified",
    xaxis: { title: "Año", dtick: 2, gridcolor: "#f1f5f9" },
    yaxis: { title: unidadTexto, gridcolor: "#f1f5f9", zerolinecolor: "#cbd5e1" },
    legend: { orientation: "h", y: -0.2 },
    paper_bgcolor: "white",
    plot_bgcolor: "white"
  }, { responsive: true });

  // Llenar tabla inferior de fuentes oficiales
  const tbody = document.getElementById("tabla-fuentes");
  tbody.innerHTML = "";
  const fuentesUnicas = new Map();

  filasFiltradas.forEach(d => {
    if (!fuentesUnicas.has(d.iso)) {
      fuentesUnicas.set(d.iso, d);
    }
  });

  fuentesUnicas.forEach((d, iso) => {
    tbody.innerHTML += `
      <tr>
        <td class="py-2 pr-4 font-semibold text-slate-800">${PAISES[iso]} (${iso})</td>
        <td class="py-2 pr-4 text-slate-600">${d.unit}</td>
        <td class="py-2 pr-4 text-slate-700">${d.source}</td>
        <td class="py-2">
          <a href="${d.url}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline break-all">
            Ver fuente ↗
          </a>
        </td>
      </tr>
    `;
  });
}

// Eventos de los controles
document.getElementById("select-modulo").addEventListener("change", () => {
  llenarSelectorIndicadores();
  actualizarDashboard();
});
document.getElementById("select-indicador").addEventListener("change", actualizarDashboard);
document.getElementById("input-anio-ini").addEventListener("change", actualizarDashboard);
document.getElementById("input-anio-fin").addEventListener("change", actualizarDashboard);
document.getElementById("select-tipo").addEventListener("change", actualizarDashboard);
