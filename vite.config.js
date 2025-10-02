import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src")
      }
    }
  };

  // Only set base path for production builds (GitHub Pages)
  if (command === 'build') {
    config.base = '/truckingcompany-website';
  }

  return config;
});