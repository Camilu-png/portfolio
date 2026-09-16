import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { allTags, sortedProjects } from "@/data/projects";
import { milestones } from "@/data/timeline";
import { site } from "@/data/site";
import { ProjectCard } from "@/components/ProjectCard";
import { Page, SectionTitle } from "@/components/Section";
import { Ada } from "@/components/ada/Ada";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Camilú — Ingeniera Civil en Informática | Portafolio" },
      {
        name: "description",
        content:
          "Portafolio de Camilú, Ingeniera Civil en Informática UTFSM 2026: apps Flutter, optimización, machine learning y experimentos. La curiosidad es una feature.",
      },
      { property: "og:title", content: "Camilú — Ingeniera Civil en Informática" },
      {
        property: "og:description",
        content:
          "Laboratorio personal de proyectos: OCARI, Pixel Crochet, asignación con optimización y pronóstico solar.",
      },
    ],
    links: [{ rel: "canonical", href: "https://Camilu-png.github.io/portfolio/" }],
  }),
  component: Home,
});

function Home() {
  const projects = sortedProjects();
  const featured = projects.filter((p) => p.featured);
  const tags = allTags().slice(0, 8);
  const recent = milestones.slice(0, 3);

  return (
    <>
      <section className="notebook border-b border-border/70">
        <Page className="grid items-center gap-8 py-14 sm:py-20 md:grid-cols-[1.6fr_1fr]">
          <div className="min-w-0">
            <p className="font-mono text-xs tracking-[0.25em] text-primary uppercase">
              {site.role} · {site.school} · {site.graduation}
            </p>
            <h1 className="mt-4 font-display text-5xl leading-[1.05] font-semibold tracking-tight sm:text-6xl">
              Hola, soy Camilú.
            </h1>
            <p className="mt-4 max-w-xl text-lg text-foreground/85">
              Construyo cosas para entender cómo funcionan: apps móviles, algoritmos de asignación,
              modelos de predicción, instrumentos musicales traducidos a software.{" "}
              <span className="text-primary">{site.tagline}</span>
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                to="/projects"
                search={{ tag: undefined }}
                className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Ver proyectos <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2.5 text-sm transition-colors hover:border-secondary hover:text-secondary"
              >
                <Github className="h-4 w-4" aria-hidden="true" /> GitHub
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2.5 text-sm transition-colors hover:border-secondary hover:text-secondary"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" /> LinkedIn
              </a>
            </div>

            <ul className="mt-8 flex flex-wrap gap-1.5">
              {tags.map((t) => (
                <li key={t.tag}>
                  <Link
                    to="/projects"
                    search={{ tag: t.tag }}
                    className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
                  >
                    {t.tag}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Ada
            pose="peek"
            className="h-52 w-52 justify-self-center float-soft"
            label="Ada, la gata calicó mascota del sitio"
          />
        </Page>
      </section>

      <Page className="py-14">
        <SectionTitle note={`${projects.length} en el archivo`}>Proyectos destacados</SectionTitle>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Alguna de las cositas en las que he trabajado.
        </p>
        <div className="mt-7 grid gap-6 md:grid-cols-2">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
        <Link
          to="/projects"
          search={{ tag: undefined }}
          className="mt-8 inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
        >
          Ver el catálogo completo y filtrar por tecnología{" "}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <section className="lab-card p-6">
            <h2 className="font-display text-xl font-semibold">Stack, según los proyectos</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Las tecnologías salen de los tags reales de cada proyecto, no de una lista de deseos.
            </p>
            <ul className="mt-4 space-y-2">
              {tags.slice(0, 5).map((t) => (
                <li key={t.tag} className="flex items-center gap-3">
                  <span className="w-32 shrink-0 truncate font-mono text-xs">{t.tag}</span>
                  <span className="h-1.5 flex-1 rounded-full bg-background/70">
                    <span
                      className="block h-1.5 rounded-full bg-secondary"
                      style={{ width: `${(t.count / tags[0]!.count) * 100}%` }}
                    />
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">{t.count}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/skills"
              className="mt-5 inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
            >
              Ver todas las skills <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </section>

          <section className="lab-card p-6">
            <h2 className="font-display text-xl font-semibold">Lo más reciente</h2>
            <ol className="mt-4 space-y-4">
              {recent.map((m) => (
                <li key={m.title} className="border-l border-border pl-4">
                  <p className="font-mono text-xs text-muted-foreground">
                    {m.date} · {m.kind}
                  </p>
                  <p className="mt-0.5 font-medium">{m.title}</p>
                  <p className="text-sm text-muted-foreground">{m.place}</p>
                </li>
              ))}
            </ol>
            <Link
              to="/timeline"
              className="mt-5 inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
            >
              Ver la trayectoria completa <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </section>
        </div>
      </Page>
    </>
  );
}
