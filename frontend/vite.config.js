import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { visualizer } from 'rollup-plugin-visualizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    visualizer({
      open: true,
      filename: "bundle-report.html",
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {

      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('vuetify/lib')) {
              if (id.includes('components')) {
                return 'vendor-vuetify-components';
              } else if (id.includes('composables')) {
                return 'vendor-vuetify-composables';
              }

              return 'vendor-vuetify-other';
            }
            if (id.includes('@vue')) {
              return 'vendor-vue';
            }
            if (id.includes('axios')) {
              return 'vendor-axios';
            }
            if (id.includes('vue3-toastify/dist')) {
              return 'vendor-toastify';
            }

            return 'vendor-other';
          }
        }
      }
    }
  }
})
