import React from 'react';

import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
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
    				<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJj5L0qAknvGSSfpRKvMEo0UiAdyJgq-VpN6VwoOeqHrHdGL4r" />
    			</div>
    			<div>
    				<h3 className={classes.profile_title}>Nastya Ch.</h3>
            <div className={classes.profile_text}>
              <div>Date of Birth: 8 may</div>
              <div>City: Zpcity</div>
              <div>Education: traveler</div>
              <div>web: www.sea.ua</div>
            </div>
    			</div>
    		</div>
    	</div>
		);
}

export default ProfileInfo;