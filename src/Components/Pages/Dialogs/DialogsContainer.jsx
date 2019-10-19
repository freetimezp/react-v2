import React from 'react';
import {sendMessageActionCreator,updateNewMessageTextActionCreator} from './../../../redux/dialogs-reducer.js';
import Dialogs from './Dialogs.jsx';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
 return {
  dialogsPage: state.dialogsPage,
  newMessageText: state.dialogsPage.newMessageText
  }
}

let mapDispatchToProps = (dispatch) => {
	 return {
   updateNewMessageText: (newMessage) => {
    dispatch(updateNewMessageTextActionCreator(newMessage));
   },
   sendMessage: () => {
   	dispatch(sendMessageActionCreator());
   }
	 }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;