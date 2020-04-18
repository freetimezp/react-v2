const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
	postsData: [
	  {id: 1, message: 'Hi! How are you?', likes: 23, dislikes: 0},
	  {id: 2, message: 'Its my first post!', likes: 11, dislikes: 0},
	  {id: 3, message: 'Hello, everyone.', likes: 0, dislikes: 0}
	], 
	newPostText: 'Start write here something..'
};

const profileReducer = (state = initialState, action) => {
	switch(action.type) {
		case ADD_POST:
			let newPost = {
					id: 5, 
					message: state.newPostText,
					likes: 0,
					dislikes: 0
			};
			return {
				...state,
				postsData: [...state.postsData, newPost],
				newPostText: ''
			};
		case UPDATE_NEW_POST_TEXT:
			return {
				...state,
				newPostText: action.newText
			};
		default:
		  return state;
	}
}

export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
}

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  }
}

export default profileReducer;