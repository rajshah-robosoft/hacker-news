import React from "react";

// pages
import News from "../pages/News";
import Comments from "../pages/Comments";

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
];

export default ROUTES;
