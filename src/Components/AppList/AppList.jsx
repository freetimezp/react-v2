import React from 'react';

import classes from './AppList.module.css';

const AppList = () => {
	return (
    <ul className={classes.app_list}>
     <li>
       <a href='#s'>Profile</a>
     </li>
     <li>
       <a href='#s'>Messages</a>
     </li>
     <li>
       <a href='#s'>News</a>
     </li>
     <li>
       <a href='#s'>Music</a>
     </li>
     <li>
       <a href='#s'>Settings</a>
     </li>
    </ul>
	);
}

export default AppList;