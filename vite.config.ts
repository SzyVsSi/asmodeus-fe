import path from 'node:path';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: '/asmodeus-fe/',
	server: {
		port: 3000,
	},
	build: {
		sourcemap: true,
	},
	resolve: {
		alias: {
			'@/assets': path.resolve(import.meta.dirname, 'src/assets'),
			'@/common': path.resolve(import.meta.dirname, 'src/common'),
			'@/core': path.resolve(import.meta.dirname, 'src/core'),
			'@/pages': path.resolve(import.meta.dirname, 'src/pages'),
		},
	},
});
