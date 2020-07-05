import * as React from "react";

import { storiesOf } from "@storybook/react";

import StoryRouter from "storybook-react-router";

import "../../index.scss";

import Header from "./Header";
import CardsContainer from "./CardsContainer";

storiesOf("Organisms", module)
  .addDecorator(StoryRouter())
  .add("Header", () => <Header />)
  .add("CardsContainer", () => (
    <CardsContainer
      subUrl="https://hacker-news.firebaseio.com/v0/item"
      newsArray={[23734093, 23737266, 23730629]}
      indexStart={0}
      nextPageQuery="/news"
      isNextPage={false}
    />
  ));
