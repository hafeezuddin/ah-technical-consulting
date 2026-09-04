# AH Technical Consulting — website

**Technology × Commerce × Growth**

A production website for AH Technical Consulting, built with React, TypeScript and Vite, and
designed to deploy on GitHub Pages.

---

## Installation

Requires [Node.js](https://nodejs.org/) 18 or later.

```bash
npm install
```

## Local development

```bash
npm run dev
```

This starts a local dev server (usually `http://localhost:5173`) with hot reload.

## Production build

```bash
npm run build
```

This runs a TypeScript check and outputs a static production build to `dist/`. To preview that
build locally:

```bash
npm run preview
```

## GitHub Pages deployment

This repo includes a GitHub Actions workflow at `.github/workflows/deploy.yml` that builds the
site and deploys it to GitHub Pages automatically on every push to `main`.

To enable it:

1. Push this repository to GitHub.
2. In the repo, go to **Settings → Pages**, and under **Build and deployment**, set **Source** to
   **GitHub Actions**.
3. Push to `main` (or run the workflow manually from the **Actions** tab). The site will be
   published at `https://<your-username>.github.io/<repo-name>/`.

### Base path

`vite.config.ts` sets the Vite `base` path so assets resolve correctly under a repo subpath like
`/ah-technical-consulting/`. If you rename the repository, update `REPO_NAME` in
`vite.config.ts` to match. If you attach a custom domain (see below), set `USE_CUSTOM_DOMAIN` to
`true` there instead, so the site is served from `/`.

## Custom domain

1. Buy/configure your domain with your registrar, pointing it at GitHub Pages (see
   [GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)).
2. Copy `public/CNAME.example` to `public/CNAME` and replace its contents with your domain, e.g.:
   ```
   www.yourdomain.com
   ```
3. Set `USE_CUSTOM_DOMAIN = true` in `vite.config.ts`.
4. Update the canonical URL, Open Graph/Twitter URLs and structured data in `index.html`, and
   `domain` in `src/data/siteConfig.ts`, to your real domain.
5. Update `public/robots.txt` and `public/sitemap.xml` with your real domain too.

## Contact

The site is fully static and doesn't have a contact form — the Contact section is a simple email
card that opens the visitor's mail client via a `mailto:` link. The address lives in one place:

```ts
// src/data/siteConfig.ts
contactEmail: 'hi@ahtechnicalconsulting.com',
```

Update it there and both the Contact section and the `mailto:` links will pick it up. If you'd
rather add a form back in later (e.g. via Formspree or a serverless function), keep any API keys
out of this frontend code — see Security, below.

## Company information

Everything you're likely to want to change before launch lives in one file:

**`src/data/siteConfig.ts`**
- `contactEmail` — your real inbox (used in the Contact section and its `mailto:` link)
- `domain` — your production domain
- `companyName` / `tagline`

**`index.html`**
- Page `<title>` and meta description
- Open Graph / Twitter metadata and `canonical` URL
- Organization / WebSite structured data (`<script type="application/ld+json">`)

**`public/robots.txt`** and **`public/sitemap.xml`** — replace `yourdomain.com` with your real
domain once you have one.

Section copy itself lives in `src/data/*.ts` (capabilities, solutions, approach steps, lifecycle
stages, tech ecosystem, differentiators) and in each file under `src/sections/`, if you want to
adjust wording.

## Project structure

```text
src/
  components/   Reusable UI: nav, footer, section heading, reveal-on-scroll, diagrams, form
  sections/     One file per page section (hero, capabilities, approach, contact, etc.)
  data/         Site copy and configuration as typed data — edit here first
  hooks/        useInView (IntersectionObserver-based scroll reveal)
  styles/       Design tokens (tokens.css) and global base styles (global.css)
  App.tsx       Assembles all sections
  main.tsx      React entry point

public/
  favicon.svg
  robots.txt
  sitemap.xml
  CNAME.example   copy to CNAME once you have a custom domain

.github/workflows/deploy.yml   GitHub Pages deployment workflow
```

## Design system

Design tokens (colors, type, spacing, radii, motion) are defined once as CSS custom properties in
`src/styles/tokens.css`. Every component references these variables rather than hardcoding
values, so the whole site's palette or type scale can be adjusted from one place.

- **Type:** Manrope (display/headings) + Inter (body), loaded via Google Fonts in `index.html`.
- **Color:** near-black background, a single restrained blue accent, and a grayscale text
  hierarchy — see the `:root` block in `tokens.css` for exact values.
- **Motion:** a small `Reveal` component fades sections in on scroll via IntersectionObserver, and
  respects `prefers-reduced-motion` (both at the CSS level and via reduced transition durations).

## Accessibility

- Semantic landmarks (`header`, `nav`, `main`, `footer`) and a heading hierarchy that goes
  H1 → H2 → H3 in document order.
- A "Skip to content" link for keyboard users.
- Visible focus states (`:focus-visible`) throughout, including on the mobile menu and form
  fields.
- The mobile navigation traps no focus incorrectly and closes via a labeled, keyboard-reachable
  button.
- Reduced-motion users get near-instant transitions instead of animated ones.

## Performance

- No component libraries beyond `lucide-react` (icons) — no charting/animation frameworks are
  bundled unless you add them.
- All motion is CSS-driven; the only imperative JS is IntersectionObserver-based scroll reveals.
- SVGs for diagrams (hero ecosystem map, flow rails) instead of images, so there are no large
  binary assets to optimize or lazy-load.

Run a Lighthouse audit against `npm run preview`'s local server before shipping changes that add
new dependencies or large media assets.

## Security & privacy

- No API keys or secrets are stored in this repository or shipped to the browser.
- The site collects no personal information itself — the Contact section simply opens a
  `mailto:` link to the address in `siteConfig.ts`.
- If you eventually need a real contact form or authenticated integrations (CRM, email, etc.), do
  that from a backend or serverless function, never from this static frontend.

## Content policy

Every stat, claim and category on this site is deliberately generic (no invented clients, case
studies, testimonials, certifications, or performance numbers) because none were supplied when
this site was built. If you have real proof points — client logos, results, certifications — add
them yourself in the relevant section/data file; don't let anyone else add placeholder claims back
in.
