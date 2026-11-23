const PAISES = {
  ECU: "Ecuador", COL: "Colombia", PER: "Perú", CHL: "Chile",
  BRA: "Brasil", MEX: "México", ARG: "Argentina", VEN: "Venezuela",
  USA: "EE.UU.", CHN: "China", KOR: "Corea del Sur"
};

const MODULOS = [
  { id: "todos", titulo: "Todos los módulos", color: "blue" },
  { id: "crecimiento", titulo: "1. Cuentas Nacionales y Crecimiento", color: "blue" },
  { id: "laboral", titulo: "2. Mercado Laboral", color: "emerald" },
  { id: "inflacion", titulo: "3. Inflación y Precios", color: "amber" },
  { id: "financiero", titulo: "4. Condiciones Financieras y Riesgo País", color: "indigo" },
  { id: "fiscal", titulo: "5. Sector Fiscal (SPNF)", color: "rose" },
  { id: "externo", titulo: "6. Sector Externo y Balanza de Pagos", color: "cyan" },
  { id: "productividad", titulo: "7. Productividad y Preparación Digital", color: "violet" }
];

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
let moduloActivo = "todos";
let textoBusqueda = "";

// Estado del modal activo
let indicadorModalActual = null;
let paisesModalSeleccionados = new Set();

// Carga resiliente del CSV (prueba en raíz y si falla prueba en data/)
function cargarCSV(ruta, respaldo) {
  Papa.parse(ruta, {
    download: true,
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    complete: function (results) {
      if (results.data && results.data.length > 0 && results.data[0].key) {
        datosGlobales = results.data;
        renderizarTabsModulos();
        renderizarCuadriculaPrincipal();
      } else if (respaldo) {
        cargarCSV(respaldo, null);
      }
    },
    error: function () {
      if (respaldo) {
        cargarCSV(respaldo, null);
      } else {
        document.getElementById("contenedor-principal").innerHTML = `
          <div class="bg-red-50 border border-red-200 text-red-800 p-6 rounded-xl text-center">
            No se pudo cargar <strong>datos.csv</strong>. Verifica que el archivo esté en tu repositorio.
          </div>`;
      }
    }
  });
}

cargarCSV("datos.csv", "data/datos.csv");

// Renderizar botones de navegación de los 7 módulos
function renderizarTabsModulos() {
  const cont = document.getElementById("tabs-modulos");
  cont.innerHTML = "";
  MODULOS.forEach(mod => {
    const activo = moduloActivo === mod.id;
    const btn = document.createElement("button");
    btn.textContent = mod.titulo;
    btn.className = activo
      ? "px-3.5 py-1.5 rounded-lg text-xs font-bold bg-blue-600 text-white shadow-sm transition cursor-pointer"
      : "px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition cursor-pointer";
    btn.onclick = () => {
      moduloActivo = mod.id;
      renderizarTabsModulos();
      renderizarCuadriculaPrincipal();
    };
    cont.appendChild(btn);
  });
}

// Generar mini-gráfico SVG rápido para cada tarjeta de la pantalla principal
function crearMiniSVG(serie) {
  if (!serie || serie.length === 0) return "";
  const w = 260;
  const h = 68;
  const padX = 6;
  const padY = 8;

  if (serie.length === 1) {
    return `
      <svg viewBox="0 0 ${w} ${h}" class="w-full h-16 overflow-visible">
        <line x1="${padX}" y1="${h / 2}" x2="${w - padX}" y2="${h / 2}" stroke="#e2e8f0" stroke-dasharray="3 3" stroke-width="1.5" />
        <rect x="${w / 2 - 22}" y="${h / 2 - 12}" width="44" height="24" rx="6" fill="#dbeafe" />
        <circle cx="${w / 2}" cy="${h / 2}" r="4.5" fill="#2563eb" />
      </svg>`;
  }

  const vals = serie.map(d => Number(d.value));
  const minV = Math.min(...vals);
  const maxV = Math.max(...vals);
  const rango = maxV - minV || 1;

  const puntos = serie.map((d, i) => {
    const x = padX + (i / (serie.length - 1)) * (w - padX * 2);
    const y = h - padY - ((Number(d.value) - minV) / rango) * (h - padY * 2);
    return { x, y, val: Number(d.value) };
  });

  const pathLinea = puntos.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(" ");
  const pathArea = `${pathLinea} L ${puntos[puntos.length - 1].x.toFixed(1)} ${h} L ${puntos[0].x.toFixed(1)} ${h} Z`;
  const ultimo = puntos[puntos.length - 1];
  const primero = puntos[0];
  const subio = ultimo.val >= primero.val;
  const colorLinea = subio ? "#2563eb" : "#e11d48";
  const colorRelleno = subio ? "rgba(37, 99, 235, 0.10)" : "rgba(225, 29, 72, 0.10)";

  // Línea base cero si hay valores negativos y positivos
  let lineaCero = "";
  if (minV < 0 && maxV > 0) {
    const y0 = h - padY - ((0 - minV) / rango) * (h - padY * 2);
    lineaCero = `<line x1="${padX}" y1="${y0.toFixed(1)}" x2="${w - padX}" y2="${y0.toFixed(1)}" stroke="#cbd5e1" stroke-dasharray="3 3" stroke-width="1" />`;
  }

  return `
    <svg viewBox="0 0 ${w} ${h}" class="w-full h-16 overflow-visible">
      ${lineaCero}
      <path d="${pathArea}" fill="${colorRelleno}" />
      <path d="${pathLinea}" fill="none" stroke="${colorLinea}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
      <circle cx="${ultimo.x.toFixed(1)}" cy="${ultimo.y.toFixed(1)}" r="3.5" fill="${colorLinea}" />
    </svg>`;
}

// Renderizar todas las tarjetas agrupadas por módulo en la pantalla principal
function renderizarCuadriculaPrincipal() {
  const contenedor = document.getElementById("contenedor-principal");
  contenedor.innerHTML = "";

  const modulosVisibles = MODULOS.filter(m => m.id !== "todos" && (moduloActivo === "todos" || moduloActivo === m.id));
  let totalMostrados = 0;

  modulosVisibles.forEach(mod => {
    const clavesModulo = Object.keys(CATALOGO).filter(key => {
      const item = CATALOGO[key];
      const coincideMod = item.modulo === mod.id;
      const coincideBusq = item.nombre.toLowerCase().includes(textoBusqueda.toLowerCase());
      return coincideMod && coincideBusq;
    });

    if (clavesModulo.length === 0) return;
    totalMostrados += clavesModulo.length;

    const seccion = document.createElement("section");
    seccion.className = "space-y-4";
    seccion.innerHTML = `
      <div class="flex items-center justify-between border-b border-slate-300 pb-2">
        <h2 class="text-lg sm:text-xl font-bold text-slate-900">${mod.titulo}</h2>
        <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-200 text-slate-700">
          ${clavesModulo.length} ${clavesModulo.length === 1 ? "indicador" : "indicadores"}
        </span>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" id="grid-${mod.id}"></div>
    `;
    contenedor.appendChild(seccion);

    const grid = seccion.querySelector(`#grid-${mod.id}`);

    clavesModulo.forEach(key => {
      const filasKey = datosGlobales.filter(d => d.key === key && d.value !== null);
      if (filasKey.length === 0) return;

      const isos = [...new Set(filasKey.map(d => d.iso))];
      // Priorizar Ecuador como vista previa de tarjeta; si no existe, el primer país disponible
      const isoPrincipal = isos.includes("ECU") ? "ECU" : isos[0];
      const seriePrincipal = filasKey
        .filter(d => d.iso === isoPrincipal)
        .sort((a, b) => a.year - b.year);

      const ultimoDato = seriePrincipal[seriePrincipal.length - 1];
      const primerDato = seriePrincipal[0];
      const valorFmt = Number(ultimoDato.value).toLocaleString("es-EC", { maximumFractionDigits: 2 });

      const card = document.createElement("article");
      card.className = "group bg-white rounded-xl border border-slate-200 p-4 shadow-sm hover:shadow-lg hover:border-blue-500 transition-all duration-200 flex flex-col justify-between cursor-pointer";
      card.onclick = () => abrirModalIndicador(key);

      card.innerHTML = `
        <div>
          <div class="flex items-center justify-between gap-2 mb-2">
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold ${isoPrincipal === "ECU" ? "bg-amber-100 text-amber-900" : "bg-slate-100 text-slate-700"}">
              ${PAISES[isoPrincipal]} (${isoPrincipal})
            </span>
            <span class="text-[11px] font-medium text-slate-400">
              ${isos.length} ${isos.length === 1 ? "país" : "países"}
            </span>
          </div>
          <h3 class="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition line-clamp-2 min-h-[2.5rem]">
            ${CATALOGO[key].nombre}
          </h3>
          <div class="mt-2 flex items-baseline gap-2">
            <span class="text-2xl font-extrabold text-slate-900">${valorFmt}</span>
            <span class="text-xs font-semibold text-slate-500">(${ultimoDato.year})</span>
          </div>
          <p class="text-[11px] text-slate-400 truncate mt-0.5">${ultimoDato.unit}</p>
        </div>

        <div class="mt-3 pt-2 border-t border-slate-100">
          ${crearMiniSVG(seriePrincipal)}
          <div class="flex items-center justify-between text-[11px] text-slate-400 mt-1">
            <span>${primerDato.year} – ${ultimoDato.year}</span>
            <span class="font-semibold text-blue-600 group-hover:translate-x-0.5 transition-transform">Filtrar país y fecha →</span>
          </div>
        </div>
      `;

      grid.appendChild(card);
    });
  });

  if (totalMostrados === 0) {
    contenedor.innerHTML = `
      <div class="bg-white rounded-xl border border-slate-200 p-10 text-center text-slate-500">
        No se encontraron indicadores que coincidan con "<strong>${textoBusqueda}</strong>".
      </div>`;
  }
}

// Abrir el modal interactivo al hacer clic en una tarjeta
function abrirModalIndicador(key) {
  indicadorModalActual = key;
  const filas = datosGlobales.filter(d => d.key === key && d.value !== null);
  const anios = filas.map(d => Number(d.year));
  const minAnio = Math.min(...anios);
  const maxAnio = Math.max(...anios);

  const isosDisponibles = [...new Set(filas.map(d => d.iso))];

  // Por defecto activar Ecuador y hasta 3 comparadores regionales disponibles
  const preferidos = ["ECU", "COL", "PER", "CHL", "USA", "CHN"];
  const iniciales = preferidos.filter(iso => isosDisponibles.includes(iso)).slice(0, 4);
  paisesModalSeleccionados = new Set(iniciales.length > 0 ? iniciales : [isosDisponibles[0]]);

  const info = CATALOGO[key];
  const modObj = MODULOS.find(m => m.id === info.modulo);

  document.getElementById("modal-modulo").textContent = modObj ? modObj.titulo : "";
  document.getElementById("modal-titulo").textContent = info.nombre;
  document.getElementById("modal-unidad").textContent = `Unidad: ${filas[0].unit} · Cobertura histórica: ${minAnio}–${maxAnio}`;

  const inputIni = document.getElementById("modal-anio-ini");
  const inputFin = document.getElementById("modal-anio-fin");
  inputIni.min = minAnio;
  inputIni.max = maxAnio;
  inputIni.value = minAnio;

  inputFin.min = minAnio;
  inputFin.max = maxAnio;
  inputFin.value = maxAnio;

  document.getElementById("modal-detalle").classList.remove("hidden");
  document.body.classList.add("overflow-hidden");

  actualizarGraficoModal();
}

function cerrarModal() {
  document.getElementById("modal-detalle").classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
}

function actualizarGraficoModal() {
  if (!indicadorModalActual) return;

  const key = indicadorModalActual;
  const anioIni = Number(document.getElementById("modal-anio-ini").value);
  const anioFin = Number(document.getElementById("modal-anio-fin").value);
  const tipo = document.getElementById("modal-tipo").value;

  const filasIndicador = datosGlobales.filter(d => d.key === key && d.value !== null);
  const isosDisponibles = new Set(filasIndicador.map(d => d.iso));

  // Dibujar botones de países en el modal
  const contPaises = document.getElementById("modal-paises");
  contPaises.innerHTML = "";

  Object.keys(PAISES).forEach(iso => {
    const disponible = isosDisponibles.has(iso);
    if (!disponible) return; // Mostrar solo los países que sí tienen datos para este indicador

    const activo = paisesModalSeleccionados.has(iso);
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = `${PAISES[iso]} (${iso})`;
    btn.className = activo
      ? "px-3 py-1.5 rounded-lg text-xs font-bold bg-blue-600 text-white shadow-sm transition cursor-pointer"
      : "px-3 py-1.5 rounded-lg text-xs font-medium bg-white text-slate-700 border border-slate-300 hover:bg-slate-100 transition cursor-pointer";

    btn.onclick = () => {
      if (paisesModalSeleccionados.has(iso)) {
        if (paisesModalSeleccionados.size > 1) paisesModalSeleccionados.delete(iso);
      } else {
        paisesModalSeleccionados.add(iso);
      }
      actualizarGraficoModal();
    };
    contPaises.appendChild(btn);
  });

  // Construir series para Plotly
  const filasFiltradas = filasIndicador.filter(
    d => paisesModalSeleccionados.has(d.iso) && Number(d.year) >= anioIni && Number(d.year) <= anioFin
  );

  const trazas = [];
  paisesModalSeleccionados.forEach(iso => {
    const serie = filasFiltradas
      .filter(d => d.iso === iso)
      .sort((a, b) => a.year - b.year);

    if (serie.length > 0) {
      trazas.push({
        x: serie.map(d => d.year),
        y: serie.map(d => d.value),
        name: `${PAISES[iso]} (${iso})`,
        type: serie.length === 1 || tipo === "bar" ? "bar" : "scatter",
        mode: "lines+markers",
        line: { width: iso === "ECU" ? 3.5 : 2 },
        marker: { size: 6 }
      });
    }
  });

  const unidad = filasIndicador[0]?.unit || "";

  Plotly.newPlot("modal-grafico", trazas, {
    margin: { t: 15, r: 20, b: 45, l: 60 },
    hovermode: "x unified",
    xaxis: { title: "Año", tickformat: "d", gridcolor: "#f1f5f9" },
    yaxis: { title: unidad, gridcolor: "#f1f5f9", zerolinecolor: "#cbd5e1" },
    legend: { orientation: "h", y: -0.22 },
    paper_bgcolor: "white",
    plot_bgcolor: "white"
  }, { responsive: true });

  // Actualizar tabla de fuentes oficiales
  const tbody = document.getElementById("modal-fuentes");
  tbody.innerHTML = "";
  const fuentesUnicas = new Map();
  filasFiltradas.forEach(d => {
    if (!fuentesUnicas.has(d.iso)) fuentesUnicas.set(d.iso, d);
  });

  fuentesUnicas.forEach((d, iso) => {
    tbody.innerHTML += `
      <tr>
        <td class="py-2.5 px-3 font-bold text-slate-800 whitespace-nowrap">${PAISES[iso]} (${iso})</td>
        <td class="py-2.5 px-3 text-slate-600">${d.unit}</td>
        <td class="py-2.5 px-3 text-slate-700">${d.source}</td>
        <td class="py-2.5 px-3 whitespace-nowrap">
          <a href="${d.url}" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-semibold hover:underline">
            Abrir fuente ↗
          </a>
        </td>
      </tr>
    `;
  });
}

// Eventos globales
document.getElementById("buscador").addEventListener("input", e => {
  textoBusqueda = e.target.value;
  renderizarCuadriculaPrincipal();
});

document.getElementById("btn-cerrar-modal").addEventListener("click", cerrarModal);
document.getElementById("modal-detalle").addEventListener("click", e => {
  if (e.target.id === "modal-detalle") cerrarModal();
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape") cerrarModal();
});

document.getElementById("modal-anio-ini").addEventListener("change", actualizarGraficoModal);
document.getElementById("modal-anio-fin").addEventListener("change", actualizarGraficoModal);
document.getElementById("modal-tipo").addEventListener("change", actualizarGraficoModal);

document.getElementById("btn-solo-ecu").addEventListener("click", () => {
  const filas = datosGlobales.filter(d => d.key === indicadorModalActual);
  if (filas.some(d => d.iso === "ECU")) {
    paisesModalSeleccionados = new Set(["ECU"]);
    actualizarGraficoModal();
  }
});

document.getElementById("btn-todos-paises").addEventListener("click", () => {
  const filas = datosGlobales.filter(d => d.key === indicadorModalActual);
  paisesModalSeleccionados = new Set(filas.map(d => d.iso));
  actualizarGraficoModal();
});

document.querySelectorAll(".btn-rango").forEach(btn => {
  btn.addEventListener("click", () => {
    const filas = datosGlobales.filter(d => d.key === indicadorModalActual);
    const anios = filas.map(d => Number(d.year));
    const minA = Math.min(...anios);
    const maxA = Math.max(...anios);
    const tipoRango = btn.dataset.rango;

    document.getElementById("modal-anio-fin").value = maxA;
    document.getElementById("modal-anio-ini").value =
      tipoRango === "todo" ? minA : Math.max(minA, maxA - Number(tipoRango));

    actualizarGraficoModal();
  });
});
