import React from 'react';

import classes from './Users.module.css';

let Users = (props) => {

	if (props.users.length === 0) {
		props.setUsers(
			[
			 {id: 1, 
			 	photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStWdFB3c2relo6tpP0T6bnu_Qo-4Cx8zuu2IQgUsiP_3fPpKhp', 
			 	followed: false, 
			 	fullName: 'Dmitry', 
			 	status: 'I am a boss', 
			 	location: {country: 'Belarus', city: 'Minsk'} },
			 {id: 2, 
			 	photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStWdFB3c2relo6tpP0T6bnu_Qo-4Cx8zuu2IQgUsiP_3fPpKhp', 
			 	followed: true, 
			 	fullName: 'Sasha', 
			 	status: 'I am a boss too', 
			 	location: {country: 'Moskow', city: 'Russia'} },
			 {id: 3, 
			 	photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStWdFB3c2relo6tpP0T6bnu_Qo-4Cx8zuu2IQgUsiP_3fPpKhp', 
			 	followed: false, 
			 	fullName: 'Evgen', 
			 	status: 'I am a boss?', 
			 	location: {country: 'Kiev', city: 'Ukraine'} },
			 {id: 4, 
			 	photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStWdFB3c2relo6tpP0T6bnu_Qo-4Cx8zuu2IQgUsiP_3fPpKhp', 
			 	followed: true, 
			 	fullName: 'Marina', 
			 	status: 'I am a boss?', 
			 	location: {country: 'Kiev', city: 'Ukraine'} }
			]
		)
	}

	return <div>
		{
			props.users.map( (user) => <div key={user.id}>
					<div>
						<div>
							<img className={classes.userLogo} src={user.photoUrl} alt="User" />
					  </div>
					  <div>
							{ user.followed 
								? <button onClick={() => { props.follow(user.id) } }>Follow</button> 
								: <button onClick={() => { props.unfollow(user.id) } }>Unfollow</button> }
					  </div>
					</div>

					<div>
						<div>
							<span>{user.fullName}</span>
							<span>{user.status}</span>
					  </div>
					  <div>
					  	<span>{user.location.country}</span>
							<span>{user.location.city}</span>
					  </div>
					</div>

				</div> )
		}
	  </div>
};

export default Users;