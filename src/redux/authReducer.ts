import { authAPI } from "../api/api";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "./reduxStore";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";
const DELETE_AUTH_USER_DATA = "DELETE_AUTH_USER_DATA";

type InitialStateType = typeof initialState;

let initialState = {
  id: null as number | null,
  login: null as string | null,
  email: null as string | null,
  isLogin: false,
};

type ActionsTypes = SetUserData;

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

export const setUserData = (
  data: SetUserDataPayload,
  isLogin: boolean
): SetUserData => ({
  type: SET_AUTH_USER_DATA,
  data,
  isLogin,
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
  email: string,
  password: number,
  rememberMe: boolean
): ThunkType => async (dispatch) => {
  const response = await authAPI.login(email, password, rememberMe);
  if (response.resultCode === 0) {
    dispatch(getMe());
  }
};

export const deleteAuthUserData = (): ThunkType => async (dispatch) => {
  const response = await authAPI.logout();
  if (response.resultCode === 0) {
    dispatch(getMe());
  }
};

export default authReducer;
