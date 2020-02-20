import React from 'react';

import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = () => {
	return (
      <div>
        <h3>My posts</h3>
        <div>
          <textarea></textarea>
          <button>Add post</button>
        </div>
        <div className={classes.posts}>
          <Post message='Hi! How are you?' />
          <Post message='Its my first post!' />
          <Post message='Hello, everyone.' />
        </div>
      </div>
    );
}

export default MyPosts;