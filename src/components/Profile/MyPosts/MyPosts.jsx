import React from 'react';

import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = (props) => {

  let postsData = [
    {id: 1, message: 'Hi! How are you?', likes: 23, dislikes: 0},
    {id: 2, message: 'Its my first post!', likes: 11, dislikes: 0},
    {id: 3, message: 'Hello, everyone.', likes: 0, dislikes: 0}
  ]

  let postsElements = postsData
      .map ( (post) => <Post message={post.message} likes={post.likes} dislikes={post.dislikes} />
  );

	return (
      <div>
        <h3>My posts</h3>
        <div>
          <div>
            <textarea></textarea>
          </div>
          <div>
            <button>Add post</button>
          </div>
        </div>
        <div className={classes.posts}>
          { postsElements }
        </div>
      </div>
    );
}

export default MyPosts;