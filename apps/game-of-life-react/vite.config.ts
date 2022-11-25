import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "game-of-life-react",
      filename: "game-of-life-react.js",
      exposes: {
        "./App": "./src/App",
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
  // base is needed for github pages deployment
  base: "/game-of-life-js/",
  preview: {
    host: "localhost",
    port: 5000,
    strictPort: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
