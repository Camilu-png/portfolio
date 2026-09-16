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
    title: "Ocari",
    subtitle: "Aprender ocarina de 12 agujeros desde el teléfono",
    year: "2026",
    status: "En desarrollo",
    featured: true,
    tags: ["Flutter", "Dart", "Audio", "GitHub Actions", "Mobile", "Firebase"],
    summary:
      "Una app para aprender y tocar la ocarina de 12 agujeros: suena la canción mientras un track de notas estilo Guitar Hero y una ocarina animada muestran en tiempo real la digitación exacta y la duración de cada nota, con velocidad ajustable para practicar a tu ritmo.",
    github: "https://github.com/Camilu-png/Ocari",
    image: "ocari.webp",
    mascot: "ocarina",
    accent: "primary",
    mockup: "phone",
    sections: [
      {
        heading: "Resumen",
        body: [
          "Ocari nace de un problema en concreto: ¿Cómo puedo tocar la ocarina si no sé sobre música? Las canciones con las que aprendí a tocar tenían el dibujo de la ocarina con la posición de los dedos sobre su respectiva nota musical; mi problema es que no sé cuánto tiempo duraba esa nota; si no me sabía el ritmo de la canción, no era capaz de tocarla.",
          "La app entrega digitaciones interactivas para la ocarina de 12 agujeros, con el tiempo que debe durar cada nota, una sección para practicar y una biblioteca de melodías.",
        ],
      },
      {
        heading: "Problema",
        body: [
          "Actualmente existen tablaturas de la ocarina de 12 agujeros, pero estas suelen no tener los tiempos de la duración de las notas, o si los tienen, están documentadas a través de una figura musical, provocando que cualquier persona que no tenga nociones musicales no pueda interpretar una canción. Haciendo que el proceso de acercamiento a este instrumento sea más difícil.",
          "Además, esta información se tiene a través de tablatura en archivos PDF o imágenes, entorpeciendo la interpretación cuando se está tocando la ocarina, especialmente en estos tiempos digitales.",
        ],
      },
      {
        heading: "Enfoque",
        body: [
          "Modelé cada nota como una estructura autodescriptiva: su digitación (agrupada en dedos, pulgares e intermedios), su timestamp y su duración vienen precalculados en la melodía. Eso hace que el render sea 100% guiado por datos: agregar una canción nueva no requiere tocar ni la UI ni el motor de dibujo.",
          "Sobre ese modelo construí una capa visual en Flutter donde la ocarina se ilumina nota a nota, sincronizada con el audio de la melodía que se está practicando.",
        ],
      },
      {
        heading: "Detalles técnicos",
        body: [
          "Flutter + Dart con arquitectura feature-first en capas (dominio, datos, presentación) y estado manejado con Riverpod.",
          "Sincronización audio-nota en tiempo real: búsqueda binaria sobre los timestamps de cada nota, con un track de notas estilo Guitar Hero renderizado en CustomPaint que solo pinta el rango visible para mantener la fluidez.",
          "Las melodías se almacenan como estructuras declarativas (nota, digitación, timestamp y duración), lo que permite agregar repertorio sin tocar la UI.",
        ],
      },
    ],
    challenges: [
      "Renderizar un track de notas en scroll vertical continuo con CustomPaint sin drops de frame en dispositivos de gama media.",
      "Mantener la ocarina animada sincronizada con la posición del audio mientras la UI se reconstruye en cada actualización.",
      "Diseñar una interfaz usable con el instrumento en ambas manos — portrait y landscape con layouts completamente distintos.",
    ],
    learned: [
      "Que una búsqueda binaria sobre timestamps convierte la lista de notas de una canción en un cursor constante: posicionarse en cualquier punto del audio es O(log n).",
      "Que pintar solo el rango visible del track en CustomPaint, en lugar de la melodía completa, mantiene el render fluido sin importar la duración de la canción.",
      "Que modelar bien el dominio (cada nota autodescriptiva) ahorra semanas de UI: una canción nueva es un archivo JSON, nunca código.",
      "Que quizás pude haber aprendido un poco de teoría musical",
    ],
  },
  {
    slug: "pixel-crochet",
    title: "Pixel Crochet",
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
    title: "Asigna tu ayudantia",
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
    title: "Solar Forecasting",
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
