<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import type { Unsubscriber } from "svelte/store";

  import NotesListStore from "../../Stores/NotesList";

  let totalNotes: number = 0;
  let completedNotes: number = 0;
  let subscription: Unsubscriber;

  $: completionPercentage =
    completedNotes === 0 ? 0 : (completedNotes / totalNotes) * 100;

  onMount(() => {
    subscription = NotesListStore.subscribe((notes) => {
      totalNotes = notes.length;
      completedNotes = notes.filter((n) => n.completed).length;
    });
  });

  onDestroy(() => {
    subscription();
  });
</script>

<div class="progression">
  <p>
    You have {completedNotes}/{totalNotes} completed
  </p>
  <div class="progression__progress-bar">
    <div
      class="progression__progress-bar__progress"
      style="width: {completionPercentage}%"
    />
  </div>
</div>

<style lang="scss">
  .progression {
    width: 100%;
    max-width: 840px;
    padding: 9px;
    margin: 0.5rem auto;

    p {
      margin: 0.5rem 0;
      text-align: left;
      font-size: 1.125rem;
      line-height: 1.33rem;
      font-weight: 500;
    }

    &__progress-bar {
      width: 100%;
      height: 4px;
      background-color: #2196f340;

      &__progress {
        background-color: #2196f3;
        height: 100%;
      }
    }
  }
</style>
