import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  addPost,
  getProfile,
  getUserStatus,
  updateNewPostText,
  updateUserStatus,
} from "../../../redux/profilePageReducer";
import { withRouter } from "react-router-dom";
import { profileAPI } from "../../../api/api";
import { withRedirect } from "../../../hoc/HOCs";
import { compose } from "redux";
import { PostType, ProfileType } from "../../../redux/profilePageReducer";
import { AppStateType } from "../../../redux/reduxStore";

type MapStatePropsType = {
  posts: Array<PostType>;
  newPostText: string | null;
  profile: ProfileType | null;
  status: string | null;
  profileAPI: any; //Исправить!!!
  defaultId: number | null;
};

type MapDispatchPropsType = {
  getProfile: (userId: number) => void;
  addPost: () => void;
  updateNewPostText: () => void;
  getUserStatus: (userId: number) => void;
  updateUserStatus: () => void;
};

type OwnPropsType = {
  match: any;
};

type PropsType = MapDispatchPropsType & MapStatePropsType & OwnPropsType;

class ProfileContainer extends React.Component<PropsType> {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.defaultId;
    }
    this.props.getProfile(userId);
    this.props.getUserStatus(userId);
  }

  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    profileAPI: profileAPI,
    defaultId: state.auth.id,
  };
};

export default compose(
  connect(mapStateToProps, {
    getProfile,
    addPost,
    updateNewPostText,
    getUserStatus,
    updateUserStatus,
  }),
  withRouter,
  withRedirect
)(ProfileContainer);
