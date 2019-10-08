import React from 'react';
import {addPostActionCreator,updateNewPostTextActionCreator} from './../../redux/profile-reducer.js';
import MyPosts from './MyPosts.jsx';

const MyPostsContainer = (props) => {

 let state = props.store.getState();

	let addPost = () => {
		props.store.dispatch( addPostActionCreator() );
	};

	let onPostChange = (newText) => {
  let action = updateNewPostTextActionCreator(newText);
		props.store.dispatch(action);
	}

	return (
		<MyPosts
			updateNewPostText={onPostChange}
			addPost={addPost}
			PostsData={state.profilePage.PostsData}
			newPostText={state.profilePage.newPostText} 
			dispatch={state.dispatch} 
		 />
		);
}

export default MyPostsContainer;

