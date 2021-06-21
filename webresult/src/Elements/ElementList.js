import React from "react";
import FullResultImageChanged from "./FullResultImageChanged";
import FullResultImageDelete from "./FullResultImageDelete";
import FullResultImageNew from "./FullResultImageNew";
import Score from "./Score";
const ElementList = ({ elements, environment, domain, mainEnvironment }) => {
  const [show, setShow] = React.useState(false);
  const [shows, setShows] = React.useState(false);
  function handleClick() {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  }
  function handleClicks() {
    if (shows) {
      setShows(false);
    } else {
      setShows(true);
    }
  }
  return (
    <div className="environment">
      <h2 onClick={handleClick}>{environment}</h2>
      {show &&
        elements.map((element) => (
          <div className="element-preview" key={element.id}>
            <h3 onClick={handleClicks}>
              Element{" "}
              <span className="blueHighlight"  >{element.compareElement}</span> is{" "}
              {element.elementStatus}{" "}
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
        ))}
    </div>
  );
};

export default ElementList;
