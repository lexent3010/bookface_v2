import React from 'react';
import s from "../Profile.module.css";
import Post from "./Post/Post";


const PostsBlock = (props) => {

    let posts = [
        {id:1, postText:'Hello world!', likeCount:3},
        {id:2, postText:'This is new social network!', likeCount:5}
    ];

    let postData =
        posts.map((p) => <Post id={p.id} postText={p.postText} likeCount={p.likeCount}/>);

    return (
        <div className={s.postBlock}>
            <div className={s.textarea}>
                <textarea name="" placeholder={"How are you?"} cols="66" rows="5"></textarea>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div>
                {postData}
                {/*<Post postText=""/>
                <Post postText="This is new social network!"/>*/}
            </div>
        </div>
    )
};

export default PostsBlock;