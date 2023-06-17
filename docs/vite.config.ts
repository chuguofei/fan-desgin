import path from 'path'
import { defineConfig } from 'vite'
import { docTransform } from './plugins/docTransform'

export default defineConfig({
  server: {
    port: 8000
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.vitepress')
    },
    extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json']
  },
  plugins: [docTransform()]
})
