import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT ? parseInt(process.env.PORT) : 5173, // Use environment port or default to 5173
    host: '0.0.0.0', // Bind to all network interfaces
    allowedHosts: ['chitchat-site.onrender.com'], // Optional but fine to keep
  },
  preview: {
    port: parseInt(process.env.PORT || '4173'), // Use environment port or default to 4173
    host: '0.0.0.0', // Bind to all network interfaces
  }
});
