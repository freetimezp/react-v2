import {createStore} from 'redux';
import {combineReducers, applyMiddleware} from 'redux';

import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form';

import profileReducer from './profile-reducer.js';
import dialogsReducer from './dialogs-reducer.js';
import friendsReducer from './friends-reducer.js';
import usersReducer from './users-reducer.js';
import authReducer from './auth-reducer.js';
import appReducer from './app-reducer.js';

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	friendsPage: friendsReducer,
	usersPage: usersReducer,
	auth: authReducer,
	form: formReducer,
	app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;