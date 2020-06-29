import React from 'react';

import {NavLink} from 'react-router-dom';

import ClockJs from "../common/ClockJs/ClockJs.jsx";

import classes from './Header.module.css';



const Header = (props) => {
    return (
        <div className={classes.header}>
            <div>
				<ClockJs />
			</div>
            <div className={classes.authBlock}>
                {props.isAuth
                    ? <div>
                        <div>{props.login}</div>
                        <button onClick={props.logout}>Logout</button>
                    </div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </div>
    );
}

export default Header;