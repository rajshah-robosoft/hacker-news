import React, { useState, useEffect } from "react";

import { defer } from "rxjs";

import classes from "./news-card.module.scss";

import { getDomainName } from "../../../utils";

import Text from "../../atoms/Text";
import NavigationLink from "../NavigationLink";

interface Props {
  subUrl: string;
  index?: string | number;
}

interface Response {
  title: string;
  url: string;
  score: number;
  by: string;
  kids: number[];
  time: number;
  id: number;
}

const NewsCard = ({ subUrl, index }: Props) => {
  const [news, setNews] = useState<Response>();
  const [cardLoader, setCardLoader] = useState<boolean>(true);

  useEffect(() => {
    const subscription = defer(() =>
      fetch(subUrl).then((res) => res.json())
    ).subscribe((resp: Response) => {
      setNews(resp);
      setCardLoader(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [subUrl]);

  if (cardLoader) {
    return <></>;
  }

  return news ? (
    <>
      <tr>
        <td align="right">
          <Text label={`${index}.`} fontColor="gray" />
        </td>
        <td>
          <a
            rel="noopener noreferrer"
            className={classes.storylink}
            target="_blank"
            href={news.url || ""}
          >
            <Text element="text" label={news.title} />
          </a>
          <Text
            fontColor="gray"
            fontSize="sm"
            element="span"
            label={` (${getDomainName(news.url || "")})`}
          />
        </td>
      </tr>
      <tr>
        <td></td>
        <td>
          <Text
            element="span"
            fontSize="xs"
            fontColor="gray"
            label={`${news.score} Points by ${news.by}`}
          />
          <Text
            element="span"
            fontSize="xs"
            fontColor="gray"
            label={` 2 hours ago`}
          />
          <Text
            element="span"
            fontSize="xs"
            fontColor="gray"
            label={` | hide | `}
          />
          <NavigationLink
            element="span"
            fontSize="xs"
            fontColor="gray"
            link={`/item?id=${news.id}`}
            label={`${news.kids ? news.kids.length : 0} comments`}
          />
        </td>
      </tr>
      <tr style={{ height: 5 }}></tr>
    </>
  ) : (
    <></>
  );
};

export default NewsCard;
