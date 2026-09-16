import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Github, Star } from "lucide-react";
import type { Project } from "@/data/projects";
import { Ada } from "@/components/ada/Ada";
import { Mockup } from "@/components/Mockup";
import { cn } from "@/lib/utils";

const statusStyles: Record<Project["status"], string> = {
  "En desarrollo": "border-primary/60 text-primary",
  Publicado: "border-secondary/60 text-secondary",
  Investigación: "border-secondary/60 text-secondary",
  Archivado: "border-border text-muted-foreground",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="lab-card group relative flex flex-col overflow-hidden">
      <div className="relative">
        <Mockup
          kind={project.mockup}
          className="grid h-56 place-items-center rounded-none border-0 border-b"
        />
        {project.featured ? (
          <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-primary px-2.5 py-1 text-[11px] font-semibold text-primary-foreground">
            <Star className="h-3 w-3" aria-hidden="true" /> Destacado
          </span>
        ) : null}
        <Ada
          pose={project.mascot}
          className="pointer-events-none absolute -right-3 -bottom-4 h-24 w-24 opacity-90 transition-transform duration-300 group-hover:-translate-y-1"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={cn(
              "rounded-full border px-2.5 py-0.5 font-mono text-[11px]",
              statusStyles[project.status],
            )}
          >
            {project.status}
          </span>
          <span className="font-mono text-[11px] text-muted-foreground">{project.year}</span>
        </div>

        <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">{project.title}</h3>
        <p className="text-sm text-secondary">{project.subtitle}</p>
        <p className="mt-3 flex-1 text-sm text-muted-foreground">{project.summary}</p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <li
              key={t}
              className="rounded-full border border-border bg-background/50 px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          <Link
            to="/projects/$slug"
            params={{ slug: project.slug }}
            className="inline-flex items-center gap-1 rounded-full bg-primary px-3.5 py-1.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Ver detalle <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-secondary hover:text-secondary"
            >
              <Github className="h-4 w-4" aria-hidden="true" /> Código
            </a>
          ) : null}
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-secondary hover:text-secondary"
            >
              Demo
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
