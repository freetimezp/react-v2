import React from 'react';

import classes from './About.module.css';

const About = () => {
	return (
    <div className={classes.about}>
     <div className={classes.about_image}>
       <img className={classes.image0001}
         src='https://images.saatchiart.com/saatchi/298926/art/2358222/1428380-32.jpg'
         alt='foto'
        />
     </div>
     <div>
       <h1 className={classes.about_title}>Anastasiya</h1>
       <ul>
         <li className={classes.about_text}>Date birth 8 may</li>
         <li className={classes.about_text}>City Kiev</li>
         <li className={classes.about_text}>Education: BSU'11</li>
         <li className={classes.about_text}>Web-site: wwww.beauty.ua</li>
       </ul>
     </div>
   </div>
		);
}

export default About;