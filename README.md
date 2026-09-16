# Camilú's Digital Lab

Build a personal portfolio website for Camilú (Ingeniera Civil en Informática, UTFSM, March 2026).

Core concept: "Curiosity is a feature."
The personality communicates technical competence, curiosity, creativity, experimentation, engineering versatility (not locked into one specialty).
Visual direction: "Personal engineering laboratory / digital notebook / creative project archive". Dark, warm, comfortable aubergine/dark purple background (never pure black or white), lighter purple surfaces, warm yellow accent for active states/highlights/buttons, lavender secondary accent, warm cream text, subtle grid or notebook line cues.

Mascot Ada:
An illustrated calico cat mascot inspired by the attached photo (calico patches: black, orange, white chest/paws, green eyes, pink nose, large ears, curious expression). Render Ada in charming indie-game / editorial SVG/CSS illustrations appearing contextually (e.g., exploring projects, with yarn/crochet, with an ocarina, observing filters).

Key Sections & Features:
1. Header & Navigation: Sticky clean nav (Home, Projects, Skills & Tags, Timeline, Publications, AI in Engineering, About, CV, GitHub, LinkedIn).
2. Homepage Intro: Quick, human introduction ("Camilú — Ingeniera Civil en Informática"), warm tagline, immediately leading into real projects without a bloated hero.
3. Projects Catalog:
   - Dynamic tag filtering derived from project metadata (e.g. Flutter, Dart, Python, React, FastAPI, Machine Learning, Optimization, Audio, Pixel Art, Docker).
   - Filter pills show project count and actively filter the grid.
   - Featured projects appear first.
   - Project cards with rich badges, status, tags, year, links (GitHub, Live demo, Detail modal/page).
   - Sample projects: OCARI (12-hole ocarina Flutter app), PIXEL CROCHET (tapestry crochet & pixel-art Flutter app), ASIGNA TU AYUDANTÍA (teaching-assistant scheduler with optimization algorithms), SOLAR FORECASTING (PyTorch solar energy forecasting).
4. Project Detail View/Modal: Comprehensive long-form documentation layout with overview, problem, approach/solution, technical details, challenges, what was learned, mock screenshots/visuals, and repo/demo links.
5. Skills / Technology Overview: Conceptually generated from the project tags (showing frequency & direct links to filter projects).
6. Timeline / Milestones: Visual non-corporate journey with education (UTFSM 2026), internships, hackathons, publications, and milestone cards.
7. Publications: Dedicated section (e.g. "Coautora de un libro", articles, papers with role, date, description, links).
8. AI-Assisted Development: Mature engineering reflection on AI workflows (AI-assisted coding, code review, test generation, agentic workflows, research).
9. About Me ("Beyond Code"): Personal side (crochet, music/ocarina, books, plants, animals, Ada) alongside education and background.
10. CV & Social Links: Working modal/download trigger for CV, clear GitHub and LinkedIn links.
11. Responsive design, smooth micro-interactions, accessible contrast and keyboard support.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/6187b10a-b93b-4c3d-8bf1-f4dbb30ee985).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
