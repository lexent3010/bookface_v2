import React from 'react';
import s from './Friends.module.css'
import Friend from "./Friend/Friend";

const Friends = (props) => {
    debugger
    let usersData =
        props.state.navBar.map(u => (<Friend id={u.id} avatar={u.avatar} name={u.name}/>));

    return (
        <div className={s.friends}>
            {usersData}
        </div>
    )
};

export default Friends;