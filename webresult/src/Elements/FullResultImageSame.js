import useFetch from "../useFetch";

export const FullResultImageSame = ({
  mainElement,
  compareElement,
  mainEnvironment,
  testName,
  testStep,
  environment,
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
      <p>No changes have been detected</p>
      <img className="ElementImage" alt="CompElement.img" src={pathMain} />
      <img
        className="FullPageImage"
        alt="CompFullPage.img"
        src={pathMainFullPage}
      />
    </div>
  );
};

export default FullResultImageSame;
