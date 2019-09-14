import React from 'react';

import Friend from './Friend.jsx';

import classes from './Friends.module.css';

const Friends = (props) => {
	
 
 let FriendsElements = props.FriendsData
  .map( f => <Friend name={f.name} icon={f.icon} alt={f.alt} key={f.id.toString()} /> );

 return (
			<div className={classes.friends_wrapper}>
				<h3 className={classes.friends__title}>Friends</h3>
				<ul className={classes.friends_list}>
					{ FriendsElements }
				</ul>
			</div>
	);
}



export default Friends;