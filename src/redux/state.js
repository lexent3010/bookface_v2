import profilePageReducer from './profilePageReducer'
import dialogsPageReducer from "./dialogsPageReducer";
import navBarReducer from "./navBarReducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, postText: 'Hello world!', likeCount: 3},
                {
                    id: 2,
                    postText: 'This is new social network! I made my social network, with blackjack and whores!',
                    likeCount: 5
                }
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Pashok', avatar: 'https://i.ibb.co/HxhbGXP/Zoidberg-rev.jpg'},
                {id: 2, name: 'Polina', avatar: 'https://i.ibb.co/bQdMS9z/Amy-rev.jpg'},
                {id: 3, name: 'Vovan', avatar: 'https://i.ibb.co/0BRBtWB/unnamed.gif'}
            ],
            messages: [
                {id: 1, message: 'i am kachok'},
                {id: 2, message: 'ti gde?'},
                {id: 3, message: 'Poidem buhat`?'}
            ],
            newMessageText: ''
        },
        navBar: [
            {id: 1, name: 'Pashok', avatar: 'https://i.ibb.co/HxhbGXP/Zoidberg-rev.jpg'},
            {id: 2, name: 'Polina', avatar: 'https://i.ibb.co/bQdMS9z/Amy-rev.jpg'},
            {id: 3, name: 'Vovan', avatar: 'https://i.ibb.co/0BRBtWB/unnamed.gif'}
        ]

    },

    getState() {
        return this._state
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    _callSubscriber() {
        console.log('state changed')
    },

    dispatch(action) {
        this._state.profilePage = profilePageReducer(this._state.profilePage, action);
        this._state.profilePage = dialogsPageReducer(this._state.dialogsPage, action);
        this._state.navBar = navBarReducer(this._state.navBar, action);

        this._callSubscriber(this._state);
    }


};

export default store;