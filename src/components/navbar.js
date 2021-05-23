import React from "react";
import '../App.css';
import {Link} from "react-router-dom";
function Navbar(){
      return (
            <div className="Nav">
              <Link
                className="App-link1"
                to="/"
              >
                Current Time
              </Link>
    
              <Link
                className="App-link2"
                to="/stopwatch"
              >
                StopWatch
              </Link>
              <Link
              className="App-link3"
              to="/timer"
            >
              Timer
            </Link>
            </div>
      );
    };
export default Navbar; 