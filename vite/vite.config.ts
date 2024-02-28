import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3001
  },
  
  plugins: [
    vue(),
    vueJsx(),
    federation({
      name: 'remote_app',
      filename: 'remoteEntry.js',
      // Modules to expose
      exposes: {
        './Button': './src/components/HelloWorld.vue'
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})
