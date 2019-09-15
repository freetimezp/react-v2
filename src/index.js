import React from 'react';
import * as serviceWorker from './serviceWorker';
import State, {subscribe} from './redux/state.js';


import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {addPost, updateNewPostText} from './redux/state.js';


let rerenderEntireTree = (State) => {
	 ReactDOM.render(
 	<BrowserRouter>
 	 <App 
 	 	State={State} 
 	 	addPost={addPost}
 	 	updateNewPostText={updateNewPostText} 
 	 />
 	</BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(State); 
subscribe(rerenderEntireTree);


// unregister() to register() below. Note this comes with some pitfalls.
// If you want your app to work offline and load faster, you can change
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
