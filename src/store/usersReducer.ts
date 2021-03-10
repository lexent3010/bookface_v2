import { usersAPI } from "./../api/api";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "./reduxStore";
import { updateObjectInArray } from "../utils/helper";

const FOLLOW = "users/FOLLOW";
const UNFOLLOW = "users/UNFOLLOW";
const SET_USERS = "users/SET_USERS";
const SET_CURRENT_PAGE = "users/SET_CURRENT_PAGE";
const SET_USERS_TOTAL_COUNT = "users/SET_USERS_TOTAL_COUNT";
const TOGGLE_ISLOAD = "users/TOGGLE_ISLOAD";

export type InitialStateType = typeof initialState;

type PhotosType = {
  small: string;
  large: string;
};

export type UserType = {
  id: number;
  name: string;
  status: string;
  photos: PhotosType;
  followed: boolean;
};

let initialState = {
  users: [] as Array<UserType>,
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 1,
  isLoad: false,
};

type ActionsTypes =
  | FollowSuccessActionType
  | UnfollowSuccessActionType
  | SetUsersActionType
  | SetCurrentPage
  | SetUsersTotalCount
  | ToggleIsLoad;

const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, 'id', action.userId, {followed: true})
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, 'id', action.userId, {followed: false})
      };
    case SET_USERS:
      return { ...state, users: action.users };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage, users: [] };
    case SET_USERS_TOTAL_COUNT:
      return { ...state, totalUsersCount: action.totalUsersCount };
    case TOGGLE_ISLOAD:
      return { ...state, isLoad: action.isLoad };
    default:
      return state;
  }
};

type FollowSuccessActionType = {
  type: typeof FOLLOW;
  userId: number;
};
export const followSuccess = (userId: number): FollowSuccessActionType => ({
  type: FOLLOW,
  userId,
});

type UnfollowSuccessActionType = {
  type: typeof UNFOLLOW;
  userId: number;
};
export const unfollowSuccess = (userId: number): UnfollowSuccessActionType => ({
  type: UNFOLLOW,
  userId,
});

type SetUsersActionType = {
  type: typeof SET_USERS;
  users: any;
};
export const setUsers = (users: any): SetUsersActionType => ({
  type: SET_USERS,
  users,
});

type SetCurrentPage = {
  type: typeof SET_CURRENT_PAGE;
  currentPage: number;
};
export const setCurrentPage = (currentPage: number): SetCurrentPage => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

type SetUsersTotalCount = {
  type: typeof SET_USERS_TOTAL_COUNT;
  totalUsersCount: number;
};
export const setUsersTotalCount = (totalUsersCount: number): SetUsersTotalCount => ({
  type: SET_USERS_TOTAL_COUNT,
  totalUsersCount,
});

type ToggleIsLoad = {
  type: typeof TOGGLE_ISLOAD;
  isLoad: boolean;
};
export const toggleIsLoad = (isLoad: boolean): ToggleIsLoad => ({
  type: TOGGLE_ISLOAD,
  isLoad,
});

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;

export const getUsers = (currentPage: number, pageSize: number): ThunkType => async (dispatch) => {
  dispatch(toggleIsLoad(true));
  const response = await usersAPI.getUsers(currentPage, pageSize);
  dispatch(toggleIsLoad(false));
  dispatch(setUsers(response.items));
  dispatch(setUsersTotalCount(response.totalCount));
};

const followUnfollowCommonPart = async (
  apiMethod: (userId: number) => Promise<any>,
  action: FollowSuccessActionType | UnfollowSuccessActionType,
  dispatch: any,
  userId: number
) => {
  const response = await apiMethod(userId);
  if (response.resultCode === 0) {
    dispatch(action);
  }
};

export const follow = (userId: number): ThunkType => async (dispatch) => {
  followUnfollowCommonPart(usersAPI.follow.bind(usersAPI), followSuccess(userId), dispatch, userId);
};
export const unfollow = (userId: number): ThunkType => async (dispatch) => {
  followUnfollowCommonPart(usersAPI.unfollow.bind(usersAPI), unfollowSuccess(userId), dispatch, userId);
};

export default usersReducer;
