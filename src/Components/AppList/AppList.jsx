import React from 'react';

import classes from './AppList.module.css';

const AppList = () => {
	return (
    <ul className={classes.app_list}>
     <li>
       <a className={classes.app_list__item} href="/Profile">Profile</a>
     </li>
     <li>
       <a className={classes.app_list__item} href="/Dialogs">Messages</a>
     </li>
     <li>
       <a className={classes.app_list__item} href="/News">News</a>
     </li>
     <li>
       <a className={classes.app_list__item} href="/Music">Music</a>
     </li>
     <li>
       <a className={classes.app_list__item} href="/Settings">Settings</a>
     </li>
    </ul>
	);
}

export default AppList;