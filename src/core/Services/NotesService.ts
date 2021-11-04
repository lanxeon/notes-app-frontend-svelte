import Request, { AjaxMethod } from "./Request";

export const getNotes = () => {
  return Request("/notes", AjaxMethod.GET, null);
};
