<script lang="ts">
  import { onMount } from "svelte";
  import Card from "../Common/Card.svelte";
  import NotesListStore from "../../Stores/NotesList";
  import { asynchronify } from "../../Core/Utils/Utils";
  import { getNotes } from "../../Core/Services/NotesService";
  import type { Response } from "../../Core/models/Response";

  onMount(async () => {
    const [results, err] = await asynchronify<Response<any>>(getNotes());
    NotesListStore.set(results.data);
    console.log({ results, err });
  });

  const onToggleCheckbox = (idx: number) => {
    NotesListStore.update((curNotes) => {
      let newNotes = [...curNotes];
      newNotes[idx] = { ...newNotes[idx], completed: !newNotes[idx].completed };

      return newNotes;
    });
  };
</script>

<section class="cards">
  {#each $NotesListStore as note, idx (note.id)}
    <Card
      headerText={note.title}
      content={note.body}
      type={note.type}
      completed={note.completed}
      footerContent={new Date(note.updated_at).toLocaleDateString("en-Us", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      })}
      toggleCheckbox={() => {
        onToggleCheckbox(idx);
      }}
    />
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
