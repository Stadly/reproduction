<script lang="ts">
    export let messages: string[] = [];
</script>

<ul>
    {#each messages as message}
        <li>{message}</li>
    {/each}
</ul>
