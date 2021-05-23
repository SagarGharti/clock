import React, { useState } from "react";
import './App.css';
import Currentime from "./components/time";
import Navbar from "./components/navbar";
import Stoptime from "./components/stopwatch";
import Diffrence from "./components/timer";
import {BrowserRouter as Router, Route, Switch}  from "react-router-dom";

function App(){
  return(
    <div className="App">
      <header className="App-header">
      <Router>
          <Switch>
            <Route exact path = "/"  component={ Currentime } />
            <Route exact path="/stopwatch" component={ Stoptime } />
            <Route exact path="/timer" component={ Diffrence } />
          </Switch>
          <Navbar />
        </Router>
      </header>
    </div>


  )

}

 

export default App;
