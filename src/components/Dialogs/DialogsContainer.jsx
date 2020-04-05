import React from 'react';

import Dialogs from './Dialogs.jsx';
import {addMessageActionCreator,updateNewMessageTextActionCreator} from './../../redux/dialogs-reducer.js';


const DialogsContainer = (props) => {

	let state = props.store.getState().dialogsPage;

  let addNewMessage = () => {
   props.store.dispatch( addMessageActionCreator() );
  }

  let changeMessage = (text) => {
    props.store.dispatch( updateNewMessageTextActionCreator(text) );
  }

	return (
			<Dialogs 
			  addMessage={addNewMessage}
				updateNewMessageText={changeMessage}
				messagesData={state.messagesData}
      	dialogsPage={state} />
		);
}
 
export default DialogsContainer;