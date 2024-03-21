<script lang="ts">
    import Hidable from "$lib/Hidable.svelte";
    import { onMount } from "svelte";

    let hidable: Hidable | undefined;
    onMount(() => {
        hidable?.show();
    });
</script>

<Hidable bind:this={hidable}>
    <slot />
</Hidable>
