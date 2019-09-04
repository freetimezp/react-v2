import React from 'react';

import User from './User.jsx';
import Message from './Message.jsx';

import classes from './Dialogs.module.css';

const Dialogs = (props) => {

	let DialogsData = [
		{id: 1, userName: 'Dimych', userPath: 'Dimych' },
		{id: 2, userName: 'Andrew', userPath: 'Andrew' },
		{id: 3, userName: 'Sveta', userPath: 'Sveta' },
		{id: 4, userName: 'Sasha', userPath: 'Sasha' },
		{id: 5, userName: 'Nastya', userPath: 'Nastya' },
		{id: 6, userName: 'Eugen', userPath: 'Eugen' },
		{id: 7, userName: 'Ivan', userPath: 'Ivan' }
	];

	let MessagesData = [
		{id: 1, 
			userName: 'Eugen', 
			messageText: 'I can read your message!', 
			iconPath: 'https://i.pinimg.com/736x/33/b8/69/33b869f90619e81763dbf1fccc896d8d--lion-logo-modern-logo.jpg' },
		{id: 2, 
			userName: 'Nastya', 
			messageText: 'Hello!',
			iconPath: 'https://thumbs.dreamstime.com/z/logo-photographer-silhouette-man-mustache-beard-camera-landscape-lens-62538482.jpg' },
		{id: 3, 
			userName: 'Ivan', 
			messageText: 'Yo!',
			iconPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRjPhCc0g7DjgtJV7qybb8wPTTWoaJMKhcdkwP7SyZFCLGlimEk' },
	];

	let DialogsElements = DialogsData.map( Dialog =>
			<User userName={Dialog.userName} userPath={Dialog.userPath} />
	);

	// let MessagesElements = MessagesData.map( Message => 
	// 	<Message userName={Message.userName} iconPath={Message.iconPath} messageText={Message.messageText} /> 
	// );


	return (
		<div className={classes.dialogs_content_wrapper}>
		 <h1 className={classes.dialogs_content__title}>Dialogs</h1>
			<div className={classes.dialogs_content}>
				<div className={classes.dialogs}>
					<div className={classes.dialogs_items}>
						{DialogsElements}
					</div>
				</div>

				<div className={classes.messages}>
				 <div className={classes.messages_items}>
		    {DialogsElements}
				 </div>
				</div>
			</div>
		</div>
		);
}

export default Dialogs;