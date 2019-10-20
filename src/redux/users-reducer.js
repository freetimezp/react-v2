const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
			 users: [
				 {id: 1, photoUrl: 'https://brandmark.io/logo-rank/random/pepsi.png', followed: false, fullName: 'Dmitry', status: 'I am a boss', location: {coumtry: 'Belarus', city: 'Minsk'} },
				 {id: 2, photoUrl: 'https://brandmark.io/logo-rank/random/pepsi.png', followed: true, fullName: 'Sasha', status: 'I am a boss too', location: {coumtry: 'Moskow', city: 'Russia'} },
				 {id: 3, photoUrl: 'https://brandmark.io/logo-rank/random/pepsi.png', followed: false, fullName: 'Evgen', status: 'I am a boss?', location: {coumtry: 'Kiev', city: 'Ukraine'} },
				 {id: 4, photoUrl: 'https://brandmark.io/logo-rank/random/pepsi.png', followed: true, fullName: 'Marina', status: 'I am a boss?', location: {coumtry: 'Kiev', city: 'Ukraine'} }
			 ]
};

const usersReducer = (state = initialState, action) => {

		switch(action.type) {
			case FOLLOW: 
				return {
					...state,
					users: state.users.map( u => {
						if (u.id === action.userId) {
							return {...u, followed: true}
						}
						return u;
					})
				}

			case UNFOLLOW: 
				return {
					...state,
					users: state.users.map( u => {
						if (u.id === action.userId) {
							return {...u, followed: false}
						}
						return u;
					})
				}

			case SET_USERS: {
				return {...state, users: [...state.users, ...action.users]}
			};

			default:
			 return state; 
	}
}

export const followAC = (userID) => ({type: FOLLOW, userID });
export const unfollowAC = (userID) => ({type: UNFOLLOW, userID });
export const setUsersAC = (users) => ({type: SET_USERS, users });


export default usersReducer;