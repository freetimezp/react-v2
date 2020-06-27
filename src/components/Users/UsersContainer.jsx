import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';

import {follow, unfollow, setCurrentPage, 
  toggleFollowingProgress, requestUsers} from '../../redux/users-reducer.js';
import {withAuthRedirect} from '../../hoc/withAuthRedirect.js';
import Users from './Users.jsx';
import Preloader from './../common/Preloader/Preloader.jsx';

import {getUsers, getPageSize, getTotalUsersCount, getCurrentPage,
	getIsFetching, getFollowingInProgress} from '../../redux/users-selectors.js';

class UsersContainer extends React.Component {
	
	componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize);
	}

	onPageChanged = (pageNumber) => {
    this.props.requestUsers(pageNumber, this.props.pageSize);
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
		users: getUsers(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
 	  followingInProgress: getFollowingInProgress(state)
	}
} 

export default compose(
	connect(mapStateToProps, 
	{ follow, unfollow,	setCurrentPage,	toggleFollowingProgress, requestUsers }),
	withAuthRedirect
)(UsersContainer);


