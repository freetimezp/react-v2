import React from 'react';

import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';

const Profile = (props) => {

 let postsData = props.postsData;

 let addPost = props.addPost;

	return (
    	<div>
       	<ProfileInfo /> 
        <MyPosts 
        	postsData={ postsData } 
        	addPost={ addPost } 
        	newPostText={ props.profilePage.newPostText }
        	updateNewPostText={ props.updateNewPostText } />
    	</div>
		);
}

export default Profile;