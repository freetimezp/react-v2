const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {

	switch(action.type) {
		case ADD_POST: 
			let newPost = {
				id: 5,
				message: state.newPostText, 
				icon: 'https://pngicon.ru/file/uploads/bojya_korovka-256x201.png',
				likesCount: 0
			};
			state.PostsData.push(newPost);
			state.newPostText = '';
			return state;
		case UPDATE_NEW_POST_TEXT: 
		 state.newPostText = action.newText;
		 return state;
		default:
		 return state;
	}

}

export const addPostActionCreator = () => {
	return {
		type: ADD_POST
	}
}

export const updateNewPostTextActionCreator = (newText) => {
		return {
		type: UPDATE_NEW_POST_TEXT,
		newText: newText
	};
}

export default profileReducer;