<script lang="ts">
  export let visible: boolean = false;
</script>

{#if visible}
  <div class="backdrop" on:click />
{/if}

<style lang="scss">
  .backdrop {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.5);
  }
</style>
