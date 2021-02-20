import React from 'react';
import Avatar from "../../AvatarBlock/Avatar/Avatar";
import s from './Post.module.css'


const Post = (props) => {
    return (
        <div className={s.post}>
            <div>
                <Avatar avatar={props.avatar}/>
            </div>
            <div className={s.text}>
                {props.postText}
            </div>
            <div>
                Like: {props.likeCount}
            </div>
        </div>
    )
};

export default Post;