# Tech Services Alliance

Static React and Tailwind website for Tech Services Alliance.

## Run locally

```bash
npm install
npm run dev
```

## Create a production build

```bash
npm run build
```

## Deploy to GitHub Pages

In the repository's **Settings → Pages**, set **Build and deployment → Source** to **GitHub Actions**. The workflow in `.github/workflows/deploy.yml` builds and deploys the site on every push to `main`, or it can be started manually from the Actions tab. Pages must publish the built `dist` artifact; publishing the source branch directly leaves the React app blank because browsers cannot run the JSX source file.
