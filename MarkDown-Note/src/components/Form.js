import React, { useState } from "react";

function Form(props){
    const [title, setTitle] = useState("");

    const handleCreateNewListItem = (e) => {
        e.preventDefault();
        props.onHandleCreateNewListItem(title);
        setTitle("");
    }

    return(
        <form onSubmit={handleCreateNewListItem}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button
                type="submit"
            >
                Add
            </button>
        </form>
    );
}

export default Form;