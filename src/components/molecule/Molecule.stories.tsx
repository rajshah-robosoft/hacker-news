import * as React from "react";

import { storiesOf } from "@storybook/react";

import Logo from "./Logo";
import NewsCard from "./Cards/NewsCard";
import NavigationLink from "./NavigationLink";
import CommentCards from "./Cards/CommentCards";

import StoryRouter from "storybook-react-router";

import "../../index.scss";
import { BASE_SUB_URL } from "../../config";

storiesOf("Molecule", module)
  .addDecorator(StoryRouter())
  .add("Logo", () => <Logo />)
  .add("NavigationLink", () => <NavigationLink link="/ab" label="Link" />)
  .add("NewsCard", () => (
    <NewsCard index={1} subUrl={`${BASE_SUB_URL}/23734093.json`} />
  ))
  .add("CommentCards", () => (
    <CommentCards subUrl={BASE_SUB_URL} id={23734885} />
  ));
