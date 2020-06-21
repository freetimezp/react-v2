import React from "react";
import profileReducer, {addPostActionCreator} from "./profile-reducer.js";

let state = {
    postsData: [
        {id: 1, message: 'post 1', likes: 23, dislikes: 0},
        {id: 2, message: 'post 2', likes: 11, dislikes: 0},
        {id: 3, message: 'post 3', likes: 0, dislikes: 0}
    ]
};

it('new post should be added', () => {
    let action = addPostActionCreator("it.kamasutra.com");
    let newState = profileReducer(state, action);
    expect(newState.postsData.length).toBe(5);
});

it('after deleting length of messages should be decrement', () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action);
    expect(newState.postsData.length).toBe(3);
});

