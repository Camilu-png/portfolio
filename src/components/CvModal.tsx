import { useEffect, useRef } from "react";
import { Download, X } from "lucide-react";
import { site } from "@/data/site";
import { allTags } from "@/data/projects";

export function CvModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    ref.current?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const top = allTags().slice(0, 8);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-background/80 p-4 backdrop-blur-sm sm:items-center"
      onClick={onClose}
    >
      <div
        ref={ref}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label="Curriculum Vitae"
        onClick={(e) => e.stopPropagation()}
        className="relative my-8 w-full max-w-lg rounded-2xl border border-border bg-surface p-6 shadow-2xl"
      >
        <button
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute top-4 right-4 rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-surface-strong hover:text-foreground"
        >
          <X className="h-5 w-5" />
        </button>

        <p className="font-mono text-xs tracking-widest text-primary uppercase">Curriculum</p>
        <h2 className="mt-1 font-display text-2xl font-semibold">Camilú</h2>
        <p className="text-sm text-muted-foreground">
          {site.role} · {site.school} · Titulación {site.graduation}
        </p>

        <dl className="mt-5 space-y-3 text-sm">
          <div>
            <dt className="text-xs tracking-widest text-muted-foreground uppercase">Perfil</dt>
            <dd className="mt-1 text-foreground/90">
              Ingeniera versátil: desarrollo móvil, backend, optimización y machine learning. Me
              interesa entender el problema completo antes de elegir la herramienta.
            </dd>
          </div>
          <div>
            <dt className="text-xs tracking-widest text-muted-foreground uppercase">
              Tecnologías principales
            </dt>
            <dd className="mt-2 flex flex-wrap gap-1.5">
              {top.map((t) => (
                <span
                  key={t.tag}
                  className="rounded-full border border-border px-2.5 py-1 font-mono text-xs text-secondary"
                >
                  {t.tag}
                </span>
              ))}
            </dd>
          </div>
        </dl>

        <a
          href={site.cvUrl}
          download
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          <Download className="h-4 w-4" aria-hidden="true" /> Descargar CV en PDF
        </a>
        <p className="mt-3 text-center text-xs text-muted-foreground">
          Marcador: sube tu PDF a{" "}
          <span className="font-mono">public/camila_arancibia_mobile.pdf</span> para que la descarga
          funcione.
        </p>
      </div>
    </div>
  );
}
