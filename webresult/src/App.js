import LoadEnvironment from './LoadEnvironment';
import WebsiteList from './Website/WebsiteList';

function App() {
  return (
    <div className="body">
      <h1>Compare Result</h1>
      <div className="content">
        <WebsiteList/>
        <LoadEnvironment />
      </div>
    </div>
  );
}

export default App;
