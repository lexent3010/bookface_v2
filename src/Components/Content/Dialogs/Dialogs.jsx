import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogsItem/DialogItem";
import MessageItem from "./MessagesItem/MessageItem";

const Dialogs = (props) => {

    let messageText = React.createRef();

    let updateNewMessageText = () => {
        let text = messageText.current.value;
        props.updateNewMessageText(text);
    };

    let sendMessage = () => {
        props.sendMessage();
    };

    let dialogsData =
        props.state.dialogs.map(d => <div key={d.id} className={s.dialogElement}><DialogItem  id={d.id} name={d.name} avatar={d.avatar}/></div>);

    let messagesData =
        props.state.messages.map(m => <div key={m.id} className={s.messageItem}><MessageItem id={m.id} message={m.message}/></div>);

    return (
        <div className={s.messagesPage}>
            <div className={s.dialogs}>
                {dialogsData}
            </div>
            <div className={s.messages}>
                {messagesData}
                <div className={s.addMessage}>
                    <div>
                        <textarea value={props.state.newMessageText}
                                  onChange={updateNewMessageText}
                                  ref={messageText}
                                  placeholder={"Write message here"}/>
                    </div>
                    <div>
                        <button onClick={sendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;