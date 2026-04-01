import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/note': {
        target: 'https://note.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/note/, '/api/v2/creators/lush_willet4703/contents?kind=note')
      }
    }
  }
})
