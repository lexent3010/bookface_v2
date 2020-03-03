import React from 'react';
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/dialogsPageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return {
  state: state.dialogsPage
    }
};

let mapDispatchToProps = (dispatch) => {
  return {
      updateNewMessageText: (text) => {
          dispatch(updateNewMessageTextActionCreator(text))
      },
      sendMessage: () => {
          dispatch(sendMessageActionCreator())
      }
  }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;