import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { getProject } from "@/data/projects";
import { Page } from "@/components/Section";
import { Ada } from "@/components/ada/Ada";
import { Mockup } from "@/components/Mockup";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Proyecto no encontrado — Camilú" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { project } = loaderData;
    const title = `${project.title} — Proyecto de Camilú`;
    return {
      meta: [
        { title },
        { name: "description", content: project.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: project.summary },
      ],
      links: [
        {
          rel: "canonical",
          href: `https://Camilu-png.github.io/portfolio/projects/${project.slug}`,
        },
      ],
    };
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();

  return (
    <Page className="max-w-4xl">
      <Link
        to="/projects"
        search={{ tag: undefined }}
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Volver a proyectos
      </Link>

      <header className="mt-6 grid gap-6 border-b border-border/70 pb-10 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-primary/60 px-2.5 py-0.5 font-mono text-[11px] text-primary">
              {project.status}
            </span>
            <span className="font-mono text-[11px] text-muted-foreground">{project.year}</span>
          </div>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-2 text-lg text-secondary">{project.subtitle}</p>
          <p className="mt-4 text-muted-foreground">{project.summary}</p>

          <ul className="mt-5 flex flex-wrap gap-1.5">
            {project.tags.map((t) => (
              <li key={t}>
                <Link
                  to="/projects"
                  search={{ tag: t }}
                  className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
                >
                  {t}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                <Github className="h-4 w-4" aria-hidden="true" /> Repositorio
              </a>
            ) : null}
            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-secondary hover:text-secondary"
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" /> Demo en vivo
              </a>
            ) : null}
          </div>
        </div>
        <Ada pose={project.mascot} className="h-32 w-32 shrink-0 justify-self-center float-soft" />
      </header>

      <div className="mt-10 grid gap-10">
        {project.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              {section.heading}
            </h2>
            <div className="mt-3 space-y-3 leading-relaxed text-foreground/85">
              {section.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </section>
        ))}

        {project.gallery && project.gallery.length > 0 ? (
          <section>
            <h2 className="font-display text-2xl font-semibold tracking-tight">Visuales</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {project.gallery.map((img, i) => (
                <figure
                  key={img}
                  className="overflow-hidden rounded-xl border border-border bg-surface-strong"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}projects/${project.slug}/${img}`}
                    alt={`Captura ${i + 1} de ${project.title}`}
                    className="w-full object-cover"
                    loading="lazy"
                  />
                </figure>
              ))}
            </div>
          </section>
        ) : (
          <section>
            <h2 className="font-display text-2xl font-semibold tracking-tight">Visuales</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Maquetas esquemáticas de la interfaz — dibujadas en código, no capturas reales.
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <Mockup kind={project.mockup} />
              <Mockup kind={project.mockup === "phone" ? "grid" : "chart"} />
            </div>
          </section>
        )}

        <div className="grid gap-6 sm:grid-cols-2">
          <section className="lab-card p-6">
            <h2 className="font-display text-xl font-semibold">Desafíos</h2>
            <ul className="mt-3 space-y-2.5">
              {project.challenges.map((c) => (
                <li key={c} className="flex gap-2.5 text-sm text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {c}
                </li>
              ))}
            </ul>
          </section>
          <section className="lab-card p-6">
            <h2 className="font-display text-xl font-semibold">Lo que aprendí</h2>
            <ul className="mt-3 space-y-2.5">
              {project.learned.map((c) => (
                <li key={c} className="flex gap-2.5 text-sm text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                  {c}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </Page>
  );
}
