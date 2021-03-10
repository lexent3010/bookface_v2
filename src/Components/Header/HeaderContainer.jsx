import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { deleteAuthUserData } from "../../store/authReducer";
import { authAPI } from "../../api/api";

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    isLogin: state.auth.isLogin,
  };
};

export default connect(mapStateToProps, { deleteAuthUserData })(
  HeaderContainer
);
