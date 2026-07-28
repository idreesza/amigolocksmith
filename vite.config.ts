import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  base: '/amigolocksmith/',
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // Tree-shake lucide: resolve the package barrel to the icons-only entry
      "lucide-react": path.resolve(
        __dirname,
        "./node_modules/lucide-react/dist/esm/lucide-react.js"
      ),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom", "react-router"],
        },
      },
    },
  },
});
