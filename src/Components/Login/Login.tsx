import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { sendAuthUserData } from "../../redux/authReducer";
import { AppStateType } from "../../redux/reduxStore";
import { maxLengthCreator, required } from "../../utils/validators";
import { withTag } from "../../hoc/HOCs";

const InputWithComment = withTag("input");

const maxLength5 = maxLengthCreator(50);

const LoginForm = (props: any) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"Введите email"}
          name={"email"}
          component={InputWithComment}
          validate={[required, maxLength5]}
        />
      </div>
      <div>
        <Field
          placeholder={"Введите пароль"}
          name={"password"}
          type={"password"}
          component={"input"}
        />
      </div>
      <div>
        <Field name={"rememberMe"} type={"checkbox"} component={"input"} />{" "}
        Запомнить меня
      </div>
      <div>
        <Field name={"SendAuthUserData"} component={"button"}>
          Login
        </Field>
      </div>
    </form>
  );
};

const ReduxLoginForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props: any) => {
  const submiteData = (data: any) => {
    props.sendAuthUserData(data.email, data.password, data.rememberMe);
  };

  if (props.isLogin) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div style={{ marginLeft: "20px" }}>
      <h1>Please login</h1>
      <ReduxLoginForm onSubmit={submiteData} />
    </div>
  );
};

let mapStateToProps = (state: AppStateType) => {
  return {
    isLogin: state.auth.isLogin,
  };
};

export default connect(mapStateToProps, { sendAuthUserData })(Login);
