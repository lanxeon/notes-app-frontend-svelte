<script lang="ts">
  export let headerText: string = "HEADER";
  export let content: string = "";
  export let type: "HOME" | "WORK" | "PERSONAL" | "NONE" = "NONE";

  $: colorClass =
    type === "HOME"
      ? "orange"
      : type === "WORK"
      ? "purple"
      : type === "PERSONAL"
      ? "green"
      : "";
</script>

<div class="card-wrapper">
  <div class={`card-wrapper__card ${colorClass}`}>
    <div class="card-wrapper__card__header">
      <h3>{headerText}</h3>
    </div>
    <div class="card-wrapper__card__content">
      <p>{content}</p>
    </div>
  </div>
</div>

<style lang="scss">
  .card-wrapper {
    padding: 12px 8px;
    flex-grow: 0;
    max-width: 50%;
    flex-basis: 50%;

    @media screen and (max-width: 600px) {
      max-width: 100%;
      flex-basis: 100%;
    }

    &__card {
      width: 100%;
      height: 174px;
      // border: 1px solid #ccc;
      border: none;
      box-shadow: 0px 3px 6px #00000029;
      background-color: #00000029;
      color: #fff;

      &.green {
        background-color: #66bb6a;
      }
      &.orange {
        background-color: #ff9100;
      }
      &.purple {
        background-color: #5c6bc0;
      }

      &__header {
        display: flex;
        flex-direction: row;
        justify-content: center;

        h3 {
          margin: none;
        }
      }
    }
  }
</style>
