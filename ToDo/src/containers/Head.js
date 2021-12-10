import React from "react";
// import Alert from "../components/Alert";
import Time from "../components/Time";
import Form from "../components/Form";


function Head(props){

    return(
        <div className="todo-body_head">
            <Time 
                timeOption={props.timeOption}
            />
            {/* <Alert /> */}
            <Form 
                onHandleAddTask={props.onHandleAddTask}
            />
        </div>
    );
}

export default Head;