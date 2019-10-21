const UPDATE_NEW_MESSAGE_TEXT = 'UDPATE-NEW-MASSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MASSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {

	switch(action.type) {
		case UPDATE_NEW_MESSAGE_TEXT: {
			return {
				...state,
				newMessageText: action.newMessage
			};
		};
		case SEND_MESSAGE: {
			let body = state.newMessageText;
			return {
				...state,
				MessagesData: [
				 	...state.MessagesData, 
				 	{	id: 6,		message: body,
						messageIcon: 'https://pngimage.net/wp-content/uploads/2018/06/rfhnbyrf-png-5.png',
						alt: 'logo' }
				],
				newMessageText: ''
			};
		};
		default:
		 return state;
 }
}
			
export const sendMessageActionCreator = () => {
	return {
		type: SEND_MESSAGE
	}
};

export const updateNewMessageTextActionCreator = (newMessage) => {
	return {
		type: UPDATE_NEW_MESSAGE_TEXT,
		newMessage: newMessage
	}
};

export default dialogsReducer;