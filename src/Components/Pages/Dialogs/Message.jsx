import React from 'react';

import classes from './Message.module.css';

const Message = (props) => {
	return (
		<div className={classes.messages_item}>
 	 <div className={classes.messages_item__user}>
 	  <img src={props.iconPath} className={classes.messages_item__user_icon} alt='icon' />
 	  <span>{props.userName}</span>
 	 </div>
 	 <div className={classes.message}> 
 	 	<p>{props.messageText}</p>
 	 </div>
 	</div>
		);
}

export default Message;