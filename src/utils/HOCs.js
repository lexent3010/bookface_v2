import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import s from "../Components/Common/FormsControls/FormsControl.module.css";

const mapStateToPropsForRedirect = (state) => {
  return {
    isLogin: state.auth.isLogin,
  };
};

export const withRedirect = (Component) => {
  const createRedirectContainerComponent = (props) => {
    if (!props.isLogin) {
      return <Redirect to={"/login"} />;
    }
    return <Component {...props} />;
  };
  return connect(mapStateToPropsForRedirect)(createRedirectContainerComponent);
};

export const withTag = (Element) => ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={s.formControl + " " + (hasError ? s.error : "")}>
      <Element {...input} {...props} />
      {hasError && <span> {meta.error} </span>}
    </div>
  );
};
