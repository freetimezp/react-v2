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
			if(action.type === ADD_POST) {
				let newPost = {
					id: 5, 
					message: this._state.profilePage.newPostText,
					likes: 0,
					dislikes: 0
				};
			  this._state.profilePage.postsData.push(newPost);
			  this._state.profilePage.newPostText = '';
			  this._callSubscriber(this._state);
			} else if (action.type === UPDATE_NEW_POST_TEXT) {
				this._state.profilePage.newPostText = action.newText;
		 		this._callSubscriber(this._state);
			} else if (action.type === ADD_MESSAGE) {
				let newMessage = {
					id: 6, 
					message: this._state.dialogsPage.newMessageText
				};
			  this._state.dialogsPage.messagesData.push(newMessage);
			  this._state.dialogsPage.newMessageText = '';
			  this._callSubscriber(this._state);
			} else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
				this._state.dialogsPage.newMessageText = action.newText;
		  	this._callSubscriber(this._state);
			}
		}
}

const ADD_POST = 'ADD-POST';
export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
}

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  }
}

const ADD_MESSAGE = 'ADD-MESSAGE';
export const addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE
  }
}

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
export const updateNewMessageTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
  }
}


export default store;