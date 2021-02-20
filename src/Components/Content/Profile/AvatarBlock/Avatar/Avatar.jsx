import React from 'react';
import s from "../../Profile.module.css";


const Avatar = (props) => {
    return (
        <div className={s.avatar}>
            {/*<img src="https://pbs.twimg.com/profile_images/3033480309/2b618bfdb579a5f3bc5234dfb0599256.jpeg" alt="avatar"/>*/}
            <img src={props.avatar} alt="avatar"/>
        </div>
    )
};

export default Avatar;