import React from 'react';

import Dialogs from './Dialogs.jsx';
import {addMessageActionCreator,updateNewMessageTextActionCreator} from './../../redux/dialogs-reducer.js';

import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {withAuthRedirect} from './../../hoc/withAuthRedirect.js';


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


 
let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (AuthRedirectComponent) 
 
export default DialogsContainer;