import React from 'react';

let Users = (props) => {
	return <div>
		{
			props.users.map( (user) => <div>Hello</div> )
		}
	  </div>
};

export default Users;