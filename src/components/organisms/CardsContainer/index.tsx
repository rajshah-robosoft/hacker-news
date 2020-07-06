import React from "react";

import NavigationLink from "../../molecule/NavigationLink";

import {
  NewsCardClass,
  NewestCardClass,
  AskCardClass,
  ShowCardClass,
  JobsCardClass,
} from "./classes";

interface Props {
  newsArray: number[];
  subUrl: string;
  indexStart: number;
  nextPageQuery: string;
  isNextPage: boolean;
  type?: "news" | "newest" | "ask" | "show" | "jobs";
}

const CardsContainer = ({
  newsArray,
  nextPageQuery,
  subUrl,
  indexStart,
  isNextPage,
  type = "news",
}: Props) => {
  let renderNews =
    Array.isArray(newsArray) &&
    newsArray.map((item, index) => {
      switch (type) {
        case "news":
          return new NewsCardClass(
            indexStart + (index + 1),
            index,
            `${subUrl}/${item}.json`
          ).renderCard();

        case "newest":
          return new NewestCardClass(
            indexStart + (index + 1),
            index,
            `${subUrl}/${item}.json`
          ).renderCard();

        case "ask":
          return new AskCardClass(
            indexStart + (index + 1),
            index,
            `${subUrl}/${item}.json`
          ).renderCard();

        case "show":
          return new ShowCardClass(
            indexStart + (index + 1),
            index,
            `${subUrl}/${item}.json`
          ).renderCard();

        case "jobs":
          return new JobsCardClass(
            indexStart + (index + 1),
            index,
            `${subUrl}/${item}.json`
          ).renderCard();

        default:
          break;
      }
    });

  return (
    <table>
      <tbody>
        <tr style={{ height: 10 }} />
        {renderNews}
        {isNextPage && (
          <tr>
            <td align="right">
              <NavigationLink
                fontColor="gray"
                element="div"
                link={nextPageQuery}
                label="More"
              />
            </td>
          </tr>
        )}
        <tr style={{ height: 10 }} />
      </tbody>
    </table>
  );
};

export default CardsContainer;
