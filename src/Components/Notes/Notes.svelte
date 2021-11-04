<script lang="ts">
  import { onMount } from "svelte";
  import Card from "../Common/Card.svelte";
  import NotesListStore from "../../Stores/NotesList";
  import { asynchronify } from "../../Core/Utils/Utils";
  import { getNotes } from "../../Core/Services/NotesService";
  import type { Response } from "../../Core/models/Response";

  onMount(async () => {
    const [results, err] = await asynchronify<Response<any>>(getNotes());

    console.log({ results, err });
    NotesListStore.set(results.data);
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
