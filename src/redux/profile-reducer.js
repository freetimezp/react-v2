const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
			 PostsData: [
				 {id: 1, message: 'Hi, how are you?', icon: 'https://pngicon.ru/file/uploads/bojya_korovka-256x201.png', likesCount: '231'},
				 {id: 2, message: 'Thanks, I am fine. Nice to see you!', icon: 'http://rylik.ru/uploads/posts/2017-06/1498027622_butterflies-10-03.png', likesCount: '12'},
				 {id: 3, message: 'Привет. Что делаем?', icon: 'http://foodika.ru/wp-content/uploads/2018/01/oooo.plus_341-2.png', likesCount: '23'}
			 ],
			 newPostText: 'it-kamasytra.com'
};

const profileReducer = (state = initialState, action) => {

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