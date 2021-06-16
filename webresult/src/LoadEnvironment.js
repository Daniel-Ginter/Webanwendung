import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import ElementList from "./Elements/ElementList";
const LoadEnvironment = () => {
  const {
    error,
    isPending,
    data: environments,
  } = useFetch("http://localhost:3000/sites/ls5vs013.cs.tu-dortmund.de/home/Chrome_test2-db.json");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {environments && <h2>{environments.environment}</h2>}
      {environments && <ElementList elements={environments.list} />}
    </div>
  );
};

export default LoadEnvironment;
