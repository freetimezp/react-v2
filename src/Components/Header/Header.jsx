import React from 'react';

import classses from './Header.module.css';

const Header = () => {
	return (
		<header className={classses.app_header}> 
   <img
    className={classses.app_header__logo}
    src='https://upload.wikimedia.org/wikipedia/commons/d/dd/Linux_logo.jpg' 
    alt='логотип'
    />
  </header>
		);
}

export default Header;