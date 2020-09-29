import React from 'react';
import classes from './Mainlist.module.css';
import {NavLink} from "react-router-dom";
import Friends from './Friends/Friends.jsx';


const Mainlist = (props) => {

    return (
        <div className={classes.list_wrapper}>
            <div className={classes.list}>
                <NavLink to='/profile' activeClassName={classes.active}
                         className={` ${classes.item} ${classes.active} `}>Profile</NavLink>
                <NavLink to='/dialogs' activeClassName={classes.active} className={classes.item}>Messages</NavLink>
                <NavLink to='/news' activeClassName={classes.active} className={classes.item}>News</NavLink>
                <NavLink to='/music' activeClassName={classes.active} className={classes.item}>Music</NavLink>
                <NavLink to='/users' activeClassName={classes.active} className={classes.item}>Users</NavLink>
                <NavLink to='/weather' activeClassName={classes.active} className={classes.item}>Weather in your city</NavLink>
                <NavLink to='/bootstrap' activeClassName={classes.active} className={classes.item}>Bootstrap</NavLink>
                <NavLink to='/todolists' activeClassName={classes.active} className={classes.item}>ToDoLists</NavLink>
                <NavLink to='/settings' activeClassName={classes.active} className={classes.item}>Settings</NavLink>
            </div>
            <Friends friendsData={props.friendsData}/>
        </div>
    );
}

export default Mainlist;