import React from 'react';
import {NavLink} from 'react-router-dom';

import DialogItem from './DialogItem/DialogItem.jsx';
import MessageItem from './MessageItem/MessageItem.jsx';

import classes from './Dialogs.module.css';


const Dialogs = (props) => {

	const DialogsElements = props.State.DialogsData
	 .map( (dialog) =>	<DialogItem name={dialog.name} id={dialog.id} key={dialog.id.toString()} /> ); 

	const MessagesElements = props.State.MessagesData
	 .map( (text) =>	<MessageItem message={text.message} id={text.id} messageIcon={text.messageIcon} key={text.id.toString()} alt={text.logo} /> ); 

	return (
		<div className={classes.dialogs}>
			<ul className={classes.dialogsItems}>
				{	DialogsElements }
			</ul>
			<ul className={classes.messages}>
				{ MessagesElements }
			</ul>
		</div>
		);

}

export default Dialogs;