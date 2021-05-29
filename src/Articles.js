import "./App.css";
import Like from "./Components/Like";
import Dislike from "./Components/Unlike";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from 'react-router-dom';
import Article from "./Article";

function Articles() {
    return (
        <Router>
            <div className="App-header">
                <div className="App">
                    <div style={{ marginTop: 1.5 + 'em' }}>
                        <div class="column">
                            <Link to='/Article'>
                                <h2>Column</h2>
                            </Link>
                            <p align="justify">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                                sit amet pretium urna. Vivamus venenatis velit nec neque
                                ultricies, eget elementum magna tristique. Quisque vehicula, risus
                                eget aliquam placerat, purus leo tincidunt eros, eget luctus quam
                                orci in velit. Praesent scelerisque tortor sed accumsan convallis.
                        </p>

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

                        <div class="column">
                            <Link to='/Article'>
                                <h2>Column</h2>
                            </Link>
                            <p align="justify">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                                sit amet pretium urna. Vivamus venenatis velit nec neque
                                ultricies, eget elementum magna tristique. Quisque vehicula, risus
                                eget aliquam placerat, purus leo tincidunt eros, eget luctus quam
                                orci in velit. Praesent scelerisque tortor sed accumsan convallis.
                        </p>
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

                        <div class="column">
                            <Link to='/Article'>
                                <h2>Column</h2>
                            </Link>
                            <p align="justify">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                                sit amet pretium urna. Vivamus venenatis velit nec neque
                                ultricies, eget elementum magna tristique. Quisque vehicula, risus
                                eget aliquam placerat, purus leo tincidunt eros, eget luctus quam
                                orci in velit. Praesent scelerisque tortor sed accumsan convallis.
                        </p>

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

                        <div class="column">
                            <Link to='/Article'>
                                <h2>Column</h2>
                            </Link>
                            <p align="justify">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                                sit amet pretium urna. Vivamus venenatis velit nec neque
                                ultricies, eget elementum magna tristique. Quisque vehicula, risus
                                eget aliquam placerat, purus leo tincidunt eros, eget luctus quam
                                orci in velit. Praesent scelerisque tortor sed accumsan convallis.
                        </p>

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

                        <div class="column">
                            <Link to='/Article'>
                                <h2>Column</h2>
                            </Link>
                            <p align="justify">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                                sit amet pretium urna. Vivamus venenatis velit nec neque
                                ultricies, eget elementum magna tristique. Quisque vehicula, risus
                                eget aliquam placerat, purus leo tincidunt eros, eget luctus quam
                                orci in velit. Praesent scelerisque tortor sed accumsan convallis.
                        </p>

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

                        <div class="column">
                            <Link to='/Article'>
                                <h2>Column</h2>
                            </Link>
                            <p align="justify">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                                sit amet pretium urna. Vivamus venenatis velit nec neque
                                ultricies, eget elementum magna tristique. Quisque vehicula, risus
                                eget aliquam placerat, purus leo tincidunt eros, eget luctus quam
                                orci in velit. Praesent scelerisque tortor sed accumsan convallis.
                        </p>

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

                        <div class="column">
                            <Link to='/Article'>
                                <h2>Column</h2>
                            </Link>
                            <p align="justify">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                                sit amet pretium urna. Vivamus venenatis velit nec neque
                                ultricies, eget elementum magna tristique. Quisque vehicula, risus
                                eget aliquam placerat, purus leo tincidunt eros, eget luctus quam
                                orci in velit. Praesent scelerisque tortor sed accumsan convallis.
                        </p>
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
                </div>
            </div>
        </Router>
    );
}

export default Articles;
