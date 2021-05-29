import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Articles from "./Articles";
import Article from "./Article";
import Home from "./Home";
import Adminpanel from "./Adminpanel";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";




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
            <Route exact path='/Articles'>
              <Articles />
            </Route>
            <Route exact path='/Adminpanel'>
              <Adminpanel />
            </Route>
            <Route exact path='/Article'>
              <Article />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
