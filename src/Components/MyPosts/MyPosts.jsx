import React from 'react';

import Post from './Post/Post.jsx'

import classes from './MyPosts.module.css';

import {addPostActionCreator,updateNewPostTextActionCreator} from './../../redux/profile-reducer.js';

const MyPosts = (props) => {

	const PostsElements = props.PostsData
	 .map ( post => <Post message={post.message} icon={post.icon} likesCount={post.likesCount} key={post.id.toString()} /> );

	let newPostElement = React.createRef();

	let sendPost = () => {
		props.dispatch( addPostActionCreator() );
	};

	let onPostChange = () => {
		let newText = newPostElement.current.value;
		let action = updateNewPostTextActionCreator(newText);
		props.dispatch(action);
	}

	return (
		<div className={classes.myPosts}>
			<h1 className={classes.myPosts_title}>My posts</h1>
			<div className={classes.newPost}>
				<textarea 
					ref={ newPostElement } 
					onChange={ onPostChange }
					value={props.newPostText} 
				/>
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

