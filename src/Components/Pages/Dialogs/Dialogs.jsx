import React from 'react';
import {NavLink} from 'react-router-dom';

// import User from './User.jsx';
// import Message from './Message.jsx';

import classes from './Dialogs.module.css';

const Dialogs = (props) => {

	return (
		<div className={classes.dialogs}>
			<ul className={classes.dialogsItems}>
				<li><NavLink to="/dialogs/1">Dimych</NavLink></li>
				<li><NavLink to="/dialogs/2">Andrew</NavLink></li>
				<li><NavLink to="/dialogs/3">Anna</NavLink></li>
				<li><NavLink to="/dialogs/4">Semen</NavLink></li>
			</ul>
			<ul className={classes.messages}>
				<li className={classes.dialog}>Hi</li>
				<li className={classes.dialog}>Yo</li>
				<li className={classes.dialog}>Ho</li>
			</ul>
		</div>
		);

}

export default Dialogs;