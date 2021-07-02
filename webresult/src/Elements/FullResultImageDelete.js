import useFetch from "../useFetch";

export const FullResultImageDelete = ({
  mainElement,
  compareElement,
  resultPicturePath,
  mainEnvironment,
  testName,
  testStep
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
    console.log("Deleted Link: {}",pathMain)
  return (
    <div className="pictures">
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
