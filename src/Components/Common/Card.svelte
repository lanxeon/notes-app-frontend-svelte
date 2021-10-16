<script lang="ts">
  export let headerText: string = "HEADER";
  export let content: string = "";
</script>

<div class="card-wrapper">
  <div class="card-wrapper__card">
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
      border: 1px solid #ccc;
      box-shadow: 0px 3px 6px #00000029;

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
