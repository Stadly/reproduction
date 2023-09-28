import { describe, it, expect } from 'vitest';
import { render } from "@testing-library/svelte";
import Page from "./routes/+page.svelte";

// Uncomment this to clean up after each test, as it is not done automatically.
// import { cleanup } from "@testing-library/svelte";
// import { afterEach } from "vitest";
// afterEach(() => {
//   cleanup();
// });

it('should render page', () => {
	const { getByRole } = render(Page);
	expect(getByRole("heading", { level: 1 }).textContent).toBe("Welcome to SvelteKit");
});

it('should have been cleaned up before next test is run', () => {
	const { getByRole } = render(Page);
	expect(getByRole("heading", { level: 1 }).textContent).toBe("Welcome to SvelteKit");
});
