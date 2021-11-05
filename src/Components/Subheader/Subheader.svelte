<script>
  import SubheaderButton from "./SubheaderButton.svelte";
</script>

<div class="subheader">
  <div class="subheader__content">
    <div class="subheader__content__left">
      <SubheaderButton text="All" color="blue" active />
      <SubheaderButton text="Home" color="orange" showDot />
      <SubheaderButton text="Personal" color="purple" showDot />
      <SubheaderButton text="Work" color="green" showDot />
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

      &__right {
        button {
          background-color: #2196f3;
          color: #fff;
        }
      }
    }
  }
</style>
