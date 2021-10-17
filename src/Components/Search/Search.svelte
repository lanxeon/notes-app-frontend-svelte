<script lang="ts">
  let searchQuery: string = "";
</script>

<div class="search-wrapper">
  <div class="search-wrapper__search">
    <div class="search-wrapper__search__search-icon-container">
      <img src="assets/search_icon_black.svg" alt="search-icon" />
    </div>
    <input
      type="search"
      placeholder="Search Notes..."
      bind:value={searchQuery}
    />
  </div>
</div>

<style lang="scss">
  .search-wrapper {
    padding: 12px;
    width: 100%;
    max-width: 854px;
    margin: 0 auto;

    &__search {
      height: 46px;
      width: 100%;
      box-shadow: 0 3px 6px #00000029;
      padding: 12px 18px;
      display: flex;
      flex-direction: row;
      align-items: center;
      background-color: #fff;

      &__search-icon-container {
        width: 24px;
        height: 24px;
        position: relative;
        opacity: 50%;

        img {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
      }

      input {
        border: none;
        outline: none;
        margin: 0;
        width: 100%;
        color: #00000099;
        opacity: 60%;
        font-size: 1.125em;
      }

      input[type="search"]::-webkit-search-decoration,
      input[type="search"]::-webkit-search-cancel-button,
      input[type="search"]::-webkit-search-results-button,
      input[type="search"]::-webkit-search-results-decoration {
        -webkit-appearance: none;
      }
    }
  }
</style>
