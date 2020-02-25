const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
};

const dialogsPageReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = state.newMessageText;
            stateCopy = {...state,
                messages: [...state.messages, {id:4, message: newMessage}],
                newMessageText: ''
            };
            return stateCopy;
        case UPDATE_NEW_MESSAGE_TEXT:
            stateCopy = {...state,
            newMessageText: action.newMessageText
            };
            return stateCopy;
        default:
            return state;
    }
};

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text});

export default dialogsPageReducer;