import React, { useState, useEffect } from "react";

function Time(props){
    const [time, setTime] = useState(new Date());

    // const options = {
    //     year: 'numeric',
    //     month: 'long',
    //     day: 'numeric',
    //     weekday: 'long',
    // };

    useEffect(() => {
        let useTime;
        useTime = setInterval(() => {
            setTime(new Date());;
        }, 1000)
        return () => clearInterval(useTime);
   }, [])

    return(
        <div className="head_time">
            <h1>ToDo</h1>
            <h2>{time.toLocaleString("en-US", props.timeOption)}
            </h2>
        </div>
    );
}

export default Time;