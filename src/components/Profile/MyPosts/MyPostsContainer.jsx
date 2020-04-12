import React from 'react';
import MyPosts from './MyPosts.jsx';
import {addPostActionCreator,updateNewPostTextActionCreator} from './../../../redux/profile-reducer.js';

import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewPost: () => {
      dispatch(addPostActionCreator());
    },
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts) 

export default MyPostsContainer;