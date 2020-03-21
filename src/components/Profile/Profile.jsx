import React from 'react';

import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';

const Profile = (props) => {

 let postsData = props.postsData;

	return (
    	<div>
       	<ProfileInfo /> 
        <MyPosts 
        	postsData={ postsData } 
        	dispatch={ props.dispatch } 
        	newPostText={ props.profilePage.newPostText } />
    	</div>
		);
}

export default Profile;