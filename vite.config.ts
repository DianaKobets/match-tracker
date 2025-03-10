/// <reference types="vite-plugin-svgr/client" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: '**/*.svg'
    })
  ],
  assetsInclude: ['**/*.woff', '**/*.woff2', '**/*.ttf']
})
