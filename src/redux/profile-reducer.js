import {usersAPI, profileAPI} from './../api/api.js';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
	postsData: [
	  {id: 1, message: 'Hi! How are you?', likes: 23, dislikes: 0},
	  {id: 2, message: 'Its my first post!', likes: 11, dislikes: 0},
	  {id: 3, message: 'Hello, everyone.', likes: 0, dislikes: 0}
	], 
	newPostText: 'Start write here something..',
	profile: null,
	status: ""
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
		case SET_USER_PROFILE: 
			return {
				...state,
				profile: action.profile
			};
		case SET_STATUS: 
			return {
				...state,
				status: action.status
			};
		default:
		  return state;
	}
}

export const addPostActionCreator = () => {
  return { type: ADD_POST }
}

export const updateNewPostTextActionCreator = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text }
}

export const setUserProfile = (profile) => {
  return { type: SET_USER_PROFILE, profile }
}

export const getUserProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId).then(response => {
    dispatch(setUserProfile(response.data));
  });
}

export const setStatus = (status) => {
  return { type: SET_STATUS, status }
}

export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then(response => {
    	dispatch(setStatus(response.data));
  });
}

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then(response => {
  		if(response.data.resultCode === 0) {
  			dispatch(setStatus(status));
  		}
  });
}

export default profileReducer;