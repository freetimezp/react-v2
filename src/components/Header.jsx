import React from 'react';

import classes from './Header.module.css';

const Header = () => {
	return (
			<div className={classes.header}>
    		<img className={classes.img} src='https://avatanplus.com/files/resources/mid/5ce66f58a5a0216ae422f266.png' alt='foto' />
    	</div>
		);
}

export default Header;