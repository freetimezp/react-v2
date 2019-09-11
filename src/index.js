import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


	let PostsData = [
  {id: 1, message: 'Hi, how are you?', icon: 'https://pngicon.ru/file/uploads/bojya_korovka-256x201.png', likesCount: '231'},
  {id: 2, message: 'Thanks, I am fine. Nice to see you!', icon: 'http://rylik.ru/uploads/posts/2017-06/1498027622_butterflies-10-03.png', likesCount: '12'},
  {id: 3, message: 'Привет. Что делаем?', icon: 'http://foodika.ru/wp-content/uploads/2018/01/oooo.plus_341-2.png', likesCount: '23'},
 ]

 const DialogsData = [
  {id: 1, name: 'Dimych'},
  {id: 2, name: 'Andrew'},
  {id: 3, name: 'Anna'},
  {id: 4, name: 'Semen'}
 ];

 const MessagesData = [
  {id: 1, message: 'Hi'},
  {id: 2, message: 'Yo'},
  {id: 3, message: 'Ho'}
 ];

ReactDOM.render(<App PostsData={PostsData} MessagesData={MessagesData} DialogsData={DialogsData} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
