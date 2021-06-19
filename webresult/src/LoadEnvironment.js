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
    <div className="LoadEnv">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {environments && <ElementList elements={environments.list} domain={environments.domain} environment={environments.environment} mainEnvironment={environments.mainEnvironment}/>}
    </div>
  );
};

export default LoadEnvironment;
