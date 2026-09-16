export const site = {
  name: "Camilú",
  role: "Ingeniera Civil en Informática",
  school: "UTFSM",
  graduation: "Marzo 2026",
  tagline: "La curiosidad es una feature.",
  github: "https://github.com/Camilu-png",
  linkedin: "https://linkedin.com/in/camila-arancibia/",
  email: "camila.arancibiaf@sansano.usm.cl",
  cvUrl: `${import.meta.env.BASE_URL}camila_arancibia_mobile.pdf`,
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
