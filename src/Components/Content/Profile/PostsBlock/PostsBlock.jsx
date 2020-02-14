import React from 'react';
import s from "../Profile.module.css";
import Post from "./Post/Post";


const PostsBlock = (props) => {

    let newPostMessage = React.createRef();

    let addPost = () => {
        let text = newPostMessage.current.value;
        props.addPost(text);
    };

let onPostChange = () => {
let text = newPostMessage.current.value;
props.updateNewPostText(text)
};

    let postData =
        props.posts.map((p) => <Post id={p.id} postText={p.postText} likeCount={p.likeCount}/>);

    return (
        <div className={s.postBlock}>
            <div className={s.textarea}>
                <textarea name="addPost"
                          placeholder={"How are you?"}
                          cols="66" rows="5"
                          ref={newPostMessage}
                value={props.newPostText}
                          onChange={onPostChange}
                />
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div>
                {postData}
            </div>
        </div>
    )
};

export default PostsBlock;