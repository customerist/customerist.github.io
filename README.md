# customerist.github.io

The Customerist site, built with [Astro](https://astro.build) and deployed to GitHub Pages. Migrated from Webflow.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
```

Needs Node 22.23 or newer.

## Where things live

- `src/pages/` has one file per page: `index.astro`, `casestudies.astro`, `404.astro`.
- `src/data/case-studies.ts` holds the case study copy. Add an entry there to add a case study.
- `src/components/` has the nav, footer and contact form, testimonial slider and case study layout.
- `src/styles/webflow.css` is the stylesheet exported from Webflow, with asset URLs pointed at local files. `overrides.css` is loaded after it and holds everything changed since: contrast, line heights, focus styles, tap targets and the contact form.
- `src/assets/` has images and the Tiempos serif files. Images are resized and converted to WebP at build time. The sans is Montserrat, from the `@fontsource-variable/montserrat` package.

## Contact form

The form sends through [Web3Forms](https://web3forms.com), since GitHub Pages can't receive form posts. Create an access key there for the address that should receive enquiries, then paste it into `web3formsAccessKey` in `src/config.ts`. The key is public by design. While it is empty, submitting opens the visitor's mail client with the message filled in.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`. In the repo settings, Pages source must be set to "GitHub Actions".
