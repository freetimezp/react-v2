import React from 'react';
import {NavLink} from 'react-router-dom';

// import User from './User.jsx';
// import Message from './Message.jsx';

import classes from './Dialogs.module.css';


const DialogItem = (props) => {
	let path = "/Dialogs/" + props.id;
	return (
		<li><NavLink to={path}>{props.name}</NavLink></li>
		);
}

const MessageItem = (props) => {
	return (
		<li className={classes.dialog}>{props.message}</li>
		);
}

const Dialogs = (props) => {

	const DialogsData = [
		{id: 1, name: 'Dimych'},
		{id: 2, name: 'Andrew'},
		{id: 3, name: 'Anna'},
		{id: 4, name: 'Semen'}
	];

	const DialogsElements = DialogsData
	 .map( (dialog) =>	<DialogItem name={dialog.name} id={dialog.id} key={dialog.id.toString()} /> ); 

	const MessagesData = [
		{id: 1, message: 'Hi'},
		{id: 2, message: 'Yo'},
		{id: 3, message: 'Ho'}
	];

	const MessagesElements = MessagesData
	 .map( (text) =>	<MessageItem name={text.message} id={text.id} key={text.id.toString()} /> ); 

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