import axios from "axios";

const Instance = axios.create({ baseURL: "http://localhost:4747" });

export enum AjaxMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  PATCH = "PATCH",
}

const Request = (path: string, method: AjaxMethod, body: any) => {
  return Instance({ url: path, method, data: body });
};

export default Request;
