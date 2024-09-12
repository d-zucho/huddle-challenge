import * as path from 'path'

import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    react(),
    // svgr(),
    // svgr({
    //   // svgr options: https://react-svgr.com/docs/options/
    //   svgrOptions: {
    //     exportType: 'default',
    //     ref: true,
    //     svgo: false,
    //     titleProp: true,
    //   },
    //   include: '**/*.svg',
    // }),
  ],

  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, './src/') }],
  },
})
