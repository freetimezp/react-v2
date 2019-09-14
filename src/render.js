import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {addPost} from './redux/state.js';


export let rerenderEntireTree = (State) => {
	 ReactDOM.render(
 	<BrowserRouter>
 	 <App State={State} addPost={addPost} />
 	</BrowserRouter>, document.getElementById('root'));
}

