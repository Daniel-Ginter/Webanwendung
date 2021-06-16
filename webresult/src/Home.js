import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import EnvironmentList from "./EnvironmentList";
const Home = () => {
  const {
    error,
    isPending,
    data: environments,
  } = useFetch("http://localhost:3000/db.json");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}

      {environments && <EnvironmentList environments={environments} />}
    </div>
  );
};

export default Home;
