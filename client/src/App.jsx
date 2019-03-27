import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Evaluation from './Evaluation';

const App = () => (
  <BrowserRouter>
    <Route exact path="/"><Evaluation /></Route>
  </BrowserRouter>
);

export default App;
