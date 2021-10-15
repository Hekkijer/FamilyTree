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

let branch = document.querySelector('.branch-outer')

screen.scrollTo(28500, 31500)

