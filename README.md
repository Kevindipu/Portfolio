# Kevin Thomas – Portfolio

React + Vite + Tailwind CSS portfolio, deployed to GitHub Pages.

## Local development

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build into dist/
npm run preview    # serve the production build locally
```

## Edit content

All text, links, projects and skills live in `src/data/content.js`.
Replace the `TODO` email and LinkedIn values.

## CV

Put your PDF at `public/Kevin_Thomas_CV.pdf` (or change `cv` in `content.js`).

## Deploy

1. Push the project to a GitHub repo with `main` as the default branch.
2. In the repo go to **Settings → Pages → Source** and choose **GitHub Actions**.
3. Push to `main`. The workflow builds and deploys automatically.
4. Site URL: `https://<username>.github.io/<repo-name>/`

The workflow sets `VITE_BASE` to `/<repo-name>/`. If the repo is named
`<username>.github.io`, set `VITE_BASE: /` in `.github/workflows/deploy.yml`.
Commit `package-lock.json` (the workflow uses `npm ci`).