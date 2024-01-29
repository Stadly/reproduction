import { MY_VAR } from "$env/static/private";

export const b = MY_VAR.trim();

const { a } = await import("./dynamic-import.js");
