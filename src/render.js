import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter} from "react-router-dom";
import {addPost} from "./redux/state.js";
import {addMessage} from "./redux/state.js";
import {updateNewPostText} from "./redux/state.js";



export let rerenderEntireTree = (state) => {
	ReactDOM.render(
	<BrowserRouter>
		<App 
			state={state} 
			addPost={addPost} 
			addMessage={addMessage}
			updateNewPostText={updateNewPostText} />
	</BrowserRouter>, document.getElementById('root'));
}


