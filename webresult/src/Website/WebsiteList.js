import { useEffect, useState } from "react";
import useFetch from "../useFetch";
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
      {dbs && dbs.map((db) =>{ return<div>{db}</div> })}
    </div>
  );
};

export default WebsiteList;
