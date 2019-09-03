import React from 'react';
import {NavLink} from 'react-router-dom';

import classes from './User.module.css';

const User = (props) => {
	let path = "/Dialogs/" + props.userPath;
	return (
		 <div className={classes.user}>
			 <NavLink to={path}>{props.userName}</NavLink>
			</div>
		);
}



export default User;