import React from 'react';
import s from "../Profile.module.css";
import Post from "./Post/Post";


const PostsBlock = (props) => {

    let newPostMessage = React.createRef();

    let addPost = () => {
        let text = newPostMessage.current.value;
        props.newPost(text);
    };


    let postData =
        props.posts.map((p) => <Post id={p.id} postText={p.postText} likeCount={p.likeCount}/>);

    return (
        <div className={s.postBlock}>
            <div className={s.textarea}>
                <textarea name="addPost"
                          placeholder={"How are you?"}
                          cols="66" rows="5"
                          ref={newPostMessage}></textarea>
                <div>
                    <button onClick={addPost}>Add post</button>
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