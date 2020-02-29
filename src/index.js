import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogsData = [
		{id: 1, name: 'Andrew'},
		{id: 2, name: 'Dmitry'},
		{id: 3, name: 'Sveta'},
		{id: 4, name: 'Sasha'}
];

let messagesData = [
		{id: 1, message: 'Hi!'},
		{id: 2, message: 'How is your life?'},
		{id: 3, message: 'Yo Yo'}
]

let postsData = [
  {id: 1, message: 'Hi! How are you?', likes: 23, dislikes: 0},
  {id: 2, message: 'Its my first post!', likes: 11, dislikes: 0},
  {id: 3, message: 'Hello, everyone.', likes: 0, dislikes: 0}
]


ReactDOM.render(<App postsData={postsData} messagesData={messagesData} dialogsData={dialogsData} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
