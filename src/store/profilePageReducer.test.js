import profileReducer, { addPost, deletePost } from "./profilePageReducer"
import React from "react"

let state = {
    posts: [
        {
            id: 2,
            postText: 'This is new social network! I made my social network, with blackjack and whores!',
            likeCount: 5
        },
        {id: 1, postText: 'Hello world!', likeCount: 3}
    ],
    usersProfile: [
        {
            id: 1,
            position: 'Boss',
            responsibility: 'front-end',
            telephoneNumber: '+7-910-934-32-07',
            dateOfEmployment: '22.02.2020'
        }
    ],
    newPostText: '',
    profile: null,
    status: null
};

it ("length of post array shoul be increment", () => {
const action = addPost()
const newState = profileReducer(state, action)
expect(newState.posts.length).toBe(3)
})

it ("Success deleting post", () => {
const action = deletePost(1);
const newState = profileReducer(state, action)
expect(newState.posts.length).toBe(1)
})