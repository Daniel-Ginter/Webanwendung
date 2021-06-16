import LoadEnvironment from './LoadEnvironment';
import WebsiteList from './WebsiteList';

function App() {
  return (
    <div className="App">
      <h1>Compare Result</h1>
      <div className="content">
        <WebsiteList/>
        <LoadEnvironment />
      </div>
    </div>
  );
}

export default App;
