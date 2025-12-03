import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? "/hen-ui-library/" : "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@/components/ui": path.resolve(
        __dirname,
        "./src/registry/new-york/components"
      ),
      "@/lib": path.resolve(__dirname, "./src/lib"),
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
