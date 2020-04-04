import profileReducer from './profile-reducer.js';
import dialogsReducer from './dialogs-reducer.js';
import friendsReducer from './friends-reducer.js';


let store = {
		_state: {
			profilePage: {
				postsData: [
				  {id: 1, message: 'Hi! How are you?', likes: 23, dislikes: 0},
				  {id: 2, message: 'Its my first post!', likes: 11, dislikes: 0},
				  {id: 3, message: 'Hello, everyone.', likes: 0, dislikes: 0}
				], 
				newPostText: 'Start write here something..'
			},
			dialogsPage: {
				dialogsData: [
					{id: 1, name: 'Andrew'},
					{id: 2, name: 'Dmitry'},
					{id: 3, name: 'Sveta'},
					{id: 4, name: 'Sasha'}
				],
				messagesData: [
					{id: 1, message: 'Hi!'},
					{id: 2, message: 'How is your life?'},
					{id: 3, message: 'Yo Yo'}
				],
				newMessageText: 'Write here...'
			},
			friendsPage: {
				friendsData: [
		    { id: 1, 
		      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSX5QB95GTz-f5Bug8uPrAhzql2XZqHKAk_WqFBP7wqes3KZN5z', 
		      name: 'Andrew'},
		    { id: 2, 
		      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRAdQi3l1focydNX68HT6Zrs91T0FAZTdCVQWXBkb2VZdaHSOO6', 
		      name: 'Sasha'},
		    { id: 3, 
		      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhW2--5Tf4McPHAV2sbBgV17QzMMPceHQgrA6sv_Yy8z6IdJns', 
		      name: 'Sveta'}
		 	 ]
			}
		},
		_callSubscriber () {

		},
		getState () {
			return this._state;
		},
		subscribe (observer) {
			this._callSubscriber = observer;
		},
		dispatch (action) {
			this._state.profilePage = profileReducer(this._state.profilePage, action);
			this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
			this._state.friendsPage = friendsReducer(this._state.friendsPage, action);

			this._callSubscriber(this._state);
		}
}

export default store;