export const site = {
  name: "Camilú",
  role: "Ingeniera Civil en Informática",
  school: "UTFSM",
  graduation: "Marzo 2026",
  tagline: "La curiosidad es una feature.",
  // TODO: reemplazar con los enlaces reales
  github: "https://github.com/",
  linkedin: "https://linkedin.com/",
  email: "hola@ejemplo.cl",
  cvUrl: "/cv-camilu.pdf",
};

export const nav = [
  { to: "/", label: "Inicio" },
  { to: "/projects", label: "Proyectos" },
  { to: "/skills", label: "Skills & Tags" },
  { to: "/timeline", label: "Trayectoria" },
  { to: "/publications", label: "Publicaciones" },
  { to: "/ai", label: "IA en Ingeniería" },
  { to: "/about", label: "Sobre mí" },
] as const;
