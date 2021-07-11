import React from "react";

export const FullResultImageChanged = ({
  mainElement,
  compareElement,
  resultPicture,
  environment,
  mainEnvironment,
  domain,
  shows,
  testName,
  testStep,
}) => {
  var linkPartComp = testName + "/" + testStep + "/" + environment + "/";
  var linkPartMain =  testName + "/" + testStep + "/"+ mainEnvironment + "/";
  var linkPartResult =  testName + "/" + testStep + "/" + environment + "/Result/" + resultPicture;
  const pathMain =
    "http://localhost:3000/images/" + linkPartMain + mainElement + ".png";
  const pathComp =
    "http://localhost:3000/images/" + linkPartComp + compareElement + ".png";
  const pathMainFullPage =
    "http://localhost:3000/images/" +
    linkPartMain +
    mainElement +
    "-fullpage" +
    ".png";
  const pathCompFullPage =
    "http://localhost:3000/images/" +
    linkPartComp +
    compareElement +
    "-fullpage" +
    ".png";
  const pathResult = "http://localhost:3000/images/" + linkPartResult + ".png";
  const pathResultFullPage =
    "http://localhost:3000/images/" + linkPartResult + "-fullpage" + ".png";

  const [stateElement, setStateElement] = React.useState(1);

  const [show, sehtShow] = React.useState(shows);

  return (
    <div className="pictures">
      <h1>{show}</h1>
      {(() => {
        switch (stateElement) {
          case 1:
            return <h3>Before changes</h3>;
          case 2:
            return <h3>Comparison</h3>;
          default:
            return <h3>After changes</h3>;
        }
      })()}

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
        <h2>FullPageResult:</h2>;
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
