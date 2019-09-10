import React from 'react';
import {NavLink} from 'react-router-dom';

import classes from './DialogItem.module.css';

const DialogItem = (props) => {
		let path = "/Dialogs/" + props.id;
			return (
			<li><NavLink to={path}>{props.name}</NavLink></li>
		);
}



export default DialogItem;