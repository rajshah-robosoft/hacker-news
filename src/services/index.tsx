import { makeDeferGetApiCall } from "../rxjs-methods";
import { API } from "../config";

export const newsGetApi = () => makeDeferGetApiCall(API.news);
export const newestGetApi = () => makeDeferGetApiCall(API.newest);
export const askGetApi = () => makeDeferGetApiCall(API.ask);
export const showGetApi = () => makeDeferGetApiCall(API.show);
export const jobsGetApi = () => makeDeferGetApiCall(API.jobs);
