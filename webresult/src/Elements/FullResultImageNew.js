import useFetch from "../useFetch";

export const FullResultImageNew = ({
  mainElement,
  compareElement,
  mainEnvironment,
  environment,
  testName,
  selector,
  testStep,
}) => {
  var linkPart = testName + "/" + testStep + "/" + environment + "/";
  const pathMain =
    "http://localhost:3000/images/" + linkPart + compareElement + ".png";
  const pathMainFullPage =
    "http://localhost:3000/images/" +
    linkPart +
    compareElement +
    "-fullpage" +
    ".png";
  return (
    <div className="pictures">
      <h3>After changes</h3>
      <p>
        No Element with the same{" "}
        <span className="blueHighlight tooltip">
          Selector
          <p className="tooltiptext">{selector}</p>
        </span>{" "}
        has been found in Environment: {mainEnvironment}
      </p>
      <img className="ElementImage" alt="CompElement.img" src={pathMain} />
      <img
        className="FullPageImage"
        alt="CompFullPage.img"
        src={pathMainFullPage}
      />
    </div>
  );
};

export default FullResultImageNew;
