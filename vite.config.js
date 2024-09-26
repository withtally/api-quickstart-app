import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://api-quickstart-2i87ar3ls.preview.tally.xyz/assets/",
});
