import React, { useEffect, useState } from "react";
import ElementList from "./ElementList";


const EnvironmentList = ({ environments }) => {

  return (
    <div className="environments">
      {environments.map((environment) => (
        <div className="environment" key={environment.environment}>
          <h2 >{environment.environment}</h2>
          <div className="environment-preview">
            <ElementList elements={environment.list} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default EnvironmentList;
