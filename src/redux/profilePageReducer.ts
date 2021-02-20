import {profileAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';

type InitialStateTypes = typeof initialState
type PostType = {
    id: number
    postText: string
    likeCount: number
}
type UsersProfileType = {
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
type ProfileType = {
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

const profilePageReducer = (state = initialState, action: any): InitialStateTypes => {
    let stateCopy;
    switch (action.type) {
        case ADD_POST: {
            let newPost = state.newPostText;
            stateCopy = {
                ...state,
                posts: [{id: 3, postText: newPost, likeCount: 0}, ...state.posts],
                newPostText: ''
            };
            return stateCopy;
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
type UpdateNewPostTest = {
    type: typeof UPDATE_NEW_POST_TEXT
    newPostText: string
}
type SetProfile = {
    type: typeof SET_PROFILE
    profile: ProfileType
}
type SetUserStatus = {
    type: typeof SET_STATUS
    status: string
}
export const addPost = (): AddPostType => ({type: ADD_POST});
export const updateNewPostText = (newPostText: string): UpdateNewPostTest => ({
    type: UPDATE_NEW_POST_TEXT,
    newPostText
});

const setProfile = (profile: ProfileType): SetProfile => ({type: SET_PROFILE, profile});
const setUserStatus = (status: string): SetUserStatus => ({type: SET_STATUS, status});


export const getProfile = (userId: number) => async (dispatch: any) => {
const response = await profileAPI.getProfile(userId)
    dispatch(setProfile(response))
    // profileAPI.getProfile(userId)
    //     .then(data => {
    //         dispatch(setProfile(data))
    //     })
};
export const getUserStatus = (userId: number) => async (dispatch: any) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setUserStatus(response))
    // profileAPI.getStatus(userId)
    //     .then(data => {
    //         dispatch(setUserStatus(data))
    //     })
};

export const updateUserStatus = (status: string) => async (dispatch: any) => {
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