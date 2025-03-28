import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [  tailwindcss(),react()],
  optimizeDeps: {
    include: ['chart.js']
  },
  resolve: {
    alias: {
      'chart.js': 'chart.js/auto'
    }
  }
})
