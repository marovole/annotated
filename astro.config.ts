import { defineConfig } from 'astro/config';
import tailwindcss from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://annotated.help',
  integrations: [
    tailwindcss(),
    sitemap({
      filter: (page: string) => {
        // Exclude search results and filter pages from sitemap
        return !/[?]|\/search/.test(page);
      },
    }),
  ],
  trailingSlash: 'always',
});
