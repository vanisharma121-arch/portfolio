import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Deployed as a GitHub Pages *project* site at
// https://vanisharma121-arch.github.io/portfolio/, so assets must resolve
// under /portfolio/. Dev server still serves from '/'.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/portfolio/' : '/',
  plugins: [react()],
}))
