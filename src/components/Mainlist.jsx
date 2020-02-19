import React from 'react';

import classes from './Mainlist.module.css';

const Mainlist = () => {
	return (
    	<div className={classes.list}>
    		<a href='#s' className={` ${classes.item} ${classes.active} `}>Profile</a>
    		<a href='#s' className={classes.item}>Messages</a>
    		<a href='#s' className={classes.item}>News</a>
    		<a href='#s' className={classes.item}>Music</a>
    		<a href='#s' className={classes.item}>Settings</a>
    	</div>
		);
}

export default Mainlist;