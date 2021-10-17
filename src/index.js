import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

let screen = document.querySelector('.screen-outer')
// Screen to .screen-outer padding value
screen.scrollTo(10000, 10000)
