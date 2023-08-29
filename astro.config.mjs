import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  experimental: {
   assets: true
  },
  integrations: [
    tailwind({
      configFile: './tailwind.config.cjs',
      applyBaseStyles: false,
    }),
  ],
});