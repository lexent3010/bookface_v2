import React from 'react';
import {connect} from "react-redux";
import FriendsBar from "./FriendsBar";



let mapStateToProps = (state) => {
  return {
      state: state.navBar
  }
};

let mapDispatchToProps = (dispatch) => {
    return {}
};

const FriendsBarContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsBar);

export default FriendsBarContainer;