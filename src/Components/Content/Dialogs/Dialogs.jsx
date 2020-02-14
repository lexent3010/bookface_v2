import React from 'react';
import s from './Messages.module.css'
import DialogItem from "./DialogsItem/DialogItem";
import MessageItem from "./MessagesItem/MessageItem";


const Dialogs = (props) => {

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

export default Dialogs;