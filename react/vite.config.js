import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

// Deployed as a GitHub Pages *project* site at
// https://vanisharma121-arch.github.io/portfolio/, so assets must resolve
// under /portfolio/. Dev server still serves from '/'.
//
// Multi-page build: the playbook is a separate document (served at
// /portfolio/playbook/) rather than a client-side route, so a direct link to it
// resolves on GitHub Pages without an SPA 404 fallback.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/portfolio/' : '/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        playbook: resolve(__dirname, 'playbook/index.html'),
      },
    },
  },
}))
