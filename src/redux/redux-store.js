import {createStore} from 'redux';
import {combineReducers} from 'redux';

import profileReducer from './profile-reducer.js';
import dialogsReducer from './dialogs-reducer.js';
import friendsReducer from './friends-reducer.js';
import usersReducer from './users-reducer.js';

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	friendsPage: friendsReducer,
	usersPage: usersReducer	
});

let store = createStore(reducers);

export default store;