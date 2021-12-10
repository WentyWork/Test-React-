import React, {useState, useEffect} from "react";
import StatisticItem from "../components/StatisticItem";

function Statistic(props){
    const [successList, setSuccess] = useState([]); 
    const [activeList, setActive] = useState([]); 
    
    useEffect(() => {
        setSuccess([...props.tasks.filter((item) => item.status === true)]);
        setActive([...props.tasks.filter((item) => item.status === false)]);
    }, [props.tasks])


    return(
        <div className="todo-body_statistic">
            <StatisticItem 
                statisticList={activeList}
            />
            <StatisticItem 
                statisticList={successList}
            />
        </div>
    );
}

export default Statistic;