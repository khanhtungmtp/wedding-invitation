import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoBase = '/wedding-invitation/'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? repoBase : '/',
}))
