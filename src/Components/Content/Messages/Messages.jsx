import React from 'react';
import s from './Messages.module.css'
import {NavLink} from "react-router-dom";


const Messages = (props) => {
    return (
        <div className={s.messagesPage}>
            <div className={s.dialogs}>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/1'>Pashok</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2'>Polina</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'>Vova</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    i am kachok
                </div>
                <div className={s.message}>
                    ti gde?
                </div>
                <div className={s.message}>
                    Poidem buhat`
                </div>
            </div>
        </div>
    )
};

export default Messages;