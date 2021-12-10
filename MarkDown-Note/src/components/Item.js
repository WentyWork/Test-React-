import React, { useState } from "react";
import ReactMarkdown from 'react-markdown'



function Item(props){
    
    const handleChangeItemText = (id, text) => {
        props.onHandleChangeItemText(id, text);
    }

    const handleDeleteItem = (id) => {
        props.onHandleDeleteItem(id);
    }

    return(
        props.items.map((item) => {
            return(
                <div key={item.id}>
                    {item.title}
                    <textarea 
                        onChange={(e) => handleChangeItemText(item.id, e.target.value)}
                    >
                        {item.text}
                    </textarea>
                    <textarea
                        readOnly
                        value={
                            <ReactMarkdown>
                                {item.markDownText}
                            </ReactMarkdown>
                            
                        }
                    >
                        {item.markDownText}
                    </textarea>
                    <button
                        onClick={() => handleDeleteItem(item.id)}
                    >
                        delete
                    </button>
                </div>
            );
        })
    );
}

export default Item;