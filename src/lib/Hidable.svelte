<script lang="ts">
    export let hidden = true;

    export const show = () => {
        hidden = false;
    };

    export const hide = () => {
        hidden = true;
    };

    export const toggle = () => {
        hidden = !hidden;
    };
</script>

{#if !hidden}
    <slot />
{/if}
