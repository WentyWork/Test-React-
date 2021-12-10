import React, { useState, useEffect } from "react";
import Head from "../containers/Head";
import Task from "../components/Task";
import Clear from "../components/Clear";
import Statistic from "../containers/Statistic";

function ToDoApp(){
    const [list, setList] = useState(JSON.parse(localStorage.getItem("list")));
    const [alert, setAlert] = useState({show: false, type: "", message: ""});
    const timeOption = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }

    const handleAddTask = (value) => {
        if(value){
            const newItem = {
                name: value,
                edit: false,
                id: new Date().getTime() * Math.random(0, 100) / Math.random(0, 100),
                status: false,
                createDate: new Date().toLocaleString("en-US", timeOption), 
                finishingDate: "", 
            }
            setAlert(true, "成功", "item added to the list");
            setList([...list, newItem]);
        }
    }
    
    const handleChangeAlert = (show = false, type = "", message = "") => {
        setAlert(show, type, message);
    }

    const handleClearList = () => {
        setList([]);
    }

    const handleDeleteTask = (id) => {
        setList([...list.filter((list) => list.id !== id)])
    }

    const handleChangeTaskStatus = (id) => {
        setList([
            ...list.map((item) => 
            item.id === id ? {...item, finishingDate: (!item.status ? new Date().toLocaleString("en-US", timeOption) : ""),  status: !item.status} : {...item}
            )
        ]);
    } 

    const handleChangeTaskEditStatus = (id) => {
        setList([
            ...list.map((item) => 
            item.id === id ? {...item, edit: (item.edit ? false : true)} : {...item}
            )
        ]);
    }

    const handleChangeTaskName =  (id, newName) => {
        setList([
            ...list.map((item) => 
            item.id === id ? {...item, name: newName} : {...item}
            )
        ]);
    }

    const handleRepeatTask = (id) => {
        let repeatTask;
        list.map((item) => 
            item.id === id ? repeatTask = {...item, id: new Date().getTime() * Math.random(0, 100) / Math.random(0, 100)} : {...item}
        )
        setList([...list, repeatTask]);
    }

    useEffect(() => {
        localStorage.setItem("list", JSON.stringify(list));
    }, [list]);

    return(
        <div className="root_todo-body">
            <Head 
                timeOption={timeOption}
                onHandleAddTask={handleAddTask}
            />
            <div className="todo-body_task-list">
                {list && 
                    <Task 
                        onHandleRepeatTask={handleRepeatTask}
                        onHandleChangeTaskName={handleChangeTaskName}
                        onHandleChangeTaskEditStatus={handleChangeTaskEditStatus}
                        tasks={list}
                        onHandleDeleteTask={handleDeleteTask}
                        onHandleChangeTaskStatus={handleChangeTaskStatus}
                    />
                }
            </div>
            <Clear 
                onHandleClearList={handleClearList}
            />
            <Statistic 
                tasks={list}
            />
        </div>
    );
}

export default ToDoApp;