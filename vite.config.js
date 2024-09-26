import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://api-quickstart-app-git-feat-poc-connect-wallet.preview.tally.xyz/",
});
