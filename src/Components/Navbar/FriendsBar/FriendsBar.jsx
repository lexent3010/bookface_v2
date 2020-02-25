import React from 'react';
import s from './Friends.module.css'
import FriendsBarItem from "./FriendsBarItem/FriendsBarItem";

const FriendsBar = (props) => {
    let usersData =
        props.state.navBar.map(u => (<FriendsBarItem key={u.id} id={u.id} avatar={u.avatar} name={u.name}/>));

    return (
        <div className={s.friends}>
            {usersData}
        </div>
    )
};

export default FriendsBar;