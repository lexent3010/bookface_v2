import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { sendAuthUserData } from '../../store/authReducer'
import { AppStateType } from '../../store/reduxStore'
import { maxLengthCreator, required } from '../../utils/validators'
import { createField, InputWithComment } from '../Common/FormsControls/FormsControls'
import { SubmiteAuthDataTypes } from '../../common/types/types'

//const Textarea = withTag("textarea");

//const InputWithComment = withTag("input");

const maxLength50 = maxLengthCreator(50)

const LoginForm = (props: any) => {
  return (
    <form onSubmit={props.handleSubmit}>
      {createField('Введите email', 'email', InputWithComment, [required, maxLength50])}
      {createField('Введите пароль', 'password', InputWithComment, [required, maxLength50], { type: 'password' })}
      {createField(null, 'rememberMe', 'input', [], { type: 'checkbox' }, 'Запомнить меня')}
      {props.error && <div>{props.error}</div>}
      <div>
        <Field name={'SendAuthUserData'} component={'button'}>
          Login
        </Field>
        <br />
        <br />
        {props.captchaUrl && (
          <div>
            <img src={props.captchaUrl && props.captchaUrl.toString()} alt="captcha" />
            <Field
              name={'captcha'}
              placeholder={'Введите captcha'}
              validate={required}
              component={InputWithComment}
              type={'text'}
            ></Field>{' '}
          </div>
        )}
      </div>
    </form>
  )
}

const ReduxLoginForm = reduxForm({
  form: 'login',
})(LoginForm)

const Login = (props: any) => {
  const submiteData = (data: any) => {
    props.sendAuthUserData(data)
  }

  if (props.isLogin) {
    return <Redirect to={'/profile'} />
  }

  return (
    <div style={{ marginLeft: '20px' }}>
      <h1>Please login</h1>
      <ReduxLoginForm onSubmit={submiteData} {...props} />
    </div>
  )
}

let mapStateToProps = (state: AppStateType) => {
  return {
    isLogin: state.auth.isLogin,
    captchaUrl: state.auth.captchaUrl,
  }
}

export default connect(mapStateToProps, { sendAuthUserData })(Login)
