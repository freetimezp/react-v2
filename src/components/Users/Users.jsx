import React from 'react';

import * as axios from 'axios';

import classes from './Users.module.css';
import userPhoto from '../../assets/images/user.jpg';

// API = https://social-network.samuraijs.com/api/1.0

class Users extends React.Component {
	
	componentDidMount() {
		axios.get("https://social-network.samuraijs.com/api/1.0/users")
	    .then(response => {
	    	this.props.setUsers(response.data.items);
    });
	}

	render() {
		return <div>
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