import React from "react";
import FullResultImageChanged from "./FullResultImageChanged";
import FullResultImageDelete from "./FullResultImageDelete";
import FullResultImageNew from "./FullResultImageNew";
import Score from "./Score";
const Inner = ({ element, environment, domain, mainEnvironment }) => {
  const [shows, setShows] = React.useState(false);

  function handleClicks() {
    if (shows) {
      setShows(false);
    } else {
      setShows(true);
    }
  }

  return (
    <div className="element-preview" key={element.id}>
      {(() => {
        switch (shows) {
          case true:
            return (
              <div>
                <h3 onClick={handleClicks}>
                  Element{" "}
                  <span className="blueHighlight tooltip">
                    {element.compareElement}
                    <p className="tooltiptext">
                      Hauptelement: {element.mainElement} {"\n"}
                      Vergleichselement: {element.compareElement} {"\n"}
                      {"\n"}
                      {"\n"}
                      {"\n"}
                      hi
                    </p>
                  </span>{" "}
                  is {element.elementStatus}{" "}
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
                          ></FullResultImageNew>
                        );
                      case "DELETED":
                        return (
                          <FullResultImageDelete
                            mainElement={element.mainElement}
                            compareElement={element.compareElement}
                            resultPicturePath={element.resultPicture}
                            environment={environment}
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
                            ></FullResultImageChanged>
                            <h4>Scores</h4>
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
              <div>
                <h3 onClick={handleClicks}>
                  Element{" "}
                  <span className="blueHighlight tooltip">
                    {element.compareElement}
                    <p className="tooltiptext">
                      Hauptelement: {element.mainElement} {"\n"}
                      Vergleichselement: {element.compareElement} {"\n"}
                      {"\n"}
                      {"\n"}
                      {"\n"}
                      hi
                    </p>
                  </span>{" "}
                  is {element.elementStatus}{" "}
                </h3>
              </div>
            );
        }
      })()}
    </div>
  );
};
const ElementList = ({ elements, environment, domain, mainEnvironment }) => {
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
      <h2 onClick={handleClick}>{environment}</h2>
      {elements.map((element) => (
        <Inner
          element={element}
          environment={environment}
          domain={domain}
          mainEnvironment={mainEnvironment}
        />
      ))}
    </div>
  );
};

export default ElementList;
