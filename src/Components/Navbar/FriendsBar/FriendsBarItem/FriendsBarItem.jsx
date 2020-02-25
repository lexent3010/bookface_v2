import React from 'react';
import s from '../Friends.module.css'
import {NavLink} from "react-router-dom";

const FriendsBarItem = (props) => {
    return (
        <div className={s.friend}>
            <NavLink to={'/user/' + props.id}>
                <div className={s.avatar}>
                    <img src={props.avatar} alt=""/>
                </div>
                <div className={s.name}>
                    {props.name}
                </div>
            </NavLink>
        </div>
    )
};

export default FriendsBarItem;