import React from 'react';
import MyPosts from './MyPosts.jsx';
import {addPostActionCreator,updateNewPostTextActionCreator} from './../../../redux/profile-reducer.js';


const MyPostsContainer = (props) => {

  let state = props.store.getState().profilePage;

  let addNewPost = () => {
    props.store.dispatch( addPostActionCreator() );
  }

  let changePost = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  }

	return (
    <MyPosts 
      updateNewPostText={changePost} 
      addNewPost={addNewPost} 
      newPostText={state.newPostText}
      postsData={state.postsData} />
    );
}

export default MyPostsContainer;