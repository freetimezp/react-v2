import React from 'react';

import classses from './Header.module.css';

const Header = () => {
	return (
		<header className={classses.app_header}> 
   <img
    className={classses.app_header__logo}
    src='http://confetti.odessa.ua/wp-content/uploads/2018/06/confetti-logo-%D0%B1%D0%B5%D0%B7-%D1%84%D0%BE%D0%BD%D0%B0.png' 
    alt='логотип'
    />
  </header>
		);
}

export default Header;