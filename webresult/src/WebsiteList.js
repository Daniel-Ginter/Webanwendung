import { useEffect, useState } from "react";
import useFetch from "./useFetch";
const WebsiteList = () => {
   const {
    error,
    isPending,
    data: dbs,
  } = useFetch("http://localhost:3000/db");

  return (
    <div className=">WebsiteList">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
    </div>
  );
};

export default WebsiteList;
