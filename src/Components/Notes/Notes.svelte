<script lang="ts">
  // components
  import Card from "../Common/Card.svelte";
  // store
  import NotesListStore from "../../Stores/NotesList";

  import { onMount } from "svelte";
  import { asynchronify } from "../../Core/Utils/Utils";
  import { getNotes } from "../../Core/Services/NotesService";

  onMount(async () => {
    const [results, err] = await asynchronify(getNotes());

    console.log({ results, err });
  });
</script>

<section class="cards">
  {#each $NotesListStore as note (note.id)}
    <Card headerText={note.title} content={note.body} type={note.type} />
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
