import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: resolve(__dirname),
  build: {
    lib: {
      entry: {
        'canvas-core': resolve(__dirname, 'src/core/index.ts'),
        'canvas-react': resolve(__dirname, 'src/react/InfiniteCanvas.tsx'),
      },
      formats: ['es'],
      fileName: (_, entryName) => `${entryName}.js`,
    },
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', 'lucide-react'],
      output: {
        assetFileNames: 'canvas-react.[ext]',
      },
    },
  },
});
