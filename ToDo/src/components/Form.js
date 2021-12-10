import React, { useState } from "react";

function Form(props){
    const [value, setValue] = useState("");

    const handleAddTask = (e) => {
        e.preventDefault();
        props.onHandleAddTask(value);
        setValue("");
    }

    return(
        <div className="head_form">
            <form onSubmit={handleAddTask}>
                <input
                    type="text"
                    placeholder="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button 
                    type="submit" 
                >
                    save
                </button>

            </form>
        </div>
    )
}

export default Form;