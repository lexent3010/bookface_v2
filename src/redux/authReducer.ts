import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

type InitialStateType = typeof initialState

let initialState = {
    id: null as number | null,
    login: null as string | null,
    email: null as string | null,
    isLogin: false
};

const authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isLogin: true
            };

        default:
            return state;
    }
};

type SetUserDataPayload = {
    id: number
    login: string
    email: string
}
type SetUserData = {
    type: typeof SET_USER_DATA
    data: SetUserDataPayload
}

export const setUserData = (data: SetUserDataPayload): SetUserData => ({type: SET_USER_DATA, data});

export const getMe = () => async (dispatch: any) => {
    const response = await authAPI.getMe()
    if (response.resultCode === 0) {
        dispatch(setUserData(response.data))
    }
    // authAPI.getMe()
    //         .then(data => {
    //             if (data.resultCode === 0) {
    //                 dispatch(setUserData(data.data))
    //             }
    //         })
    };


export default authReducer;