import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import CharsetPlugin from './vite-plugin-charset'; // Import the custom plugin

export default defineConfig({
  plugins: [react(), CharsetPlugin()],
});
