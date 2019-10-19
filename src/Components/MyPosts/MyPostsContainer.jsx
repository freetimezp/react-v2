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
   updateNewPostText: (newText) => {
 	  	dispatch(updateNewPostTextActionCreator(newText));
     }
	 }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;

