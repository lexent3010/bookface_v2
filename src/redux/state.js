let state = {
    profilePage: {
        posts: [
            {id: 1, postText: 'Hello world!', likeCount: 3},
            {id: 2, postText: 'This is new social network!', likeCount: 5}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Pashok', avatar:'https://i.ibb.co/HxhbGXP/Zoidberg-rev.jpg'},
            {id: 2, name: 'Polina', avatar:'https://i.ibb.co/bQdMS9z/Amy-rev.jpg'},
            {id: 3, name: 'Vovan', avatar:'https://i.ibb.co/0BRBtWB/unnamed.gif'}
        ],
        messages: [
            {id: 1, message: 'i am kachok'},
            {id: 2, message: 'ti gde?'},
            {id: 3, message: 'Poidem buhat`?'}
        ]
    },
    users: [
        {id: 1, name: 'Pashok', avatar:'https://i.ibb.co/HxhbGXP/Zoidberg-rev.jpg'},
        {id: 2, name: 'Polina', avatar:'https://i.ibb.co/bQdMS9z/Amy-rev.jpg'},
        {id: 3, name: 'Vovan', avatar:'https://i.ibb.co/0BRBtWB/unnamed.gif'}
    ]

};

export let newPost = (newPostText) => {
    let newPost = {
        id: 3,
        postText: newPostText,
        likeCount: 0
    };
    state.profilePage.posts.push(newPost)
};

export default state;