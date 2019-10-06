const UPDATE_NEW_MESSAGE_TEXT = 'UDPATE-NEW-MASSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MASSAGE';

const dialogsReducer = (state, action) => {

	switch(action.type) {
		case UPDATE_NEW_MESSAGE_TEXT: 
		 state.newMessageText = action.newMessage;
		 return state;
		case SEND_MESSAGE:
			let newMassage = {
					id: 6,
					message: 'Sun',
					messageIcon: 'https://pngimage.net/wp-content/uploads/2018/06/rfhnbyrf-png-5.png',
					alt: 'logo'
				};
				state.MessagesData.push(newMassage);
				state.newMessageText = '';
		 return state;
		default:
		 return state;
 }
}


export const sendMessageActionCreator = () => {
	return {
		type: SEND_MESSAGE
	}
}

export const updateNewMessageTextActionCreator = (newMessage) => {
	return {
		type: UPDATE_NEW_MESSAGE_TEXT,
		newMessage: newMessage
	}
}

export default dialogsReducer;