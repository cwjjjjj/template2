import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import { name } from "./package.json";
import { createHtmlPlugin } from "vite-plugin-html";

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
    createHtmlPlugin({
      minify: true,
      /**
       * 在这里写entry后，你将不需要在`index.html`内添加 script 标签，原有标签需要删除
       * @default src/main.ts
       */
      entry: "/src/main.tsx",
      /**
       * 需要注入 index.html ejs 模版的数据
       */
      inject: {
        data: {
          title: name,
          injectScript: `<script src=""></script>`,
        },
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
