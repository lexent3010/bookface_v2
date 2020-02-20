import s from "../Dialogs.module.css";
import React from "react";

const MessageItem = (props) => {

    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
};

export default MessageItem;