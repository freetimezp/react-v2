import React from 'react';

import classes from './Friend.module.css';

const Friend = (props) => {
	return (
		<div>
			<div  className={classes.friend_item}>
	     	<div  className={classes.friend_image}>
	    		<img src={props.image} />
	    	</div>
	    	<div  className={classes.friend_name}>
	    		{props.name}
    		</div>
    	</div>
		</div>
		);
};


export default Friend;