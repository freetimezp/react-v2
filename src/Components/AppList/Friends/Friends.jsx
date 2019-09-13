import React from 'react';

import Friend from './Friend.jsx';

import classes from './Friends.module.css';

const Friends = (props) => {
	
	// let	FriendsData: [
 // 			{id: 1, name: 'Andrew', icon: 'https://bower.io/img/bower-logo.png' },
 // 			{id: 2, name: 'Sasha', icon: 'https://bower.io/img/bower-logo.png' },
 // 			{id: 3, name: 'Sveta', icon: 'https://bower.io/img/bower-logo.png' }
 // 		]

	return (
			<div className={classes.friends_wrapper}>
				<h3 className={classes.friends__title}>Friends</h3>
				<ul className={classes.friends_list}>
				 <Friend name= "Andrew" icon="https://bower.io/img/bower-logo.png" />
				 <Friend name= "Sasha" icon="https://bower.io/img/bower-logo.png" />
				 <Friend name= "Sveta" icon="https://bower.io/img/bower-logo.png" />
				</ul>
			</div>
	);
}



export default Friends;