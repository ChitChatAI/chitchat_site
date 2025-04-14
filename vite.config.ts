import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: '0.0.0.0', // Allow Render to bind properly
    port: process.env.PORT ? parseInt(process.env.PORT) : 5173, // Respect Render's port
  },
});
