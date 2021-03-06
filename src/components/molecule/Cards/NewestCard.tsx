import React, { useState, useEffect } from "react";

import classes from "./card.module.scss";

import { getDomainName, miliSecToTime } from "../../../utils";

import Text from "../../atoms/Text";
import { NewsResponse } from "../../../interfaces";
import { makeDeferGetApiCall } from "../../../rxjs-methods";

interface Props {
  subUrl: string;
  index?: string | number | undefined;
}

const NewestCard = ({ subUrl, index }: Props) => {
  const [news, setNews] = useState<NewsResponse>();
  const [cardLoader, setCardLoader] = useState<boolean>(true);

  useEffect(() => {
    const subscription = makeDeferGetApiCall(subUrl).subscribe(
      (resp: NewsResponse) => {
        setNews(resp);
        setCardLoader(false);
      }
    );

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
          {index && <Text label={`${index}.`} fontColor="gray" />}
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
          {news.url && (
            <Text
              fontColor="gray"
              fontSize="sm"
              element="span"
              label={` (${getDomainName(news.url)})`}
            />
          )}
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
            label={` ${miliSecToTime(news.time || 0)}`}
          />
          <Text
            element="span"
            fontSize="xs"
            fontColor="gray"
            label={` | hide | past | discuss`}
          />
        </td>
      </tr>
      <tr style={{ height: 5 }}></tr>
    </>
  ) : (
    <></>
  );
};

export default NewestCard;
