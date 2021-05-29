import "./App.css";
import Like from "./Components/Like";
import Dislike from "./Components/Unlike";

function Article() {
    return (
        <div className="App-header">
            <div className="App">
                <div class="para" style={{ marginTop: 1.5 + "em" }}>
                    <h1>Column</h1>

                    <p align="justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                        sit amet pretium urna. Vivamus venenatis velit nec neque ultricies,
                        eget elementum magna tristique. Quisque vehicula, risus eget aliquam
                        placerat, purus leo tincidunt eros, eget luctus quam orci in velit.
                        Praesent scelerisque tortor sed accumsan convallis. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Maecenas sit amet
                        pretium urna. Vivamus venenatis velit nec neque ultricies, eget
                        elementum magna tristique. Quisque vehicula, risus eget aliquam
                        placerat, purus leo tincidunt eros, eget luctus quam orci in velit.
                        Praesent scelerisque tortor sed accumsan convallis. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Maecenas sit amet
                        pretium urna. Vivamus venenatis velit nec neque ultricies, eget
                        elementum magna tristique. Quisque vehicula, risus eget aliquam
                        placerat, purus leo tincidunt eros, eget luctus quam orci in velit.
                        Praesent scelerisque tortor sed accumsan convallis.
                    </p>
                    <div class="photo">
                        <img
                            src="https://image.freepik.com/free-photo/black-brick-wall-textured-background_53876-63572.jpg"
                            class="responsive"
                        />
                        <img
                            src="https://image.freepik.com/free-photo/beautiful-cherry-tree-with-flowers_23-2148956889.jpg"
                            class="responsive"
                        />
                    </div>
                </div>

                <div className="inline" style={{ marginLeft: 2.5 + "em" }}>
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

export default Article;
