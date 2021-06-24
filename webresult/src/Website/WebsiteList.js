import React,{ useEffect, useState } from "react";
import useFetch from "../useFetch";
import TestList from "./TestList";

const Inner = ({element}) => {
  const [show, setShow] = React.useState(false);

  function handleClick() {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  }

  return (
    <div className="Test">
        <h1 onClick={handleClick}>Test: {element.name}</h1>
           {show && <TestList steps={element.children} testName={element.name}></TestList>}
   </div>
  )
}

const WebsiteList = () => {
  const {
    error,
    isPending,
    data: paths,
  } = useFetch("http://localhost:3000/dbs");
  let result = [];
  if (paths) {
    let level = { result };
    paths.forEach((path) => {
      var shortPath = path.slice(13);
      shortPath.split("/").reduce((r, name, i, a) => {
        if (!r[name]) {
          r[name] = { result: [] };
          if(a==3){
            r.result.push({ name, children: r[name].result,path: shortPath });
          }
          r.result.push({ name, children: r[name].result });
        }

        return r[name];
      }, level);
    });
    console.log(result);
  }

  return (
    <div className=">WebsiteList">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {paths &&
        result.map((element) => (
          <Inner element={element}/>
        ))}
    </div>
  );
};

export default WebsiteList;
