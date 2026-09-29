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
  thesis?: string;
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
    subtitle: "De imagen (o patrón de texto) a guía de tapestry",
    year: "2026",
    status: "Publicado",
    featured: true,
    tags: ["Flutter", "Dart", "Pixel Art", "UX", "Open Source"],
    summary:
      "App que convierte imágenes o patrones de texto (estilo Stitch Fiddle) en guías de crochet tapestry: cuenta los puntos por color, ajusta las lanas y marca tu progreso fila a fila, sin contar a mano.",
    github: "https://github.com/Camilu-png/pixel-crochet/blob/main/README.es.md",
    demo: "https://pixel-crochet.vercel.app/",
    image: "pixel-crochet.webp",
    gallery: ["home.webp", "patterns.webp", "home-patterns.webp", "about.webp", "suggest.webp"],
    mascot: "yarn",
    accent: "secondary",
    mockup: "grid",
    sections: [
      {
        heading: "Resumen",
        body: [
          "El crochet tapestry es literalmente programar con hilo: cada punto es un píxel y cada fila se lee en una dirección distinta. Pixel Crochet toma esa analogía en serio.",
          "Subes una imagen de pixel art o punto de cruz —o pegas un patrón de texto de Stitch Fiddle— y obtienes un patrón contado por bloques de color, mapeado a las lanas que de verdad tienes y ajustable antes de tejer.",
        ],
      },
      {
        heading: "Problema",
        body: [
          "Convertir una imagen en patrón a mano implica cuadricular, contar puntos, elegir colores y llevar la cuenta de la fila actual. Un error de conteo se descubre veinte filas después.",
          "Las herramientas actuales generan el patrón y te dejan con la cuenta a mano: ninguna acompaña la ejecución fila a fila mientras tejes.",
        ],
      },
      {
        heading: "Enfoque",
        body: [
          "Pipeline de imagen: la imagen se redimensiona a la grilla de puntos elegida y cada celda toma el color predominante de su región (no un promedio); los tonos cercanos se cuantizan y cada color se mapea a la lana más parecida de una paleta real, con opción de reasignarlo antes de importar.",
          "Modo tejido: una fila activa a la vez con su dirección de lectura, bloques de color ya contados, tocar para marcar progreso y guardado automático para retomar justo donde quedaste.",
        ],
      },
      {
        heading: "Detalles técnicos",
        body: [
          "Flutter: cada fila del patrón se guarda como bloques de color (no punto por punto) y un CustomPainter dibuja la grilla recorriendo esos bloques, con resaltado de la fila activa.",
          "Cuantización de color, extracción de grilla y parseo de patrones de texto corren en isolates (compute) para no congelar la interfaz con imágenes grandes.",
          "Localización completa en inglés y español (flutter_localizations + intl) y persistencia local para conservar proyectos entre sesiones.",
        ],
      },
    ],
    challenges: [
      "Recorrer patrones de miles de puntos sin recálculo por celda (los bloques de color reducen el trabajo del painter).",
      "Reducir colores sin perder los rasgos que hacen reconocible una imagen pequeña.",
      "Parsear patrones de texto de herramientas como Stitch Fiddle, con filas que alternan dirección y formatos de color poco consistentes.",
    ],
    learned: [
      "Que las restricciones físicas del medio —colores de lana reales, filas que se tejen en ambas direcciones— son requisitos de software tan legítimos como cualquier otro.",
      "Manejo de isolates y rendimiento de canvas en Flutter.",
    ],
  },
  {
    slug: "asigna-tu-ayudantia",
    title: "Planificación de horarios de ayudantía",
    subtitle: "Memoria de título en la UTFSM: Simulated Annealing y programación lineal entera",
    year: "2026",
    status: "Publicado",
    featured: true,
    tags: ["Python", "Optimization", "MILP", "Simulated Annealing", "Pandas", "Jupyter"],
    summary:
      "Mi memoria de título en la UTFSM. Modela la asignación de ayudantías como un problema de timetable universitario y la resuelve de dos formas independientes —Simulated Annealing y un modelo de programación lineal entera— para medirlas sobre 618 estudiantes reales en vez de casos inventados.",
    github: "https://github.com/Camilu-png/student-assistant-scheduling",
    thesis: "https://repositorio.usm.cl/handle/123456789/78182",
    image: "asigna-tu-ayudantia.webp",
    gallery: [
      "comparacion-general.webp",
      "comparacion-fitness.webp",
      "comparacion-tiempos.webp",
      "comparacion-tiempos-log.webp",
      "movimientos.webp",
    ],
    mascot: "curious",
    accent: "primary",
    mockup: "board",
    sections: [
      {
        heading: "Resumen",
        body: [
          "Cada semestre, asignar ayudantías se resuelve con planillas y correos, y el resultado suele dejar a alguien con el día partido. Este proyecto es mi memoria de título para optar por Ingeniería Civil en Informática en la UTFSM: modelar ese problema como un Educational Timetabling Problem y resolverlo automáticamente, priorizando que la mayor cantidad de estudiantes pueda asistir al bloque de ayudantía.",
          "Lo resolví dos veces, con dos métodos independientes, para poder compararlos: un modelo de programación lineal entera con PuLP, que entrega el óptimo, y una metaheurística Simulated Annealing sobre una solución greedy inicial. Después evalué ambos con datos reales de la Casa Central Valparaíso, no con benchmarks sintéticos.",
        ],
      },
      {
        heading: "Problema",
        body: [
          "Cada ayudante recibe un bloque para realizar la ayudantía por semana y solo puede recibirlo en ciertas franjas horarias. Hay bloques prohibidos por política institucional. Además, cada estudiante tiene su propio horario, con clases y con actividades de otros ramos. El objetivo no es simplemente ocupar todos los bloques: es elegir en cuáles poner las ayudantías para maximizar la asistencia y, en segundo lugar, que ese bloque no entorpezca la jornada al estudiante, haciendo que, aunque pueda asistir, decida no ir.",
          "El proceso manual resolvía esto minimizando la cantidad de estudiantes que no pueden asistir a la ayudantía por choque de horario, pero no tomaba en cuenta que algunos horarios, aunque tengan la misma cantidad de asistencia, son mejores que otros. El proceso que se suele utilizar en la universidad no toma en cuenta que los bloques de la madrugada, noche o aquellos que causan que el estudiante posea una ventana, generan que este prefiera no asistir a ayudantía.",
        ],
      },
      {
        heading: "Enfoque",
        body: [
          "La representación es un tensor binario X[bloque, día, ayudante]. Cada instancia es una asignatura, sobre una grilla de 10 bloques por 5 días. La entrada son matrices construidas desde las planillas reales de la UTFSM, donde 0 es libre, 1 es clase y 2 es actividad relacionada con el ramo.",
          "Las restricciones duras son: el ayudante solo puede recibir bloques en los que está disponible, un bloque no recibe dos ayudantes, los bloques prohibidos no se usan, cada ayudante recibe exactamente un bloque y cada estudiante asiste a una ayudantía por semana. Las blandas llevan peso y se restan: días libres, bloques nocturnos, bloques extremos del día, ventanas de tiempo libre alrededor del bloque y adyacencia con actividades del ramo.",
          "Los dos solvers comparten exactamente esos mismos pesos, para que la comparación sea justa. La función objetivo es una suma ponderada de la asistencia de los estudiantes a la ayudantía, menos los conflictos que genera asistir a ese bloque. En caso de que un estudiante pueda asistir a más de una ayudantía, se le asigna a la que mejor le convenga.",
        ],
      },
      {
        heading: "Resultados",
        body: [
          "Sobre las 12 asignaturas medidas (618 estudiantes), la asignación manual llegaba al 92,1% de asistencia. Simulated Annealing llegó al 99,8% y el solver al 99,9%: los dos recuperaron a los 51 estudiantes que el horario manual dejaba fuera.",
          "El solver ganó en fitness en las 12 asignaturas, pero costó 6,9 veces más: 0,96 segundos de media contra 0,14. Su peor caso fueron 4,5 segundos, en la asignatura con más ayudantes. Simulated Annealing es mucho más variable entre corridas; la del solver no lo es, porque el modelo es determinista y devuelve siempre la misma solución.",
          "El hallazgo que más me costó ver: en INF280 el solver dejó afuera a 1 de 59 estudiantes a propósito, y esa solución igual puntúa más alto, porque el objetivo es una suma ponderada y no una prioridad absoluta. El modelo canjea asistencia por menos penalización por su cuenta. Eso hay que decidirlo explícitamente, no dejarlo implícito en los pesos.",
        ],
      },
      {
        heading: "Cómo lo validé",
        body: [
          "Simulated Annealing es estocástico y el código no fija semilla, así que una sola corrida no dice nada. Por eso repetí 30, 100 y 1.000 veces cada algoritmo en cada asignatura: 24.000 corridas en total, guardando fitness, asistencia, tiempo y la solución completa de cada una, para poder medir la varianza en vez de elegir el mejor caso.",
          "Antes de eso hice dos barridos: entre 1.000 y 1.512 configuraciones de Simulated Annealing por asignatura (temperatura inicial y final, alpha y tope de iteraciones), y 16.807 combinaciones de los cinco pesos. La calidad de la solución depende más de cómo se penaliza que de qué algoritmo se use.",
          "El análisis está en notebooks: comparaciones entre métodos, distribución de horarios por asignatura y detección de bloques donde no hay ningún ayudante disponible. Esos últimos son 93 de 650 en los datos reales, y son un techo que ningún algoritmo puede levantar.",
        ],
      },
    ],
    challenges: [
      "Formular el mismo problema de dos maneras tan distintas —un modelo exacto y una búsqueda estocástica— y que las dos den respuestas defendibles.",
      "Sacar conclusiones de un algoritmo que devuelve un resultado distinto en cada corrida, sin semilla fija y con el ruido propio de la metaheurística.",
      "Que el óptimo matemático no siempre sea la mejor decisión: el solver gana en fitness y aun así deja a estudiantes sin cobertura.",
    ],
    learned: [
      "Que lo difícil de la optimización no es el solver, es decidir qué se penaliza y cuánto. Cambiar los pesos cambia la solución más que cambiar el algoritmo.",
      "Que un resultado sin repetir no es un resultado, y que hay que reportar la varianza completa —promedio, desviación y peor caso— en vez de la corrida que salió bien.",
      "A mirar los datos antes de modelarlos: los bloques sin ningún ayudante disponible son la restricción de verdad, y no aparece en ningún enunciado del problema.",
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
