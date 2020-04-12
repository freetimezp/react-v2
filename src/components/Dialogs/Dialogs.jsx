import React from 'react';

import {NavLink} from "react-router-dom";

import classes from './Dialogs.module.css';

import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';

import {addMessageActionCreator,updateNewMessageTextActionCreator} from './../../redux/dialogs-reducer.js';

const Dialogs = (props) => {

	let dialogsElements = props.dialogsPage.dialogsData
			.map( (dialog) => <DialogItem name={dialog.name} id={dialog.id} /> );

	let messagesElements = props.dialogsPage.messagesData
			.map( (message) => <Message message={message.message} /> );

	let newMessageElement = React.createRef();

  let addNewMessage = () => {
  	props.addMessage();
  }

  let changeMessage = (newMessageElement) => {
    let text = newMessageElement.target.value;
    props.updateNewMessageText(text)
  }

	return (
			<div>
				<div className={classes.title}>Dialogs \ Messages</div>
	    	<div className={classes.dialogs}>
	    		<div className={classes.dialogs_items}>
	    			{ dialogsElements }
	    		</div>
	    		<div className={classes.messages}>
	    			{ messagesElements }
	    			<div>
			    		<div>
		            <textarea 
		            	onChange={ changeMessage } 
		            	ref={ newMessageElement } 
		            	value={ props.dialogsPage.newMessageText }/>
		          </div>
		          <div>
		            <button onClick={ addNewMessage }>Add message</button>
		          </div>
	    			</div>
	    		</div>
	    	</div>
    	</div>
		);
}

export default Dialogs;