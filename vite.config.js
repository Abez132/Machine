import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tempo } from "tempo-devtools/dist/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), tempo()],
  server: {
    // @ts-ignore
    allowedHosts: process.env.TEMPO === "true" ? true : undefined,
  },
  optimizeDeps: {
    include: ["framer-motion"],
  },
});
