import {createStore} from 'redux';
import {combineReducers} from 'redux';

import profileReducer from './profile-reducer.js';
import dialogsReducer from './dialogs-reducer.js';
import friendsReducer from './friends-reducer.js';
import usersReducer from './users-reducer.js';
import authReducer from './auth-reducer.js';

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	friendsPage: friendsReducer,
	usersPage: usersReducer,
	auth: authReducer
});

let store = createStore(reducers);

export default store;