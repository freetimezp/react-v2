const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
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

export default dialogsReducer;