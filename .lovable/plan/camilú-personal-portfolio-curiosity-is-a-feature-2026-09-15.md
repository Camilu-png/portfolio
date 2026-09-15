# Camilú — Personal Portfolio ("Curiosity is a feature")

A warm, dark aubergine portfolio styled as a personal engineering laboratory / digital notebook, with Ada the calico cat as an illustrated mascot.

## Look and feel
- Deep warm aubergine background, lighter purple surfaces, warm cream text.
- Warm yellow accent for buttons, active filters and highlights; lavender as secondary accent.
- Subtle notebook-grid texture behind sections, soft rounded cards, restrained hover motion.
- Never pure black or pure white.

## Ada the mascot
Hand-drawn style SVG cat built from the photo: black and orange patches, white chest and paws, green eyes, pink nose, big ears. Several poses reused contextually:
- peeking near the intro
- batting a ball of yarn near the crochet project / About
- holding an ocarina near OCARI
- watching the filter pills in Projects

## Pages
1. **Home** (`/`) — short human intro, tagline, then straight into featured projects and a teaser of skills and timeline.
2. **Projects** (`/projects`) — tag filter pills generated from project data, each showing a live count; featured projects first; cards with status, year, tags, GitHub and demo links.
3. **Project detail** (`/projects/$slug`) — long-form write-up: overview, problem, approach, technical details, challenges, what I learned, mock visuals, links. Seeded with OCARI, Pixel Crochet, Asigna tu Ayudantía, Solar Forecasting.
4. **Skills** (`/skills`) — technologies derived from project tags with frequency, each linking into a filtered Projects view.
5. **Timeline** (`/timeline`) — non-corporate vertical journey: UTFSM 2026, internships, hackathons, publications, milestones.
6. **Publications** (`/publications`) — book co-authorship, articles and papers with role, date, description, link.
7. **AI in Engineering** (`/ai`) — reflective essay-style page on AI-assisted coding, review, test generation, agentic workflows and research.
8. **About** (`/about`) — "Beyond Code": crochet, ocarina, books, plants, animals, Ada, plus education and background.
9. **CV** — modal with a summary and a download button, reachable from the nav.

Sticky navigation across all pages plus GitHub and LinkedIn links; responsive, keyboard-accessible, visible focus states.

## Technical notes
- TanStack Start file routes; one shared layout in `__root.tsx` with nav, footer and notebook background.
- Projects, tags, timeline entries and publications live in typed data modules under `src/data/`, so filters, counts and the skills page all derive from one source.
- Tag filtering uses URL search params so filtered views are shareable and linkable from Skills.
- Design tokens (aubergine, purple surface, yellow, lavender, cream) defined in `src/styles.css` as semantic tokens.
- Ada rendered as reusable inline SVG React components in `src/components/ada/`.
- Per-route head metadata with unique titles and descriptions.

## Content
Real content is used where provided (the four projects, UTFSM 2026, book co-authorship). Remaining details — internship names, hackathon dates, publication links, CV file, GitHub and LinkedIn URLs — will be filled with clearly marked placeholders for you to replace.
