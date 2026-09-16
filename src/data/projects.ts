export type ProjectStatus = "En desarrollo" | "Publicado" | "Archivado" | "Investigación";

export interface ProjectSection {
  heading: string;
  body: string[];
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  status: ProjectStatus;
  featured: boolean;
  tags: string[];
  summary: string;
  github?: string;
  demo?: string;
  image?: string;
  gallery?: string[];
  mascot: "ocarina" | "yarn" | "curious" | "sleepy";
  accent: "primary" | "secondary";
  mockup: "phone" | "grid" | "chart" | "board";
  sections: ProjectSection[];
  challenges: string[];
  learned: string[];
}

export const projects: Project[] = [
  {
    slug: "ocari",
    title: "Ocaroi",
    subtitle: "Aprender ocarina de 12 agujeros desde el teléfono",
    year: "2025",
    status: "En desarrollo",
    featured: true,
    tags: ["Flutter", "Dart", "Audio", "UX", "Mobile"],
    summary:
      "Una app para aprender y tocar la ocarina de 12 agujeros: digitaciones interactivas, afinador, biblioteca de melodías y práctica guiada.",
    github: "https://github.com/",
    mascot: "ocarina",
    accent: "primary",
    mockup: "phone",
    sections: [
      {
        heading: "Resumen",
        body: [
          "OCARI nace de una pregunta muy concreta: ¿por qué aprender ocarina sigue siendo tan analógico? La mayoría de los recursos son PDFs con diagramas estáticos o videos difíciles de seguir mientras tienes el instrumento en las manos.",
          "La app entrega digitaciones interactivas para la ocarina de 12 agujeros, un afinador en tiempo real y una biblioteca de melodías con práctica paso a paso.",
        ],
      },
      {
        heading: "Problema",
        body: [
          "Los diagramas de digitación tradicionales no dicen nada sobre el tiempo, la respiración ni la afinación real que está produciendo quien toca.",
          "Además, cada fabricante numera los agujeros distinto, así que el material disponible online es inconsistente y confunde a quien recién parte.",
        ],
      },
      {
        heading: "Enfoque",
        body: [
          "Modelé la ocarina como un mapa de estados: cada nota es una combinación binaria de 12 agujeros. Eso permite generar digitaciones en lugar de dibujarlas a mano y soportar distintas afinaciones con el mismo motor.",
          "Sobre ese modelo construí una capa visual en Flutter donde la ocarina se ilumina nota a nota, sincronizada con la melodía que se está practicando.",
        ],
      },
      {
        heading: "Detalles técnicos",
        body: [
          "Flutter + Dart con arquitectura por capas (dominio, datos, presentación) y estado manejado con providers.",
          "Análisis de pitch en tiempo real desde el micrófono con detección de frecuencia fundamental y suavizado para evitar saltos por ruido ambiente.",
          "Las melodías se almacenan como estructuras declarativas de notas y duraciones, lo que permite agregar repertorio sin tocar la UI.",
        ],
      },
    ],
    challenges: [
      "Detectar el pitch de un instrumento de soplo con armónicos suaves y mucho aire de fondo.",
      "Mantener la animación de digitación sincronizada con el audio sin bloquear el hilo de UI.",
      "Diseñar una interfaz usable con el instrumento en ambas manos y el teléfono apoyado.",
    ],
    learned: [
      "Procesamiento de señales aplicado: ventaneo, autocorrelación y por qué la teoría se ve distinta con un micrófono real.",
      "Que modelar bien el dominio (la ocarina como estados) ahorra semanas de UI.",
    ],
  },
  {
    slug: "pixel-crochet",
    title: "PIXEL CROCHET",
    subtitle: "De pixel art a patrón de crochet tapestry",
    year: "2026",
    status: "En desarrollo",
    featured: true,
    tags: ["Flutter", "Dart", "Pixel Art", "UX", "Mobile"],
    summary:
      "App que convierte imágenes y pixel art en patrones de crochet tapestry, con conteo de puntos, cambio de color y seguimiento de progreso fila a fila.",
    github: "https://github.com/Camilu-png/pixel-crochet/blob/main/README.es.md",
    image: "pixel-crochet.webp",
    gallery: ["home.webp", "patterns.webp", "home-patterns.webp", "about.webp", "suggest.webp"],
    mascot: "yarn",
    accent: "secondary",
    mockup: "grid",
    sections: [
      {
        heading: "Resumen",
        body: [
          "El crochet tapestry es literalmente programar con hilo: cada punto es un píxel y cada fila se lee en una dirección distinta. PIXEL CROCHET toma esa analogía en serio.",
          "Cargas una imagen o dibujas pixel art dentro de la app, y obtienes un patrón contado, con paleta reducida a los colores de lana que realmente tienes.",
        ],
      },
      {
        heading: "Problema",
        body: [
          "Convertir una imagen en patrón a mano implica cuadricular, contar puntos, elegir colores y llevar la cuenta de la fila actual. Un error de conteo se descubre veinte filas después.",
          "Las herramientas existentes son de escritorio, exportan PDFs y no acompañan durante el tejido.",
        ],
      },
      {
        heading: "Enfoque",
        body: [
          "Pipeline de imagen: redimensionado a la grilla de puntos, cuantización de color con k-means sobre una paleta definida por la usuaria, y limpieza de píxeles aislados que serían imposibles de tejer.",
          "Modo tejido: una fila activa a la vez, contador de puntos por color, y memoria de progreso para retomar donde quedaste.",
        ],
      },
      {
        heading: "Detalles técnicos",
        body: [
          "Flutter con canvas custom para renderizar grillas grandes sin perder fluidez al hacer zoom.",
          "Cuantización de color en un isolate separado para no congelar la interfaz con imágenes grandes.",
          "Corrección de proporción: un punto de crochet no es cuadrado, así que la grilla se compensa para que el resultado tejido no salga estirado.",
        ],
      },
    ],
    challenges: [
      "Renderizar grillas de miles de celdas con zoom y scroll fluidos.",
      "Reducir colores sin perder los rasgos que hacen reconocible una imagen pequeña.",
      "Traducir la relación de aspecto real del punto de crochet a la grilla en pantalla.",
    ],
    learned: [
      "Que las restricciones físicas (grosor de lana, tamaño de aguja) son requisitos de software tan reales como cualquier otro.",
      "Manejo de isolates y rendimiento de canvas en Flutter.",
    ],
  },
  {
    slug: "asigna-tu-ayudantia",
    title: "ASIGNA TU AYUDANTÍA",
    subtitle: "Asignación de ayudantías con algoritmos de optimización",
    year: "2026",
    status: "Publicado",
    featured: true,
    tags: ["Python", "Optimization", "FastAPI", "React", "Docker"],
    summary:
      "Sistema que asigna ayudantes a asignaturas considerando preferencias, disponibilidad horaria, carga académica y requisitos del ramo.",
    github: "https://github.com/",
    demo: "https://github.com/Camilu-png/student-assistant-scheduling",
    mascot: "curious",
    accent: "primary",
    mockup: "board",
    sections: [
      {
        heading: "Resumen",
        body: [
          "Cada semestre la asignación de ayudantías se resuelve con planillas, correos y mucha paciencia. El resultado casi siempre deja a alguien con tope de horario.",
          "Este sistema modela la asignación como un problema de optimización y entrega una propuesta de asignación en segundos, con explicación de por qué quedó así.",
        ],
      },
      {
        heading: "Problema",
        body: [
          "Hay más restricciones de las que caben en la cabeza: disponibilidad horaria, ramos aprobados, preferencias de los ayudantes, preferencias de los profesores, cupos por asignatura y equidad en la carga.",
          "Una solución manual tiende a optimizar para quien respondió primero el correo, no para el conjunto.",
        ],
      },
      {
        heading: "Enfoque",
        body: [
          "Formulación como problema de asignación con restricciones duras (elegibilidad, topes de horario, cupos) y blandas (preferencias, equidad) ponderadas en la función objetivo.",
          "Resolución exacta con programación lineal entera cuando el tamaño lo permite, y una heurística golosa con búsqueda local como respaldo para instancias grandes.",
          "Cada asignación viene con trazabilidad: qué restricción pesó y qué preferencia se sacrificó.",
        ],
      },
      {
        heading: "Detalles técnicos",
        body: [
          "Backend en Python con FastAPI, solver de optimización y validación de datos de entrada antes de resolver.",
          "Frontend en React para cargar postulaciones, revisar la propuesta y ajustar manualmente casos particulares.",
          "Todo empaquetado con Docker para que el despliegue no dependa del entorno de quien lo instala.",
        ],
      },
    ],
    challenges: [
      "Traducir reglas informales ('el profe prefiere que ya haya sido ayudante') a restricciones formales.",
      "Evitar soluciones matemáticamente óptimas pero humanamente injustas.",
      "Mantener tiempos de respuesta razonables cuando el número de postulaciones crece.",
    ],
    learned: [
      "Que la parte difícil de la optimización no es el solver, es el modelamiento.",
      "A explicar resultados de un algoritmo a personas que no van a leer la función objetivo.",
    ],
  },
  {
    slug: "solar-forecasting",
    title: "SOLAR FORECASTING",
    subtitle: "Pronóstico de generación solar con redes neuronales",
    year: "2024",
    status: "Investigación",
    featured: false,
    tags: ["Python", "Machine Learning", "PyTorch", "Data"],
    summary:
      "Modelos de series de tiempo en PyTorch para predecir generación fotovoltaica a partir de variables meteorológicas e históricos de planta.",
    github: "https://github.com/",
    mascot: "sleepy",
    accent: "secondary",
    mockup: "chart",
    sections: [
      {
        heading: "Resumen",
        body: [
          "Predecir cuánta energía va a generar una planta solar en las próximas horas es clave para operar una red eléctrica con alta penetración renovable.",
          "El proyecto compara modelos clásicos de series de tiempo con arquitecturas neuronales entrenadas en PyTorch sobre datos meteorológicos y de generación.",
        ],
      },
      {
        heading: "Problema",
        body: [
          "La generación solar es fuertemente estacional y a la vez muy sensible a nubosidad de corto plazo. Un modelo que aprende bien el ciclo diario puede igual fallar justo en los días que importan.",
          "Los datos reales llegan con huecos, sensores caídos y outliers que parecen señal.",
        ],
      },
      {
        heading: "Enfoque",
        body: [
          "Ingeniería de características con variables cíclicas (hora y día del año como seno/coseno), irradiancia, temperatura y nubosidad.",
          "Comparación sistemática entre baseline persistente, modelos de gradient boosting y redes recurrentes/temporales en PyTorch.",
          "Evaluación con validación temporal por bloques, nunca aleatoria, para no filtrar futuro en el entrenamiento.",
        ],
      },
      {
        heading: "Detalles técnicos",
        body: [
          "PyTorch para el entrenamiento, con early stopping y búsqueda de hiperparámetros acotada.",
          "Pipeline reproducible de limpieza e imputación, versionado junto al código.",
          "Métricas reportadas por horizonte de predicción, porque el error a 1 hora y a 6 horas no son el mismo problema.",
        ],
      },
    ],
    challenges: [
      "Evitar fugas de información temporal en la validación.",
      "Distinguir un outlier real (nube) de un sensor fallando.",
      "Que el baseline simple fuera sorprendentemente difícil de superar en horizontes cortos.",
    ],
    learned: [
      "Respeto profundo por los baselines.",
      "Que en series de tiempo la metodología de evaluación importa más que la arquitectura.",
    ],
  },
];

export function allTags(): { tag: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const p of projects) {
    for (const t of p.tags) counts.set(t, (counts.get(t) ?? 0) + 1);
  }
  return [...counts.entries()]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}

export function sortedProjects(): Project[] {
  return [...projects].sort(
    (a, b) => Number(b.featured) - Number(a.featured) || b.year.localeCompare(a.year),
  );
}

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
