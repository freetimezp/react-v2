import React from 'react';
import MyPosts from './MyPosts.jsx';
import {addPostActionCreator} from './../../../redux/profile-reducer.js';

import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewPost: (newPostText) => {
      dispatch(addPostActionCreator(newPostText));
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;