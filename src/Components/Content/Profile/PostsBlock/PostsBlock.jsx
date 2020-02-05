import React from 'react';
import s from "../Profile.module.css";
import Post from "./Post/Post";


const PostsBlock = (props) => {
    return (
        <div>
            <div className={s.textarea}>
                <textarea name="" placeholder={"Add post"} cols="70" rows="10"></textarea>
                <button>Add post</button>
            </div>
            <div>
                <Post postText="Hello world!"/>
                <Post postText="This is new social network!"/>
            </div>
        </div>
    )
};

export default PostsBlock;