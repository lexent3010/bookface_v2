import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {addPost, updateNewPostText} from "./redux/state";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(<BrowserRouter><App
        state={state}
        newPost={addPost}
        updateNewPostText={updateNewPostText}
    /></BrowserRouter>, document.getElementById('root'));

};

