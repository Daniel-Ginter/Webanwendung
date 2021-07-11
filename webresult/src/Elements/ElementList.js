import React from "react";
import FullResultImageChanged from "./FullResultImageChanged";
import FullResultImageDelete from "./FullResultImageDelete";
import FullResultImageNew from "./FullResultImageNew";
import { FullResultImageSame } from "./FullResultImageSame";
import Score from "./Score";
const Inner = ({
  element,
  environment,
  domain,
  mainEnvironment,
  testName,
  testStep,
  date,
}) => {
  const [shows, setShows] = React.useState(false);

  function handleClicks() {
    if (shows) {
      setShows(false);
    } else {
      setShows(true);
    }
  }

  return (
    <div key={element.id}>
      {(() => {
        switch (shows) {
          case true:
            return (
              <div className="element-preview">
                <h3 className="hover" onClick={handleClicks}>
                  Element:{" "}
                  <span className="blueHighlight tooltip">
                    {element.compareElement}
                    <p className="tooltiptext">
                      <p>Mainelement: {"\n"} {element.mainElement}</p>
                      <p>Compareelement: {"\n"} {element.compareElement} </p>
                      <p>Selector: {"\n"} {element.selector}</p>
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
                            mainEnvironment={mainEnvironment}
                            testName={testName}
                            selector={element.selector}
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
                            environment={environment}
                            testName={testName}
                            selector={element.selector}
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
                            <h3>Scores</h3>
                            <Score
                              scores={element.score}
                              scorePriority={element.scorePriority}
                            ></Score>
                          </div>
                        );
                      case "MAYBE":
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
                            <h3>Scores</h3>
                            <Score
                              scores={element.score}
                              scorePriority={element.scorePriority}
                            ></Score>
                          </div>
                        );
                      default:
                        return (
                          <div>
                            <FullResultImageSame
                              mainElement={element.mainElement}
                              compareElement={element.compareElement}
                              resultPicturePath={element.resultPicture}
                              environment={environment}
                              testName={testName}
                              testStep={testStep}
                            ></FullResultImageSame>
                            <h3>Scores</h3>
                            <Score
                              scores={element.score}
                              scorePriority={element.scorePriority}
                            ></Score>
                          </div>
                        );
                    }
                  })()}
                </div>
              </div>
            );
          case false:
            return (
              <div className="element-preview-closed">
                <h3 className="hover" onClick={handleClicks}>
                  Element:{" "}
                  <span className="blueHighlight tooltip">
                    {element.compareElement}
                    <p className="tooltiptext">
                      <p>Mainelement: {"\n"} {element.mainElement}</p>
                      <p>Compareelement: {"\n"} {element.compareElement} </p>
                      <p>Selector: {"\n"} {element.selector}</p>
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
const ElementList = ({
  elements,
  environment,
  domain,
  mainEnvironment,
  testName,
  testStep,
  date
}) => {
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
      <h2 className="hover" onClick={handleClick}>
        Environment:{" "}
        <span className="blueHighlight tooltip">
          {environment}{" "}
          <p className="tooltiptext">
          <p> Mainenvironment: {"\n"} {mainEnvironment} </p>
          <p>  Compareenvironment: {"\n"} {environment}</p>
          <p> Date: {"\n"} {date}</p>
          </p>
        </span>
      </h2>
      {show &&
        elements.map((element) => (
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
