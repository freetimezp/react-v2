import React from 'react';

import {NavLink} from "react-router-dom";

import classes from './Dialogs.module.css';

import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';


const Dialogs = (props) => {

	let dialogsData = props.dialogsData;
	let messagesData = props.messagesData;

	let dialogsElements = dialogsData
			.map( (dialog) => <DialogItem name={dialog.name} id={dialog.id} />
	);

	let messagesElements = messagesData
			.map( (message) => <Message message={message.message} />
	);

	let newMessageElement = React.createRef();

  let addMessage = () => {
    let text = newMessageElement.current.value;
    alert (text);
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
		            <textarea ref={ newMessageElement }></textarea>
		          </div>
		          <div>
		            <button onClick={ addMessage }>Add message</button>
		          </div>
	    			</div>
	    		</div>
	    	</div>
    	</div>
		);
}

export default Dialogs;