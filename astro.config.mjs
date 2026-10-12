import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: set to your production domain before deploying
export default defineConfig({
  site: 'https://maxgauntner.com',
  integrations: [sitemap()],
  devToolbar: { enabled: false },
  markdown: {
    shikiConfig: { theme: 'github-dark-dimmed' },
  },
});
