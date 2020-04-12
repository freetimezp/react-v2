import React from 'react';

import Dialogs from './Dialogs.jsx';
import {addMessageActionCreator,updateNewMessageTextActionCreator} from './../../redux/dialogs-reducer.js';

import {connect} from 'react-redux';

let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage,
		messagesData: state.dialogsPage.messagesData
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		addMessage: () => {
			dispatch(addMessageActionCreator());
		},
		updateNewMessageText: (text) => {
			dispatch(updateNewMessageTextActionCreator(text));
		}
	}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs) 
 
export default DialogsContainer;