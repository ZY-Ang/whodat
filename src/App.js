import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import MainDisplay from "./MainDisplay";
import UploadPicture from "./UploadPicture";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Switch>
                        <Route path="/Uploads" component={UploadPicture}/>
                        <Route path="/" component={MainDisplay}/>
                        <Route path="*" component={MainDisplay}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
