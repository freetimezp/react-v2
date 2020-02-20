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
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    );
}

export default MyPosts;