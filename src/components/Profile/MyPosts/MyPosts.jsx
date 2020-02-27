import React from 'react';

import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = (props) => {

  let postsData = [
    {id: 1, message: 'Hi! How are you?', likesCount: 23, dislikesCount: 0},
    {id: 2, message: 'Its my first post!', likesCount: 11, dislikesCount: 0},
    {id: 3, message: 'Hello, everyone.', likesCount: 0, dislikesCount: 0}
  ]

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
          <Post message={postsData[0].message} likesCount={postsData[0].likesCount} dislikesCount={postsData[0].dislikesCount} />
          <Post message={postsData[1].message} likesCount={postsData[1].likesCount} dislikesCount={postsData[1].dislikesCount} />
          <Post message={postsData[2].message} likesCount={postsData[2].likesCount} dislikesCount={postsData[2].dislikesCount} />
        </div>
      </div>
    );
}

export default MyPosts;