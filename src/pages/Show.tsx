import React, { useState, useEffect } from "react";

// Routing
import { useLocation } from "react-router-dom";

import CardsContainer from "../components/organisms/CardsContainer";
import { spliceArray, getPageFromQueryParam } from "../utils";
import { BASE_SUB_URL } from "../config";
import { showGetApi } from "../services";

interface ParamTypes {
  search?: {
    p?: number;
  };
}

const Show = () => {
  const location = useLocation<ParamTypes>();

  const [pageLoader, setPageLoader] = useState<boolean>(true);
  const [idArray, setIdArray] = useState<number[]>([]);
  const [idArrayComp, setIdArrayComp] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [total, setTotal] = useState(0);

  let startSplice = (currentPage - 1) * 30;

  useEffect(() => {
    const subscription = showGetApi().subscribe((resp) => {
      setIdArray(resp);
      setPageLoader(false);
      setTotal(Math.ceil(resp.length / 30));
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    setPageLoader(true);
    let query = getPageFromQueryParam(location.search, "p");
    let newArr = spliceArray(idArray, (query - 1) * 30, query * 30);

    setCurrentPage(query);
    newArr.length > 0 && setIdArrayComp(newArr);

    setPageLoader(false);
  }, [idArray, location.search]);

  return (
    <>
      {!pageLoader && (
        <CardsContainer
          subUrl={BASE_SUB_URL}
          newsArray={idArrayComp}
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
