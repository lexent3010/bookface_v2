import React from "react";
import {connect} from "react-redux";
import Login from "../Components/Common/Login/Login";

const mapStateToPropsForRedirect = (state) => {
    return {
    isLogin: state.auth.isLogin
    }
};

export const withRedirect = (Component) => {
    const createRedirectContainerComponent = (props) => {
        if (!props.isLogin) {
            return <Login/>
        }
            return <Component {...props}/>
    };
    return connect(mapStateToPropsForRedirect)(createRedirectContainerComponent)
};