import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url' // Используем стандартный URL

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Напрямую связываем символ @ с папкой src через URL
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})