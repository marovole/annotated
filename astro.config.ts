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
  redirects: {
    // Redirect /page/1/ to base URL for all source type pages
    '/annotated-bibliography-example/mla/journal-article/page/1/': '/annotated-bibliography-example/mla/journal-article/',
    '/annotated-bibliography-example/mla/book/page/1/': '/annotated-bibliography-example/mla/book/',
    '/annotated-bibliography-example/mla/website/page/1/': '/annotated-bibliography-example/mla/website/',
    '/annotated-bibliography-example/apa-7/journal-article/page/1/': '/annotated-bibliography-example/apa-7/journal-article/',
    '/annotated-bibliography-example/apa-7/book/page/1/': '/annotated-bibliography-example/apa-7/book/',
    '/annotated-bibliography-example/apa-7/website/page/1/': '/annotated-bibliography-example/apa-7/website/',
    '/annotated-bibliography-example/chicago/journal-article/page/1/': '/annotated-bibliography-example/chicago/journal-article/',
    '/annotated-bibliography-example/chicago/book/page/1/': '/annotated-bibliography-example/chicago/book/',
    '/annotated-bibliography-example/chicago/website/page/1/': '/annotated-bibliography-example/chicago/website/',
  },
});
