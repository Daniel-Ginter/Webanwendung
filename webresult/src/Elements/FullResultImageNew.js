import useFetch from "../useFetch";

export const FullResultImageNew = ({
  mainElement,
  compareElement,
  resultPicturePath,
  mainEnvironment,
}) => {
  const comp = compareElement;
  const path = "http://localhost:3000/images/Chrome_test/" + comp + ".png";
  return (
    <div>
      <img alt="" src={path} />
    </div>
  );
};

export default FullResultImageNew;
