# Nino Lisjak — portfolio

A responsive, interactive portfolio with original SVG/CSS artwork, pointer and scroll parallax, project filtering, project details, technology-to-project links, a downloadable CV, and email contact. No runtime packages or build step.

## Run locally

From this directory, run `npm run dev` (`npm.cmd run dev` in Windows PowerShell), then open http://127.0.0.1:5173.

Run `npm run check` to validate JavaScript and local assets. The deployable site is `dist/`.

## GitHub Pages

The repository is `ninolisjak/portfolio`. The workflow in `.github/workflows/deploy-pages.yml` validates the source and publishes only `dist/` on every push to `main`. It can also be run manually from the Actions tab.

In repository Settings → Pages, the publishing source must be **GitHub Actions**. GitHub Pages requires a public repository on GitHub Free, or a plan that supports Pages for private repositories. The expected project address is https://ninolisjak.github.io/portfolio/ (subject to any account-level custom domain).

No build, dependency installation, or secrets are needed. The page's relative asset URLs also work under the `/portfolio/` path. To deploy manually to another static host, upload the contents of `dist/`.

## Edit

- Project descriptions, destinations, status, and stack associations: `dist/app.js`.
- Page copy and contact details: `dist/index.html`.
- Layout, palette, artwork, responsive rules, and motion: `dist/styles.css`.
- CV: `dist/assets/Nino_Lisjak_CV.pdf`.

Project artwork is an original visual interpretation, not a screenshot. Private repositories are represented by project information and a contact option. Only Klubis is described as a live product. Motion respects the operating system preference and can also be toggled on the page.

The locally hosted Space Grotesk font is licensed under the SIL Open Font License; see `dist/assets/OFL.txt`.
