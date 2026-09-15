import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail } from "lucide-react";
import { nav, site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/70 bg-surface/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-xl font-semibold">Camilú</p>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">
            {site.role} · {site.school} · {site.graduation}. Laboratorio personal de proyectos,
            cuadernos y experimentos.
          </p>
          <p className="mt-4 font-mono text-xs text-primary">{site.tagline}</p>
        </div>

        <nav aria-label="Pie de página">
          <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            Navegar
          </p>
          <ul className="mt-3 space-y-1.5">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            Contacto
          </p>
          <ul className="mt-3 space-y-1.5">
            <li>
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Github className="h-4 w-4" aria-hidden="true" /> GitHub
              </a>
            </li>
            <li>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4" aria-hidden="true" /> {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 px-4 py-5 text-center text-xs text-muted-foreground">
        Hecho con curiosidad, café y supervisión felina de Ada.
      </div>
    </footer>
  );
}
