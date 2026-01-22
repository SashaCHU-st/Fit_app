/// <reference types="node" />

import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  testMatch: "**/*.test.ts",
  use: {
    baseURL: process.env.PW_BASE_URL ?? "http://localhost:5173",
  },
});
