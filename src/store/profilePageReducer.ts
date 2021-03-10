import {profileAPI} from "../api/api";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "./reduxStore";
import { type } from "node:os";

const ADD_POST = 'profile/ADD_POST';
const DELETE_POST = "profile/DELETE_POST";
const UPDATE_NEW_POST_TEXT = "profile/UPDATE_NEW_POST_TEXT";
const SET_PROFILE = "profile/SET_PROFILE";
const SET_STATUS = "profile/SET_STATUS";

type InitialStateTypes = typeof initialState
 export type PostType = {
    id: number
    postText: string
    likeCount: number
}
export type UsersProfileType = {
    id: number
    position: string
    responsibility: string
    telephoneNumber: string
    dateOfEmployment: string
}
type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
type PhotosType = {
    small: string
    large: (string)
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}

let initialState = {
    posts: [
        {
            id: 2,
            postText: 'This is new social network! I made my social network, with blackjack and whores!',
            likeCount: 5
        },
        {id: 1, postText: 'Hello world!', likeCount: 3}
    ] as Array<PostType>,
    usersProfile: [
        {
            id: 1,
            position: 'Boss',
            responsibility: 'front-end',
            telephoneNumber: '+7-910-934-32-07',
            dateOfEmployment: '22.02.2020'
        }
    ] as Array<UsersProfileType>,
    newPostText: '',
    profile: null as ProfileType | null,
    status: null as string | null
};

type ActionsTypes =
  | AddPostType
  | UpdateNewPostTest
  | SetProfile
  | SetUserStatus
  | DeletePostType;

const profilePageReducer = (state = initialState, action: ActionsTypes): InitialStateTypes => {
    let stateCopy;
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [{id: 3, postText: state.newPostText, likeCount: 0}, ...state.posts],
                newPostText: ''
            };
        }
        case DELETE_POST: {
            return {
                ...state, posts: state.posts.filter(post => post.id !== action.postId)
            }
        }
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.newPostText};
        case SET_PROFILE:
            return {...state, profile: action.profile};
        case SET_STATUS:
            return {...state, status: action.status};
        default:
            return state;
    }
};

type AddPostType = {
    type: typeof ADD_POST
}
export const addPost = (): AddPostType => ({type: ADD_POST});

type DeletePostType = {
    type: typeof DELETE_POST
    postId: number
}

export const deletePost = (postId: number): DeletePostType => ({type: DELETE_POST, postId}) 

type UpdateNewPostTest = {
    type: typeof UPDATE_NEW_POST_TEXT
    newPostText: string
}

export const updateNewPostText = (newPostText: string): UpdateNewPostTest => ({
    type: UPDATE_NEW_POST_TEXT,
    newPostText
});

type SetProfile = {
    type: typeof SET_PROFILE
    profile: ProfileType
}
const setProfile = (profile: ProfileType): SetProfile => ({type: SET_PROFILE, profile});

type SetUserStatus = {
    type: typeof SET_STATUS
    status: string
}
const setUserStatus = (status: string): SetUserStatus => ({type: SET_STATUS, status});

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const getProfile = (userId: number): ThunkType => async (dispatch) => {
const response = await profileAPI.getProfile(userId)
    dispatch(setProfile(response))
    // profileAPI.getProfile(userId)
    //     .then(data => {
    //         dispatch(setProfile(data))
    //     })
};
export const getUserStatus = (userId: number): ThunkType => async (dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setUserStatus(response))
    // profileAPI.getStatus(userId)
    //     .then(data => {
    //         dispatch(setUserStatus(data))
    //     })
};

export const updateUserStatus = (status: string): ThunkType => async (dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status))
    }
    // profileAPI.updateStatus(status)
    //     .then(response => {
    //         if (response.data.resultCode === 0) {
    //             dispatch(setUserStatus(status))
    //         }
    //     })
};

export default profilePageReducer;