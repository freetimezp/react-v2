import profileReducer from './profile-reducer.js';
import dialogsReducer from './dialogs-reducer.js';
import friendsReducer from './friends-reducer.js';

let Store = {
		_State: {
	 	profilePage: {
			 PostsData: [
				 {id: 1, message: 'Hi, how are you?', icon: 'https://pngicon.ru/file/uploads/bojya_korovka-256x201.png', likesCount: '231'},
				 {id: 2, message: 'Thanks, I am fine. Nice to see you!', icon: 'http://rylik.ru/uploads/posts/2017-06/1498027622_butterflies-10-03.png', likesCount: '12'},
				 {id: 3, message: 'Привет. Что делаем?', icon: 'http://foodika.ru/wp-content/uploads/2018/01/oooo.plus_341-2.png', likesCount: '23'}
			 ],
			 newPostText: 'it-kamasytra.com'
	 },
	 	dialogsPage: {
		 	DialogsData: [
				 {id: 1, name: 'Dimych'},
				 {id: 2, name: 'Andrew'},
				 {id: 3, name: 'Anna'},
				 {id: 4, name: 'Semen'}
			 ],
		 	MessagesData: [
				 {id: 1, message: 'Hi', messageIcon: 'https://pngimage.net/wp-content/uploads/2018/06/rfhnbyrf-png-5.png', alt: 'logo'},
				 {id: 2, message: 'Yo', messageIcon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhFZ13o5AqDJMCHXl8P_o-qqClgSZpQUFCauYobfbY9AVja2RlNQ', alt: 'logo'},
				 {id: 3, message: 'Ho', messageIcon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB6fKkb9R9TxV7PBLRnpBXfmLU2nuTAD4ZZIxMY6bnq5O6bqrupw', alt: 'logo'}
				],
			 newMessageText: ''
	 },
	  friendsPage: {
	  	FriendsData: [
	 		 {id: 1, name: 'Andrew', icon: 'https://bower.io/img/bower-logo.png' },
	 	 	{id: 2, name: 'Sasha', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjoRczCOU1Jiwsp5WlbQKq5MOHqBd20CnPqjfblMQ6kWJg_v3P' },
	 			{id: 3, name: 'Sveta', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYxxkhwMYeAgPbSyN8u4eYV_R6kuGpzQIGNS6_-Mf-VR5WqVyYjQ' }
	  	]
	 }
	},
		getState() {
			return this._State;
	},
		rerenderEntireTree() {

	},
		subscribe(observer) {
			this._rerenderEntireTree = observer;
		},
		dispatch(action) {
			this._State.profilePage = profileReducer(this._State.profilePage, action);
			this._State.dialogsPage = dialogsReducer(this._State.dialogsPage, action);
			this._State.friendsPage = friendsReducer(this._State.friendsPage, action);

			this._rerenderEntireTree(this._State);
			
		}
}

window.Store = Store;

export default Store;