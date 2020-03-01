import React from 'react';

import classes from './Friends.module.css';

import Friend from './Friend/Friend.jsx';

const Friends = (props) => {

	let friendsData = [
		{ id: 1, 
			image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSX5QB95GTz-f5Bug8uPrAhzql2XZqHKAk_WqFBP7wqes3KZN5z', 
			name: 'Andrew'},
		{ id: 2, 
			image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRAdQi3l1focydNX68HT6Zrs91T0FAZTdCVQWXBkb2VZdaHSOO6', 
			name: 'Sasha'},
		{ id: 3, 
			image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhW2--5Tf4McPHAV2sbBgV17QzMMPceHQgrA6sv_Yy8z6IdJns', 
			name: 'Sveta'}
	]

	let friendsElements = friendsData
      .map ( (friend) => <Friend image={friend.image} name={friend.name} />
  );

	return (
			<div className={classes.friends}>
    		<div>
    		  <h3 className={classes.friends_title}>Friends</h3>
    		</div>
    		<div className={classes.friends_list}>
    			{ friendsElements }
    		</div>
    	</div>
		);
};

export default Friends;



