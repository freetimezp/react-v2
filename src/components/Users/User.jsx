import React from 'react';
import {NavLink} from 'react-router-dom';

import classes from './Users.module.css';
import userPhoto from '../../assets/images/user.jpg';

let User = ({user, followingInProgress, unfollow, follow, ...props}) => {
    return (
        <div className={classes.mainWrapper}>
            <div className={classes.userWrapper}>
                <div className={classes.photo}>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="users photo"/>
                    </NavLink>
                </div>
                <div className={classes.btn}>
                    {user.followed
                        ?
                        <button disabled={followingInProgress.some(id => id === user.id)}
                                onClick={() => {
                                    unfollow(user.id);
                                }}>Unfollow</button>
                        :
                        <button disabled={followingInProgress.some(id => id === user.id)}
                                onClick={() => {
                                    follow(user.id);
                                }}>Follow</button>}
                </div>
            </div>
            <div className={classes.userBlockWrapper}>
                <div>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </div>
                <div className={classes.userLocation}>
                    <div>{"user.location.country"}</div>
                    <div>{"user.location.city"}</div>
                </div>
            </div>
        </div>
    );
}

export default User;