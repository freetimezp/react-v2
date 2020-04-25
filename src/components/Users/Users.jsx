import React from 'react';

import classes from './Users.module.css';

let Users = (props) => {

	if (props.users.length === 0) {
		props.setUsers( [
		  {id: 1, followed: false,
			  	photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTpYNSdEqDQ3KfHvBA_HBb7tpfMaozzWaZBbzkHeFR8SzMwv2AF&usqp=CAU',
			  	fullName: 'Evgen', status: 'magento is easy!',
			  	location: {city: 'Zaporoghye', country: 'Ukraine'} },
			{id: 2, followed: true,
			  	photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTEZMJrOnnbiFkAhUbTu_Zdad7Zhioz_xIElHZz6-WWuRvoJTuj&usqp=CAU',
			    fullName: 'Sveta', status: 'be happy', 
			    location: {city: 'Kiev', country: 'Ukraine'} },
			{id: 3, followed: false, 
			  	photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR5un8trRZOS4AsDtZCUg6cUenpFwIEUEgUj5jxoHz52RJooOEv&usqp=CAU',
			  	fullName: 'Nastya', status: 'beauty', 
			  	location: {city: 'Zaporoghye', country: 'Ukraine'} },
			{id: 4, followed: false, 
			  	photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTpYNSdEqDQ3KfHvBA_HBb7tpfMaozzWaZBbzkHeFR8SzMwv2AF&usqp=CAU',
			  	fullName: 'Aleks', status: 'brother', 
			  	location: {city: 'Zaporoghye', country: 'Ukraine'} },
			{id: 5, followed: true, 
			  	photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTpYNSdEqDQ3KfHvBA_HBb7tpfMaozzWaZBbzkHeFR8SzMwv2AF&usqp=CAU',
			  	fullName: 'Valera', status: 'woo', 
			  	location: {city: 'Minsk', country: 'Belarus'} }
		] )
	}

	return <div>
		{
			props.users.map( user => 
				<div key={user.id} className={classes.mainWrapper}>
					<div className={classes.userWrapper}>
						<div className={classes.photo} >
							<img src={user.photoUrl} />
						</div>
						<div className={classes.btn}>
							{ user.followed 
								? <button onClick={ () => {props.unfollow(user.id)} }>Unfollow</button> 
								: <button onClick={ () => {props.follow(user.id)} }>Follow</button> }
						</div>
					</div>
					<div className={classes.userBlockWrapper} >
						<div>
							<div>{user.fullName}</div>
							<div>{user.status}</div>
						</div>
						<div className={classes.userLocation}>
						  <div>{user.location.country}</div>
						 	<div>{user.location.city}</div>	
						</div>
					</div>
				</div>) 
		}
	</div>
}

export default Users;