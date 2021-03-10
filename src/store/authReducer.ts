import { authAPI } from "../api/api";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "./reduxStore";
import { stopSubmit } from "redux-form";
import { SubmiteAuthDataTypes } from "../common/types/types";

const SET_AUTH_USER_DATA = "auth/SET_AUTH_USER_DATA";
const SET_CAPTCHA_URL = "auth/SET_CAPTCHA_URL";

type InitialStateType = typeof initialState;

let initialState = {
  id: null as number | null,
  login: null as string | null,
  email: null as string | null,
  isLogin: false,
  captchaUrl: null as string | null,
};

type ActionsTypes = SetUserData | SetCaptchaUrlType;

const authReducer = (
  state = initialState,
  action: ActionsTypes
): InitialStateType => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.data,
        isLogin: action.isLogin,
      };
    case SET_CAPTCHA_URL:
      return {
        ...state,
        captchaUrl: action.captchaUrl,
      };
    default:
      return state;
  }
};

type SetUserDataPayload = {
  id: number | null;
  login: string | null;
  email: string | null;
};
type SetUserData = {
  type: typeof SET_AUTH_USER_DATA;
  data: SetUserDataPayload;
  isLogin: boolean;
};

const setUserData = (
  data: SetUserDataPayload,
  isLogin: boolean
): SetUserData => ({
  type: SET_AUTH_USER_DATA,
  data,
  isLogin,
});

type SetCaptchaUrlType = {
  type: typeof SET_CAPTCHA_URL;
  captchaUrl: string;
};

const setCaptchaUrl = (captchaUrl: string): SetCaptchaUrlType => ({
  type: SET_CAPTCHA_URL,
  captchaUrl,
});

type ThunkType = ThunkAction<
  Promise<void>,
  AppStateType,
  unknown,
  ActionsTypes
>;

export const getMe = (): ThunkType => async (dispatch) => {
  const response = await authAPI.getMe();
  if (response.resultCode === 0) {
    dispatch(setUserData(response.data, true));
  } else {
    dispatch(setUserData({ id: null, login: null, email: null }, false));
  }
};

export const sendAuthUserData = (
  data: SubmiteAuthDataTypes
): ThunkType => async (dispatch) => {
  const response = await authAPI.login(data);
  const errorText =
    response.messages.length > 0 ? response.messages[0] : "Some Error";
  if (response.resultCode === 0) {
    dispatch(getMe());
  } else if (response.resultCode === 1) {
    dispatch(stopSubmit("login", { _error: errorText }) as any); // Исправить
  } else if (response.resultCode === 10) {
    const captchaUrl = await authAPI.getCaptchaUrl();
    dispatch(setCaptchaUrl(captchaUrl.url));
  }
};

export const deleteAuthUserData = (): ThunkType => async (dispatch) => {
  const response = await authAPI.logout();
  if (response.resultCode === 0) {
    dispatch(getMe());
  }
};

export default authReducer;
