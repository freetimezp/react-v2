import React from 'react';

import Post from './Post/Post.jsx'

import classes from './MyPosts.module.css';

const MyPosts = () => {

	let PostsData = [
		{id: 1, message: 'Hi, how are you?', icon: 'https://pngicon.ru/file/uploads/bojya_korovka-256x201.png', likesCount: '231'},
		{id: 2, message: 'Thanks, I am fine. Nice to see you!', icon: 'http://rylik.ru/uploads/posts/2017-06/1498027622_butterflies-10-03.png', likesCount: '12'},
		{id: 3, message: 'Привет. Что делаем?', icon: 'http://foodika.ru/wp-content/uploads/2018/01/oooo.plus_341-2.png', likesCount: '23'},
	]

	return (
		<div className={classes.myPosts}>
			<h1 className={classes.myPosts_title}>My posts</h1>
			<div className={classes.newPost}>
				<textarea>
				</textarea>
			</div>
			<div className={classes.myPosts_button}>
				<a href='#s'>Send</a>
			</div>
			<div className={classes.posts}>
				<Post message={PostsData[0].message} icon={PostsData[0].icon} likesCount={PostsData[0].likesCount}/>
				<Post message={PostsData[1].message} icon={PostsData[1].icon} likesCount={PostsData[1].likesCount}/>
				<Post message={PostsData[2].message} icon={PostsData[2].icon} likesCount={PostsData[2].likesCount}/>
			</div>
		</div>
		);
}

export default MyPosts;

