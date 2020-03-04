import React from 'react';

import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = (props) => {

  let postsData = props.postsData;

  let postsElements = postsData
      .map ( (post) => <Post message={post.message} likes={post.likes} dislikes={post.dislikes} />
  );

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    alert (text);
  }

	return (
      <div>
        <h3>My posts</h3>
        <div>
          <div>
            <textarea ref={ newPostElement }></textarea>
          </div>
          <div>
            <button onClick={ addPost }>Add post</button>
          </div>
        </div>
        <div className={classes.posts}>
          { postsElements }
        </div>
      </div>
    );
}

export default MyPosts;