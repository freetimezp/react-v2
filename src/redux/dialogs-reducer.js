const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialSate = {
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
};

const dialogsReducer = (state = initialSate, action) => {
	switch(action.type) {
		case ADD_MESSAGE: 
			let newMessage = {
					id: 6, 
					message: state.newMessageText
				};
			state.messagesData.push(newMessage);
			state.newMessageText = '';
			return state;
		case UPDATE_NEW_MESSAGE_TEXT: 
			state.newMessageText = action.newText;
			return state;
		default:
		  return state;
	}
}

export const addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE
  }
}

export const updateNewMessageTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
  }
}

export default dialogsReducer;