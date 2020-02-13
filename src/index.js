import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/state";

let rerenderEntireTree = () => {
    ReactDOM.render(<BrowserRouter>
        <App
            store={store}
            /*state={state}
            newPost={addPost}
            updateNewPostText={updateNewPostText}*/
        />
    </BrowserRouter>, document.getElementById('root'));
};

store.subscribe(rerenderEntireTree);

rerenderEntireTree();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
