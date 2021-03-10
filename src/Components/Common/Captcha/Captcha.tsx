import React from "react";
import { Field, reduxForm } from "redux-form";
import { required } from "../../../utils/validators";

type OwnProps = {
  captchaUrl: string;
};

type PropsType = OwnProps;

const CaptchaForm = (props: any) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <img src={props.captchaUrl} alt="captcha" />
      <Field
        name={"captchaText"}
        type={"text"}
        validate={required}
        component={"button"}
      >
        Send captcha
      </Field>
    </form>
  );
};

const ReduxCaptchaForm = reduxForm({ form: "captcha" })(CaptchaForm);

export default ReduxCaptchaForm;
