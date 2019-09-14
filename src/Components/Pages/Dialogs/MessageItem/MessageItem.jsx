import React from 'react';

import classes from './MessageItem.module.css';

const MessageItem = (props) => {
	return (
		<div className={classes.messageWrapper}>
			<img className={classes.messageIcon} src={props.messageIcon} alt='logo' />
			<li className={classes.message}>{props.message}</li>
		</div>
		
	);
}

export default MessageItem;