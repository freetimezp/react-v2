import React from 'react';

import classes from './Friend.module.css';

const Friend = (props) => {
	return (
				 <li className={classes.friends_list__item} >
				 	<img className={classes.friends__icon} src={props.icon} alt={props.alt} />
				 	<span className={classes.friends__text}>{props.name}</span>
				 </li>
	);
}

export default Friend;