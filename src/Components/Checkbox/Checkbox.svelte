<script lang="ts">
  const emptyCheckbox = "/assets/empty-checkbox.svg";
  const filledCheckbox = "/assets/fill-checkbox.svg";

  export let checked: boolean = false;
  export let onChange: () => void;
</script>

<div class="checkbox__container">
  <img
    src={checked ? filledCheckbox : emptyCheckbox}
    alt="checkbox"
    on:click={onChange}
  />
</div>

<style lang="scss">
  .checkbox__container {
    width: 18px;
    height: 18px;
    position: relative;
    cursor: pointer;

    img {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }
  }
</style>
