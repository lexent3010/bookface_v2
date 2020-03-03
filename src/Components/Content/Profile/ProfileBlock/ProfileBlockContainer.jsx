import React from 'react';
import {connect} from "react-redux";
import ProfileBlock from "./ProfileBlock";

let mapStateToProps = (state) => {
  return {
      profileInfo: state.profilePage.usersProfile
  }
};

let mapDispatchToProps = (dispatch) => {
    return {}
};

const ProfileBlockContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileBlock);

export default ProfileBlockContainer;