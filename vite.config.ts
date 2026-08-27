import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';

// Multi-page build: the static hub homepage stays plain HTML/CSS/JS, the
// guest canvas is a React island served at /canvas/.
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        home: fileURLToPath(new URL('./index.html', import.meta.url)),
        canvas: fileURLToPath(new URL('./canvas/index.html', import.meta.url)),
        meal: fileURLToPath(new URL('./meal/index.html', import.meta.url)),
        mealLogin: fileURLToPath(new URL('./meal/login.html', import.meta.url)),
      },
    },
  },
});
