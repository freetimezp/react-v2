import React from 'react';

import classes from './Header.module.css';

const Header = () => {
	return (
			<div className={classes.header}>
    		<img 
    			className={classes.img} 
    			src='https://lh3.googleusercontent.com/proxy/nZjHuH5warqfDUx2yhmZM8XVDlN9JU8Y4946smmkYZ2-KAKoUZHn7Lmubj-khc9DF5o7_EJwhQxtaF9pFMCoZqdoPhLlJ5ncTsvTYU1a3SFRo8yPgVVbHA' 
    			alt='foto' />
    	</div>
		);
}

export default Header;