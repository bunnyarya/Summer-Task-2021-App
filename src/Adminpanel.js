import { Button } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import logo from "./logo.svg";
import "./App.css";


function Article() {
    return (
        <div className="App-header">
            <div className="App">
                <img src={logo} className="App-logo" alt="logo" />
                <p align="left"
                style={{marginLeft: 1.5 + 'em'}}>
                    <Button
                        variant="contained"
                color="primary"
                size="small"
                ><AddIcon />Add</Button><br />
                    <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    >Update</Button><br />
                    <Button variant="contained"
                color="secondary"
                size="small"
                >Delete All</Button>
                    </p>
            </div>
        </div>
    );
}

export default Article;