import React from "react";

function Clear(props){

    const handleClearList = () => {
        props.onHandleClearList();
    }

    return(
        <div className="">
            <button
                onClick={handleClearList}
            >
                clear list
            </button>
        </div>
    )
}

export default Clear;