import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ---------------------------------------------------------------------------
// GitHub Pages base path
// ---------------------------------------------------------------------------
// If you deploy to https://<username>.github.io/<repo-name>/  ->  set base to '/<repo-name>/'
// If you deploy to a custom domain (e.g. via CNAME) or to https://<username>.github.io/ ->  set base to '/'
// ---------------------------------------------------------------------------
const REPO_NAME = 'ah-technical-consulting'
const USE_CUSTOM_DOMAIN = false // set to true once you attach a custom domain (see README > Custom domain)

export default defineConfig({
  plugins: [react()],
  base: USE_CUSTOM_DOMAIN ? '/' : `/${REPO_NAME}/`,
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
