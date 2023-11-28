import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		environment: "happy-dom",
		include: ['src/**/*.{test,spec}.{js,ts}'],
		coverage: {
			enabled: true,
		}
	}
});
