<script lang="ts">
  export let color: "orange" | "blue" | "green" | "purple" = "blue";
  export let text: string = "";
  export let showDot: boolean = false;
  export let active: boolean = false;
</script>

<button class={color === "orange" + active ? " active" : ""}>
  <span>{text}</span>

  {#if showDot}
    <span class="dot">•</span>
  {/if}
</button>

<style lang="scss">
  button {
    width: 80px;
    color: #00000099;
    opacity: 80%;

    &.orange {
      .dot {
        color: #ff9100;
      }

      &.active {
        background-color: #ff9100;
        color: #fff;
      }
    }

    &.blue {
      .dot {
        color: #69bcff;
      }

      &.active {
        background-color: #69bcff;
        color: #fff;
      }
    }

    &.purple {
      .dot {
        color: #5c6bc0;
      }

      &.active {
        background-color: #5c6bc0;
        color: #fff;
      }
    }

    &.green {
      .dot {
        color: #66bb6a;
      }

      &.active {
        background-color: #66bb6a;
        color: #fff;
      }
    }
  }
</style>
