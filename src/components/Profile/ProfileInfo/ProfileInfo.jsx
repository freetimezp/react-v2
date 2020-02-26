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
    		<div>
    			<div>
    				Avatar
    			</div>
    			<div>
    				Description
    			</div>
    		</div>
    	</div>
		);
}

export default ProfileInfo;