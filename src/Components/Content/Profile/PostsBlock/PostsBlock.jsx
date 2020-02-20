import React from 'react';
import s from "../Profile.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profilePageReducer";


const PostsBlock = (props) => {

    let newPostText = React.createRef();

    let addPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostText.current.value;
        props.updateNewPostText(text);
    };

    let postData =
        props.posts.map((p) => <Post id={p.id} postText={p.postText} likeCount={p.likeCount}/>);

    return (
        <div className={s.postBlock}>
            <div className={s.textarea}>
                <textarea name="addPost"
                          placeholder={"How are you?"}
                          ref={newPostText}
                          value={props.newPostText}
                          onChange={onPostChange}
                          className={s.postTextarea}
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