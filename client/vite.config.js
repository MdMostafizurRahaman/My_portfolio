import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    allowedHosts: [
      'fa8282d5-09e2-4d19-a08d-03db8cd3dfee-00-1m2dtl6tzk8f1.picard.replit.dev',
      'localhost',
      '.repl.co',
      '.repl.dev',
      '.repl.run',
      '.replit.com',
      '.replit.dev',
      '.replit.app',
      'repl.co',
      'repl.dev',
      'repl.run',
      'replit.com',
      'replit.dev',
      'replit.app'
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});