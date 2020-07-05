import React from "react";

// Routing
import { useLocation } from "react-router-dom";

interface ParamTypes {
  search?: {
    id?: number;
  };
}

const Comments = () => {
  const location = useLocation<ParamTypes>();
  const mainId = Number(new URLSearchParams(location.search).get("id"));
  console.log(`mainId =====>`, mainId);

  return <div></div>;
};

export default Comments;
