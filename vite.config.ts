import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: resolve('./src') }],
  },
  plugins: [vue()],
  base: process.env.NODE_ENV === 'production' ? '/BorderCollie/' : '/',
  build: {
    outDir: 'bin',
  },
});
