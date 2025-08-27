import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';
import vueDevTools from 'vite-plugin-vue-devtools';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vuetify(),
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
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
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
            if (id.includes('vuetify')) {
              return 'vendor-vuetify';
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
