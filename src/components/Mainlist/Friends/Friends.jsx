import React from 'react';

import classes from './Friends.module.css';

import Friend from './Friend/Friend.jsx';

const Friends = (props) => {

    let friendsData = props.friendsData;

    let friendsElements = friendsData
        .map((friend) => <Friend key={friend.id} image={friend.image} name={friend.name}/>
        );

    return (
        <div className={classes.friends}>
            <div>
                <h3 className={classes.friends_title}>Friends</h3>
            </div>
            <div className={classes.friends_list}>
                {friendsElements}
            </div>
        </div>
    );
};

export default Friends;



