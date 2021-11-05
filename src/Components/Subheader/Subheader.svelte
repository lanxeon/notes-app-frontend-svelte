<script>
  const { default: SubheaderButton } = require("./SubheaderButton.svelte");
</script>

<div class="subheader">
  <div class="subheader__content">
    <div class="subheader__content__left">
      <SubheaderButton text="All" color="blue" active />
      <SubheaderButton text="Home" color="orange" active />
      <SubheaderButton text="Personal" color="purple" active />
      <SubheaderButton text="Work" color="green" active />
    </div>
    <div class="subheader__content__right">
      <button> + ADD NOTE </button>
    </div>
  </div>
</div>

<style lang="scss">
  .subheader {
    width: 100%;
    max-width: 840px;
    padding: 9px;
    margin: 0.5rem auto;

    &__content {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      &__left {
        flex-direction: row;
      }
    }
  }
</style>
