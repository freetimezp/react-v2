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

	let newMessageElement = React.createRef();
	
	let sendMessage = () => {
		let text = newMessageElement.current.value;
		alert(text);
	};

	return (
			<div className={classes.dialogs}>
				<ul className={classes.dialogsItems}>
					{	DialogsElements }
				</ul>
				<div className={classes.messages_wrapper}>
					<ul className={classes.messages}>
						{ MessagesElements }
					</ul>
					<div className={classes.newPost_wrapper}>
						<div className={classes.newPost}>
					 	<textarea ref={newMessageElement}></textarea>
					 </div>
					 <div className={classes.myPosts_button}>
						 <button onClick={ sendMessage }>Send post</button>
				 	</div>
					</div>
				</div>
			</div>
		);

}

export default Dialogs;