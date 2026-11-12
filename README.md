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
- `src/styles/webflow.css` is the stylesheet exported from Webflow, with asset URLs pointed at local files. `overrides.css` holds the few rules added on top.
- `src/assets/` has images and fonts. Images are resized and converted to WebP at build time.

## Contact form

GitHub Pages can't receive form posts. Set `formEndpoint` in `src/config.ts` to a Formspree URL (or any endpoint that accepts a JSON POST) and the form submits there. While it is empty, submitting opens the visitor's mail client with the message filled in.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`. In the repo settings, Pages source must be set to "GitHub Actions".
