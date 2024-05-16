import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// @ts-expect-error
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve("./src"),
    },
  },
});
