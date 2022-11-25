import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(async () => ({
  // base: "/game-of-life-js/",
  plugins: [
    react(),
    federation({
      name: "app",
      remotes: {
        "game-of-life-react":
          "http://localhost:5001/game-of-life-js/assets/game-of-life-react.js",
      },
      shared: [
        "react",
        "react-dom",
        "@emotion/react",
        "@mantine/core",
        "@mantine/hooks",
        "@emotion/use-insertion-effect-with-fallbacks",
      ],
    }),
  ],
  preview: {
    host: "localhost",
    port: 5001,
    strictPort: true,
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
}));
