import React from "react";
import FullResultImageChanged from "./FullResultImageChanged";
import FullResultImageDelete from "./FullResultImageDelete";
import FullResultImageNew from "./FullResultImageNew";
const ElementList = ({ elements, mainEnvironment }) => {
  return (
    <div className="element">
      {elements.map((element) => (
        <div className="element-preview" key={element.id}>
          <p>
            Mainelement: {element.mainElement} {element.compareElement}
            {element.elementStatus}
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
                      mainEnvironment={mainEnvironment}
                    ></FullResultImageNew>
                  );
                case "DELETED":
                  return (
                    <FullResultImageDelete
                      mainElement={element.mainElement}
                      compareElement={element.compareElement}
                      resultPicturePath={element.resultPicture}
                      mainEnvironment={mainEnvironment}
                    ></FullResultImageDelete>
                  );
                case "CHANGED":
                  return (
                    <FullResultImageChanged
                      mainElement={element.mainElement}
                      compareElement={element.compareElement}
                      resultPicturePath={element.resultPicture}
                      mainEnvironment={mainEnvironment}
                    ></FullResultImageChanged>
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
