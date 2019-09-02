import React from 'react';

import classes from './Post.module.css';

const Post = (props) => {
	return (
		<div>
			<div className={classes.post}>
		 	<img className={classes.post_icon}
		 		src={props.icon} 
		 		alt='avatar'
		 		/>
		 	<p className={classes.post_text}>{props.message}</p>
			</div>
			<div className={classes.like}>
				<span className={classes.like_count}>{props.likesCount}</span>
		 	<span className={classes.post_button}>Like</span>
		 </div>
		</div>
		);
}

export default Post;




