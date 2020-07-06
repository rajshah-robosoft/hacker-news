import React from "react";

// pages
import News from "../pages/News";
import Comments from "../pages/Comments";
import Newest from "../pages/Newest";
import Ask from "../pages/Ask";
import Show from "../pages/Show";
import Jobs from "../pages/Jobs";

export interface ROUTE {
  path: string;
  exact: boolean;
  component: React.FunctionComponent;
}

const ROUTES: ROUTE[] = [
  {
    path: "/",
    exact: true,
    component: News,
  },
  {
    path: "/news",
    exact: true,
    component: News,
  },
  {
    path: "/item",
    exact: true,
    component: Comments,
  },
  {
    path: "/newest",
    exact: true,
    component: Newest,
  },
  {
    path: "/ask",
    exact: true,
    component: Ask,
  },
  {
    path: "/show",
    exact: true,
    component: Show,
  },
  {
    path: "/jobs",
    exact: true,
    component: Jobs,
  },
];

export default ROUTES;
