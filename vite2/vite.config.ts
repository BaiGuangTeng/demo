import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3002,
    cors: true
  },
  plugins: [
    vue(),
    vueJsx(),
    federation({
      name: 'host_app2',
      filename: 'remoteEntry2.js',
      // Modules to expose
      remotes: {
        remote_app: 'http://localhost:3001/assets/remoteEntry.js'
      },
      exposes: {
        './Button': './src/components/HelloWorld.vue'
      },
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
