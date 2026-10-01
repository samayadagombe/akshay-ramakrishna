# Akshay R — Portfolio

Portfolio site for Akshay R, a Senior UX/UI Designer based in Bengaluru.
Built with **Angular 21** (standalone components, signals, OnPush) and plain SCSS, with self-hosted
fonts. Deployed to GitHub Pages through GitHub Actions.

## Getting started

Requirements: Node.js 20.19+ (an `.nvmrc` pins 22) and npm.

```bash
npm install
npm start          # dev server at http://localhost:4200
npm test           # unit tests (Vitest)
npm run build      # production build → dist/akshay-portfolio-angular/browser
```

## Deploy to GitHub Pages

1. Create a new GitHub repository (any name) and push this project to its `main` branch:

   ```bash
   git init -b main
   git add .
   git commit -m "Initial commit: Angular portfolio"
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```

2. In the repository go to **Settings → Pages → Build and deployment** and set **Source** to
   **GitHub Actions**.
3. Open the **Actions** tab. The _Deploy to GitHub Pages_ workflow runs the tests, builds the site
   and publishes it to `https://<your-username>.github.io/<repo-name>/`.

The workflow sets the correct `--base-href` automatically, for both project sites
(`username.github.io/repo/`) and user sites (a repo named `username.github.io`).

## Project structure

```
src/
├── index.html                  # meta tags, favicon
├── styles.scss                 # design tokens, reset, shared utilities
└── app/
    ├── app.ts / app.html       # page shell: header → sections → footer
    ├── core/
    │   ├── data/portfolio.data.ts      # ALL editable content (projects, jobs, contact)
    │   └── models/portfolio.models.ts  # TypeScript interfaces
    ├── layout/
    │   ├── site-header/        # fixed nav, blurs after scrolling
    │   └── site-footer/
    └── features/
        ├── hero/
        ├── work/               # category filter + masonry grid
        │   └── work-card/      # single project tile
        ├── about/
        └── contact/
```

## Updating the content

| To change…                                    | Edit                                  |
| --------------------------------------------- | ------------------------------------- |
| Projects, skills, experience, contact details | `src/app/core/data/portfolio.data.ts` |
| Colours, fonts, spacing tokens                | `:root` in `src/styles.scss`          |
| Hero headline and intro copy                  | `src/app/features/hero/hero.html`     |
| Page title, description, social preview text  | `src/index.html`                      |

### Replacing the project images

Project images currently load from Unsplash, so they are placeholders and need an internet
connection. To use real case-study images, drop the files into `public/images/`, then point
`imageUrl` at them in `portfolio.data.ts` (e.g. `images/subex-platform.jpg`) and set the matching
`width` / `height`.

## Design tokens

| Token         | Value     | Use                       |
| ------------- | --------- | ------------------------- |
| `--bg`        | `#0c0c0b` | Page background           |
| `--fg`        | `#ece9e3` | Primary text              |
| `--muted`     | `#7a7772` | Secondary text            |
| `--muted-dim` | `#3a3935` | Tertiary text, scroll cue |
| `--accent`    | `#c8b89a` | Links, highlights         |

Typography: **DM Serif Display** (headings) and **Outfit** (body), bundled via Fontsource.
