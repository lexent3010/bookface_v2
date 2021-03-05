import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import { getMe, deleteAuthUserData } from "../../redux/authReducer";
import {authAPI} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getMe()
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        /*id: state.auth.id,*/
        login: state.auth.login,
        /*email: state.auth.email,*/
        isLogin: state.auth.isLogin,
        authAPI: authAPI
    }
};

export default connect(mapStateToProps, { getMe, deleteAuthUserData })(
  HeaderContainer
);