import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// GitHub Pages can't send HTTP headers, so the policy ships as a <meta> tag.
// Build-only: the dev server relies on inline scripts for hot reload.
const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self'",
  "style-src 'self'",
  "img-src 'self' data:",
  "font-src 'self' data:",
  "connect-src 'self' https://api.emailjs.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "upgrade-insecure-requests",
].join("; ");

const cspMetaTag = () => ({
  name: "csp-meta-tag",
  apply: "build",
  transformIndexHtml: () => [
    {
      tag: "meta",
      attrs: { "http-equiv": "Content-Security-Policy", content: contentSecurityPolicy },
      injectTo: "head-prepend",
    },
  ],
});

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react(), cspMetaTag()],
  // three.js is its own lazy chunk for the hero scene; it's large by nature.
  build: { chunkSizeWarningLimit: 600 },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
