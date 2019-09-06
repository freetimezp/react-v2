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

	let DialogsData = [
		{id: 1, name: 'Dimych'},
		{id: 2, name: 'Andrew'},
		{id: 3, name: 'Anna'},
		{id: 4, name: 'Semen'}
	]

	let MessagesData = [
		{id: 1, message: 'Hi'},
		{id: 2, message: 'Yo'},
		{id: 3, message: 'Ho'}
	]


	return (
		<div className={classes.dialogs}>
			<ul className={classes.dialogsItems}>
				<DialogItem name={DialogsData[0].name} id={DialogsData[0].id} />
				<DialogItem name={DialogsData[1].name} id={DialogsData[1].id} />
				<DialogItem name={DialogsData[2].name} id={DialogsData[2].id} />
				<DialogItem name={DialogsData[3].name} id={DialogsData[3].id} />
			</ul>
			<ul className={classes.messages}>
				<MessageItem message={MessagesData[0].message} />
				<MessageItem message={MessagesData[1].message} />
				<MessageItem message={MessagesData[2].message} />
			</ul>
		</div>
		);

}

export default Dialogs;