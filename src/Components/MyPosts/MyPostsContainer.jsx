import React from 'react';
import {addPostActionCreator,updateNewPostTextActionCreator} from './../../redux/profile-reducer.js';
import MyPosts from './MyPosts.jsx';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
 return {
  PostsData: state.profilePage.PostsData,
  newPostText: state.profilePage.newPostText
	 }
}

let mapDispatchToProps = (dispatch) => {
	 return {
   addPost: () => {
   	dispatch(addPostActionCreator());
   },
   onPostChange: (newText) => {
   	let action = updateNewPostTextActionCreator(newText);
	  	dispatch(action);
   }
	 }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;

