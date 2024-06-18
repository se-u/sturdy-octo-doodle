import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react(), nodePolyfills()],
//   base: "/",

// });

export default defineConfig({
  plugins: [react(), nodePolyfills()],
  base: "/",
  resolve: {
    alias: {
      "@modules/": "/src/modules/",
      "@lib/": "/src/lib/",
      "@components/": "/src/components/",
    },
  },
});
