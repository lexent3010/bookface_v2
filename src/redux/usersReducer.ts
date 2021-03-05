import { ThunkAction } from "redux-thunk";
import {usersAPI} from "../api/api";
import { AppStateType } from "./reduxStore";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const TOGGLE_ISLOAD = 'TOGGLE_ISLOAD';

export type InitialStateType = typeof initialState

type PhotosType = {
    small: string
    large: string
}

 export type UserType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean
}

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isLoad: false
};

type ActionsTypes = FollowSuccessActionType | UnfollowSuccessActionType | SetUsersActionType | SetCurrentPage | SetUsersTotalCount | ToggleIsLoad

const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case SET_USERS:
            return {...state, users: action.users,
            };
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage, users: []};
        case SET_USERS_TOTAL_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount,
            };
        case TOGGLE_ISLOAD:
            return {...state, isLoad: action.isLoad};
        default:
            return state;
    }
};

type FollowSuccessActionType = {
    type: typeof FOLLOW
    userId: number
}
export const followSuccess = (userId: number): FollowSuccessActionType => ({type: FOLLOW, userId});

type UnfollowSuccessActionType = {
    type: typeof UNFOLLOW
    userId: number
}
export const unfollowSuccess = (userId: number): UnfollowSuccessActionType => ({type: UNFOLLOW, userId});

type SetUsersActionType = {
    type: typeof SET_USERS
    users: any
}
export const setUsers = (users: any): SetUsersActionType => ({type: SET_USERS, users});

type SetCurrentPage = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPage => ({type: SET_CURRENT_PAGE, currentPage});

type SetUsersTotalCount = {
    type: typeof SET_USERS_TOTAL_COUNT
    totalUsersCount: number
}
export const setUsersTotalCount = (totalUsersCount: number): SetUsersTotalCount => ({type: SET_USERS_TOTAL_COUNT, totalUsersCount});

type ToggleIsLoad = {
    type: typeof TOGGLE_ISLOAD
    isLoad: boolean
}
export const toggleIsLoad = (isLoad: boolean): ToggleIsLoad => ({type: TOGGLE_ISLOAD, isLoad});

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const getUsers = (currentPage: number, pageSize: number): ThunkType => async (dispatch) => {
      dispatch(toggleIsLoad(true));
    const response = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(toggleIsLoad(false));
    dispatch(setUsers(response.items));
    dispatch(setUsersTotalCount(response.totalCount))
        // usersAPI.getUsers(currentPage, pageSize)
        //   .then(data => {
        //       dispatch(toggleIsLoad(false));
        //       dispatch(setUsers(data.items));
        //       dispatch(setUsersTotalCount(data.totalCount))
        //   })
};
export const follow = (userId: number): ThunkType => async (dispatch) => {
    const response = await usersAPI.follow(userId)
    if (response.resultCode === 0) {
        dispatch(followSuccess(userId))
    }
    // usersAPI.follow(userId)
    //         .then(data => {
    //             if (data.resultCode === 0) {
    //                 dispatch(followSuccess(userId))
    //             }
    //         })
};
export const unfollow = (userId: number): ThunkType => async (dispatch) => {
    const response = await usersAPI.unfollow(userId)
    if (response.resultCode === 0) {
        dispatch(unfollowSuccess(userId))
    }
    // usersAPI.unfollow(userId)
    //         .then(data => {
    //             if (data.resultCode === 0) {
    //                 dispatch(unfollowSuccess(userId))
    //             }
    //         })
};


export default usersReducer;