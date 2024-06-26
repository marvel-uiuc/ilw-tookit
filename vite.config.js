import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  root: 'src',
  resolve: {
    dedupe: ['lit']
  },
  build: {
    outDir: '../dist',
    lib: {
      name: 'toolkit',
      entry: 'index.js',
      fileName: 'toolkit',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      output: {
        assetFileNames: (chunkInfo) => {
          if (chunkInfo.name === 'style.css') return 'toolkit.css';
        }
      }
    },
  },
  server: {
    hmr: false
  }
})
