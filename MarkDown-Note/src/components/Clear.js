import React from "react";

function Clear(props){

    const handleDeleteList = () => {
        props.onHandleDeleteList();
    }

    return(
        <button
            onClick={handleDeleteList}
        >
            Clear
        </button>
    );
}

export default Clear;