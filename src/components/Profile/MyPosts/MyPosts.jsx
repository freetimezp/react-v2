import React from 'react';

import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx';

import {addPostActionCreator,updateNewPostTextActionCreator} from './../../../redux/profile-reducer.js';

const MyPosts = (props) => {

  let postsData = props.postsData;

  let postsElements = postsData
      .map ( (post) => <Post message={post.message} key={post.id} likes={post.likes} dislikes={post.dislikes} />
  );

  let newPostElement = React.createRef();

  let addNewPost = () => {
    props.addNewPost();
  }

  let changePost = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

	return (
      <div>
        <h3>My posts</h3>
        <div>
          <div>
            <textarea 
              onChange={ changePost } 
              ref={ newPostElement } 
              value={ props.newPostText } />
          </div>
          <div>
            <button onClick={ addNewPost }>Add post</button>
          </div>
        </div>
        <div className={classes.posts}>
          { postsElements }
        </div>
      </div>
    );
}

export default MyPosts;