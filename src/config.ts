export const BASE_URL = process.env.REACT_APP_BASE_URL;
export const BASE_SUB_URL = `${BASE_URL}/item`;

export const API = {
  ask: `${BASE_URL}/askstories.json`,
  jobs: `${BASE_URL}/jobstories.json`,
  newest: `${BASE_URL}/newstories.json`,
  news: `${BASE_URL}/topstories.json`,
  show: `${BASE_URL}/showstories.json`,
};
