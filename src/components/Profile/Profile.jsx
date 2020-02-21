import React from 'react';

import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
	return (
    	<div>
    		<div>
	    		<img 
	    			className={classes.img} 
	    			src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKeAg6we76Eo8qIbNC275den4JCB-WozGwGAXzNClglpjTWJgT' 
	    			alt='foto' 
	    		/>
    		</div>
    		<div>
    			<div>
    				Avatar
    			</div>
    			<div>
    				Description
    			</div>
    		</div>
            <MyPosts />
    	</div>
		);
}

export default Profile;