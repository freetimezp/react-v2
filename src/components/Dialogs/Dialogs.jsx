import React from 'react';

import {NavLink} from "react-router-dom";

import classes from './Dialogs.module.css';

const DialogItem = (props) => {
	let path = "/dialogs/" + props.id;
	return (
			<div className={classes.dialog}>
	    	<NavLink to={path}>{props.name}</NavLink>
	    </div>
		);
}

const Message = (props) => {
	return (
			<div className={classes.message}>
	    	{props.message}
	    </div>
		);
}


const Dialogs = (props) => {
	return (
			<div>
				<div className={classes.title}>Dialogs \ Messages</div>
	    	<div className={classes.dialogs}>
	    		<div className={classes.dialogs_items}>
	    			<DialogItem name="Andrew" id="1" />
	    			<DialogItem name="Dmitry" id="2" />
	    			<DialogItem name="Sveta" id="3" />
	    			<DialogItem name="Sasha" id="4" />
	    		</div>
	    		<div className={classes.messages}>
	    			<Message message="Hi!" />
	    			<Message message="How is your live?" />
	    			<Message message="Yo Yo" />
	    		</div>
	    	</div>
    	</div>
		);
}

export default Dialogs;