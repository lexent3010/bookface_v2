import React from 'react';
import s from './Messages.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div>
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

    let dialogs = [
        {id:1, name:'Pashok'},
        {id:2, name:'Polina'},
        {id:3, name:'Vovan'}
    ];

    let messages = [
        {id:1, message:'i am kachok'},
        {id:2, message:'ti gde?'},
        {id:3, message:'Poidem buhat`?'}
    ];

    let dialogsData =
        dialogs.map((d) => (<DialogItem id={d.id} name={d.name}/>));

    let messagesData =
        messages.map((m) => (<MessageItem id={m.id} message={m.message}/>));

    return (
        <div className={s.messagesPage}>
            <div className={s.dialogs}>
                {dialogsData}
                {/*<DialogItem name="Pashok" id="1"/>
                <DialogItem name="Polina" id="2"/>
                <DialogItem name="Vova" id="3"/>*/}
            </div>
            <div className={s.messages}>
                {messagesData}
               {/* <MessageItem message={"i am kachok"}/>
                <MessageItem message={"ti gde?"}/>
                <MessageItem  message={"Poidem buhat`?"}/>*/}
            </div>
        </div>
    )
};

export default Messages;