import React from 'react';
import Avatar from "../../AvatarBlock/Avatar/Avatar";


const Post = (props) => {
    return (
        <div>
            <div>
                <Avatar/>
            </div>
            <div>
                {props.postText}
            </div>
        </div>
    )
};

export default Post;