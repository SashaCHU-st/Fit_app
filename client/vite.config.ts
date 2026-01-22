// / <reference types="vitest/config" /
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import wyw from "@wyw-in-js/vite";

export default defineConfig({
  plugins: [
    react(),
    wyw({
      configFile: false,
      include: ["src/**/*.{ts,tsx}"],
      babelOptions: {
        parserOpts: { plugins: ["typescript", "jsx"] },
      },
    }),
  ],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./setup.ts",
    exclude: ["e2e/**", "node_modules/**", "dist/**"],
  },
});
