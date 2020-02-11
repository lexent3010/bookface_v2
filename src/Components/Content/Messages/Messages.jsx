import React from 'react';
import s from './Messages.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialogItem}>
            <img src={props.avatar} alt=""/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};

const MessageItem = (props) => {
  return (
      <div className={s.message}>
          {props.message}
      </div>
  )
};

const Messages = (props) => {

    let dialogsData =
        props.state.dialogs.map(d => <DialogItem id={d.id} name={d.name} avatar={d.avatar}/>);

    let messagesData =
        props.state.messages.map(m => <MessageItem id={m.id} message={m.message}/>);

    return (
        <div className={s.messagesPage}>
            <div className={s.dialogs}>
                {dialogsData}
            </div>
            <div className={s.messages}>
                {messagesData}
            </div>
        </div>
    )
};

export default Messages;