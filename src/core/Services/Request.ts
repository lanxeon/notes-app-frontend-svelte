import { asynchronify } from "./../Utils/Utils";
import axios from "axios";

const Instance = axios.create({ baseURL: "http://localhost:4747" });

export enum AjaxMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  PATCH = "PATCH",
}

const Request = async (path: string, method: AjaxMethod, body: any) => {
  try {
    const [result, error] = await asynchronify(
      Instance({ url: path, method, data: body })
    );

    if (error) {
      throw error;
    }

    return result.data;
  } catch (err) {
    throw err;
  }
};

export default Request;
