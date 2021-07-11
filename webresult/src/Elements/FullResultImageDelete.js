import useFetch from "../useFetch";

export const FullResultImageDelete = ({
  mainElement,
  compareElement,
  resultPicturePath,
  mainEnvironment,
  environment,
  testName,
  selector,
  testStep,
}) => {
  var linkPart = testName + "/" + testStep + "/" + mainEnvironment + "/";
  const pathMain =
    "http://localhost:3000/images/" + linkPart + compareElement + ".png";
  const pathMainFullPage =
    "http://localhost:3000/images/" +
    linkPart +
    compareElement +
    "-fullpage" +
    ".png";
  console.log("Deleted Link: {}", pathMain);
  return (
    <div className="pictures">
      <h3>Before changes</h3>
      <p>
        No Element with the same{" "}
        <span className="blueHighlight tooltip">
          Selector
          <p className="tooltiptext">{selector}</p>
        </span>{" "}
        has been found in Environment: {environment}
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

export default FullResultImageDelete;
