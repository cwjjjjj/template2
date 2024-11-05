import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import { name } from "./package.json";

const IS_PROD = process.env.NODE_ENV === "production";
const ORIGIN_BASE = `https://static.codefuture.top/${name}/`;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
    }),
  ],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "./src") },
      { find: /^~/, replacement: "" },
    ],
  },
  esbuild: {
    jsxFactory: "jsx",
    jsxInject: `
    import { jsx } from '@emotion/react'
  `,
  },
  base: IS_PROD ? ORIGIN_BASE : "",
  server: {
    open: `/${name}`,
  },
});
