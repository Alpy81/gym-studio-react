import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: "/github.com/Alpy81/",
  ...(command !== "serve" && { base: "/gym-studio-react/" }),
}));
