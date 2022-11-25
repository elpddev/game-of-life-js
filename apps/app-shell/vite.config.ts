import { defineConfig, loadEnv } from "vite";
import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(async ({ command, mode }) => {
  const env = loadEnv(mode, process.cwd() + "/../../", "");

  return {
    plugins: [
      react(),
      federation({
        name: "app",
        remotes: {
          "game-of-life-react": `${env.GAME_OF_LIFE_REACT_DOMAIN}${env.GAME_OF_LIFE_REACT_RESOURCE}`,
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
    base: env.APP_SHELL_BASE,
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
  };
});
