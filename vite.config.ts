import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve('src'),
      Assets: resolve('src/assets'),
      Components: resolve('src/components'),
      Utils: resolve('src/utils'),
      Pages: resolve('src/pages'),
      Type: resolve('src/types'),
    },
  },
  plugins: [vue()],
});
