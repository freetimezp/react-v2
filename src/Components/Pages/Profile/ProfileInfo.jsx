import React from 'react';

import classes from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
	return(
		<div>
   <img className={classes.profile_content__image}
    src={props.srcInfo}
    alt={props.altInfo}
    />
  </div>
		);
}

export default ProfileInfo;