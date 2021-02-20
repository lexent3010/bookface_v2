import React from 'react';
import s from "../Profile.module.css";
import Avatar from "./Avatar/Avatar";


const AvatarBlock = (props) => {
    return (
        <div>
            <div className={s.avatar}>
                <Avatar avatar={props.avatar}/>
            </div>
            <div className={s.name}>
                {/*Ilya Axakov*/}{props.name}
            </div>
        </div>
    )
};

export default AvatarBlock;