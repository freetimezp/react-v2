import React from 'react';
import {NavLink} from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem.jsx';
import MessageItem from './MessageItem/MessageItem.jsx';
import {sendMessageActionCreator,updateNewMessageTextActionCreator} from './../../../redux/dialogs-reducer.js';
import Dialogs from './Dialogs.jsx';

const DialogsContainer = (props) => {

 let state = props.store.getState();

	let sendMessage = () => {
		props.store.dispatch( sendMessageActionCreator() );
	};

	let onMessageChange = (newMessage) => {
		props.store.dispatch( updateNewMessageTextActionCreator(newMessage) );
	};

	return (
  <Dialogs
  	updateNewMessageText={onMessageChange}
  	sendMessage={sendMessage}
  	dialogsPage={state.dialogsPage}
   />
		);

}

export default DialogsContainer;