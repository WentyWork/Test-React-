import React from 'react';
import ReactDOM from 'react-dom';
import './Default-files/index.css';
import ToDoApp from "./containers/ToDoApp";
import reportWebVitals from './Default-files/reportWebVitals';

ReactDOM.render(
  <ToDoApp />,
  document.getElementById('root')
);

reportWebVitals();
