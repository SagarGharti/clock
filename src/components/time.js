import React, {useState} from "react";
import '../App.css';

const Currentime = () => {
    const time = new Date().toTimeString();
    const [ctime,setCtime] = useState(time);
    const Updatetime = () => {
      let time = new Date().toTimeString();
      setCtime(time);
    };
    setInterval (Updatetime,1000);
      return (
            <h1>{ ctime.slice(0,8) }</h1>
      );
    };
export default Currentime; 