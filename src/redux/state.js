import React from 'react';

let state = {
	profilePage: {
		postsData: [
		  {id: 1, message: 'Hi! How are you?', likes: 23, dislikes: 0},
		  {id: 2, message: 'Its my first post!', likes: 11, dislikes: 0},
		  {id: 3, message: 'Hello, everyone.', likes: 0, dislikes: 0}
		]
	},
	dialogsPage: {
		dialogsData: [
			{id: 1, name: 'Andrew'},
			{id: 2, name: 'Dmitry'},
			{id: 3, name: 'Sveta'},
			{id: 4, name: 'Sasha'}
		],
		messagesData: [
			{id: 1, message: 'Hi!'},
			{id: 2, message: 'How is your life?'},
			{id: 3, message: 'Yo Yo'}
		]
	}
}

export default state;