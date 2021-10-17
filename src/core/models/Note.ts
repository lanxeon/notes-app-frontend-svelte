export interface Note {
  id: string;
  title: string;
  type: "HOME" | "WORK" | "PERSONAL" | "NONE";
  body: string;
  completed: boolean;
  created_at: string;
  updated_at: string;
}
