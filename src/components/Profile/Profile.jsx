import React from 'react';

import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';

const Profile = (props) => {

  let postsData = [
    {id: 1, message: 'Hi! How are you?', likes: 23, dislikes: 0},
    {id: 2, message: 'Its my first post!', likes: 11, dislikes: 0},
    {id: 3, message: 'Hello, everyone.', likes: 0, dislikes: 0}
  ]

	return (
    	<div>
            <ProfileInfo />
            <MyPosts  postsData={postsData} />
    	</div>
		);
}

export default Profile;