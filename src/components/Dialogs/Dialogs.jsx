import React from 'react';

import {NavLink} from "react-router-dom";

import classes from './Dialogs.module.css';

import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';


const Dialogs = (props) => {
	
	let dialogsData = [
		{id: 1, name: 'Andrew'},
		{id: 2, name: 'Dmitry'},
		{id: 3, name: 'Sveta'},
		{id: 4, name: 'Sasha'}
	];

	let dialogsElements = dialogsData
			.map( (dialog) => <DialogItem name={dialog.name} id={dialog.id} />
	);

	let messagesData = [
		{id: 1, message: 'Hi!'},
		{id: 2, message: 'How is your life?'},
		{id: 3, message: 'Yo Yo'}
	]

	let messagesElements = messagesData
			.map( (message) => <Message message={message.message} />
	);

	return (
			<div>
				<div className={classes.title}>Dialogs \ Messages</div>
	    	<div className={classes.dialogs}>
	    		<div className={classes.dialogs_items}>
	    			{ dialogsElements }
	    		</div>
	    		<div className={classes.messages}>
	    			{ messagesElements }
	    		</div>
	    	</div>
    	</div>
		);
}

export default Dialogs;