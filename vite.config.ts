import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

const allowedHosts = [
  "industriambarros.com.br",
  "www.industriambarros.com.br",
];

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
    allowedHosts,
    hmr: {
      overlay: false,
    },
  },
  preview: {
    host: "::",
    port: 8080,
    allowedHosts,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
