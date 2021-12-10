import React from "react";
import Time from "../components/Time";
import Form from "../components/Form";


function Head(props){

    return(
        <div className="todo-body_head">
            <Time 
                timeOption={props.timeOption}
            />
            <Form 
                onHandleAddTask={props.onHandleAddTask}
            />
        </div>
    );
}

export default Head;