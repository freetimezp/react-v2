import React from 'react';

import classes from './MessageItem.module.css';

const MessageItem = (props) => {
	return (
		<li className={classes.dialog}>{props.message}</li>
	);
}

export default MessageItem;