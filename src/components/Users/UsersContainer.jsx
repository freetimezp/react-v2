import React from 'react';
import * as axios from 'axios';

import {connect} from 'react-redux';
import {follow, unfollow, setUsers, setCurrentPage, 
	setTotalUsersCount,toggleIsFetching} from './../../redux/users-reducer.js';

import Users from './Users.jsx';
import Preloader from './../common/Preloader/Preloader.jsx';

class UsersContainer extends React.Component {
	
	componentDidMount() {
		this.props.toggleIsFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
	    .then(response => {
	    	this.props.toggleIsFetching(false);
	    	this.props.setUsers(response.data.items);
	    	this.props.setTotalUsersCount(response.data.totalCount);
    });
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		this.props.toggleIsFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
	    .then(response => {
	    	this.props.toggleIsFetching(false);
	    	this.props.setUsers(response.data.items);
    });
	}

	render() {
		return <>
		{ this.props.isFetching ? <Preloader /> : null}
		<Users 
			totalUsersCount = {this.props.totalUsersCount}
			pageSize = {this.props.pageSize}
			currentPage = {this.props.currentPage}
			users = {this.props.users}
			onPageChanged = {this.onPageChanged}
			unfollow = {this.props.unfollow}
			follow = {this.props.follow} /> 
		</>
	}
}


const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching
	}
}

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		follow: (userId) => {
// 			dispatch(followAC(userId));
// 		},
// 		unfollow: (userId) => {
// 			dispatch(unfollowAC(userId));
// 		},
// 		setUsers: (users) => {
// 			dispatch(setUsersAC(users));
// 		},
// 		setCurrentPage: (pageNumber) => {
// 			dispatch(setCurrentPageAC(pageNumber));
// 		},
// 		setTotalUsersCount: (totalCount) => {
// 			dispatch(setUsersTotalCountAC(totalCount));
// 		},
// 		toggleIsFetching: (isFetching) => {
// 			dispatch(toggleIsFetchingAC(isFetching));
// 		}
// 	}
// }

export default connect(mapStateToProps, 
	{follow, unfollow,	setUsers,	setCurrentPage,	setTotalUsersCount,	toggleIsFetching}) (UsersContainer);


