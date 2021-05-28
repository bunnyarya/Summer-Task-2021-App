import "./App.css";
import Like from "./Components/Like";
import Dislike from "./Components/Unlike";

function Article() {
    return (
        <div className="App-header">
            <div className="App">
                <p>lorem50</p>
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

export default Article;
