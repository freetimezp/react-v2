import React from 'react';

import {NavLink} from "react-router-dom";

import classes from './Dialogs.module.css';

const DialogItem = (props) => {
	let path = "/dialogs/" + props.id;
	return (
			<div className={classes.dialog}>
	    	<NavLink to={path}>{props.name}</NavLink>
	    </div>
		);
}

const Message = (props) => {
	return (
			<div className={classes.message}>
	    	{props.message}
	    </div>
		);
}


const Dialogs = (props) => {

	let dialogsData = [
		{id: 1, name: 'Andrew'},
		{id: 2, name: 'Dmitry'},
		{id: 3, name: 'Sveta'},
		{id: 4, name: 'Sasha'},
	];

	let messagesData = [
		{id: 1, message: 'Hi!'},
		{id: 2, message: 'How is your life?'},
		{id: 3, message: 'Yo Yo'}
	]

	return (
			<div>
				<div className={classes.title}>Dialogs \ Messages</div>
	    	<div className={classes.dialogs}>
	    		<div className={classes.dialogs_items}>
	    			<DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
	    			<DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
	    			<DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
	    			<DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
	    		</div>
	    		<div className={classes.messages}>
	    			<Message message={messagesData[0].message} />
	    			<Message message={messagesData[1].message} />
	    			<Message message={messagesData[2].message} />
	    		</div>
	    	</div>
    	</div>
		);
}

export default Dialogs;