import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Github, Linkedin, Menu, X, FileText } from "lucide-react";
import { nav, site } from "@/data/site";
import { CvModal } from "@/components/CvModal";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 lg:flex lg:justify-between">
        <Link to="/" className="flex min-w-0 items-center gap-2">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary font-mono text-sm font-bold text-primary-foreground">
            c
          </span>
          <span className="truncate font-display text-lg font-semibold tracking-tight">
            Camilú
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-surface hover:text-foreground data-[status=active]:bg-primary data-[status=active]:font-medium data-[status=active]:text-primary-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-1.5 lg:flex">
          <button
            onClick={() => setCvOpen(true)}
            className="inline-flex items-center gap-1.5 rounded-full border border-primary/60 px-3 py-1.5 text-sm text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <FileText className="h-4 w-4" aria-hidden="true" /> CV
          </button>
          <IconLink href={site.github} label="GitHub">
            <Github className="h-4 w-4" aria-hidden="true" />
          </IconLink>
          <IconLink href={site.linkedin} label="LinkedIn">
            <Linkedin className="h-4 w-4" aria-hidden="true" />
          </IconLink>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="justify-self-end rounded-lg border border-border p-2 lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div className={cn("border-t border-border/70 lg:hidden", open ? "block" : "hidden")}>
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3" aria-label="Móvil">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-surface hover:text-foreground data-[status=active]:bg-primary data-[status=active]:text-primary-foreground"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-2 flex flex-wrap gap-2">
            <button
              onClick={() => {
                setOpen(false);
                setCvOpen(true);
              }}
              className="inline-flex items-center gap-1.5 rounded-full border border-primary/60 px-3 py-1.5 text-sm text-primary"
            >
              <FileText className="h-4 w-4" aria-hidden="true" /> CV
            </button>
            <IconLink href={site.github} label="GitHub">
              <Github className="h-4 w-4" aria-hidden="true" />
            </IconLink>
            <IconLink href={site.linkedin} label="LinkedIn">
              <Linkedin className="h-4 w-4" aria-hidden="true" />
            </IconLink>
          </div>
        </nav>
      </div>

      <CvModal open={cvOpen} onClose={() => setCvOpen(false)} />
    </header>
  );
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
      className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-secondary hover:text-secondary"
    >
      {children}
      <span className="lg:sr-only">{label}</span>
    </a>
  );
}
