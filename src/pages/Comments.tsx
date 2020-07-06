import React, { useState, useEffect } from "react";

import { defer } from "rxjs";

// Routing
import { useLocation } from "react-router-dom";

import CommentsContainer from "../components/organisms/CommentsContainer";
import { NewsResponse } from "../interfaces";
import { BASE_SUB_URL } from "../config";

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
      fetch(`${BASE_SUB_URL}/${mainId}.json`).then((res) => res.json())
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
          subUrl={BASE_SUB_URL}
        />
      )}
    </>
  );
};

export default Comments;
