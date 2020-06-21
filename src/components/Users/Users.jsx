import React from 'react';
import {NavLink} from 'react-router-dom';

import Paginator from "../common/Paginator/Paginator";

import classes from './Users.module.css';
import userPhoto from '../../assets/images/user.jpg';

let Users = ({totalUsersCount, pageSize, currentPage, onPageChanged, ...props}) => {

    return (
        <div>
            <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage}
                       onPageChanged={onPageChanged}/>
            {
                props.users.map(user =>
                    <div key={user.id} className={classes.mainWrapper}>
                        <div className={classes.userWrapper}>
                            <div className={classes.photo}>
                                <NavLink to={'/profile/' + user.id}>
                                    <img src={user.photos.small != null ? user.photos.small : userPhoto}/>
                                </NavLink>
                            </div>
                            <div className={classes.btn}>
                                {user.followed
                                    ?
                                    <button disabled={props.followingInProgress.some(id => id === user.id)}
                                            onClick={() => {
                                                props.unfollow(user.id);
                                            }}>Unfollow</button>
                                    :
                                    <button disabled={props.followingInProgress.some(id => id === user.id)}
                                            onClick={() => {
                                                props.follow(user.id);
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
                    </div>)
            }
        </div>
    );
}

export default Users;