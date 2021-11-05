<script lang="ts">
  export let color: "orange" | "blue" | "green" | "purple" = "blue";
  export let text: string = "";
  export let showDot: boolean = false;
  export let active: boolean = false;
</script>

<!-- <button class={color === "orange" + active ? " active" : ""}> -->
<button
  class:orange={color === "orange"}
  class:blue={color === "blue"}
  class:purple={color === "purple"}
  class:green={color === "green"}
  class:active
>
  <span>{text}</span>

  {#if showDot}
    <span class="dot">•</span>
  {/if}
</button>

<style lang="scss">
  @mixin active-button($bg) {
    color: #fff;
    opacity: 100%;
    background-color: $bg;
  }

  button {
    width: 90px;
    background-color: transparent;
    font-size: 1rem;
    line-height: 1.3rem;
    margin-right: 1rem;
    font-weight: normal;
    outline: none;
    border: none;
    border-radius: 6px;
    color: #00000099;
    opacity: 80%;
    cursor: pointer;

    &.orange {
      .dot {
        color: #ff9100;
      }

      &.active {
        @include active-button(#ff9100);
      }
    }

    &.blue {
      .dot {
        color: #69bcff;
      }

      &.active {
        @include active-button(#69bcff);
      }
    }

    &.purple {
      .dot {
        color: #5c6bc0;
      }

      &.active {
        @include active-button(#5c6bc0);
      }
    }

    &.green {
      .dot {
        color: #66bb6a;
      }

      &.active {
        @include active-button(#66bb6a);
      }
    }
  }
</style>
