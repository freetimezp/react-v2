import React from 'react';

import * as axios from 'axios';

import classes from './Users.module.css';
import userPhoto from '../../assets/images/user.jpg';

// API = https://social-network.samuraijs.com/api/1.0

class Users extends React.Component {
	
	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
	    .then(response => {
	    	this.props.setUsers(response.data.items);
	    	this.props.setTotalUsersCount(response.data.totalCount);
    });
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
	    .then(response => {
	    	this.props.setUsers(response.data.items);
    });
	}

	render() {

		let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
		let pages = [];
		for (let i=1; i <= pagesCount; i++) {
			pages.push(i);
		}

		return <div>
		<div>
			{ pages.map( page => {
				return <span className={this.props.currentPage === page && classes.selectedPage}
				onClick={ (event) => { this.onPageChanged(page); } }>{page}</span>
			} ) }
		</div>
		{
			this.props.users.map( user => 
				<div key={user.id} className={classes.mainWrapper}>
					<div className={classes.userWrapper}>
						<div className={classes.photo} >
							<img src={ user.photos.small != null ? user.photos.small : userPhoto } />
						</div>
						<div className={classes.btn}>
							{ user.followed 
								? <button onClick={ () => {this.props.unfollow(user.id)} }>Unfollow</button> 
								: <button onClick={ () => {this.props.follow(user.id)} }>Follow</button> }
						</div>
					</div>
					<div className={classes.userBlockWrapper} >
						<div>
							<div>{user.name}</div>
							<div>{user.status}</div>
						</div>
						<div className={classes.userLocation}>
						  <div>{"user.location.country"}</div>
						 	<div>{"user.location.city"}</div>	
						</div>
					</div>
				</div>) 
			}
		</div>
	}
}




export default Users;