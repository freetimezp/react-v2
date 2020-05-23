import React from 'react';

import classes from './Header.module.css';

const Header = () => {
	return (
			<div className={classes.header}>
    		<img 
    			className={classes.img} 
    			src='https://pngimg.com/uploads/fire/fire_PNG6010.png' 
    			alt='logo' />
    	</div>
		);
}

export default Header;