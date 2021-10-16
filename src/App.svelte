<script lang="ts">
  // components
  import Header from "./Components/Header/Header.svelte";
  import Notes from "./Components/Notes/Notes.svelte";
</script>

<Header
  authenticated={false}
  openLoginModal={() => {}}
  openSignupModal={() => {}}
/>
<main>
  <Notes />
</main>

<style lang="scss">
  main {
    text-align: center;
    padding: 1em;
    max-width: 960px;
    margin: 80px auto 0;
    overflow: auto;
    height: 100%;
  }

  @media (min-width: 640px) {
    main {
      width: 100%;
    }
  }
</style>
