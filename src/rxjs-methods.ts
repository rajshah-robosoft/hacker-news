import { defer } from "rxjs";
import { makeGetRequest } from "./utils";

export const makeDeferGetApiCall = (url: string) =>
  defer(() => makeGetRequest(url));
