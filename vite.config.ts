import { defineConfig } from 'vite'
import path from 'path'

const IS_PROD = process.env.NODE_ENV === 'production'
const ORIGIN_BASE = 'https://static.ruguoapp.com/jk-book/'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') },
      { find: /^~/, replacement: '' },
    ],
  },
  esbuild: {
    jsxFactory: 'jsx',
    jsxInject: `
    import { jsx } from '@emotion/react'
  `,
  },
  base: IS_PROD ? ORIGIN_BASE : '',
})
