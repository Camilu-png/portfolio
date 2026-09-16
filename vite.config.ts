// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GitHub Pages strips the repo prefix from static URLs, so every asset and
// internal link must live under "/portfolio/" for https://Camilu-png.github.io/portfolio/.
// GitHub Actions sets GITHUB_ACTIONS=true at build time; local dev stays at "/".
const isGithubPages = process.env["GITHUB_ACTIONS"] === "true";
const basePath = isGithubPages ? "/portfolio" : "";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    router: { basepath: basePath },
    prerender: {
      // Emit static HTML for every page into the client output dir (.output/public),
      // so GitHub Pages can serve the whole site without any server runtime.
      enabled: true,
      crawlLinks: true,
    },
  },
  vite: {
    base: isGithubPages ? "/portfolio/" : "/",
  },
});
