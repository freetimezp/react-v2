import React from 'react';
import {reduxForm, Field} from 'redux-form';

import classes from './Dialogs.module.css';

import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';

const Dialogs = (props) => {

	let dialogsElements = props.dialogsPage.dialogsData
			.map( (dialog) => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} /> );

	let messagesElements = props.dialogsPage.messagesData
			.map( (message) => <Message message={message.message} key={message.id} /> );

	let newMessageElement = React.createRef();

  let addNewMessage = (values) => {
  	props.addMessage(values.newMessageBody);
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
	    			<AddMessageFormRedux onSubmit={addNewMessage} />
	    		</div>
	    	</div>
    	</div>
		);
}

const AddMessageForm = (props) => {
	return (
  	<form onSubmit={props.handleSubmit}>
  		<div>
  			<Field component={"textarea"} name={"newMessageBody"} placeholder={"Enter your message"} />
      </div>
      <div>
        <button>Add message</button>
      </div>
		</form>
		)
}

const AddMessageFormRedux = reduxForm({
	form: "dialogAddMessageForm"
})(AddMessageForm)

export default Dialogs;