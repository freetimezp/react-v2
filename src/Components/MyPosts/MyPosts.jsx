import React from 'react';

import Post from './Post/Post.jsx'

import classes from './MyPosts.module.css';

const MyPosts = () => {
	return (
		<div className='myPosts'>
			<h1 className='myPosts_title'>My posts</h1>
			<div className='NewPost'>
				<textarea>
				</textarea>
			</div>
			<div className='MyPosts_button'>
				<a href='#s'>Send</a>
			</div>
			<div className='Posts'>
				<Post />
			</div>
		</div>
		);
}

export default MyPosts;

