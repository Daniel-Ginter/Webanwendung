import useFetch from "../useFetch";
import React from "react";

export const FullResultImageChanged = ({
  mainElement,
  compareElement,
  resultPicture,
  environment,
  mainEnvironment,
  domain,
  shows,
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
  const [show,sehtShow ]=React.useState(shows);

  return (
    <div className="pictures">
      <h1>{show}</h1>
      {show &&(() => {
          switch (stateElement) {
            case 1:
              return (
                <h5>Nachher</h5>
              );
              case 2:
                return (
                  <h5>Vergleich</h5>
                );
            default:
              return (
                <h5>Voher</h5>
              );
          }
        })()}
   
        {show &&(() => {
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
        {show &&(() => {
          switch (stateElement) {
            case 1:
              return (
                <img
                  className="FullPageImage"
                  onClick={() => setStateElement(2)}
                  alt="CompFullPage.img"
                  src={pathCompFullPage}
                />
              );
              case 2:
                return (
                  <img
                  className="FullPageImage"
                    onClick={() => setStateElement(3)}
                    alt="ResultFullPage.img"
                    src={pathResultFullPage}
                  />
                );
            default:
              return (
                <img
                className="FullPageImage"
                  onClick={() => setStateElement(1)}
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
