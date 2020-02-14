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
            ]
        },
        users: [
            {id: 1, name: 'Pashok', avatar: 'https://i.ibb.co/HxhbGXP/Zoidberg-rev.jpg'},
            {id: 2, name: 'Polina', avatar: 'https://i.ibb.co/bQdMS9z/Amy-rev.jpg'},
            {id: 3, name: 'Vovan', avatar: 'https://i.ibb.co/0BRBtWB/unnamed.gif'}
        ]

    },

    getState() {
        return this._state
    },

    addPost(postMessage) {
        let newPost = {
            id: 3,
            postText: postMessage,
            likeCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },

    updateNewPostText(newPostText) {
        this._state.profilePage.newPostText = newPostText;
        this._callSubscriber(this._state);
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    _callSubscriber() {
        console.log('state changed')
    },

};

export default store;