import {usersAPI, profileAPI} from '../api/api.js';
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
    postsData: [
        {id: 1, message: 'Hi! How are you?', likes: 23, dislikes: 0},
        {id: 2, message: 'Its my first post!', likes: 11, dislikes: 0},
        {id: 3, message: 'Hello, everyone.', likes: 0, dislikes: 0}
    ],
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.newPostText,
                likes: 0,
                dislikes: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photo: action.photo}
            };
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => {
    return {type: ADD_POST, newPostText}
}

export const setUserProfile = (profile) => {
    return {type: SET_USER_PROFILE, profile}
}

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
}

export const setStatus = (status) => {
    return {type: SET_STATUS, status}
}

export const savePhotoSuccess = (photo) => {
    return {type: SAVE_PHOTO_SUCCESS, photo}
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photo));
    }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}));
        return Promise.reject(response.data.messages[0]);
    }
}



export default profileReducer;