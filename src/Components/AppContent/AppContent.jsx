import React from 'react';

import About from '../About/About.jsx';
import MyPosts from '../MyPosts/MyPosts.jsx';

import classes from './AppContent.module.css';

const AppContent = () => {
	return (
   <div className={classes.app_content}>
    <div>
     <img className={classes.app_content__image}
      src='https://images.samsung.com/is/image/samsung/p5/ru/explore/landscape-photography/Explore_How_To_Take_Great_Landscape_Photography_KV.jpg?$ORIGIN_JPG$'
      alt='пейзаж'
     />
     </div>
     <About />
     <MyPosts />
   </div>
		);
}

export default AppContent;