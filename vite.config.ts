import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// GH Pages project-page asset base. Must match the repo name; trailing slash required.
// https://vite.dev/config/
export default defineConfig({
  base: '/tokyo-xtreme-racer-save-editor/',
  plugins: [react()],
});