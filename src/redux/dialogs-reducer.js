const ADD_MESSAGE = 'ADD-MESSAGE';

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
	]
};

const dialogsReducer = (state = initialSate, action) => {
	switch(action.type) {
		case ADD_MESSAGE: 
			let newMessage = {
					id: 6, 
					message: action.newMessageBody
				};
			return {
				...state,
				messagesData: [...state.messagesData, newMessage]
			};
		default:
		  return state;
	}
}

export const addMessageActionCreator = (newMessageBody) => {
  return {
    type: ADD_MESSAGE, 
    newMessageBody
  }
} 

export default dialogsReducer;