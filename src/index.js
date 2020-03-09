import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import state from "./redux/state.js";

import {BrowserRouter} from "react-router-dom";
import {addPost} from "./redux/state.js";
import {addMessage} from "./redux/state.js";
import {updateNewPostText} from "./redux/state.js";
import {subscribe} from "./redux/state.js";

let rerenderEntireTree = (state) => {
	ReactDOM.render(
	<BrowserRouter>
		<App 
			state={state} 
			addPost={addPost} 
			addMessage={addMessage}
			updateNewPostText={updateNewPostText} />
	</BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
