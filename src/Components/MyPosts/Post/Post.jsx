import React from 'react';

import classes from './Post.module.css';

const Post = () => {
	return (
		<div>
			<div className={classes.post}>
		 	<img className={classes.post_icon}
		 		src='https://pngicon.ru/file/uploads/bojya_korovka-256x201.png' 
		 		alt='avatar'
		 		/>
		 	<p>Post 1</p>
			</div>
			<div>
		 	<span>Like</span>
		 </div>
		</div>
		);
}

export default Post;




