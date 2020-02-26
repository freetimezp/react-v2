import React from 'react';

import {NavLink} from "react-router-dom";

import classes from './Dialogs.module.css';


const Dialogs = () => {
	return (
			<div>
				<div className={classes.title}>Dialogs \ Messages</div>
	    	<div className={classes.dialogs}>
	    		<div className={classes.dialogs_items}>
	    			<div className={classes.dialog}>
	    				<NavLink to='/dialogs/1'>Andrew</NavLink>
	    			</div>
	    			<div className={classes.dialog + ' ' + classes.active}>
	    				<NavLink to='/dialogs/2'>Dmitry</NavLink>
	    			</div>
	    			<div className={classes.dialog}>
	    				<NavLink to='/dialogs/3'>Sveta</NavLink>
	    			</div>
	    			<div className={classes.dialog}>
	    				<NavLink to='/dialogs/4'>Sasha</NavLink>
	    			</div>
	    		</div>
	    		<div className={classes.messages}>
	    			<div className={classes.message}>
	    				Hi!
	    			</div>
	    			<div className={classes.message}>
	    				How is your live?
	    			</div>
	    			<div className={classes.message}>
	    				Yo Yo
	    			</div>
	    		</div>
	    	</div>
    	</div>
		);
}

export default Dialogs;