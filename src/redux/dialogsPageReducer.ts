const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

type InitialStateType = typeof initialState
type DialogType = {
    id: number
    name: string
    avatar: string
}
type MessageType = {
    id: number
    message: string
}

let initialState = {
    dialogs: [
        {id: 1, name: 'Pashok', avatar: 'https://i.ibb.co/HxhbGXP/Zoidberg-rev.jpg'},
        {id: 2, name: 'Polina', avatar: 'https://i.ibb.co/bQdMS9z/Amy-rev.jpg'},
        {id: 3, name: 'Vovan', avatar: 'https://i.ibb.co/0BRBtWB/unnamed.gif'}
    ] as Array<DialogType>,
        messages: [
    {id: 1, message: 'i am kachok'},
    {id: 2, message: 'ti gde?'},
    {id: 3, message: 'Poidem buhat`?'}
] as Array<MessageType>,
    newMessageText: ''
};

type ActionsTypes = SendMessage | UpdateNewMessageText

const dialogsPageReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
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

type SendMessage = {
    type: typeof SEND_MESSAGE
}
type UpdateNewMessageText = {
    type: typeof UPDATE_NEW_MESSAGE_TEXT
    newMessageText: string
}

export const sendMessage = (): SendMessage => ({type: SEND_MESSAGE});
export const updateNewMessageText = (text: string): UpdateNewMessageText => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text});

export default dialogsPageReducer;