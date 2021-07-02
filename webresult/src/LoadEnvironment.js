
import useFetch from "./useFetch";
import ElementList from "./Elements/ElementList";
const LoadEnvironment = ({dbFile}) => {
  const {
    error,
    isPending,
    data: environments,
  } = useFetch("http://localhost:3000/tests/"+dbFile);
  
  console.log(dbFile);
  return (
    <div className="LoadEnv">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {environments && <ElementList elements={environments.list} domain={environments.domain} environment={environments.environment} mainEnvironment={environments.mainEnvironment}
      testStep={environments.testStep} testName={environments.testName}/>}
    </div>
  );
};

export default LoadEnvironment;
