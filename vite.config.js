import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist', // Output directory for production build
    minify: 'terser', // Minify JavaScript for smaller size
    sourcemap: false, // Remove source maps (not needed for production)
    emptyOutDir: true, // Clean the output directory before each build
  },
  plugins: [react()],
})
