import useFetch from "./useFetch";
import React from "react";

export const FullResultImageChanged = ({
  mainElement,
  compareElement,
  resultPicturePath,
}) => {
  const pathMain =
    "http://localhost:3000/images/Chrome_test/" + mainElement + ".png";
  const pathComp =
    "http://localhost:3000/images/Chrome_test/" + compareElement + ".png";
  const pathMainFullPage =
    "http://localhost:3000/images/Chrome_test/" + mainElement +"-fullpage"+ ".png";
  const pathCompFullPage =
    "http://localhost:3000/images/Chrome_test/" + compareElement + "-fullpage"+".png";
  const [stateElement, setStateElement] = React.useState(1);
  const [stateFullPage, setStatePage] = React.useState(1);

  return (
    <div>
      <div className="Element">
        {(() => {
          switch (stateElement) {
            case 1:
              return <img onClick={() => setStateElement(2)} alt="CompElement.img" src={pathComp} />;
            default:
              return <img onClick={() => setStateElement(1)} alt="MainElement.img" src={pathMain} />;
          }
        })()}
      </div>
      <div className="FullPage">
        {(() => {
          switch (stateFullPage) {
            case 1:
              return <img onClick={() => setStatePage(2)} alt="CompFullPage.img" src={pathCompFullPage} />;
            default:
              return <img onClick={() => setStatePage(1)} alt="MainFullPage.img" src={pathMainFullPage} />;
          }
        })()}
      </div>
    </div>
  );
};

export default FullResultImageChanged;
