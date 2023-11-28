import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import { createVuePlugin as vue2 } from 'vite-plugin-vue2'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue2(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      vue: 'vue/dist/vue.esm.js',
    },
  },
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `@import "@/styles/_main.sass"
        `,
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.sass$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },
  build: {
    brotliSize: false,
  },
})
