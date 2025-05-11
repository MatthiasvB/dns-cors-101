import { defineConfig } from "vite";
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
    svelte() // <-- Must come after Tailwind
  ],
  server: {
    allowedHosts: ['frontend.vorführeffekt.de', 'frontend.xn--vorfhreffekt-glb.de', 'vorführeffekt.de', 'xn--vorfhreffekt-glb.de'],
    host: "0.0.0.0",
  }
});