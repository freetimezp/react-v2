import React from 'react';

import DialogItem from './DialogItem/DialogItem.jsx';
import MessageItem from './MessageItem/MessageItem.jsx';

import classes from './Dialogs.module.css';

const Dialogs = (props) => {

	const DialogsElements = props.dialogsPage.DialogsData
	 .map( (dialog) =>	<DialogItem name={dialog.name} id={dialog.id} key={dialog.id.toString()} /> ); 

	const MessagesElements = props.dialogsPage.MessagesData
	 .map( (text) =>	<MessageItem message={text.message} id={text.id} messageIcon={text.messageIcon} key={text.id.toString()} alt={text.logo} /> ); 

	let newMessageText = props.newMessageText;
	
	let sendMessage = () => {
		props.sendMessage();
	};

	let onMessageChange = (event) => {
		let newMessage = event.target.value;
		props.updateNewMessageText(newMessage);
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
					 	<textarea 
					 		value={ newMessageText }
					 		onChange={ onMessageChange }
					 		placeholder= 'Enter your message'
					 		></textarea>
					 </div>  
					 <div className={classes.myPosts_button}>
						 <button onClick={ sendMessage }>Send message</button>
				 	</div>
					</div>
				</div>
			</div>
		);

}

export default Dialogs;