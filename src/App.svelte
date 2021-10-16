<script lang="ts">
  import Card from "./Card.svelte";
  import Header from "./Header/Header.svelte";
</script>

<Header
  authenticated={false}
  openLoginModal={() => console.log("LOGIN")}
  openSignupModal={() => {
    console.log("SIGNUP");
  }}
/>
<main>
  <section class="cards">
    <Card headerText="Hello" content="Hello, how are you doing?" />
    <Card
      headerText="Hi"
      content="Hi, I hope you're enjoying your time there"
    />
    <Card headerText="Bro" content="I have had a lovely time here so far" />
  </section>
</main>

<style lang="scss">
  main {
    text-align: center;
    padding: 1em;
    max-width: 960px;
    margin: 80px auto 0;
    overflow: auto;
    height: 100%;

    .cards {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: flex-start;
      margin: 0 auto;
      max-width: 840px;

      @media screen and (max-width: 856px) {
        width: 100%;
      }
    }
  }

  @media (min-width: 640px) {
    main {
      width: 100%;
    }
  }
</style>
