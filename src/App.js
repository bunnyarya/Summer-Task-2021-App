import logo from './logo.svg';
import './App.css';
//import Navbar from './Components/Navbar';
import Like from './Components/Like';
import Dislike from './Components/Unlike'

function App() {
  return (
    
  <div className="App-header">
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          Learn React
      <div className="inline">
          <ul>
            <li>
              <Like />
            </li>
            <li>
              <Dislike />
            </li>
          </ul>
      </div>
    </div>
  </div>
  );
}

export default App;
