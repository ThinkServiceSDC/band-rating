import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Evaluation from "./Evaluation";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route exact path='/'><Evaluation/></Route>
            </BrowserRouter>
        );
    }
}

export default App;
