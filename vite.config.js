import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
    strictPort: true,
    proxy: {
      "/api": {
        target: "https://jsonplaceholder.typicode.com",
        changeOrigin: true,
        secure: false,
        ws: true,
        // rewrite: (path) => path.replace(/^\/api/, ""),
      },
      "/api-background": {
        target: "http://localhost:33160",
        changeOrigin: true,
        secure: false,
      },
      "/ssr": {
        target: "http://localhost:33160",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
