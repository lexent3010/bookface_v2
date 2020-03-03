import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profilePageReducer";
import PostsBlock from "./PostsBlock";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        posts : state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    };
};

let mapDispatchToProps = (dispatch) => {
  return {
      addPost: () => {
          dispatch(addPostActionCreator())
      },
      updateNewPostText: (text) => {
          dispatch(updateNewPostTextActionCreator(text))
      }
  }
};

const PostsBlockContainer = connect(mapStateToProps, mapDispatchToProps)(PostsBlock);

export default PostsBlockContainer;