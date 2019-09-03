import React from 'react';

import User from './User.jsx';
import Message from './Message.jsx'

import classes from './Dialogs.module.css';

const Dialogs = (props) => {
	return (
		<div className={classes.dialogs_content_wrapper}>
		 <h1 className={classes.dialogs_content__title}>Dialogs</h1>
			<div className={classes.dialogs_content}>
				<div className={classes.dialogs}>
					<div className={classes.dialogs_items}>
					 <User userName='Dimych' userPath='Dimych' />
					 <User userName='Andrew' userPath='Andrew' />
      <User userName='Sveta' userPath='Sveta' />
      <User userName='Sasha' userPath='Sasha' />
      <User userName='Nastya' userPath='Nastya' />
      <User userName='Eugen' userPath='Eugen' />
      <User userName='Ivan' userPath='Ivan' />
					</div>
				</div>

				<div className={classes.messages}>
				 <div className={classes.messages_items}>
				 	<Message 
				 	 userName='Eugen' 
				 	 iconPath='https://i.pinimg.com/736x/33/b8/69/33b869f90619e81763dbf1fccc896d8d--lion-logo-modern-logo.jpg' 
				 	 messageText='I can read your message!'
				 	 />
				 	<Message 
				 	 userName='Nastya' 
				 	 iconPath='https://thumbs.dreamstime.com/z/logo-photographer-silhouette-man-mustache-beard-camera-landscape-lens-62538482.jpg' 
				 	 messageText='Hello!'
				 	 />
				 	<Message 
				 	 userName='Ivan' 
				 	 iconPath='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRjPhCc0g7DjgtJV7qybb8wPTTWoaJMKhcdkwP7SyZFCLGlimEk' 
				 	 messageText='Yo!'
				 	 />
				 </div>
				</div>
			</div>
		</div>
		);
}

export default Dialogs;