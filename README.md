# João Caldeira — Portfolio

My personal portfolio: a single-page, scroll-snap site with five full-screen
sections and an interactive constellation backdrop.

**Live:** https://joaomiguelcaldeira.github.io

## Sections
- **Home** — intro, rotating role, résumé & contact CTAs
- **About** — animated terminal bio + categorized tech stack
- **Experience** — timeline of roles & education
- **Projects** — featured work, expandable to the full list
- **Contact** — message form (Formspree) + socials

## Tech Stack
- [Astro](https://astro.build/) (static output, near-zero JS)
- Vanilla CSS (custom design tokens) + small inline scripts
- Interactive canvas particle background
- Deployed to GitHub Pages via GitHub Actions

## Develop
```bash
npm install      # install dependencies
npm run dev      # start dev server at http://localhost:4321
npm run build    # build static site to ./dist
npm run preview  # preview the production build
```

## Content
Experience and projects live as typed data in `src/data/` — edit those files
to add or update entries. Images and the résumé PDF live in `public/`.

## Deployment
Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
Astro site and publishes `./dist` to GitHub Pages. Set Pages source to
"GitHub Actions" in the repository settings.

## License
Distributed under the MIT License.
