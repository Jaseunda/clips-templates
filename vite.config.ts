import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './',
  build: {
    lib: {
      entry: 'src/lib.tsx',
      name: 'RelayApp',
      formats: ['umd'],
      fileName: () => 'relay-app.umd.js'
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          'react': 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'ReactJSXRuntime'
        },
        assetFileNames: 'relay-app[extname]'
      }
    },
    cssCodeSplit: false
  }
});