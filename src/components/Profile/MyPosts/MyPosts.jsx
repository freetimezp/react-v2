import React from 'react';

import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = () => {
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
          <Post message='Hi! How are you?' likeCount='23' dislikeCount='0' />
          <Post message='Its my first post!' likeCount='11' dislikeCount='0' />
          <Post message='Hello, everyone.' likeCount='0' dislikeCount='0' />
        </div>
      </div>
    );
}

export default MyPosts;