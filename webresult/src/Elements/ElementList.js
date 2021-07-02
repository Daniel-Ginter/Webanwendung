import React from "react";
import FullResultImageChanged from "./FullResultImageChanged";
import FullResultImageDelete from "./FullResultImageDelete";
import FullResultImageNew from "./FullResultImageNew";
import Score from "./Score";
const Inner = ({ element, environment, domain, mainEnvironment,testName,testStep }) => {
  const [shows, setShows] = React.useState(false);

  function handleClicks() {
    if (shows) {
      setShows(false);
    } else {
      setShows(true);
    }
  }

  return (
    <div  key={element.id}>
      {(() => {
        switch (shows) {
          case true:
            return (
              <div className="element-preview">
                <h3 className="hover" onClick={handleClicks}>
                  Element{" "}
                  <span className="blueHighlight tooltip">
                    {element.compareElement}
                    <p className="tooltiptext">
                      Hauptelement: {element.mainElement} {"\n"}
                      Vergleichselement: {element.compareElement} {"\n"}
                      {"\n"}
                      {"\n"}
                      {"\n"}
                    </p>
                  </span>{" "}
                  ist {element.elementStatus}{" "}
                </h3>
                <div>
                  {(() => {
                    switch (element.elementStatus) {
                      case "NEW":
                        return (
                          <FullResultImageNew
                            mainElement={element.mainElement}
                            compareElement={element.compareElement}
                            resultPicturePath={element.resultPicture}
                            environment={environment}
                            testName={testName}
                            testStep={testStep}
                          ></FullResultImageNew>
                        );
                      case "DELETED":
                        return (
                          <FullResultImageDelete
                            mainElement={element.mainElement}
                            compareElement={element.compareElement}
                            resultPicturePath={element.resultPicture}
                            mainEnvironment={mainEnvironment}
                            testName={testName}
                            testStep={testStep}
                          ></FullResultImageDelete>
                        );
                      case "CHANGED":
                        return (
                          <div>
                            <FullResultImageChanged
                              mainElement={element.mainElement}
                              compareElement={element.compareElement}
                              resultPicture={element.resultPicture}
                              environment={environment}
                              mainEnvironment={mainEnvironment}
                              domain={domain}
                              show={shows}
                              testName={testName}
                              testStep={testStep}
                            ></FullResultImageChanged>
                            <h3 >Scores</h3>
                            <Score scores={element.score}></Score>
                          </div>
                        );
                      default:
                        return "Same";
                    }
                  })()}
                </div>
              </div>
            );
          case false:
            return (
              <div className="element-preview-closed">
                <h3 className="hover"onClick={handleClicks}>
                  Element{" "}
                  <span className="blueHighlight tooltip">
                    {element.compareElement}
                    <p className="tooltiptext">
                      Hauptelement: {element.mainElement} {"\n"}
                      Vergleichselement: {element.compareElement} {"\n"}
                      {"\n"}
                      {"\n"}
                      {"\n"}
                    </p>
                  </span>{" "}
                  ist {element.elementStatus}{" "}
                </h3>
              </div>
            );
        }
      })()}
    </div>
  );
};
const ElementList = ({ elements, environment, domain, mainEnvironment,testName,testStep }) => {
  const [show, setShow] = React.useState(false);
  function handleClick() {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  }
  return (
    <div className="environment">
      <h2 className="hover" onClick={handleClick}>{environment}</h2>
      {show&&elements.map((element) => (
        <Inner
          element={element}
          environment={environment}
          domain={domain}
          mainEnvironment={mainEnvironment}
          testName={testName}
          testStep={testStep}
        />
      ))}
    </div>
  );
};

export default ElementList;
