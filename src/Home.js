import logo from "./logo.svg";
import "./App.css"
//import { render } from "@testing-library/react";


function Home() {
    return (
        <div className="App-header">
            <div className="App">
                <img src={logo} className="App-logo" alt="logo" />

                <div class="para" >
                    <div class="trending">
                        <p>
                            <img src="https://image.freepik.com/free-photo/black-brick-wall-textured-background_53876-63572.jpg" class="responsive" />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            sit amet pretium urna. Vivamus venenatis velit nec neque
                        </p>
                    </div>
                    <div class="recent">
                        <p>
                            <img src="https://image.freepik.com/free-photo/black-brick-wall-textured-background_53876-63572.jpg" class="responsive" />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            sit amet pretium urna. Vivamus venenatis velit nec neque
                        </p>

                        <p>
                            <img src="https://image.freepik.com/free-photo/black-brick-wall-textured-background_53876-63572.jpg" class="responsive" />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            sit amet pretium urna. Vivamus venenatis velit nec neque
                        </p>

                        <p>
                            <img src="https://image.freepik.com/free-photo/black-brick-wall-textured-background_53876-63572.jpg" class="responsive" />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            sit amet pretium urna. Vivamus venenatis velit nec neque
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
