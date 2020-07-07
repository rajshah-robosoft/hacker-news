import React, { useState, useEffect } from "react";

// Routing
import { useLocation } from "react-router-dom";

import CommentsContainer from "../components/organisms/CommentsContainer";
import { NewsResponse } from "../interfaces";
import { BASE_SUB_URL } from "../config";
import { makeDeferGetApiCall } from "../rxjs-methods";

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
    const subscription = makeDeferGetApiCall(
      `${BASE_SUB_URL}/${mainId}.json`
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
