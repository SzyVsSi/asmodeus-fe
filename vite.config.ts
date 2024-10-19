import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/asmodeus-fe',
  server: {
    port: 3000,
  },
  build: {
    sourcemap: true,
  },
});
