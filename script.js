const materias = [
  {
    ciclo: 1,
    materias: [
      { codigo: "IAI175", uv: 4, nombre: "Introducción a la Informática", electiva: false, prerequisitos: [] },
      { codigo: "MAT175", uv: 4, nombre: "Matemática I", electiva: false, prerequisitos: [] },
      { codigo: "MTE175", uv: 4, nombre: "Métodos Experimentales", electiva: false, prerequisitos: [] },
      { codigo: "PSI175", uv: 4, nombre: "Psicología Social", electiva: false, prerequisitos: [] }
    ]
  },
  {
    ciclo: 2,
    materias: [
      { codigo: "FIR175", uv: 4, nombre: "Física I", electiva: false, prerequisitos: [] },
      { codigo: "HSE175", uv: 4, nombre: "Historia Social y Económica de El Salvador y Centroamérica", electiva: false, prerequisitos: ["PSI175"] },
      { codigo: "MSM175", uv: 4, nombre: "Manejo de Software para Microcomputadoras", electiva: false, prerequisitos: ["IAI175"] },
      { codigo: "MAT275", uv: 4, nombre: "Matemática II", electiva: false, prerequisitos: ["MAT175"] },
      { codigo: "PRN175", uv: 4, nombre: "Programación I", electiva: false, prerequisitos: ["IAI175"] }
    ]
  },
  {
    ciclo: 3,
    materias: [
      { codigo: "FIR275", uv: 4, nombre: "Física II", electiva: false, prerequisitos: ["FIR175", "MAT275"] },
      { codigo: "FDE175", uv: 4, nombre: "Fundamentos de Economía", electiva: false, prerequisitos: ["HSE175", "MAT275"] },
      { codigo: "MAT375", uv: 4, nombre: "Matemática III", electiva: false, prerequisitos: ["MAT275"] },
      { codigo: "PYE175", uv: 4, nombre: "Probabilidad y Estadística", electiva: false, prerequisitos: ["MAT275"] },
      { codigo: "PRN275", uv: 4, nombre: "Programación II", electiva: false, prerequisitos: ["PRN175"] }
    ]
  },
  {
    ciclo: 4,
    materias: [
      { codigo: "ESD175", uv: 4, nombre: "Estructura de Datos", electiva: false, prerequisitos: ["PRN275"] },
      { codigo: "FIR375", uv: 4, nombre: "Física III", electiva: false, prerequisitos: ["FIR275"] },
      { codigo: "MAT475", uv: 4, nombre: "Matemática IV", electiva: false, prerequisitos: ["MAT375"] },
      { codigo: "MEP175", uv: 4, nombre: "Métodos Probabilísticos", electiva: false, prerequisitos: ["PYE175"] },
      { codigo: "PRN375", uv: 4, nombre: "Programación III", electiva: false, prerequisitos: ["PRN275"] }
    ]
  },
  {
    ciclo: 5,
    materias: [
      { codigo: "ANS175", uv: 4, nombre: "Análisis Numérico", electiva: false, prerequisitos: ["MAT475", "PRN175"] },
      { codigo: "HDP175", uv: 4, nombre: "Herramientas de Productividad", electiva: false, prerequisitos: ["ESD175", "MSM175"] },
      { codigo: "MOP175", uv: 4, nombre: "Métodos de Optimización", electiva: false, prerequisitos: ["MEP175"] },
      { codigo: "SDU175", uv: 4, nombre: "Sistemas Digitales I", electiva: false, prerequisitos: ["FIR375", "PRN175"] },
      { codigo: "SYP175", uv: 4, nombre: "Sistemas y Procedimientos", electiva: false, prerequisitos: ["PRN375"] }
    ]
  },
  {
    ciclo: 6,
    materias: [
      { codigo: "ARC175", uv: 4, nombre: "Arquitectura de Computadoras", electiva: false, prerequisitos: ["ANS175", "SDU175"] },
      { codigo: "IEC175", uv: 4, nombre: "Ingeniería Económica", electiva: false, prerequisitos: ["PYE175"] },
      { codigo: "SIC175", uv: 4, nombre: "Sistemas Contables", electiva: false, prerequisitos: ["HDP175"] },
      { codigo: "TPI175", uv: 4, nombre: "Técnicas de Programación Para Internet", electiva: true, prerequisitos: ["ESD175", "PRN375"] },
      { codigo: "TOO175", uv: 4, nombre: "Tecnología Orientada a Objetos", electiva: true, prerequisitos: ["PRN375"] },
      { codigo: "TSI175", uv: 4, nombre: "Teoría de Sistemas", electiva: false, prerequisitos: ["SYP175"] }
    ]
  },
  {
    ciclo: 7,
    materias: [
      { codigo: "AGR175", uv: 4, nombre: "Algoritmos Gráficos", electiva: true, prerequisitos: ["TSI175"] },
      { codigo: "DSI175", uv: 4, nombre: "Diseño de Sistemas I", electiva: false, prerequisitos: ["SIC175", "TSI175"] },
      { codigo: "PAM175", uv: 4, nombre: "Introducción a la programación de Aplicaciones Móviles", electiva: true, prerequisitos: ["ARC175", "PRN375"] },
      { codigo: "MIP175", uv: 4, nombre: "Microprogramación", electiva: false, prerequisitos: ["ARC175"] },
      { codigo: "SGG175", uv: 4, nombre: "Sistemas de Información Geográfica", electiva: true, prerequisitos: ["MOP175", "TSI175"] },
      { codigo: "TDS175", uv: 4, nombre: "Técnicas de Simulación", electiva: true, prerequisitos: ["MOP175", "TSI175"] },
      { codigo: "TAD175", uv: 4, nombre: "Teoría Administrativa", electiva: false, prerequisitos: ["SIC175"] }
    ]
  },
  {
    ciclo: 8,
    materias: [
      { codigo: "ANF175", uv: 4, nombre: "Análisis Financiero", electiva: false, prerequisitos: ["IEC175", "TAD175"] },
      { codigo: "CET175", uv: 4, nombre: "Comercio Electrónico", electiva: true, prerequisitos: ["DSI175", "TPI175"] },
      { codigo: "COS175", uv: 4, nombre: "Comunicaciones I", electiva: false, prerequisitos: ["MIP175"] },
      { codigo: "DSI275", uv: 4, nombre: "Diseño de Sistemas II", electiva: false, prerequisitos: ["DSI175"] },
      { codigo: "IGF175", uv: 4, nombre: "Ingeniería de Software", electiva: true, prerequisitos: ["DSI175", "HDP175"] },
      { codigo: "PDD175", uv: 4, nombre: "Programación 3D", electiva: true, prerequisitos: ["ANS175", "DSI275"] },
      { codigo: "PDM175", uv: 4, nombre: "Programación para Dispositivos Móviles", electiva: true, prerequisitos: ["PAM175"] },
      { codigo: "SIO175", uv: 4, nombre: "Sistemas Operativos", electiva: false, prerequisitos: ["MIP175"] }
    ]
  },
  {
    ciclo: 9,
    materias: [
      { codigo: "ADC175", uv: 4, nombre: "Análisis de Costos Informáticos", electiva: true, prerequisitos: ["ANF175"] },
      { codigo: "BAD175", uv: 4, nombre: "Bases de Datos", electiva: false, prerequisitos: ["DSI275", "SIO175"] },
      { codigo: "LPR175", uv: 4, nombre: "Legislación Profesional", electiva: false, prerequisitos: [] },
      { codigo: "PDC175", uv: 4, nombre: "Protocolos de Comunicaciones", electiva: true, prerequisitos: ["COS175"] },
      { codigo: "RHU175", uv: 4, nombre: "Recursos Humanos", electiva: false, prerequisitos: ["TAD175"] },
      { codigo: "SIF175", uv: 4, nombre: "Seguridad Informática", electiva: true, prerequisitos: ["COS175", "DSI275", "SIO175"] },
      { codigo: "SGI175", uv: 4, nombre: "Sistemas de Información Gerencial", electiva: false, prerequisitos: ["DSI275"] }
    ]
  },
  {
    ciclo: 10,
    materias: [
      { codigo: "ACC175", uv: 4, nombre: "Administración de Centros de Cómputo", electiva: false, prerequisitos: ["BAD175", "RHU175", "SGI175"] },
      { codigo: "API175", uv: 4, nombre: "Administración de Proyectos Informáticos", electiva: false, prerequisitos: ["ANF175", "SGI175"] },
      { codigo: "AUS175", uv: 4, nombre: "Auditoría de Sistemas", electiva: true, prerequisitos: ["SGI175"] },
      { codigo: "CPR175", uv: 4, nombre: "Consultoría Profesional", electiva: false, prerequisitos: [] },
      { codigo: "IBD175", uv: 4, nombre: "Implementación de Bases de Datos", electiva: true, prerequisitos: ["BAD175"] }
    ]
  }
];

// Referencia al contenedor
const malla = document.getElementById("malla");

// Objeto para guardar estados (aprobadas o no)
const estadoMaterias = {};

// Cargar estado guardado de localStorage (si existe)
const guardado = localStorage.getItem("estadoMaterias");
if (guardado) {
  Object.assign(estadoMaterias, JSON.parse(guardado));
}

// Función que verifica si están aprobados todos los prerequisitos
function tienePrerequisitosAprobados(prereqs) {
  if (!prereqs || prereqs.length === 0) return true;
  return prereqs.every(codigo => estadoMaterias[codigo]);
}

// Actualiza visualmente cada materia según su estado y prerequisitos
function actualizarEstado() {
  document.querySelectorAll(".materia").forEach(mat => {
    const prereqs = JSON.parse(mat.dataset.prerequisitos || "[]");
    const codigo = mat.dataset.codigo;
    const aprobada = estadoMaterias[codigo];

    if (!aprobada && !tienePrerequisitosAprobados(prereqs)) {
      mat.classList.add("bloqueada");
    } else {
      mat.classList.remove("bloqueada");
    }

    if (aprobada) {
      mat.classList.add("aprobada");
    } else {
      mat.classList.remove("aprobada");
    }
  });
}

// Crear la malla y agregar materias al DOM
materias.forEach(ciclo => {
  const div = document.createElement("div");
  div.classList.add("ciclo");

  const titulo = document.createElement("h2");
  titulo.textContent = `Ciclo ${ciclo.ciclo}`;
  div.appendChild(titulo);

  ciclo.materias.forEach(m => {
    const mat = document.createElement("div");
    mat.classList.add("materia");
    if (m.electiva) mat.classList.add("electiva");

    mat.dataset.codigo = m.codigo;
    mat.dataset.prerequisitos = JSON.stringify(m.prerequisitos || []);

    mat.innerHTML = `
      <div class="codigo">${m.codigo} <span class="uv">${m.uv} UV</span></div>
      <div class="nombre">${m.nombre}</div>
      <div class="tipo">${m.electiva ? "(Electiva)" : "(Obligatoria)"}</div>
    `;

    mat.addEventListener("click", () => {
      const aprobado = mat.classList.contains("aprobada");

      if (aprobado) {
        // Si ya está aprobado, al hacer click se desaprueba
        estadoMaterias[m.codigo] = false;
      } else if (tienePrerequisitosAprobados(m.prerequisitos)) {
        // Solo aprueba si prerequisitos están aprobados
        estadoMaterias[m.codigo] = true;
      } else {
        // No permite aprobar si no tiene los prerequisitos
        return;
      }

      localStorage.setItem("estadoMaterias", JSON.stringify(estadoMaterias));
      actualizarEstado();
    });

    div.appendChild(mat);
  });

  malla.appendChild(div);
});

// Actualiza la interfaz inicialmente según estado guardado
actualizarEstado();
