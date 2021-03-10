import React from 'react'
import { Field } from 'redux-form'
import { withTag } from '../../../utils/HOCs'
import style from './FormsControl.module.css'

export const InputWithComment = ({ input, meta, ...props }: any) => {
  const hasError = meta.touched && meta.error
  return (
    <div>
      <div>
        <input {...input} {...props} className={hasError ? style.error : ''} />
      </div>
      <div>{hasError && <span className={style.redText}>{meta.error}</span>}</div>
    </div>
  )
}

export const createField = (
  placeholder: string | null,
  name: string,
  component: any,
  validate: Array<(arg: any) => string | undefined>,
  props: any = {},
  value = ''
) => {
  return (
    <>
      <Field placeholder={placeholder} name={name} component={component} validate={validate} {...props} />
      {value}
    </>
  )
}

// {
//   createField('Введите email', 'email', InputWithComment, [required, maxLength50])
// }
// {
//   createField('Введите пароль', 'password', InputWithComment, [required, maxLength50], { type: 'password' })
// }
// {
//   createField('', 'rememberMe', 'input', [required], { type: 'checkbox' }, 'Запомнить меня')
// }
