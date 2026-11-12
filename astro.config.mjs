import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://customerist.co',
  // Emit casestudies.html so GitHub Pages serves /casestudies, the same URL Webflow used.
  build: { format: 'file' },
  trailingSlash: 'never',
  // Lets the dev server answer on a Tailscale MagicDNS name, not just its IP.
  vite: { server: { allowedHosts: ['.ts.net'] } },
});
