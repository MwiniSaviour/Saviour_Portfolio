import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import VitePrerender from 'vite-plugin-prerender'

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
  VitePrerender({
    staticDir: path.join(__dirname, 'dist'),
    routes: ['/', '/about', '/projects', '/contact'],
  })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    }
  }
})
