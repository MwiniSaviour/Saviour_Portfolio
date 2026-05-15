import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import { vitePrerenderPlugin } from 'vite-prerender-plugin';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  tailwindcss(),
  ViteImageOptimizer({
    jpg: { quality: 80 },
    png: { quality: 80 },
    webp: { quality: 75 },
    avif: { quality: 70 },
  }),
  prerender({
    // using the route path to compiled into flat HTML since everything is on a single page section.
    routes: ['/'],
  }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    }
  }
})
