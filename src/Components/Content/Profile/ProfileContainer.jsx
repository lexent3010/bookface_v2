import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    addPost,
    getProfile,
    getUserStatus,
    updateNewPostText,
    updateUserStatus
} from "../../../redux/profilePageReducer";
import {withRouter} from "react-router-dom";
import {profileAPI} from "../../../api/api";
import {withRedirect} from "../../../hoc/hoc";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.getProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        return <Profile {...this.props}/>
    };
}

const mapStateToProps = (state) => {
    return {
        posts : state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        profileAPI: profileAPI
    };
};

export default compose(
    connect(mapStateToProps, {getProfile, addPost, updateNewPostText, getUserStatus, updateUserStatus}),
    withRouter,
    withRedirect
)(ProfileContainer);