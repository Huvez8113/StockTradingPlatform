import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3001, // ✅ Force Vite to use port 3005
    strictPort: true, // ✅ Prevent Vite from changing it
    host: "localhost" // ✅ Ensure it's only accessible locally
  },
  plugins: [react()],
})
