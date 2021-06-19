import useFetch from "../useFetch";
import React from "react";

export const FullResultImageChanged = ({
  mainElement,
  compareElement,
  resultPicture,
  environment,
  mainEnvironment,
  domain,
}) => {
  var linkPartComp = domain+"/"+environment+"/"
  var linkPartMain = domain+"/"+mainEnvironment+"/"
  var linkPartResult = domain+"/"+environment+"/Result/"+resultPicture
  const pathMain =
    "http://localhost:3000/images/"+linkPartMain+ mainElement + ".png";
  const pathComp =
    "http://localhost:3000/images/"+linkPartComp+ compareElement + ".png";
  const pathMainFullPage =
    "http://localhost:3000/images/"+linkPartMain+
    mainElement +
    "-fullpage" +
    ".png";
  const pathCompFullPage =
    "http://localhost:3000/images/"+linkPartComp+
    compareElement +
    "-fullpage" +
    ".png";
  const pathResult =
  "http://localhost:3000/images/"+linkPartResult + ".png";
  const pathResultFullPage =
  "http://localhost:3000/images/"+linkPartResult +"-fullpage" + ".png";

  const [stateElement, setStateElement] = React.useState(1);
  const [stateFullPage, setStatePage] = React.useState(1);

  return (
    <div className="pictures">
        {(() => {
          switch (stateElement) {
            case 1:
              return (
                <img
                className="ElementImage"
                  onClick={() => setStateElement(2)}
                  alt="CompElement.img"
                  src={pathComp}
                />
              );
              case 2:
                return (
                  <img
                  className="ElementImage"
                    onClick={() => setStateElement(3)}
                    alt="ResultElement.img"
                    src={pathResult}
                  />
                );
            default:
              return (
                <img
                className="ElementImage"
                  onClick={() => setStateElement(1)}
                  alt="MainElement.img"
                  src={pathMain}
                />
              );
          }
        })()}
        {(() => {
          switch (stateFullPage) {
            case 1:
              return (
                <img
                  className="FullPageImage"
                  onClick={() => setStatePage(2)}
                  alt="CompFullPage.img"
                  src={pathCompFullPage}
                />
              );
              case 2:
                return (
                  <img
                  className="FullPageImage"
                    onClick={() => setStatePage(3)}
                    alt="ResultFullPage.img"
                    src={pathResultFullPage}
                  />
                );
            default:
              return (
                <img
                className="FullPageImage"
                  onClick={() => setStatePage(1)}
                  alt="MainFullPage.img"
                  src={pathMainFullPage}
                />
              );
          }
        })()}
    </div>
  );
};

export default FullResultImageChanged;
