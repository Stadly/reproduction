# Issue with adapter-node and cyclic import

Importing an environment variable from `$env/static/private` in a javascript file that dynamically imports another javascript file that imports the same environment variable leads to cyclic imports in the output from `adapter-node`.

# Input

```js
// src/hooks.server.js
import { MY_VAR } from "$env/static/private";

export const b = MY_VAR.trim();

const { a } = await import("./dynamic-import.js");
```

```js
// src/dynamic-import.js
import { MY_VAR } from "$env/static/private";

export const a = MY_VAR.trim();
```

# Output

```shell
npm run build
```

```js
// .svelte-kit/adapter-node/chunks/hooks.server.js
const MY_VAR = "test";
const b = MY_VAR.trim();
await import("./dynamic-import.js"); // <----- HERE -----
const hooks_server = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  b
}, Symbol.toStringTag, { value: "Module" }));
export {
  MY_VAR as M,
  hooks_server as h
};
```

```js
// .svelte-kit/adapter-node/chunks/dynamic-import.js
import { M as MY_VAR } from "./hooks.server.js"; // <----- HERE -----
const a = MY_VAR.trim();
export {
  a
};
```
