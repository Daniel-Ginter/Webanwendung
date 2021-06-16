import React from "react";
import FullResultImageChanged from "./FullResultImageChanged";
import FullResultImageDelete from "./FullResultImageDelete";
import FullResultImageNew from "./FullResultImageNew";
const ElementList = ({ elements}) => {
    return (
      <div className="element">
        {elements.map(element => (
          <div className="element-preview" key={element.id}>
          <p>Mainelement: {element.mainElement} {element.compareElement} {element.sameStructure} {element.samePicture} {element.elementStatus} {element.resultPicture}</p>
          <div>
          {(() => {
          switch (element.elementStatus) {
          case "NEW":   return <FullResultImageNew mainElement ={element.mainElement} compareElement={element.compareElement} resultPicturePath={element.resultPicture}></FullResultImageNew>;
          case "DELETED": return <FullResultImageDelete mainElement ={element.mainElement} compareElement={element.compareElement} resultPicturePath={element.resultPicture}></FullResultImageDelete>;
          case "CHANGED":  return <FullResultImageChanged mainElement ={element.mainElement} compareElement={element.compareElement} resultPicturePath={element.resultPicture}></FullResultImageChanged>;
          default:      return "Same";
        }
          })()}
          </div>
          </div>
        ))}
      </div>
    );
  };

  export default ElementList;