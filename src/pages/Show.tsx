import React, { useState, useEffect } from "react";

import { defer } from "rxjs";

// Routing
import { useLocation } from "react-router-dom";

import CardsContainer from "../components/organisms/CardsContainer";
import { spliceArray } from "../utils";
import { BASE_URL, BASE_SUB_URL } from "../config";

interface ParamTypes {
  search?: {
    p?: number;
  };
}

const Show = () => {
  const location = useLocation<ParamTypes>();
  const searchQuery = new URLSearchParams(location.search);

  const [pageLoader, setPageLoader] = useState<boolean>(true);
  const [newsIdArray, setNewsIdArray] = useState<number[]>([]);
  const [newsIdArrayComp, setNewsIdArrayComp] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [total, setTotal] = useState(0);

  let startSplice = (currentPage - 1) * 30;

  useEffect(() => {
    const subscription = defer(() =>
      fetch(`${BASE_URL}/showstories.json`).then((res) => res.json())
    ).subscribe((resp) => {
      setNewsIdArray(resp);
      setPageLoader(false);
      setTotal(Math.ceil(resp.length / 30));
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    setPageLoader(true);
    let query = Number(searchQuery.get("p")) ? Number(searchQuery.get("p")) : 1;
    let newArr = spliceArray(newsIdArray, (query - 1) * 30, query * 30);

    setCurrentPage(query);
    newArr.length > 0 && setNewsIdArrayComp(newArr);

    setPageLoader(false);
  }, [newsIdArray, searchQuery.get("p")]);

  return (
    <>
      {!pageLoader && (
        <CardsContainer
          subUrl={BASE_SUB_URL}
          newsArray={newsIdArrayComp}
          indexStart={startSplice}
          nextPageQuery={`/show?p=${currentPage ? currentPage + 1 : 2}`}
          isNextPage={currentPage < total}
          type="show"
        />
      )}
    </>
  );
};

export default Show;
