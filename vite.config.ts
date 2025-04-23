import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'], // Exclude unnecessary dependencies
  },
  server: {
    host: '0.0.0.0', // Allow external access
    port: process.env.PORT ? parseInt(process.env.PORT) : 5173, // Use environment port or default to 5173
    allowedHosts: ['chitchat-site.onrender.com', '.onrender.com', 'localhost'], // Allow specific hosts
  },
  build: {
    outDir: 'dist', // Output directory for production build
    sourcemap: true, // Enable source maps for debugging
  },
});
