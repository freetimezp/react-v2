import React from 'react';
import classes from './Preloader.module.css';
import preloader from './../../../assets/images/preloader.gif';

let Preloader = (props) => {
	return <div>
		<img src={preloader} className={classes.preloader} />
	</div>
}

export default Preloader;


