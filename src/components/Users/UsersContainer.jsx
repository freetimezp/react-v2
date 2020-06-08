import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {compose} from 'redux';

import {follow, unfollow, setCurrentPage, 
  toggleFollowingProgress, getUsers} from './../../redux/users-reducer.js';
import {withAuthRedirect} from './../../hoc/withAuthRedirect.js';
import Users from './Users.jsx';
import Preloader from './../common/Preloader/Preloader.jsx';

class UsersContainer extends React.Component {
	
	componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
	}

	onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
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
			follow = {this.props.follow}
   	  followingInProgress = {this.props.followingInProgress} /> 
		</>
	}
}

const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
 	 	followingInProgress: state.usersPage.followingInProgress
	}
} 

export default compose(
	connect(mapStateToProps, 
	{ follow, unfollow,	setCurrentPage,	toggleFollowingProgress, getUsers }),
	withAuthRedirect
)(UsersContainer);


