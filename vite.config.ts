import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';

// Multi-page build: the static hub homepage stays plain HTML/CSS/JS, and each
// tool is its own React island — the guest canvas at /canvas/, the markdown
// live preview at /markdown/. The privacy policy at /privacy is a static page.
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        home: fileURLToPath(new URL('./index.html', import.meta.url)),
        canvas: fileURLToPath(new URL('./canvas/index.html', import.meta.url)),
        markdown: fileURLToPath(new URL('./markdown/index.html', import.meta.url)),
        // Emitted as dist/privacy.html so Pages serves https://choi01.com/privacy directly (200).
        privacy: fileURLToPath(new URL('./privacy.html', import.meta.url)),
      },
    },
  },
});
