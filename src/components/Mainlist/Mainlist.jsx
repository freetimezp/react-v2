import React from 'react';

import classes from './Mainlist.module.css';

const Mainlist = () => {
	return (
    	<div className={classes.list}>
    		<a href='/profile' className={` ${classes.item} ${classes.active} `}>Profile</a>
    		<a href='/dialogs' className={classes.item}>Messages</a>
    		<a href='/news' className={classes.item}>News</a>
    		<a href='/music' className={classes.item}>Music</a>
    		<a href='/settings' className={classes.item}>Settings</a>
    	</div>
		);
}

export default Mainlist;