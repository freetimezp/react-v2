import React from 'react';

import About from '../../About/About.jsx';
import MyPosts from '../../MyPosts/MyPosts.jsx';
import ProfileInfo from './ProfileInfo.jsx';

import classes from './Profile.module.css';

const Profile = (props) => {
 return (
   <div>
    <ProfileInfo srcInfo='https://images.samsung.com/is/image/samsung/p5/ru/explore/landscape-photography/Explore_How_To_Take_Great_Landscape_Photography_KV.jpg?$ORIGIN_JPG$' altInfo='пейзаж' />
    <About />
    <MyPosts 
    	PostsData={props.profilePage.PostsData} 
    	newPostText={props.profilePage.newPostText} 
    	dispatch={props.dispatch} 
    />
   </div>
		);
}

export default Profile;