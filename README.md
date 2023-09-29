The [documentation says](https://testing-library.com/docs/svelte-testing-library/api#cleanup) that `cleanup` is done automatically.

I have a different experience, however. This test passes:
```js
it('should render page', () => {
	const { getByRole } = render(Page);
	expect(getByRole("heading", { level: 1 }).textContent).toBe("Welcome to SvelteKit");
});
```

If I add another test after it, that one fails:
```js
it('should have been cleaned up before next test is run', () => {
	const { getByRole } = render(Page);
	expect(getByRole("heading", { level: 1 }).textContent).toBe("Welcome to SvelteKit");
});
```

The error is:
```
TestingLibraryElementError: Found multiple elements with the role "heading"

Here are the matching elements:

Ignored nodes: comments, script, style
<h1>
  Welcome to SvelteKit
</h1>

Ignored nodes: comments, script, style
<h1>
  Welcome to SvelteKit
</h1>

(If this is intentional, then use the `*AllBy*` variant of the query (like `queryAllByText`, `getAllByText`, or `findAllByText`)).
```

If I add this to the top of my file, both tests pass:
```js
import { cleanup } from "@testing-library/svelte";
import { afterEach } from "vitest";
afterEach(() => {
  cleanup();
});
```

Reported issue: https://github.com/testing-library/svelte-testing-library/issues/270