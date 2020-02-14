import React from 'react';
import s from './Friends.module.css'
import Friend from "./Friend/Friend";

const Friends = (props) => {

    let usersData =
        props.state.map(u => (<Friend id={u.id} avatar={u.avatar} name={u.name}/>));

    return (
        <div className={s.friends}>
            {usersData}
        </div>
    )
};

export default Friends;