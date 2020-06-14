import React from 'react';

import {NavLink} from 'react-router-dom';

import classes from './Header.module.css';

const Header = (props) => {
	return (
			<div className={classes.header}>
    		<img 
    			className={classes.img} 
    			src='https://pngimg.com/uploads/fire/fire_PNG6010.png' 
    			alt='logo' />
    		<div className={classes.authBlock}>
    			{ props.isAuth 
            ? <div>
                <div>{props.login}</div>
                <button onClick={props.logout}>Logout</button>
              </div>
            : <NavLink to={'/login'}>Login</NavLink>	}
    		</div>
    	</div>
		);
}

export default Header;