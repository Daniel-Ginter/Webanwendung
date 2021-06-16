import { useEffect, useState } from "react";
import useFetch from "./useFetch";
   const {
    error,
    isPending,
    data: environments,
  } = useFetch("http://localhost:3000/db.json");

  return (
    <div className=">WebsiteList">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
    </div>
  );
};

export default Home;
