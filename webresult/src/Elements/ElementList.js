import React from "react";
import FullResultImageChanged from "./FullResultImageChanged";
import FullResultImageDelete from "./FullResultImageDelete";
import FullResultImageNew from "./FullResultImageNew";
import Score from "./Score";
const ElementList = ({ elements,environment,domain,mainEnvironment }) => {
  return (
    <div>
      <h1>{environment}</h1>
      {elements.map((element) => (
        <div className="element-preview" key={element.id}>
          <h2>Element <span className="blueHighlight">{element.compareElement}</span> is {element.elementStatus} </h2>
          <p>
            Mainelement: {element.mainElement} {element.compareElement}
            
          </p> 
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
                    ></FullResultImageChanged>
                    <h4>Scores</h4>
                    <Score
                      scores={element.score}
                      >
                    </Score>
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
