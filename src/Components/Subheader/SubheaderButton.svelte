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
  <span class="text">{text}</span>

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
    margin-right: 1rem;
    margin-bottom: 0;
    padding: 6px 8px;
    outline: none;
    border: none;
    border-radius: 6px;
    color: #00000099;
    opacity: 80%;
    cursor: pointer;
    position: relative;

    span {
      &.text {
        font-size: 1rem;
        line-height: 1.3rem;
        font-weight: normal;
        display: block;
      }

      &.dot {
        bottom: -0.4em;
        left: 50%;
        transform: translateX(-50%);
        position: absolute;
        font-size: 2em;
        line-height: 1;
        font-weight: 400;
      }
    }

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
