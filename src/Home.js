import logo from "./logo.svg";
import "./App.css"
//import { render } from "@testing-library/react";


function Home() {
    return (
        <div className="App-header">
            <div className="App">
                <p><img src={logo} className="App-logo" alt="logo" /></p>
            </div>
        </div>
    );
}

export default Home;
