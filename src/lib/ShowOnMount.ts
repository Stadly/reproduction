import type Hidable from "$lib/Hidable.svelte";
import { onMount } from "svelte";

let hidable: Hidable | undefined;
onMount(() => {
    hidable?.show();
});
