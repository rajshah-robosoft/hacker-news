import React, { useState, useEffect } from "react";

import { defer } from "rxjs";

// Routing
import { useLocation } from "react-router-dom";

import CommentsContainer from "../components/organisms/CommentsContainer";
import { NewsResponse } from "../interfaces";

interface ParamTypes {
  search?: {
    id?: number;
  };
}

const Comments = () => {
  const location = useLocation<ParamTypes>();
  const mainId = Number(new URLSearchParams(location.search).get("id"));

  const [pageLoader, setPageLoader] = useState<boolean>(true);
  const [commentsIdObj, setCommentsIdArray] = useState<NewsResponse>();

  useEffect(() => {
    const subscription = defer(() =>
      fetch(
        `https://hacker-news.firebaseio.com/v0/item/${mainId}.json`
      ).then((res) => res.json())
    ).subscribe((resp) => {
      setCommentsIdArray(resp);
      setPageLoader(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <>
      {!pageLoader && commentsIdObj && (
        <CommentsContainer
          commentsIdObj={commentsIdObj}
          subUrl="https://hacker-news.firebaseio.com/v0/item"
        />
      )}
    </>
  );
};

export default Comments;
