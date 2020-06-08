import React from 'react';
import {NavLink} from 'react-router-dom';

import classes from './Users.module.css';
import userPhoto from '../../assets/images/user.jpg';

let Users = (props) => {

	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	let pages = [];
	for (let i=1; i <= pagesCount; i++) {
		pages.push(i);
	}

	return <div>
		<div>
			{ pages.map( page => {
				return <span className={props.currentPage === page && classes.selectedPage}
				onClick={ (event) => { props.onPageChanged(page); } }>{page}</span>
			} ) }
		</div>
		{
			props.users.map( user => 
				<div key={user.id} className={classes.mainWrapper}>
					<div className={classes.userWrapper}>
						<div className={classes.photo}>
							<NavLink to={'/profile/' + user.id}>
								<img src={ user.photos.small != null ? user.photos.small : userPhoto } />
							</NavLink>
						</div>
						<div className={classes.btn}>
							{ user.followed 
								? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={ () => {
										props.unfollow(user.id);
									} }>Unfollow</button> 
								: <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={ () => {
										props.follow(user.id);
									} }>Follow</button> }
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

export default Users;