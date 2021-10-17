import { writable } from "svelte/store";
import type { Note } from "../Core/models/Note";

const initialData: Note[] = [
  {
    id: "1",
    title: "note 1",
    body: "Doing Well",
    type: "HOME",
    completed: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "2",
    title: "note 2",
    body: "Doing Very Well",
    completed: true,
    type: "PERSONAL",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "3",
    title: "note 3",
    body: "Hope You're Doing Well",
    type: "WORK",
    completed: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

const NotesListStore = writable<Note[]>(initialData);

export default NotesListStore;
