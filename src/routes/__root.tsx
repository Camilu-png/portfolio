import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { site } from "@/data/site";

const SITE_URL = "https://Camilu-png.github.io/portfolio";
const OG_IMAGE = `${SITE_URL}/og.png`;

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Página no encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">Esta página no existe o fue movida.</p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">Algo salió mal</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Hubo un problema al cargar esta página. Puedes intentar de nuevo o volver al inicio.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Intentar de nuevo
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Volver al inicio
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Camilú — Ingeniera Civil en Informática" },
      {
        name: "description",
        content:
          "Portafolio de Camilú: proyectos de ingeniería, experimentos y cuaderno personal. La curiosidad es una feature.",
      },
      { name: "author", content: "Camilú" },
      { property: "og:title", content: "Camilú — Ingeniera Civil en Informática" },
      {
        property: "og:description",
        content: "Laboratorio personal de proyectos de ingeniería.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_CL" },
      { property: "og:site_name", content: "Portafolio de Camilú" },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Camilú, ingeniera civil en informática" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Camilú — Ingeniera Civil en Informática" },
      {
        name: "twitter:description",
        content: "Laboratorio personal de proyectos de ingeniería.",
      },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "twitter:image:alt", content: "Camilú, ingeniera civil en informática" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Outfit:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
      { rel: "icon", href: `${import.meta.env.BASE_URL}favicon.svg`, type: "image/svg+xml" },
      { rel: "icon", href: `${import.meta.env.BASE_URL}favicon.ico`, type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const personId = `${SITE_URL}/#person`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: "Portafolio de Camilú",
        inLanguage: "es-CL",
        description:
          "Portafolio de Camila Arancibia Faúndez (Camilú), ingeniera civil en informática: proyectos, publicaciones, trayectoria y experimentos.",
        publisher: { "@id": personId },
      },
      {
        "@type": "Person",
        "@id": personId,
        name: "Camila Arancibia Faúndez",
        alternateName: ["Camilú", "Camilu-png", "camila-arancibia"],
        jobTitle: "Ingeniera Civil en Informática",
        description:
          "Ingeniera civil en informática (Universidad Técnica Federico Santa María, Chile, título en marzo de 2026). Desarrolla software móvil, backend y modelos de aprendizaje automático. Autora de una tesis sobre asignación de horarios con algoritmos de optimización.",
        url: `${SITE_URL}/`,
        image: OG_IMAGE,
        mainEntityOfPage: { "@id": `${SITE_URL}/#website` },
        sameAs: [
          "https://github.com/Camilu-png",
          "https://linkedin.com/in/camila-arancibia/",
        ],
        knowsLanguage: ["es", "en"],
        knowsAbout: [
          "Flutter",
          "Dart",
          "Python",
          "Machine Learning",
          "Mobile Development",
          "Optimization",
          "Software Engineering",
        ],
        hasOccupation: {
          "@type": "Occupation",
          name: "Software Engineer",
          occupationalCategory: "Engineering",
          skills: "Flutter, Dart, Python, machine learning, optimization",
          occupationLocation: { "@type": "Country", name: "Chile" },
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Universidad Técnica Federico Santa María",
          alternateName: "UTFSM",
        },
      },
    ],
  };

  return (
    <html lang="es">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {site.analyticsId && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${site.analyticsId}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${site.analyticsId}',{send_page_view:false});gtag('event','page_view',{page_path:window.location.pathname});`,
              }}
            />
          </>
        )}
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const router = useRouter();

  useEffect(() => {
    const id = site.analyticsId;
    if (!id) return;

    return router.subscribe("onResolved", (event) => {
      if (!event.hrefChanged || !event.pathChanged) return;
      const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
      if (typeof gtag === "function") {
        gtag("event", "page_view", { page_path: event.toLocation.pathname });
      }
    });
  }, [router]);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[70] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground"
        >
          Saltar al contenido
        </a>
        <SiteHeader />
        <main id="contenido" className="flex-1">
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
