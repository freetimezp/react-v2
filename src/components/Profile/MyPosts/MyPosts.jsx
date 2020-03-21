import React from 'react';

import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = (props) => {

  let postsData = props.postsData;

  let postsElements = postsData
      .map ( (post) => <Post message={post.message} likes={post.likes} dislikes={post.dislikes} />
  );

  let newPostElement = React.createRef();

  let addNewPost = () => {
    props.dispatch({ type: 'ADD-POST' });
  }

  let changePost = () => {
    let text = newPostElement.current.value;
    let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text };
    props.dispatch(action);
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