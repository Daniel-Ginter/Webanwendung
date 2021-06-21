import LoadEnvironment from './LoadEnvironment';
import WebsiteList from './Website/WebsiteList';

function App() {
  return (
    <div className="body">
      <h1>Vergleichsergebniss Anzeige</h1>
      <div className="content">
        <WebsiteList/>
      </div>
    </div>
  );
}

export default App;
