import React from 'react';
import {sendMessage, updateNewMessageText} from "../../../redux/dialogsPageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withRedirect} from "../../../hoc/HOCs";
import {compose} from "redux";



let mapStateToProps = (state) => {
    return {
  state: state.dialogsPage
    }
};


export default compose(
    connect(mapStateToProps, {updateNewMessageText, sendMessage}),
    withRedirect
)(Dialogs);

