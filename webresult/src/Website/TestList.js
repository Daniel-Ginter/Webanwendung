import DBList from "./DBList";
import React from "react";
const Inner = ({ element,testName }) => {

  const [show, setShow] = React.useState(false);

  function handleClick() {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  }

  return (
    <div>
      <h2 onClick={handleClick}>Step: {element.name}</h2>
      {show && (
        <DBList
          dbList={element.children}
          testName={testName}
          stepName={element.name}
        />
      )}
    </div>
  );
};

const TestList = ({ steps, testName }) => {

  console.log(steps);
  console.log("teestName " + testName);

  return (
    <div>
      {steps.map((element) => (
        <Inner element={element} testName={testName}  />
      ))}
    </div>
  );
};
export default TestList;
