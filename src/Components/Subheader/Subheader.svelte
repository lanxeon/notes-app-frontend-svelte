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
      <button>
        <img src="/assets/add.svg" alt="add-icon" />
        <span>ADD NOTE</span>
      </button>
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
          font-size: 0.875rem;
          line-height: 19px;
          word-spacing: 1.25px;
          width: 130px;
          color: #fff;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-evenly;
          margin: 0;
          outline: none;
          border: none;
          border-radius: 4px;
          padding: 0.5rem 1rem;
          cursor: pointer;
          box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
            0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);

          img {
            width: 1em;
            height: 1em;
            margin-right: 0.85em;
          }
        }
      }
    }
  }
</style>
