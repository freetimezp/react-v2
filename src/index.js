import React from 'react';
import * as serviceWorker from './serviceWorker';
import {rerenderEntireTree} from './render.js';
import State from './redux/state.js';


rerenderEntireTree(State); 





// unregister() to register() below. Note this comes with some pitfalls.
// If you want your app to work offline and load faster, you can change
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
