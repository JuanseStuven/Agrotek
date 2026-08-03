// Información técnica y de ingeniería del catálogo Agrotek.

export const materiales = {
  title: "Opciones de Materiales para Cangilones Agrotek",
  description:
    "Fabricamos los cangilones en distintos materiales según la aplicación, la temperatura de trabajo y el nivel de abrasión del producto transportado.",
  columns: ["Material", "Color", "Uso", "Rango de temperatura", "Aprobado FDA", "Comentarios"],
  rows: [
    {
      material: "HDPE",
      color: "Blanco / Naranja",
      uso: "Granos y productos alimenticios",
      temperatura: "-48º a 90º C (98º C intermitente)",
      fda: "Sí",
      comentarios:
        "Económico, en polietileno de alta densidad. Aprobado por la FDA para el manejo de productos alimenticios.",
    },
    {
      material: "Nylon",
      color: "Crema",
      uso: "Productos calientes, alto impacto, abrasivamente densos",
      temperatura: "-15º a 150º C (180º C intermitente)",
      fda: "A disposición si se requiere",
      comentarios:
        "El mejor para usarse en altas temperaturas, resistente a altos impactos y abrasivos, condiciones severas.",
    },
    {
      material: "Uretano",
      color: "Verde",
      uso: "Materiales abrasivos severos, pegajosos",
      temperatura: "-15º a 90º C (98º C intermitente)",
      fda: "Sí",
      comentarios:
        "El más flexible y resistente a la abrasión. Muy bueno para productos pegajosos y de partículas filosas.",
    },
    {
      material: "Resinas Especiales",
      color: "De acuerdo a sus necesidades",
      uso: "Productos en condiciones no apropiadas para los materiales en existencia",
      temperatura: "De acuerdo a sus necesidades",
      fda: "—",
      comentarios:
        "Para requerimientos específicos como temperaturas y abrasión extremas o descarga de productos especiales.",
    },
  ],
};

export const bulones = {
  title: "Bulones y Empalmes",
  description:
    "Un dispositivo de anclaje del bulón debe ser usado en toda instalación de los cangilones. La arandela tipo Grover puede ser reemplazada por una tuerca autofrenante para una instalación más rápida. Una vez instalados, hacer funcionar el elevador por 30 minutos en vacío y luego reajustar.",
  medidas: [
    '1/4" x 3/4"',
    '1/4" x 1"',
    '1/4" x 1-1/4"',
    '5/16" x 1-1/4"',
    '5/16" x 1-1/2"',
    '3/8" x 1-1/4"',
    '3/8" x 1-1/2"',
  ],
  splicetek: {
    title: "Splicetek",
    description:
      "El Splicetek es un dispositivo mecánico de empalme de bandas de tres piezas, apto para bandas de goma o PVC.",
    details: [
      "Use bulón de 100 mm para bandas de hasta 6,5 mm de espesor",
      "Use bulón de 115 mm para bandas desde 6,5 mm hasta 13 mm de espesor",
      "Use bulón de 130 mm para bandas desde 13 mm hasta 19 mm de espesor",
      "Cada juego de empalme se instala en 50 mm de banda",
      "Temperatura máxima de operación 260º C",
      "Los bulones se entregan con tuerca autofrenante y arandela plana de gran diámetro",
      "Disponibles zincados, consultar por acero inoxidable",
    ],
  },
};

export const medicion = {
  title: "Cómo Medir un Cangilón",
  description:
    "Referencia para tomar correctamente las medidas de un cangilón Agrotek.",
  items: [
    {
      label: "Largo",
      text:
        "El largo del cangilón es la medida de la espalda, en donde están las perforaciones de montaje del mismo, apoyado en una superficie plana.",
    },
    {
      label: "Proyección",
      text:
        "La proyección del cangilón se mide tomando la distancia vertical desde la espalda hasta el labio del cangilón, distancia que sobresale de la banda.",
    },
    {
      label: "Altura",
      text:
        "La altura es la medida de la espalda del cangilón, donde están hechas las perforaciones de montaje.",
    },
  ],
};

export const venting = {
  title: "Opciones de Venting",
  description:
    "El 'Venting' o venteo en los cangilones Agrotek ayuda a un correcto llenado y descarga evitando turbulencias, cuando se transportan productos muy livianos, con pelusa, extremadamente densos o materiales de poca fluidez.",
  options: [
    {
      name: "Venting Estándar",
      text: "Misma perforación que el perforado de montaje más una perforación en cada lado.",
    },
    {
      name: "Venting #1",
      text: "Misma perforación que el perforado de montaje.",
    },
    {
      name: "Venting #2",
      text: "El doble de perforaciones que el perforado de montaje.",
    },
    {
      name: "Venting #3",
      text: "Dos filas del doble de perforaciones que el perforado de montaje.",
    },
    {
      name: "Venting #4",
      text: "El mismo perforado que el Venting #3 más tres perforaciones en cada lado.",
    },
    {
      name: "Venting #5",
      text: "Perforaciones según pedido del cliente.",
    },
  ],
};

export const calculos = {
  title: "Cálculo de Capacidades y Potencia",
  intro:
    "Para propósitos de ingeniería, Agrotek recomienda el uso base de nivel de agua para cálculos de capacidad. El llenado real del cangilón dependerá del producto transportado y las condiciones de trabajo del elevador.",
  hp: {
    title: "Cálculo de los HP",
    formula: "Capacidad (Tons) × (Altura + 9,15 en metros) × 0,0027 × 1,341 = HP necesarios",
    notes: [
      "La fórmula resultará la potencia teórica necesaria.",
      "Es recomendable adicionar un 25% por la pérdida en el mando.",
      "Adicionar hasta un 15% por la fricción y por el dragado de los cangilones en el pie de noria.",
    ],
  },
  capacidad: {
    title: "Cálculo de Capacidad en Elevadores",
    steps: [
      {
        title: "Paso 1 — Velocidad de la banda (m/s)",
        text: "Diámetro de la polea de mando (m) × 3,1416 (π) × RPM de polea de mando ÷ 60 = Metros por segundo (m/s).",
      },
      {
        title: "Paso 2 — Capacidad (ton/h)",
        text: "Capacidad del cangilón a nivel de agua × Cangilones por metro × Nº de columnas de cangilones en la banda × Velocidad de la banda (m/s) × (36/10) × Pe del material transportado = Capacidad en Ton/h.",
      },
    ],
    note: "Esta fórmula es para la obtención rápida de la capacidad a efectos de valoración solamente; la capacidad real depende de las condiciones de uso del elevador y del tipo de carga y descarga.",
  },
};

export const importante =
  "Se recomienda usar arandelas planas de gran diámetro para la instalación de cangilones plásticos, así como tuerca autofrenante o arandelas tipo Grover. Una vez instalados, se debe hacer funcionar el elevador al menos 30 minutos en vacío y luego reajustar.";
