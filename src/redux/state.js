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
		getState () {
			return this._state;
		},
		_callSubscriber () {

		},
		addPost () {
			let newPost = {
				id: 5, 
				message: this._state.profilePage.newPostText,
				likes: 0,
				dislikes: 0
			};
		  this._state.profilePage.postsData.push(newPost);
		  this._state.profilePage.newPostText = '';
		  this._callSubscriber(this._state);
		},
		updateNewPostText (newText) {
		  this._state.profilePage.newPostText = newText;
		  this._callSubscriber(this._state);
		},
		addMessage () {
			let newMessage = {
				id: 6, 
				message: this._state.dialogsPage.newMessageText
			};
		  this._state.dialogsPage.messagesData.push(newMessage);
		  this._state.dialogsPage.newMessageText = '';
		  this._callSubscriber(this._state);
		},
		updateNewMessageText (newText) {
		  this._state.dialogsPage.newMessageText = newText;
		  this._callSubscriber(this._state);
		},
		subscribe (observer) {
			this._callSubscriber = observer;
		} 
}

export default store;