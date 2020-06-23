import React from 'react';

import Paginator from "../common/Paginator/Paginator.jsx";
import User from "./User.jsx";

let Users = ({totalUsersCount, pageSize, currentPage, onPageChanged, ...props}) => {

    return (
        <div>
            <Paginator totalUsersCount={totalUsersCount}
                       pageSize={pageSize}
                       currentPage={currentPage}
                       onPageChanged={onPageChanged}/>
            <div>
                {
                    props.users
                        .map(user =>
                            <User key={user.id} user={user}
                                  follow={props.follow} unfollow={props.unfollow}
                                  followingInProgress={props.followingInProgress}/>)
                }
            </div>
        </div>
    );
}

export default Users;