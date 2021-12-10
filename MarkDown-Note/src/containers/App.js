import React, { useState, useEffect } from "react";
import marked from 'marked';
import Form from "../components/Form";
import Item from "../components/Item";
import Clear from "../components/Clear";

const getLocalStorage = () => {
    let list = localStorage.getItem("list");
    if (list){
        return (list = JSON.parse(localStorage.getItem("list")));
  } else{
        return [];
  }
};

const MarkDown = (text) => {
    let markdown = markdown.parse(text);
    return <div dangerouslySetInnerHTML={{__html:markdown}} />
}

function App(){
    const [list, setList]               = useState(getLocalStorage());
    const [input, setInput]             = useState(false);
    // const [list, setList]               = useState();

    const handleCreateNewListItem = (title) => {
        if(title){
            const newItem = {
                title: title,
                id: (new Date().getTime() * Math.random(0, 100) / Math.random(0, 100)),
                createDate: new Date().toLocaleDateString(),
                text: "",
                markDownText: "",
            }
            setList([...list, newItem]);
        }
    }

    const handleChangeItemText = (id, text) => {
        setList([
            ...list.map((item) => 
            item.id === id ? {...item, text: text, markDownText: MarkDown(text)} : {...item}
            )
        ]);
    }

    const handleDeleteItem = (id) => {
        setList([...list.filter((item) => item.id !== id)]);
    } 

    const handleDeleteList = () => {
        setList([]);
    }

    useEffect(() => {
        localStorage.setItem("list", JSON.stringify(list));
    }, [list]);

    return(
        <div className="root_body-container">
            <header className="body-container_header">
                <Form 
                    onHandleCreateNewListItem={handleCreateNewListItem}
                />
            </header>
            <main className="body-container_content">
                <Item 
                    items={list}
                    input={input}
                    onHandleChangeItemText={handleChangeItemText}
                    onHandleDeleteItem={handleDeleteItem}
                />
            </main>
            <footer className="body-container_footer">
                <Clear 
                    onHandleDeleteList={handleDeleteList}
                />
            </footer>
        </div>

    );
}

export default App;