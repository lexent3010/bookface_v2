type InitialStateType = typeof initialState

type ImpotantFriendsType = {
    id: number
    name: string
    avatar: string
}

type ActionsTypes = {}

let initialState = {
    navBar: [
        {id: 1, name: 'Pashok', avatar: 'https://i.ibb.co/HxhbGXP/Zoidberg-rev.jpg'},
        {id: 2, name: 'Polina', avatar: 'https://i.ibb.co/bQdMS9z/Amy-rev.jpg'},
        {id: 3, name: 'Vovan', avatar: 'https://i.ibb.co/0BRBtWB/unnamed.gif'}
    ] as Array<ImpotantFriendsType>
};

const navBarReducer = (state = initialState, action: ActionsTypes): InitialStateType => {

return state;
};

export default navBarReducer;