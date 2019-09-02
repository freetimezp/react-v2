import React from 'react';

import {NavLink} from 'react-router-dom';

import classes from './AppList.module.css';

const AppList = () => {
	return (
    <ul className={classes.app_list}>
     <li>
       <NavLink className={classes.app_list__item} to="/Profile">Profile</NavLink>
     </li>
     <li>
       <NavLink className={classes.app_list__item} to="/Dialogs">Messages</NavLink>
     </li>
     <li>
       <NavLink className={classes.app_list__item} to="/News">News</NavLink>
     </li>
     <li>
       <NavLink className={classes.app_list__item} to="/Music">Music</NavLink>
     </li>
     <li>
       <NavLink className={classes.app_list__item} to="/Settings">Settings</NavLink>
     </li>
    </ul>
	);
}

export default AppList;