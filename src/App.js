import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Article from "./Articles";
import Home from "./Home";

import Navbar from "./Components/Navbar";




function App() {
  return (
    <Router>
      <div className="App-header">
      <Navbar />

        <div className="App">
        
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/Article'>
              <Article />
            </Route>
            <Route exact path='/Adminpanel'>
              <Article />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
