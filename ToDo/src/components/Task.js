import React, {  } from "react";

function Task(props){
 
    const handleChangeTaskStatus = (taskId) => {
        props.onHandleChangeTaskStatus(taskId);
    }

    const handleDeleteTask = (taskId) => {
        props.onHandleDeleteTask(taskId);
    }

    const handleChangeTaskEditStatus = (taskId) => {
        props.onHandleChangeTaskEditStatus(taskId);
    }

    const handleChangeTaskName = (taskId, newName) => {
        props.onHandleChangeTaskName(taskId, newName);
    }

    const handleRepeatTask = (taskId) => {
        props.onHandleRepeatTask(taskId);
    }

    return(props.tasks.map((item) => {
            if(item.edit){
                return(
                    <div key={item.id}>
                        <input
                            type="text"
                            value={item.name}
                            onChange={(e) => handleChangeTaskName(item.id, e.target.value)}
                        />
                        <button
                            onClick={() => handleChangeTaskEditStatus(item.id)}
                        >
                            upload
                        </button>
                    </div>
                );
            } else{
                return(
                    <div className="task-list_task" key={item.id}>
                        <div className="task_input-edit-complete">
                            <input 
                                type="checkbox"
                                checked={item.status}
                                onChange={() => handleChangeTaskStatus(item.id)}
                            />
                            <span>
                                {item.name}
                            </span>
                            <button
                                onClick={() => handleChangeTaskEditStatus(item.id)}
                            >
                                edit name
                            </button>
                        </div>
                        <p>{item.createDate} | {item.finishingDate}</p>
    
                        <div className="task_delete-repeat">
                            <button
                                onClick={() => handleRepeatTask(item.id)}
                            >
                                repeat
                            </button>
                            <button
                                onClick={() => handleDeleteTask(item.id)}
                            >
                                delete
                            </button>
                        </div>
                        {/* !!! idea note !!! */}
                    </div>
                );
            }
    })
);

}

export default Task;