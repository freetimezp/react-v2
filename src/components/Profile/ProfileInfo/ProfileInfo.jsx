import React from 'react';

import classes from './ProfileInfo.module.css';

import Preloader from './../../common/Preloader/Preloader.jsx';
import ProfileStatus from './ProfileStatus.jsx';

const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader />
  }

	return (
  	<div>
  		<div>
    		<img 
    			className={classes.img} 
    			src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKeAg6we76Eo8qIbNC275den4JCB-WozGwGAXzNClglpjTWJgT' 
    			alt='foto' 
    		/>
  		</div>
  		<div className={classes.profile_block}>
  			<div className={classes.profile_image}>
  				<img src={props.profile.photos.large} />
  			</div>
  			<div>
  				<h3 className={classes.profile_title}>{props.profile.fullName}</h3>
          <ProfileStatus status={"My new status!!! Yo!"} />
          <div className={classes.profile_text}>
            <div>About me: {props.profile.aboutMe}</div>
            <div>Contacts: {props.profile.contacts.vk}</div>
            <div>{props.profile.contacts.twitter}</div>
            <div>{props.profile.contacts.instagram}</div>
            <div>web: {props.profile.contacts.github}</div>
          </div>
  			</div>
  		</div>
  	</div>
	);
}

export default ProfileInfo;