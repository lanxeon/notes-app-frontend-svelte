<script lang="ts">
  // components
  import Card from "../Common/Card.svelte";
  // store
  import NotesListStore from "../../Stores/NotesList";
</script>

<section class="cards">
  {#each $NotesListStore as note (note.id)}
    <Card headerText={note.title} content={note.body} />
  {/each}
</section>

<style lang="scss">
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
</style>
