import React from 'react';

import Post from './Post/Post.jsx'

import classes from './MyPosts.module.css';

const MyPosts = () => {
	return (
		<div className={classes.myPosts}>
			<h1 className={classes.myPosts_title}>My posts</h1>
			<div className={classes.NewPost}>
				<textarea>
				</textarea>
			</div>
			<div className={classes.MyPosts_button}>
				<a href='#s'>Send</a>
			</div>
			<div className={classes.Posts}>
				<Post message='Hi, how are you?' icon='https://pngicon.ru/file/uploads/bojya_korovka-256x201.png' like_count='231'/>
				<Post message='Thanks, I am fine. Nice to see you!' icon='http://rylik.ru/uploads/posts/2017-06/1498027622_butterflies-10-03.png' like_count='12' />
				<Post message='Привет. Что делаем?' icon='http://foodika.ru/wp-content/uploads/2018/01/oooo.plus_341-2.png' like_count='23'/>
			</div>
		</div>
		);
}

export default MyPosts;

