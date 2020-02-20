import React from 'react';

import classes from './Post.module.css';

const Post = (props) => {
	return (
      <div>
        <div className={classes.item}>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTwzgpC3-2xXf_DoskhluWftL-il2I84vfx0gCTj6JnaXitDac5' alt='image' />
          <p>{props.message}</p>
        </div>
        <div>
          <span>like</span>
          <span>dislike</span>
        </div>
      </div>
    );
}

export default Post;