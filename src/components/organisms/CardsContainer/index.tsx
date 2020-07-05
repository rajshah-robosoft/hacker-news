import React from "react";

import NewsCard from "../../molecule/NewsCard";
import NavigationLink from "../../molecule/NavigationLink";

interface Props {
  newsArray: number[];
  subUrl: string;
  indexStart: number;
  nextPageQuery: string;
  isNextPage: boolean;
}

const CardsContainer = ({
  newsArray,
  nextPageQuery,
  subUrl,
  indexStart,
  isNextPage,
}: Props) => {
  let renderNews =
    Array.isArray(newsArray) &&
    newsArray.map((item, index) => (
      <NewsCard
        index={indexStart + (index + 1)}
        key={index}
        subUrl={`${subUrl}/${item}.json`}
      />
    ));

  return (
    <table className="cards-container-wrapper">
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
