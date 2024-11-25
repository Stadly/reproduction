import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vitest/config'
import { svelteTesting } from '@testing-library/svelte/vite'

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [sveltekit(), svelteTesting()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest-setup.ts'],
  },
})