import React from 'react';

import Post from './Post/Post.jsx'

import classes from './MyPosts.module.css';

const MyPosts = (props) => {

	const PostsElements = props.PostsData
	 .map ( post => <Post message={post.message} icon={post.icon} likesCount={post.likesCount} key={post.id.toString()} /> );

	let newPostElement = React.createRef();

	let sendPost = () => {
		let text = newPostElement.current.value;
		props.addPost(text);
		newPostElement.current.value = '';
	};

	return (
		<div className={classes.myPosts}>
			<h1 className={classes.myPosts_title}>My posts</h1>
			<div className={classes.newPost}>
				<textarea ref={newPostElement}></textarea>
			</div>
			<div className={classes.myPosts_button}>
				<button onClick={ sendPost }>Send post</button>
			</div>
			<div className={classes.posts}>
				{ PostsElements }
			</div>
		</div>
		);
}

export default MyPosts;

