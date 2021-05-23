import React, { useEffect, useState } from "react"
import '../App.css';
const Diffrence = () => {
    const Timer = () => {
        let year = new Date().getFullYear();
        let diffrence = +new Date(`10/01/${year}`) - +new Date();
    
        let timeLeft = {};
        if(diffrence > 0){
            timeLeft = {
                days : Math.floor(diffrence/(1000*60*60*24)),
                hours: Math.floor((diffrence/(1000*60*60)%24)),
                minutes:Math.floor((diffrence/(1000*60) % 60)),
                seconds:Math.floor((diffrence/1000) % 60),
            };
        }
        return timeLeft;
    };
    const [timeLeft, setTimeLeft] = useState(Timer());
    const [year] = useState(new Date().getFullYear());

    useEffect (() => {
        setTimeout(()=>{
            setTimeLeft(Timer());
        },1000);
    });

    const timerComponents = [];
    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
          return;
        }
    
        timerComponents.push(
          <span>
            {timeLeft[interval]} {interval}{" "}
          </span>
        );
      });

      return(
        <div className="Timer">
        <h1>React js new Session {year} Countdown</h1>
        {timerComponents.length ? timerComponents:<span>time</span>}
       </div>
      )


    
}

export default Diffrence;
