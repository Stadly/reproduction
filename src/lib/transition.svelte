<script lang="ts">
    export let transition:
        | {
              duration?: number;
          }
        | undefined = undefined;
    if (transition) {
        transition.duration = transition.duration ?? 1500;
    }
</script>
