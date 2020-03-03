const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {
            id: 2,
            postText: 'This is new social network! I made my social network, with blackjack and whores!',
            likeCount: 5
        },
        {id: 1, postText: 'Hello world!', likeCount: 3}
    ],
    usersProfile: [
        {id:1, position: 'Boss', responsibility: 'front-end', telephoneNumber: '+7-910-934-32-07', dateOfEmployment: '22.02.2020'}
        ],
    newPostText: ''
};

const profilePageReducer = (state = initialState, action) => {
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
        case UPDATE_NEW_POST_TEXT: {
            stateCopy = {...state,
            newPostText: action.newPostText
            };
            return stateCopy;
        }
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newPostText: text});

export default profilePageReducer;